import 'dotenv/config';
import crypto from 'node:crypto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({ datasourceUrl: process.env.DATABASE_URL });

const VALID_FIELDS = ['heroImage', 'thumbnailImage'] as const;
type ImageField = (typeof VALID_FIELDS)[number];

async function uploadToCloudinary(filePathOrUrl: string) {
    const folder = process.env.CLOUDINARY_API_FOLDER ?? 'portfolio';
    const timestamp = Math.floor(Date.now() / 1000);

    const paramsToSign = `folder=${folder}&timestamp=${timestamp}`;
    const signature = crypto
        .createHash('sha1')
        .update(paramsToSign + process.env.CLOUDINARY_API_SECRET)
        .digest('hex');

    const formData = new FormData();
    if (filePathOrUrl.startsWith('http')) {
        formData.append('file', filePathOrUrl);
    } else {
        formData.append('file', Bun.file(filePathOrUrl));
    }
    formData.append('folder', folder);
    formData.append('timestamp', String(timestamp));
    formData.append('api_key', process.env.CLOUDINARY_API_KEY!);
    formData.append('signature', signature);

    const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
        { method: 'POST', body: formData }
    );

    if (!res.ok) {
        throw new Error(`Cloudinary upload failed: ${await res.text()}`);
    }

    return res.json();
}

function toKeystoneJson(meta: any, originalFilename: string) {
    const id = meta.public_id.split('/').pop();
    return {
        id,
        _meta: meta,
        encoding: '7bit',
        filename: originalFilename,
        mimetype: `image/${meta.format}`,
        originalFilename
    };
}

async function main() {
    const [slug, field, filePath] = process.argv.slice(2);

    if (!slug || !field || !filePath) {
        console.error(
            'Usage: bun run upload-image.ts <slug> <field> <file-or-url>'
        );
        console.error('Fields: heroImage, thumbnailImage');
        process.exit(1);
    }

    if (!VALID_FIELDS.includes(field as ImageField)) {
        console.error(`Field must be one of: ${VALID_FIELDS.join(', ')}`);
        process.exit(1);
    }

    const work = await prisma.work.findUnique({ where: { slug } });
    if (!work) {
        console.error(`No work item found with slug "${slug}"`);
        process.exit(1);
    }

    const filename = filePath.split('/').pop() || 'image.png';
    console.log(`Uploading ${filename} to Cloudinary...`);

    const meta = await uploadToCloudinary(filePath);
    const imageJson = toKeystoneJson(meta, filename);

    await prisma.work.update({
        where: { slug },
        data: { [field]: imageJson }
    });

    console.log(`Updated ${field} for "${work.title}"`);
    console.log(`URL: ${meta.secure_url}`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
