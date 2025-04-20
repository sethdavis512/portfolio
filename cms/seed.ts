'use strict';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const EMAIL = 'sethdavis512@gmail.com';
const PASSWORD = 'asdfasdf';
const NAME = 'Seth Davis';

async function main() {
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
