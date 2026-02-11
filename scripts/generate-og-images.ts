import sharp from 'sharp';
import { readdir, stat, access } from 'fs/promises';
import { join, parse, relative, isAbsolute } from 'path';
import { parseArgs } from 'util';

// Open Graph image specifications
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;
const OG_ASPECT_RATIO = OG_WIDTH / OG_HEIGHT; // ~1.91:1

const INPUT_DIR = join(process.cwd(), 'web/public');
const OUTPUT_DIR = join(process.cwd(), 'web/public/og');

// Images to skip
const SKIP_PATTERNS = [/optimized/, /\/og\//, /\.svg$/];

// Parse command line arguments
const { values } = parseArgs({
    options: {
        file: { type: 'string', short: 'f' },
        quality: { type: 'string', short: 'q', default: '85' },
        position: { type: 'string', short: 'p', default: 'center' }
    }
});

async function findSingleImage(filename: string): Promise<string | null> {
    // If it's an absolute path, use it directly
    if (isAbsolute(filename)) {
        try {
            await access(filename);
            return filename;
        } catch {
            return null;
        }
    }

    // If it's a relative path from cwd, try that
    const cwdPath = join(process.cwd(), filename);
    try {
        await access(cwdPath);
        return cwdPath;
    } catch {
        // Continue to search in INPUT_DIR
    }

    // Search in INPUT_DIR by filename
    const inputPath = join(INPUT_DIR, filename);
    try {
        await access(inputPath);
        return inputPath;
    } catch {
        return null;
    }
}

async function getAllImages(dir: string): Promise<string[]> {
    const images: string[] = [];
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = join(dir, entry.name);

        if (entry.isDirectory()) {
            if (!SKIP_PATTERNS.some((pattern) => pattern.test(fullPath))) {
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

async function generateOgImage(
    inputPath: string,
    quality: number,
    position: string
) {
    const { name, ext } = parse(inputPath);
    const relativePath = relative(INPUT_DIR, parse(inputPath).dir);
    const outputDir = join(OUTPUT_DIR, relativePath);

    try {
        const stats = await stat(inputPath);
        const fileSizeMB = (stats.size / 1024 / 1024).toFixed(2);

        const image = sharp(inputPath);
        const metadata = await image.metadata();
        const { width = 0, height = 0 } = metadata;

        console.log(`\n🖼️  Processing: ${name}${ext}`);
        console.log(`   Original: ${fileSizeMB}MB (${width}x${height})`);

        if (width === 0 || height === 0) {
            console.log(`   ❌ Invalid image dimensions`);
            return;
        }

        const imageAspectRatio = width / height;

        // Determine how to crop/resize
        const resizeOptions: sharp.ResizeOptions = {
            width: OG_WIDTH,
            height: OG_HEIGHT,
            fit: 'cover',
            position: position as any
        };

        const outputName = `${name}-og.webp`;
        const outputPath = join(outputDir, outputName);

        await image
            .resize(resizeOptions)
            .sharpen({ sigma: 0.5 })
            .webp({ quality, effort: 6, smartSubsample: true })
            .toFile(outputPath);

        const outputStats = await stat(outputPath);
        const outputSizeKB = (outputStats.size / 1024).toFixed(0);
        const outputSizeMB = (outputStats.size / 1024 / 1024).toFixed(2);

        console.log(
            `   ✓ Generated: ${OG_WIDTH}x${OG_HEIGHT} - ${outputSizeKB}KB (${outputSizeMB}MB)`
        );

        if (outputStats.size > 1024 * 1024) {
            console.log(
                `   ⚠️  Warning: File size is large (${outputSizeMB}MB). Consider lowering quality.`
            );
        }

        const saved = stats.size - outputStats.size;
        const savedMB = (saved / 1024 / 1024).toFixed(2);
        console.log(`   💾 Size reduction: ${savedMB}MB`);
    } catch (error) {
        console.error(`   ❌ Error processing ${name}${ext}:`, error);
    }
}

async function main() {
    console.log('🚀 Starting OG image generation...\n');
    console.log('📐 Target size: 1200x630px (Open Graph standard)');
    console.log(`📁 Input directory: ${INPUT_DIR}`);
    console.log(`📁 Output directory: ${OUTPUT_DIR}`);
    console.log(`🎨 Quality: ${values.quality}`);
    console.log(`📍 Position: ${values.position}\n`);

    const quality = parseInt(values.quality || '85', 10);
    const position = values.position || 'center';

    if (quality < 1 || quality > 100) {
        console.error('❌ Quality must be between 1 and 100');
        process.exit(1);
    }

    let images: string[];

    // Handle single file mode
    if (values.file) {
        const singleImage = await findSingleImage(values.file);
        if (!singleImage) {
            console.error(`❌ File not found: ${values.file}`);
            console.error(`   Searched in:`);
            console.error(`   - ${values.file}`);
            console.error(`   - ${join(process.cwd(), values.file)}`);
            console.error(`   - ${join(INPUT_DIR, values.file)}`);
            process.exit(1);
        }
        console.log(`🎯 Single file mode: ${singleImage}\n`);
        images = [singleImage];
    } else {
        images = await getAllImages(INPUT_DIR);
        console.log(`Found ${images.length} images to process\n`);
    }

    for (const imagePath of images) {
        await generateOgImage(imagePath, quality, position);
    }

    console.log('\n✨ OG image generation complete!');
    console.log(
        '\n💡 Tip: Use these in your routes with the ogImage parameter:'
    );
    console.log(
        "   generateRouteMeta({ pageTitle: 'My Page', ogImage: 'https://sethdavis.tech/og/my-image-og.webp' })"
    );
}

main().catch(console.error);
