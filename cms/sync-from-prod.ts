'use strict';
/**
 * Sync data from production database to local PostgreSQL.
 * Production is the source of truth.
 *
 * Usage: npx tsx sync-from-prod.ts [--tables=work,workimage,...] [--clean]
 *
 * Options:
 *   --tables   Comma-separated list of tables to sync (default: all)
 *   --dry-run  Show what would be synced without making changes
 *   --clean    Delete local data before syncing (recommended for full sync)
 */
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

// Production database (source of truth)
const prodDb = new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL
});

// Local database (target)
const localDb = new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL_DEV
});

const ALL_TABLES = [
    'tag',
    'skill',
    'experience',
    'quote',
    'aboutfact',
    'user',
    'work',
    'workimage',
    'post',
    'prompt'
] as const;

type TableName = (typeof ALL_TABLES)[number];

function parseArgs() {
    const args = process.argv.slice(2);
    let tables: TableName[] = [...ALL_TABLES];
    let dryRun = false;
    let clean = false;

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
        if (arg === '--clean') clean = true;
    }
    return { tables, dryRun, clean };
}

async function cleanLocalData(tables: TableName[], dryRun: boolean) {
    console.log('\n🧹 Cleaning local data (reverse dependency order)...');

    // Delete in reverse dependency order to respect foreign keys
    const deleteOrder: TableName[] = [
        'workimage',
        'work',
        'post',
        'prompt',
        'user',
        'tag',
        'skill',
        'experience',
        'quote',
        'aboutfact'
    ];

    for (const table of deleteOrder) {
        if (!tables.includes(table)) continue;

        if (dryRun) {
            console.log(`   Would delete all ${table} records`);
            continue;
        }

        switch (table) {
            case 'workimage':
                await localDb.workImage.deleteMany();
                break;
            case 'work':
                await localDb.work.deleteMany();
                break;
            case 'post':
                await localDb.post.deleteMany();
                break;
            case 'prompt':
                await localDb.prompt.deleteMany();
                break;
            case 'user':
                await localDb.user.deleteMany();
                break;
            case 'tag':
                await localDb.tag.deleteMany();
                break;
            case 'skill':
                await localDb.skill.deleteMany();
                break;
            case 'experience':
                await localDb.experience.deleteMany();
                break;
            case 'quote':
                await localDb.quote.deleteMany();
                break;
            case 'aboutfact':
                await localDb.aboutFact.deleteMany();
                break;
        }
        console.log(`   ✅ Deleted all ${table} records`);
    }
}

async function main() {
    const { tables, dryRun, clean } = parseArgs();
    console.log('🔄 Syncing data from PRODUCTION → LOCAL');
    console.log(`   Tables: ${tables.join(', ')}`);
    if (dryRun) console.log('   🧪 DRY RUN - no changes will be made');
    if (clean) console.log('   🧹 CLEAN MODE - will delete local data first');

    // Clean local data first if requested
    if (clean) {
        await cleanLocalData(tables, dryRun);
    }

    // Sync Tags first (no dependencies)
    if (tables.includes('tag')) {
        console.log('\n📋 Syncing Tags...');
        const items = await prodDb.tag.findMany();
        console.log(`   Found ${items.length} in production`);
        if (!dryRun) {
            for (const item of items) {
                await localDb.tag.upsert({
                    where: { id: item.id },
                    create: item,
                    update: { name: item.name }
                });
            }
            console.log(`   ✅ Synced ${items.length} tags`);
        }
    }

    // Sync Skills
    if (tables.includes('skill')) {
        console.log('\n🛠️  Syncing Skills...');
        const items = await prodDb.skill.findMany();
        console.log(`   Found ${items.length} in production`);
        if (!dryRun) {
            for (const item of items) {
                await localDb.skill.upsert({
                    where: { id: item.id },
                    create: item,
                    update: item
                });
            }
            console.log(`   ✅ Synced ${items.length} skills`);
        }
    }

    // Sync Experiences
    if (tables.includes('experience')) {
        console.log('\n💼 Syncing Experiences...');
        const items = await prodDb.experience.findMany();
        console.log(`   Found ${items.length} in production`);
        if (!dryRun) {
            for (const item of items) {
                await localDb.experience.upsert({
                    where: { id: item.id },
                    create: item,
                    update: item
                });
            }
            console.log(`   ✅ Synced ${items.length} experiences`);
        }
    }

    // Sync Quotes
    if (tables.includes('quote')) {
        console.log('\n💬 Syncing Quotes...');
        const items = await prodDb.quote.findMany();
        console.log(`   Found ${items.length} in production`);
        if (!dryRun) {
            for (const item of items) {
                await localDb.quote.upsert({
                    where: { id: item.id },
                    create: item,
                    update: item
                });
            }
            console.log(`   ✅ Synced ${items.length} quotes`);
        }
    }

    // Sync AboutFacts
    if (tables.includes('aboutfact')) {
        console.log('\n📌 Syncing AboutFacts...');
        const items = await prodDb.aboutFact.findMany();
        console.log(`   Found ${items.length} in production`);
        if (!dryRun) {
            for (const item of items) {
                await localDb.aboutFact.upsert({
                    where: { id: item.id },
                    create: item,
                    update: item
                });
            }
            console.log(`   ✅ Synced ${items.length} about facts`);
        }
    }

    // Sync Users (needed for Work.author)
    if (tables.includes('user')) {
        console.log('\n👤 Syncing Users...');
        const items = await prodDb.user.findMany();
        console.log(`   Found ${items.length} in production`);
        if (!dryRun) {
            for (const item of items) {
                await localDb.user.upsert({
                    where: { id: item.id },
                    create: item,
                    update: item
                });
            }
            console.log(`   ✅ Synced ${items.length} users`);
        }
    }

    // Sync Works (depends on Tags and Users)
    if (tables.includes('work')) {
        console.log('\n📦 Syncing Works...');
        const works = await prodDb.work.findMany({ include: { tags: true } });
        console.log(`   Found ${works.length} in production`);
        if (!dryRun) {
            for (const work of works) {
                const { tags, ...data } = work;
                await localDb.work.upsert({
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
            }
            console.log(`   ✅ Synced ${works.length} works`);
        }
    }

    // Sync WorkImages (depends on Work)
    if (tables.includes('workimage')) {
        console.log('\n🖼️  Syncing WorkImages...');
        const items = await prodDb.workImage.findMany();
        console.log(`   Found ${items.length} in production`);
        if (!dryRun) {
            for (const item of items) {
                await localDb.workImage.upsert({
                    where: { id: item.id },
                    create: item,
                    update: item
                });
            }
            console.log(`   ✅ Synced ${items.length} work images`);
        }
    }

    // Sync Posts (depends on Tags and Users)
    if (tables.includes('post')) {
        console.log('\n📝 Syncing Posts...');
        const posts = await prodDb.post.findMany({ include: { tags: true } });
        console.log(`   Found ${posts.length} in production`);
        if (!dryRun) {
            for (const post of posts) {
                const { tags, ...data } = post;
                await localDb.post.upsert({
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
            }
            console.log(`   ✅ Synced ${posts.length} posts`);
        }
    }

    // Sync Prompts (depends on Tags and Users)
    if (tables.includes('prompt')) {
        console.log('\n💡 Syncing Prompts...');
        const prompts = await prodDb.prompt.findMany({
            include: { tags: true }
        });
        console.log(`   Found ${prompts.length} in production`);
        if (!dryRun) {
            for (const prompt of prompts) {
                const { tags, ...data } = prompt;
                await localDb.prompt.upsert({
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
            }
            console.log(`   ✅ Synced ${prompts.length} prompts`);
        }
    }

    console.log('\n✅ Sync complete!');
}

main()
    .catch(console.error)
    .finally(async () => {
        await prodDb.$disconnect();
        await localDb.$disconnect();
    });
