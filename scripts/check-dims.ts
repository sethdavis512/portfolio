import sharp from 'sharp';

async function checkImage() {
    const img = sharp('web/public/prompt-suite-hero.webp');
    const metadata = await img.metadata();
    console.log('Dimensions:', metadata.width, 'x', metadata.height);
    console.log('Format:', metadata.format);
}

checkImage();
