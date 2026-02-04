import sharp from 'sharp';

async function reoptimize() {
    console.log('Re-optimizing with maximum quality...\n');

    // Keep original dimensions but export with maximum quality
    await sharp('web/public/prompt-suite-hero.webp')
        .webp({ quality: 95, effort: 6 }) // Max quality
        .toFile('web/public/prompt-suite-hero-hq.webp');

    console.log('✓ Created prompt-suite-hero-hq.webp with 95% quality');
}

reoptimize();
