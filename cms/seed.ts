'use strict';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL_DEV || process.env.DATABASE_URL
});

async function main() {
    const EMAIL = process.env.SEED_EMAIL;
    const PASSWORD = process.env.SEED_PASSWORD;
    const NAME = process.env.SEED_NAME;

    if (!EMAIL || !PASSWORD || !NAME) {
        throw new Error('Missing required env vars: SEED_EMAIL, SEED_PASSWORD, SEED_NAME');
    }

    const hashedPassword = await bcrypt.hash(PASSWORD, 10);

    try {
        await prisma.user.upsert({
            where: { email: EMAIL },
            create: {
                email: EMAIL,
                name: NAME,
                password: hashedPassword
            },
            update: {
                name: NAME,
                password: hashedPassword
            }
        });
    } catch (error) {
        console.error('Error:', error);
    }

    console.log('✅ Successfully seeded the database 🌱');
}

main();
