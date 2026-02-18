'use strict';
/**
 * Sync data from local PostgreSQL to production database.
 * Production is the source of truth - conflicts favor production.
 *
 * Usage: npx tsx sync-to-prod.ts [--tables=work,workimage,...] [--dry-run] [--new-only] [--force]
 *
 * Options:
 *   --tables    Comma-separated list of tables to sync (default: all)
 *   --dry-run   Show what would be synced without making changes
 *   --new-only  Only push records that don't exist in production
 *   --force     Override conflict detection (dangerous!)
 */
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import * as readline from 'readline';

dotenv.config();

// Local database (source for this script)
const localDb = new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL_DEV
});

// Production database (target)
const prodDb = new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL
});

const ALL_TABLES = [
    'tag',
    'skill',
    'experience',
    'quote',
    'aboutfact',
    'value',
    'user',
    'work',
    'workimage',
    'post',
    'prompt'
] as const;

type TableName = (typeof ALL_TABLES)[number];

interface SyncStats {
    new: number;
    updated: number;
    conflicts: number;
    unchanged: number;
}

function parseArgs() {
    const args = process.argv.slice(2);
    let tables: TableName[] = [...ALL_TABLES];
    let dryRun = false;
    let newOnly = false;
    let force = false;

    for (const arg of args) {
        if (arg.startsWith('--tables=')) {
            tables = arg
                .replace('--tables=', '')
                .toLowerCase()
                .split(',')
                .filter((t): t is TableName =>
                    ALL_TABLES.includes(t as TableName)
                );
        }
        if (arg === '--dry-run') dryRun = true;
        if (arg === '--new-only') newOnly = true;
        if (arg === '--force') force = true;
    }
    return { tables, dryRun, newOnly, force };
}

async function confirm(message: string): Promise<boolean> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(`${message} (y/N): `, (answer) => {
            rl.close();
            resolve(answer.toLowerCase() === 'y');
        });
    });
}

function printStats(table: string, stats: SyncStats) {
    const parts = [];
    if (stats.new > 0) parts.push(`${stats.new} new`);
    if (stats.updated > 0) parts.push(`${stats.updated} updated`);
    if (stats.conflicts > 0)
        parts.push(`${stats.conflicts} conflicts (skipped)`);
    if (stats.unchanged > 0) parts.push(`${stats.unchanged} unchanged`);
    console.log(`   ${table}: ${parts.join(', ')}`);
}

// Compare updatedAt timestamps for conflict detection
function hasConflict(
    localUpdatedAt: Date | null,
    prodUpdatedAt: Date | null
): boolean {
    if (!localUpdatedAt || !prodUpdatedAt) return false;
    // Conflict if production was updated more recently
    return prodUpdatedAt.getTime() > localUpdatedAt.getTime();
}

async function syncTable<T extends { id: string }>(
    tableName: string,
    localItems: T[],
    prodItems: T[],
    upsertFn: (item: T, isNew: boolean) => Promise<void>,
    options: {
        dryRun: boolean;
        newOnly: boolean;
        force: boolean;
        getUpdatedAt?: (item: T) => Date | null;
    }
): Promise<SyncStats> {
    const stats: SyncStats = { new: 0, updated: 0, conflicts: 0, unchanged: 0 };
    const prodMap = new Map(prodItems.map((p) => [p.id, p]));

    for (const localItem of localItems) {
        const prodItem = prodMap.get(localItem.id);

        if (!prodItem) {
            // New record - doesn't exist in production
            stats.new++;
            if (!options.dryRun) {
                await upsertFn(localItem, true);
            }
        } else if (options.newOnly) {
            // Skip existing records in new-only mode
            stats.unchanged++;
        } else if (options.getUpdatedAt && !options.force) {
            // Check for conflicts using updatedAt
            const localUpdated = options.getUpdatedAt(localItem);
            const prodUpdated = options.getUpdatedAt(prodItem);

            if (hasConflict(localUpdated, prodUpdated)) {
                stats.conflicts++;
                console.log(
                    `   ⚠️  Conflict: ${tableName} id=${localItem.id} - prod is newer`
                );
            } else if (
                localUpdated &&
                prodUpdated &&
                localUpdated.getTime() === prodUpdated.getTime()
            ) {
                stats.unchanged++;
            } else {
                // Local is newer or no conflict
                stats.updated++;
                if (!options.dryRun) {
                    await upsertFn(localItem, false);
                }
            }
        } else {
            // No updatedAt field or force mode - compare by JSON
            const localJson = JSON.stringify(localItem);
            const prodJson = JSON.stringify(prodItem);
            if (localJson === prodJson) {
                stats.unchanged++;
            } else {
                stats.updated++;
                if (!options.dryRun) {
                    await upsertFn(localItem, false);
                }
            }
        }
    }

    return stats;
}

async function main() {
    const { tables, dryRun, newOnly, force } = parseArgs();

    console.log('🔄 Syncing data from LOCAL → PRODUCTION');
    console.log(`   Tables: ${tables.join(', ')}`);
    if (dryRun) console.log('   🧪 DRY RUN - no changes will be made');
    if (newOnly) console.log('   📦 NEW ONLY - skipping existing records');
    if (force) console.log('   ⚠️  FORCE MODE - overriding conflict detection');

    // Safety confirmation for non-dry-run
    if (!dryRun) {
        console.log('\n⚠️  WARNING: This will push data to PRODUCTION!');
        if (force) {
            console.log(
                '   FORCE mode enabled - conflicts will be overwritten!'
            );
        }
        const confirmed = await confirm('Continue?');
        if (!confirmed) {
            console.log('Aborted.');
            process.exit(0);
        }
    }

    const allStats: Record<string, SyncStats> = {};

    // Sync Tags first (no dependencies)
    if (tables.includes('tag')) {
        console.log('\n📋 Syncing Tags...');
        const localItems = await localDb.tag.findMany();
        const prodItems = await prodDb.tag.findMany();
        console.log(
            `   Local: ${localItems.length}, Production: ${prodItems.length}`
        );

        const stats = await syncTable(
            'Tag',
            localItems,
            prodItems,
            async (item, isNew) => {
                await prodDb.tag.upsert({
                    where: { id: item.id },
                    create: item,
                    update: { name: item.name }
                });
            },
            { dryRun, newOnly, force }
        );
        allStats.tag = stats;
        printStats('Tag', stats);
    }

    // Sync Skills
    if (tables.includes('skill')) {
        console.log('\n🛠️  Syncing Skills...');
        const localItems = await localDb.skill.findMany();
        const prodItems = await prodDb.skill.findMany();
        console.log(
            `   Local: ${localItems.length}, Production: ${prodItems.length}`
        );

        const stats = await syncTable(
            'Skill',
            localItems,
            prodItems,
            async (item) => {
                await prodDb.skill.upsert({
                    where: { id: item.id },
                    create: item,
                    update: item
                });
            },
            { dryRun, newOnly, force }
        );
        allStats.skill = stats;
        printStats('Skill', stats);
    }

    // Sync Experiences
    if (tables.includes('experience')) {
        console.log('\n💼 Syncing Experiences...');
        const localItems = await localDb.experience.findMany();
        const prodItems = await prodDb.experience.findMany();
        console.log(
            `   Local: ${localItems.length}, Production: ${prodItems.length}`
        );

        const stats = await syncTable(
            'Experience',
            localItems,
            prodItems,
            async (item) => {
                await prodDb.experience.upsert({
                    where: { id: item.id },
                    create: item,
                    update: item
                });
            },
            { dryRun, newOnly, force }
        );
        allStats.experience = stats;
        printStats('Experience', stats);
    }

    // Sync Quotes
    if (tables.includes('quote')) {
        console.log('\n💬 Syncing Quotes...');
        const localItems = await localDb.quote.findMany();
        const prodItems = await prodDb.quote.findMany();
        console.log(
            `   Local: ${localItems.length}, Production: ${prodItems.length}`
        );

        const stats = await syncTable(
            'Quote',
            localItems,
            prodItems,
            async (item) => {
                await prodDb.quote.upsert({
                    where: { id: item.id },
                    create: item,
                    update: item
                });
            },
            { dryRun, newOnly, force }
        );
        allStats.quote = stats;
        printStats('Quote', stats);
    }

    // Sync AboutFacts
    if (tables.includes('aboutfact')) {
        console.log('\n📌 Syncing AboutFacts...');
        const localItems = await localDb.aboutFact.findMany();
        const prodItems = await prodDb.aboutFact.findMany();
        console.log(
            `   Local: ${localItems.length}, Production: ${prodItems.length}`
        );

        const stats = await syncTable(
            'AboutFact',
            localItems,
            prodItems,
            async (item) => {
                await prodDb.aboutFact.upsert({
                    where: { id: item.id },
                    create: item,
                    update: item
                });
            },
            { dryRun, newOnly, force }
        );
        allStats.aboutfact = stats;
        printStats('AboutFact', stats);
    }

    // Sync Values
    if (tables.includes('value')) {
        console.log('\n💎 Syncing Values...');
        const localItems = await localDb.value.findMany();
        const prodItems = await prodDb.value.findMany();
        console.log(
            `   Local: ${localItems.length}, Production: ${prodItems.length}`
        );

        const stats = await syncTable(
            'Value',
            localItems,
            prodItems,
            async (item) => {
                await prodDb.value.upsert({
                    where: { id: item.id },
                    create: item,
                    update: item
                });
            },
            { dryRun, newOnly, force }
        );
        allStats.value = stats;
        printStats('Value', stats);
    }

    // Sync Users
    if (tables.includes('user')) {
        console.log('\n👤 Syncing Users...');
        const localItems = await localDb.user.findMany();
        const prodItems = await prodDb.user.findMany();
        console.log(
            `   Local: ${localItems.length}, Production: ${prodItems.length}`
        );

        const stats = await syncTable(
            'User',
            localItems,
            prodItems,
            async (item) => {
                await prodDb.user.upsert({
                    where: { id: item.id },
                    create: item,
                    update: item
                });
            },
            { dryRun, newOnly, force }
        );
        allStats.user = stats;
        printStats('User', stats);
    }

    // Sync Works (depends on Tags and Users)
    if (tables.includes('work')) {
        console.log('\n📦 Syncing Works...');
        const localWorks = await localDb.work.findMany({
            include: { tags: true }
        });
        const prodWorks = await prodDb.work.findMany({
            include: { tags: true }
        });
        console.log(
            `   Local: ${localWorks.length}, Production: ${prodWorks.length}`
        );

        const stats = await syncTable(
            'Work',
            localWorks,
            prodWorks,
            async (work) => {
                const { tags, ...data } = work;
                await prodDb.work.upsert({
                    where: { id: work.id },
                    create: {
                        ...data,
                        tags: { connect: tags.map((t) => ({ id: t.id })) }
                    },
                    update: {
                        ...data,
                        tags: { set: tags.map((t) => ({ id: t.id })) }
                    }
                });
            },
            {
                dryRun,
                newOnly,
                force,
                getUpdatedAt: (w) => w.updatedAt
            }
        );
        allStats.work = stats;
        printStats('Work', stats);
    }

    // Sync WorkImages (depends on Work)
    if (tables.includes('workimage')) {
        console.log('\n🖼️  Syncing WorkImages...');
        const localItems = await localDb.workImage.findMany();
        const prodItems = await prodDb.workImage.findMany();
        console.log(
            `   Local: ${localItems.length}, Production: ${prodItems.length}`
        );

        const stats = await syncTable(
            'WorkImage',
            localItems,
            prodItems,
            async (item) => {
                await prodDb.workImage.upsert({
                    where: { id: item.id },
                    create: item,
                    update: item
                });
            },
            { dryRun, newOnly, force }
        );
        allStats.workimage = stats;
        printStats('WorkImage', stats);
    }

    // Sync Posts (depends on Tags and Users)
    if (tables.includes('post')) {
        console.log('\n📝 Syncing Posts...');
        const localPosts = await localDb.post.findMany({
            include: { tags: true }
        });
        const prodPosts = await prodDb.post.findMany({
            include: { tags: true }
        });
        console.log(
            `   Local: ${localPosts.length}, Production: ${prodPosts.length}`
        );

        const stats = await syncTable(
            'Post',
            localPosts,
            prodPosts,
            async (post) => {
                const { tags, ...data } = post;
                await prodDb.post.upsert({
                    where: { id: post.id },
                    create: {
                        ...data,
                        tags: { connect: tags.map((t) => ({ id: t.id })) }
                    },
                    update: {
                        ...data,
                        tags: { set: tags.map((t) => ({ id: t.id })) }
                    }
                });
            },
            {
                dryRun,
                newOnly,
                force,
                getUpdatedAt: (p) => p.updatedAt
            }
        );
        allStats.post = stats;
        printStats('Post', stats);
    }

    // Sync Prompts (depends on Tags and Users)
    if (tables.includes('prompt')) {
        console.log('\n💡 Syncing Prompts...');
        const localPrompts = await localDb.prompt.findMany({
            include: { tags: true }
        });
        const prodPrompts = await prodDb.prompt.findMany({
            include: { tags: true }
        });
        console.log(
            `   Local: ${localPrompts.length}, Production: ${prodPrompts.length}`
        );

        const stats = await syncTable(
            'Prompt',
            localPrompts,
            prodPrompts,
            async (prompt) => {
                const { tags, ...data } = prompt;
                await prodDb.prompt.upsert({
                    where: { id: prompt.id },
                    create: {
                        ...data,
                        tags: { connect: tags.map((t) => ({ id: t.id })) }
                    },
                    update: {
                        ...data,
                        tags: { set: tags.map((t) => ({ id: t.id })) }
                    }
                });
            },
            {
                dryRun,
                newOnly,
                force,
                getUpdatedAt: (p) => p.updatedAt
            }
        );
        allStats.prompt = stats;
        printStats('Prompt', stats);
    }

    // Print summary
    console.log('\n📊 Summary:');
    let totalNew = 0,
        totalUpdated = 0,
        totalConflicts = 0;
    for (const [table, stats] of Object.entries(allStats)) {
        totalNew += stats.new;
        totalUpdated += stats.updated;
        totalConflicts += stats.conflicts;
    }
    console.log(
        `   Total: ${totalNew} new, ${totalUpdated} updated, ${totalConflicts} conflicts`
    );

    if (dryRun) {
        console.log(
            '\n🧪 Dry run complete. Run without --dry-run to apply changes.'
        );
    } else {
        console.log('\n✅ Sync complete!');
        console.log('\n📌 Next steps:');
        console.log('   1. Sync images: npx tsx sync-images-to-prod.ts');
        console.log('   2. Rebuild web:  cd web && railway up -d');
    }
}

main()
    .catch(console.error)
    .finally(async () => {
        await localDb.$disconnect();
        await prodDb.$disconnect();
    });
