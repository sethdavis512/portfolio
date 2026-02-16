'use strict';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL_DEV || process.env.DATABASE_URL
});

const skills = [
    'Typescript',
    'React',
    'React Router 7',
    'Vue.js',
    'Prisma',
    'Postgres',
    'GraphQL',
    'CSS-in-JS',
    'HTML',
    'CSS',
    'JS',
    'GitHub CI/CD',
    'Accessibility',
    'Git',
    'Vercel AI SDK',
    'Open AI API',
    'Claude Code',
    'GitHub Copilot',
    'PostHog',
    'Railway',
    'VS Code',
    'Figma'
];

const experiences = [
    {
        title: 'Senior Design Engineer',
        company: 'Gartner',
        location: 'Austin, TX',
        dates: 'Aug 2024\u2013Oct 2025 (1 yr 2 mos)',
        type: 'job',
        sortOrder: 1,
        bullets: [
            'Built and maintained a company-wide Javascript package using Snowplow Analytics to track key site metrics\u2014over 90 million events logged across three sites since December 2024',
            'Designed and implemented a custom CLI tool to streamline the creation, versioning, and synchronization of Snowplow schemas, enhancing data consistency and developer efficiency',
            'Collaborated with cross-functional teams to integrate Snowplow data into various applications and platforms, enabling data-driven decision making'
        ]
    },
    {
        title: 'Senior Design Engineer',
        company: 'Indeed, Inc',
        location: 'Austin, TX',
        dates: 'Jan 2023\u2013May 2024 (1 yr 5 mos)',
        type: 'job',
        sortOrder: 2,
        bullets: [
            'Created an interface enabling developers to dynamically add prefabricated tools and customizable mock data, saving internal users over 100+ hours weekly. Conducted workshops to onboard developers and project managers',
            'Developed a module discovery app that enabled internal teams to efficiently identify the purpose, visual presentation, and functionality of Employer codebases in order to promote awareness and reuse',
            'Improved the interface for a reporting application that empowered teams to diagnose issues, view coding infractions and accessibility issues, leading to the resolution of 30% of accessibility violations',
            'Upgraded theming tool to help teams identify incorrectly applied styles within components as well as enabling developers to add custom theme values and iterate towards better site designs saving developers time'
        ]
    },
    {
        title: 'Design Engineer',
        company: 'Indeed, Inc',
        location: 'Austin, TX',
        dates: 'Jan 2020\u2013Jan 2023 (3 yrs)',
        type: 'job',
        sortOrder: 3,
        bullets: [
            'Streamlined Employer navigation by incorporating cross-organization feedback, optimizing link hierarchy, and adding sub-navigation, which improved repetitious task efficiency in addition to the overall customer experience',
            'Enhanced customer awareness of job statuses by incorporating key UI elements to indicate posting condition, which reduced user confusion and prompted employers to resolve posting errors',
            'Developed a module linking third-party chat to enhance customer service interactions, resulting in more efficient communication, faster resolution times, and improved customer satisfaction',
            "Established Indeed's design pattern library, contributed 3 components and helped launch a volunteer guild that enabled contributions from teams across the company"
        ]
    },
    {
        title: 'Community & Ongoing Learning',
        company: '',
        location: '',
        dates: '',
        type: 'community',
        sortOrder: 4,
        bullets: [
            'Active contributor to Remix Austin Meetup, engaging in discussions on modern React architecture and routing patterns',
            'Building Iridium: A full-stack starter template with batteries included (TypeScript, React Router 7, Prisma, Postgres, Railway, Polar.sh)',
            'Follows industry podcasts (Syntax, VS Code Insiders) on modern frontend tooling and developer experience',
            'Exploring AI-assisted development and LLM code generation workflows'
        ]
    },
    {
        title: 'Education',
        company: '',
        location: '',
        dates: '',
        type: 'education',
        sortOrder: 5,
        bullets: [
            'Austin Coding Academy - Austin, Texas: Intermediate course (Feb 1\u2013Apr 15, 2016), Advanced course (May 2\u2013Jul 13, 2016)',
            'Texas State University - Bachelors of Fine Arts, Communication Design (2012) - San Marcos, Texas'
        ]
    }
];

const quotes = [
    {
        text: 'Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. Persistence and determination alone are omnipotent.',
        author: 'Calvin Coolidge',
        sortOrder: 1
    },
    {
        text: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
        author: 'Will Durant',
        sortOrder: 2
    },
    {
        text: 'Excuses make today easy but tomorrow harder. Discipline makes today hard but tomorrow easier.',
        author: 'Anonymous',
        sortOrder: 3
    },
    {
        text: "I have not failed. I've just found 10,000 ways that won't work.",
        author: 'Thomas A. Edison',
        sortOrder: 4
    },
    {
        text: 'A goal without a plan is just a wish.',
        author: 'Antoine de Saint-Exupery',
        sortOrder: 5
    },
    {
        text: "You don't wait until you're confident enough to take action. You build your confidence as a result of taking action.",
        author: 'Jill Coleman',
        sortOrder: 6
    },
    {
        text: 'Impossible is an opinion',
        author: 'Wilfred Nancy',
        sortOrder: 7
    },
    {
        text: 'I get knocked down, but I get up again...You are never gonna keep me down...',
        author: 'Chumbawamba',
        sortOrder: 8
    }
];

const aboutFacts = [
    {
        emoji: '\u270c\ufe0f',
        title: 'Native Austinite',
        content: "I've lived in Austin for 30+ years",
        linkUrl: '',
        linkExternal: 'true',
        sortOrder: 1
    },
    {
        emoji: '\u26bd\ufe0f',
        title: 'Austin FC supporter',
        content: 'Verde hasta la muerte',
        linkUrl: 'https://www.austinfc.com/',
        linkExternal: 'true',
        sortOrder: 2
    },
    {
        emoji: '\ud83d\udcbf',
        title: 'React Router fanatic',
        content: 'Build better websites',
        linkUrl: 'https://reactrouter.com/',
        linkExternal: 'true',
        sortOrder: 3
    },
    {
        emoji: '\ud83d\udcbb',
        title: 'Learner',
        content: 'MCP / Generative UI / Postgres / Docker / Go / Python',
        linkUrl: '',
        linkExternal: 'true',
        sortOrder: 4
    },
    {
        emoji: '\u26a1\ufe0f',
        title: 'Electric vehicle enthusiast',
        content: "I'm a Rivian fan",
        linkUrl: '',
        linkExternal: 'true',
        sortOrder: 5
    },
    {
        emoji: '\ud83d\udcaa\ud83c\udffb',
        title: 'CrossFit member',
        content: 'Lifting for 3+ years',
        linkUrl: '',
        linkExternal: 'true',
        sortOrder: 6
    },
    {
        emoji: '\ud83e\udd16',
        title: 'A.I. Maniac',
        content: 'Mentoring AI professionals',
        linkUrl: 'https://ai-maniacs.com',
        linkExternal: 'true',
        sortOrder: 7
    },
    {
        emoji: '\ud83d\udcc5',
        title: 'Meetup Contributor',
        content: 'Remix Austin',
        linkUrl: 'https://www.meetup.com/remix-austin/',
        linkExternal: 'true',
        sortOrder: 8
    },
    {
        emoji: '\ud83c\udfae',
        title: 'Gamer',
        content: "Tears of the Kingdom / Rocket League / No Man's Sky / Boomerang Fu",
        linkUrl: '',
        linkExternal: 'true',
        sortOrder: 9
    },
    {
        emoji: '\ud83d\ude9b',
        title: 'Truck enthusiast',
        content: 'I like trucks',
        linkUrl: '/truck',
        linkExternal: 'false',
        sortOrder: 10
    }
];

async function main() {
    console.log('Seeding skills...');
    for (let i = 0; i < skills.length; i++) {
        await prisma.skill.upsert({
            where: { name: skills[i] },
            update: { sortOrder: i + 1, status: 'PUBLISHED' },
            create: {
                name: skills[i],
                sortOrder: i + 1,
                status: 'PUBLISHED'
            }
        });
    }
    console.log(`  ${skills.length} skills seeded`);

    console.log('Seeding experiences...');
    await prisma.experience.deleteMany({});
    for (const exp of experiences) {
        await prisma.experience.create({
            data: {
                title: exp.title,
                company: exp.company,
                location: exp.location,
                dates: exp.dates,
                type: exp.type,
                sortOrder: exp.sortOrder,
                bullets: exp.bullets,
                status: 'PUBLISHED'
            }
        });
    }
    console.log(`  ${experiences.length} experiences seeded`);

    console.log('Seeding quotes...');
    for (const q of quotes) {
        await prisma.quote.upsert({
            where: { text: q.text },
            update: {
                author: q.author,
                sortOrder: q.sortOrder,
                status: 'PUBLISHED'
            },
            create: {
                text: q.text,
                author: q.author,
                sortOrder: q.sortOrder,
                status: 'PUBLISHED'
            }
        });
    }
    console.log(`  ${quotes.length} quotes seeded`);

    console.log('Seeding about facts...');
    for (const fact of aboutFacts) {
        await prisma.aboutFact.upsert({
            where: { title: fact.title },
            update: {
                emoji: fact.emoji,
                content: fact.content,
                linkUrl: fact.linkUrl,
                linkExternal: fact.linkExternal,
                sortOrder: fact.sortOrder,
                status: 'PUBLISHED'
            },
            create: {
                emoji: fact.emoji,
                title: fact.title,
                content: fact.content,
                linkUrl: fact.linkUrl,
                linkExternal: fact.linkExternal,
                sortOrder: fact.sortOrder,
                status: 'PUBLISHED'
            }
        });
    }
    console.log(`  ${aboutFacts.length} about facts seeded`);

    console.log('Done!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
