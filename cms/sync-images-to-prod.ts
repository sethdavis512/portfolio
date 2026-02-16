'use strict';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

// Local database (source of truth for images)
const localDb = new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL_DEV
});

// Production database (target)
const prodDb = new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL
});

async function main() {
    console.log('🔄 Syncing image data from local to production...\n');

    // Sync Work heroImage and thumbnailImage
    console.log('📦 Fetching Work items from local database...');
    const localWorks = await localDb.work.findMany({
        select: {
            slug: true,
            heroImage: true,
            thumbnailImage: true
        }
    });

    console.log(`   Found ${localWorks.length} work items\n`);

    console.log('🖼️  Syncing Work images...');
    for (const work of localWorks) {
        if (work.heroImage || work.thumbnailImage) {
            try {
                await prodDb.work.update({
                    where: { slug: work.slug },
                    data: {
                        heroImage: work.heroImage,
                        thumbnailImage: work.thumbnailImage
                    }
                });
                console.log(`   ✅ ${work.slug}`);
            } catch (error) {
                console.error(`   ❌ ${work.slug}:`, error);
            }
        } else {
            console.log(`   ⏭️  ${work.slug} (no images)`);
        }
    }

    // Sync WorkImage gallery images
    console.log('\n📷 Fetching WorkImage items from local database...');
    const localWorkImages = await localDb.workImage.findMany({
        select: {
            id: true,
            alt: true,
            sortOrder: true,
            image: true,
            work: {
                select: {
                    slug: true
                }
            }
        }
    });

    console.log(`   Found ${localWorkImages.length} gallery images\n`);

    console.log('🖼️  Syncing gallery images...');
    for (const workImage of localWorkImages) {
        if (!workImage.work) {
            console.log(`   ⏭️  Orphaned image (id: ${workImage.id})`);
            continue;
        }

        try {
            // Find the corresponding Work in production
            const prodWork = await prodDb.work.findUnique({
                where: { slug: workImage.work.slug }
            });

            if (!prodWork) {
                console.log(`   ⏭️  Work not found in prod: ${workImage.work.slug}`);
                continue;
            }

            // Check if this WorkImage already exists in production (by alt + workId)
            const existingImage = await prodDb.workImage.findFirst({
                where: {
                    alt: workImage.alt,
                    workId: prodWork.id
                }
            });

            if (existingImage) {
                // Update existing
                await prodDb.workImage.update({
                    where: { id: existingImage.id },
                    data: {
                        image: workImage.image,
                        sortOrder: workImage.sortOrder
                    }
                });
                console.log(`   ✅ Updated: ${workImage.alt} (${workImage.work.slug})`);
            } else {
                // Create new
                await prodDb.workImage.create({
                    data: {
                        alt: workImage.alt,
                        sortOrder: workImage.sortOrder,
                        image: workImage.image,
                        workId: prodWork.id
                    }
                });
                console.log(`   ✅ Created: ${workImage.alt} (${workImage.work.slug})`);
            }
        } catch (error) {
            console.error(`   ❌ ${workImage.alt}:`, error);
        }
    }

    console.log('\n✅ Image sync complete!');
}

main()
    .catch(console.error)
    .finally(async () => {
        await localDb.$disconnect();
        await prodDb.$disconnect();
    });
