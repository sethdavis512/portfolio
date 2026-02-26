'use strict';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL_DEV || process.env.DATABASE_URL
});

const workItems = [
    {
        title: 'Iridium',
        slug: 'iridium',
        status: 'PUBLISHED',
        sortOrder: 1,
        description:
            'Ship AI-powered apps in days, not months. Iridium gives you authentication, an agentic AI chat system with tool calling, Stripe payments, and production-ready patterns so you can focus on what makes your product unique.',
        cta: 'See more',
        about: 'Iridium is a production-ready starter kit for building AI-powered applications. Built on React Router 7 with TypeScript and Bun, it ships with a complete agentic AI chat system powered by VoltAgent, the Vercel AI SDK, and OpenAI — including threaded conversations, real-time streaming, message persistence, and agent tools like note-taking and Stripe payment link creation. Authentication is handled by Better Auth with role-based access control (User, Editor, Admin), secure HTTP-only sessions, and user banning. The stack includes PostgreSQL with Prisma, Tailwind CSS with DaisyUI, and Docker for deployment. Stripe integration enables the AI agent to create payment links on demand with full metadata tracking. Validated form patterns with React Hook Form and Zod, middleware-based route protection, and strong accessibility practices round out a foundation you can build on immediately.',
        learned:
            'Gained deep expertise in building agentic AI chat interfaces with VoltAgent, including tool calling, PostgreSQL-backed agent memory, and working memory with Zod-validated schemas. Learned how to integrate Stripe payment link creation as an agent tool with proper error normalization and security patterns. Adopted Bun as the development runtime for faster installs and script execution while maintaining Node compatibility in production Docker builds. Developed strong patterns for combining React Hook Form with Zod for end-to-end form validation. Built accessible, responsive layouts with proper ARIA attributes, focus management, and keyboard navigation.',
        impact: 'Enables developers to launch AI-powered applications in days by providing a complete, working foundation out of the box. Instead of spending weeks wiring up authentication, database models, AI integration, and payment processing, teams get a running app with agentic AI chat, Stripe payments, secure auth, and production patterns from the first clone. The VoltAgent-powered agent system demonstrates real-world tool calling with note creation, search, and payment link generation. The focused architecture minimizes technical debt while the clean separation of concerns makes it straightforward to extend with your own agent tools and features.',
        techStack: [
            'typescript',
            'react',
            'react-router',
            'tailwind',
            'daisy',
            'postgres',
            'better-auth',
            'prisma',
            'bun',
            'stripe',
            'railway'
        ],
        demoUrl: 'https://iridium.sethdavis.tech/',
        demoUrlText: 'Try the demo',
        sidebarType: 'interest-form',
        features: [],
        sourceUrl: '',
        purchaseUrl: '',
        purchaseButtonText: 'Purchase'
    },
    {
        title: 'Image Pipeline as a Service',
        slug: 'ai-image-pipeline',
        status: 'PUBLISHED',
        sortOrder: 2,
        description:
            'Automated AI image generation system using Trigger.dev, Replicate, and Cloudinary. Generates 4,300+ themed images daily.',
        cta: 'View project',
        about: "A production-ready TypeScript system for automated AI image generation that combines Trigger.dev for task orchestration, Replicate's AI models for generation, and Cloudinary for storage and delivery. The system uses template-based prompts with intelligent permutation generation to create high-quality themed images on a scheduled basis. It currently runs three active genres (supercars, real estate, arts & crafts) generating 180 images per hour across billions of possible permutations, with built-in incompatibility filtering to ensure every combination makes sense.",
        learned:
            "Building this taught me advanced prompt engineering through template-based permutation systems with {placeholder} syntax, creating billions of unique combinations while maintaining quality. I implemented sophisticated incompatibility filtering using partial string matching to prevent nonsensical combinations like 'rain + desert'. The architecture demonstrates true separation of concerns—a completely subject-agnostic core generator that works with any domain through configuration files. I also gained deep experience with Trigger.dev's cron scheduling and structured logging, Replicate's AI model API integration with proper error handling, and Cloudinary's semantic tagging system for organizing massive image libraries. The cost optimization strategies I developed manage $200-400/month operational costs while generating 4,300+ images daily.",
        impact: 'This project showcases my ability to architect scalable, production-ready systems that integrate multiple external services into cohesive workflows. It demonstrates advanced TypeScript patterns, proper error handling, cost-conscious design decisions, and the ability to build extensible systems where new domains can be added through simple configuration files without touching core code. The combination of automation orchestration (Trigger.dev), AI integration (Replicate), and cloud storage management (Cloudinary) reflects real-world SaaS development patterns. The structured logging, validation systems, and comprehensive documentation show professional-grade engineering practices ready for team environments and production deployment.',
        techStack: ['typescript', 'trigger', 'cloudinary'],
        sourceUrl:
            'https://github.com/sethdavis512/image-pipeline-as-a-service',
        sidebarType: 'none',
        features: [],
        demoUrl: '',
        demoUrlText: '',
        purchaseUrl: '',
        purchaseButtonText: 'Purchase'
    },
    {
        title: 'Virtruv',
        slug: 'virtruv',
        status: 'PUBLISHED',
        sortOrder: 3,
        description:
            'Custom WordPress website build including brand development, visual identity design, and close collaboration with stakeholders to deliver a solution aligned with business objectives.',
        cta: 'View project',
        about: "Virtruv is a custom WordPress website I revitalized, combining technical development with minor graphic design work. The project included crafting the brand's visual identity through logo design changes, color palette development, and imagery curation. Working closely with the business owner, I delivered a modern, professional web presence that accurately represents the company's values and services.",
        learned:
            'Partnered directly with the owner throughout the entire project lifecycle, establishing iterative feedback loops that ensured every design decision aligned with the business vision. This close collaboration taught me the importance of translating stakeholder requirements into tangible deliverables while maintaining open communication channels. I gained valuable experience in managing client expectations and incorporating feedback efficiently to keep the project on track.',
        impact: "Delivered a polished website that matched exactly what the client envisioned, strengthening Virtruv's brand presence in their market. The refreshed visual identity and improved user experience position the company to better connect with their target audience. This project demonstrates my ability to handle end-to-end website projects that combine technical implementation with creative design work, all while maintaining strong stakeholder relationships.",
        techStack: ['wordpress', 'css'],
        demoUrl: 'https://virtruv.com',
        demoUrlText: 'See the site',
        sidebarType: 'none',
        features: [],
        sourceUrl: '',
        purchaseUrl: '',
        purchaseButtonText: 'Purchase'
    },
    {
        title: 'Prompt Suite',
        slug: 'prompt-suite',
        status: 'PUBLISHED',
        sortOrder: 4,
        description:
            'Native desktop tray app for instant AI prompt access without disrupting your workflow.',
        cta: 'Learn more',
        about: 'Generate polished prompts, PRDs, emails, and marketing copy from your system tray. Pick a category, choose a mode, type your context, and hit generate. Done.',
        learned: '',
        impact: '',
        techStack: ['polar'],
        sidebarType: 'purchase',
        features: [
            '33 prompt modes across 8 categories',
            'One-click copy or save to Markdown',
            '6 color themes (3 light, 3 dark)',
            'Prompt history with restore',
            'Mac only',
            'Credits never expire'
        ],
        sourceUrl: '',
        demoUrl: '',
        demoUrlText: '',
        purchaseUrl:
            'https://buy.polar.sh/polar_cl_G4Cbys5kCAFbkx09U8BZ7RX6RvCWoitX4BcYx0cehe5',
        purchaseButtonText: 'Get Prompt Suite'
    },
    {
        title: 'AWS Flashcards',
        slug: 'aws-flashcards',
        status: 'PUBLISHED',
        sortOrder: 5,
        description:
            'Electron tray app for studying AWS Cloud Practitioner (CLF-C02) certification with 130+ flashcards.',
        cta: 'View project',
        about: 'AWS Flashcards is an Electron-based system tray application designed for AWS Cloud Practitioner (CLF-C02) certification preparation. The app lives in your system tray for quick access during study sessions, featuring 130+ flashcards across all 4 exam domains: Cloud Concepts (24%), Security & Compliance (30%), Technology & Services (34%), and Billing & Support (12%). Interactive flashcards flip with a click or spacebar, and the app includes progress tracking to mark cards as "Know It" or "Review", domain filtering for targeted study, shuffle mode, and efficient keyboard shortcuts.',
        learned:
            "Building this project deepened my understanding of Electron's tray application architecture and how to create unobtrusive desktop utilities that integrate seamlessly with the operating system. I gained hands-on experience with Embla Carousel for smooth card navigation and swiping gestures. The project also reinforced my knowledge of localStorage for persistent state management and taught me effective patterns for keyboard-driven interfaces. Most importantly, I learned how to structure educational content for spaced repetition learning.",
        impact: 'AWS Flashcards addresses the challenge of finding study time in a busy schedule by making certification prep accessible during micro-breaks throughout the workday. The system tray approach means users can study during build times, between meetings, or whenever they have a few spare minutes—without context-switching away from their primary workflow. As an open-source project, it serves as both a practical study tool and a reference implementation for building Electron tray applications with interactive content.',
        techStack: ['electron', 'javascript', 'css'],
        sourceUrl: 'https://github.com/tech-with-seth/aws-flashcards',
        sidebarType: 'none',
        features: [],
        demoUrl: '',
        demoUrlText: '',
        purchaseUrl: '',
        purchaseButtonText: 'Purchase'
    },
    {
        title: 'Video Machine',
        slug: 'video-machine',
        status: 'PUBLISHED',
        sortOrder: 6,
        description:
            'Video rendering platform that creates TikTok-style slide videos using Remotion, with credit-based payments and background processing.',
        cta: 'Explore platform',
        about: 'Video Machine is a comprehensive video rendering platform that transforms content into engaging TikTok-style slide presentations. Built with React Router 7 and Remotion, this application enables users to programmatically generate videos with a credit-based system. The platform integrates Polar for payment processing and authentication, Trigger.dev for reliable background video rendering, and Railway S3 for efficient video storage and delivery. The application demonstrates the power of combining modern web technologies to create a production-ready SaaS solution that handles complex video generation workflows at scale.',
        learned:
            'This project deepened my understanding of distributed systems and asynchronous job processing. Working with Remotion revealed the intricacies of server-side video rendering and the challenges of managing long-running processes in a web application. The integration of Trigger.dev taught me valuable lessons about task orchestration, retry strategies, and building resilient background job systems. I explored payment integration patterns with Polar, implementing credit-based systems with webhooks for real-time balance updates. The Railway S3 integration provided insights into efficient file storage strategies and implementing presigned URLs for secure content delivery. Building this platform required careful consideration of user experience during long-running operations, leading to innovations in progress tracking and real-time status updates.',
        impact: 'Video Machine showcases my ability to architect and build complete SaaS applications from end to end. It demonstrates technical proficiency across multiple domains: video rendering technology, payment systems integration, distributed task processing, cloud storage, and database management. The project highlights my understanding of production-ready infrastructure patterns, including authentication flows, webhook handling, and error recovery mechanisms. As a portfolio piece, it effectively communicates my capability to build complex, revenue-generating applications that solve real problems while maintaining clean architecture and excellent user experience. The combination of Remotion for rendering, Trigger.dev for reliability, and Polar for monetization represents modern best practices in building scalable web applications.',
        techStack: [
            'typescript',
            'react',
            'react-router',
            'remotion',
            'tailwind',
            'postgres',
            'prisma',
            'polar',
            'trigger'
        ],
        sidebarType: 'none',
        features: [],
        sourceUrl: '',
        demoUrl: '',
        demoUrlText: '',
        purchaseUrl: '',
        purchaseButtonText: 'Purchase'
    },
    {
        title: 'RR7 Slides',
        slug: 'rr7-slides',
        status: 'PUBLISHED',
        sortOrder: 7,
        description:
            'A React Router based web application for creating and sharing slide presentations',
        cta: 'Learn more',
        about: 'RR7 Slides represents my exploration into modernizing presentation software for developers. I wanted to try building a solution that would eliminate the friction of traditional presentation tools when all you really want is to write slides in Markdown. This React Router 7 application emerged from my experiments with MDX-based presentations and dynamic content discovery systems. I was particularly interested in exploring how file-based routing could create an automatic slide discovery system that finds .mdx files, orders them intelligently, and implements lazy loading for optimal performance. The result combines the polish of traditional presentation software with the flexibility developers expect - keyboard navigation, smooth transitions, and the ability to embed React components directly in Markdown.',
        learned:
            "This project became a dive into file-based routing patterns and scalable discovery systems. I wanted to experiment with Vite's import.meta.glob functionality, which led to fascinating insights about building systems that automatically adapt to content changes without manual configuration. The MDX integration pushed my understanding of seamlessly blending static content with dynamic React components. I also explored performance optimization techniques, particularly around lazy loading strategies and intelligent component caching. The most challenging aspect was architecting a presentation system that maintains professional smoothness while remaining completely code-driven.",
        impact: 'I wanted to create something that integrates well with developer workflows - supporting version control, Markdown authoring and component reusability. Beyond personal utility for conference talks and client presentations, this project demonstrates my approach to crafting solutions that feel intuitive. It serves as a compelling example of building developer-focused tools and showcases technical expertise in modern React patterns, performance optimization, and developer experience design. The project effectively communicates my ability to bridge technical implementation with practical developer needs.',
        techStack: [
            'typescript',
            'react',
            'react-router',
            'tailwind'
        ],
        sourceUrl: 'https://github.com/sethdavis512/rr7-slides',
        demoUrl: 'https://slides.sethdavis.tech/',
        sidebarType: 'none',
        features: [],
        demoUrlText: '',
        purchaseUrl: '',
        purchaseButtonText: 'Purchase'
    },
    {
        title: 'Obsidian MCP Server',
        slug: 'obsidian-mcp-server',
        status: 'PUBLISHED',
        sortOrder: 8,
        description: 'A second brain for your everyday',
        cta: 'Get started',
        about: 'Extensible Model Context Protocol server demonstrating plugin architecture for AI agent integration. Bridges AI assistants (Claude, Cursor, VS Code) with Obsidian vaults for note-taking, content generation, and knowledge synthesis. Client-agnostic design works with any MCP-compatible tool while providing advanced features: bulk operations, metadata handling, intelligent content summarization. A practical example of building agentic infrastructure that extends AI capabilities through standardized protocols.',
        learned:
            'Deep expertise in the Model Context Protocol specification and building robust integration layers between AI systems and external data sources. TypeScript server architecture, protocol-based communication patterns, and designing tools that work across multiple AI platforms. Understanding how to create extensible plugin systems that maintain protocol compliance while enabling advanced functionality.',
        impact: 'Demonstrates ability to build agentic infrastructure—plugins, automation tools, workflow extensions that augment AI assistant capabilities. Showcases understanding of emerging protocols and standards in the AI tooling ecosystem. This type of extensible architecture is central to building design intelligence systems that integrate with creative workflows and automate repetitive design tasks.',
        techStack: ['typescript', 'mcp', 'obsidian'],
        sourceUrl: 'https://github.com/sethdavis512/obsidian-mcp-server',
        sidebarType: 'none',
        features: [],
        demoUrl: '',
        demoUrlText: '',
        purchaseUrl: '',
        purchaseButtonText: 'Purchase'
    },
    {
        title: 'Tech with Seth',
        slug: 'tech-with-seth',
        status: 'PUBLISHED',
        sortOrder: 9,
        description: 'Open sourced libraries and templates',
        cta: 'Browse repositories',
        about: "I kept running into the same setup tasks across different projects - scaffolding React components, configuring build tools, writing the same utility functions. Instead of solving these problems over and over, I started building reusable tools and templates. The Tech with Seth GitHub organization is where I put these solutions so other developers can skip the repetitive parts and get to the interesting work faster. It's a mix of CLI tools, starter templates, and utility libraries that handle the boring stuff I got tired of doing manually.",
        learned:
            "The biggest lesson was learning to prioritize simplicity over cleverness. Early versions of these tools tried to handle every possible use case, which made them complicated and hard to understand. I learned that most developers just want to get started quickly with sensible defaults. This meant stripping away features that seemed cool but weren't essential, writing clearer documentation, and focusing on the 80% use case rather than trying to be everything to everyone. The goal became making tools that someone could understand and use productively within their first few minutes.",
        impact: "These tools save me time on every new project, and apparently they help other people too. The real value isn't in the individual tools - it's in the approach of identifying repetitive work and automating it away. More than anything, maintaining these tools forces me to think about what actually matters in development workflows versus what just feels important. It's a constant reminder to focus on solving real problems rather than building overly flashy solutions.",
        techStack: [],
        sourceUrl: 'https://github.com/orgs/tech-with-seth/repositories',
        sidebarType: 'none',
        features: [],
        demoUrl: '',
        demoUrlText: '',
        purchaseUrl: '',
        purchaseButtonText: 'Purchase'
    },
    {
        title: 'Tray App Guide',
        slug: 'tray-app-guide',
        status: 'PUBLISHED',
        sortOrder: 10,
        description:
            'An introductory guide to building Electron based tray apps. Learn the basics and get started quickly.',
        cta: 'Learn more',
        about: '',
        learned: '',
        impact: '',
        techStack: [],
        purchaseUrl:
            'https://buy.polar.sh/polar_cl_A09UreUuvxMfMzSLzHZZVolqkWD50M9aaV0ji28TFjz',
        purchaseButtonText: 'Purchase Guide',
        sidebarType: 'purchase',
        features: [
            'Beginner-friendly introduction',
            'Practical examples',
            'Quick start guide'
        ],
        sourceUrl: '',
        demoUrl: '',
        demoUrlText: ''
    },
    {
        title: 'Claude Desktop for Real Estate Agents',
        slug: 'claude-desktop-for-real-estate-agents',
        status: 'PUBLISHED',
        sortOrder: 11,
        description:
            '51-page guide with 12+ real estate workflows, prompt framework, and advanced techniques. Save hours weekly on listings, client communication, and operations.',
        cta: 'Learn more',
        about: '',
        learned: '',
        impact: '',
        techStack: ['polar'],
        purchaseUrl:
            'https://buy.polar.sh/polar_cl_ez4JvNqYGYnmHZCOCYxzyFPMR56mYP3G3zSHi2TBYuc',
        purchaseButtonText: 'Purchase Bundle',
        sidebarType: 'purchase',
        features: [
            '51-page Complete Guide',
            '12+ Real Estate Workflows',
            'Prompt Framework + Advanced Techniques',
            'January 2026 Edition'
        ],
        sourceUrl: '',
        demoUrl: '',
        demoUrlText: ''
    },
    {
        title: 'Claude Desktop for Insurance Agents',
        slug: 'claude-desktop-for-insurance-agents',
        status: 'PUBLISHED',
        sortOrder: 12,
        description:
            '56-page guide with 12+ insurance workflows, prompt framework, and advanced techniques. Save 5-10+ hours weekly on quotes, renewals, claims, and client communication.',
        cta: 'Learn more',
        about: '',
        learned: '',
        impact: '',
        techStack: ['polar'],
        purchaseUrl:
            'https://buy.polar.sh/polar_cl_ZuGd99lGoIt8kG0BJgJf6sDarWhsq378Y5AdT17KqIq',
        purchaseButtonText: 'Purchase Bundle',
        sidebarType: 'purchase',
        features: [
            '56-page Complete Guide',
            '12+ Insurance Workflows',
            'Prompt Framework + Advanced Techniques',
            'January 2026 Edition'
        ],
        sourceUrl: '',
        demoUrl: '',
        demoUrlText: ''
    }
];

async function main() {
    console.log('🌱 Seeding work items...');

    for (const item of workItems) {
        try {
            await prisma.work.upsert({
                where: { slug: item.slug },
                create: item,
                update: item
            });
            console.log(`  ✅ ${item.title}`);
        } catch (error) {
            console.error(`  ❌ Failed to seed ${item.title}:`, error);
        }
    }

    console.log('\n✅ Work items seeded successfully!');
    console.log(
        '📸 Note: Upload hero/thumbnail/gallery images via the Keystone admin UI at /admin'
    );
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
