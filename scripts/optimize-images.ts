import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, parse, relative } from 'path';

interface ImageSize {
    width: number;
    suffix: string;
}

const SIZES: ImageSize[] = [
    { width: 640, suffix: '-640w' },
    { width: 1024, suffix: '-1024w' },
    { width: 1920, suffix: '-1920w' }
];

const INPUT_DIR = join(process.cwd(), 'web/public');
const OUTPUT_DIR = join(process.cwd(), 'web/public/optimized');

// Images to skip (already optimized or special cases)
const SKIP_PATTERNS = [/optimized/, /\.svg$/, /flag-of-texas/, /gartner-logo/];

async function getAllImages(dir: string): Promise<string[]> {
    const images: string[] = [];
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = join(dir, entry.name);

        if (entry.isDirectory()) {
            if (!SKIP_PATTERNS.some((pattern) => pattern.test(entry.name))) {
                images.push(...(await getAllImages(fullPath)));
            }
        } else if (
            entry.isFile() &&
            /\.(jpg|jpeg|png|webp)$/i.test(entry.name)
        ) {
            if (!SKIP_PATTERNS.some((pattern) => pattern.test(fullPath))) {
                images.push(fullPath);
            }
        }
    }

    return images;
}

async function getImageDimensions(
    filePath: string
): Promise<{ width: number; height: number }> {
    const metadata = await sharp(filePath).metadata();
    return {
        width: metadata.width || 0,
        height: metadata.height || 0
    };
}

async function optimizeImage(inputPath: string) {
    const { dir, name, ext } = parse(inputPath);
    const relativePath = relative(INPUT_DIR, dir);
    const outputDir = join(OUTPUT_DIR, relativePath);

    try {
        const stats = await stat(inputPath);
        const fileSizeMB = (stats.size / 1024 / 1024).toFixed(2);
        const dimensions = await getImageDimensions(inputPath);

        console.log(`\n📸 Processing: ${name}${ext}`);
        console.log(
            `   Original: ${fileSizeMB}MB (${dimensions.width}x${dimensions.height})`
        );

        if (dimensions.width < 640) {
            console.log(
                `   ⏭️  Skipping - already small (${dimensions.width}px wide)`
            );
            return;
        }

        let totalSaved = 0;

        for (const size of SIZES) {
            // Skip if original is smaller than target size
            if (dimensions.width < size.width) {
                continue;
            }

            const outputName = `${name}${size.suffix}.webp`;
            const outputPath = join(outputDir, outputName);

            await sharp(inputPath)
                .resize(size.width, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                })
                .webp({ quality: 85, effort: 6 })
                .toFile(outputPath);

            const outputStats = await stat(outputPath);
            const outputSizeKB = (outputStats.size / 1024).toFixed(0);
            const outputSizeMB = (outputStats.size / 1024 / 1024).toFixed(2);

            console.log(
                `   ✓ ${size.width}w: ${outputSizeKB}KB (${outputSizeMB}MB)`
            );
            totalSaved += stats.size - outputStats.size;
        }

        const savedMB = (totalSaved / 1024 / 1024).toFixed(2);
        console.log(`   💾 Total saved: ${savedMB}MB`);
    } catch (error) {
        console.error(`   ❌ Error processing ${name}${ext}:`, error);
    }
}

async function main() {
    console.log('🚀 Starting image optimization...\n');
    console.log(`📁 Input directory: ${INPUT_DIR}`);
    console.log(`📁 Output directory: ${OUTPUT_DIR}\n`);

    const images = await getAllImages(INPUT_DIR);
    console.log(`Found ${images.length} images to process\n`);

    // Debug: List virtruv files
    const virtruvImages = images.filter((img) => img.includes('virtruv'));
    if (virtruvImages.length > 0) {
        console.log('Virtruv images found:');
        virtruvImages.forEach((img) => console.log(`  - ${img}`));
    } else {
        console.log('⚠️  No virtruv images found!');
    }
    console.log('');

    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;

    for (const imagePath of images) {
        await optimizeImage(imagePath);
    }

    console.log('\n✨ Optimization complete!');
}

main().catch(console.error);
