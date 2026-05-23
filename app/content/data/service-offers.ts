export interface ServiceScopeExample {
    name: string;
    description: string;
}

export interface ServiceProcessStep {
    step: string;
    description: string;
}

export interface ServiceFaq {
    question: string;
    answer: string;
}

export interface ServiceOffer {
    slug: string;
    title: string;
    shortTitle: string;
    tagline: string;
    seoDescription: string;
    startingPrice: string;
    proofLine: string;
    idealFor: string[];
    deliverables: string[];
    scopeExamples: ServiceScopeExample[];
    process: ServiceProcessStep[];
    caseStudies: string[];
    faq: ServiceFaq[];
}

export const serviceOffers: ServiceOffer[] = [
    {
        slug: 'cli-tools',
        title: 'Custom CLI tools for agencies and product teams',
        shortTitle: 'CLI tools',
        tagline: 'Replace your team\'s graveyard of bash scripts with a single TypeScript CLI that ships as a standalone binary.',
        seoDescription:
            'Custom CLI tool development for agencies and product teams. TypeScript, Bun, standalone binaries. Scaffolding, deploys, onboarding automation. Starting at $2,500.',
        startingPrice: '$2,500',
        proofLine: 'Based on buncli, my production template for Bun-based CLIs.',
        idealFor: [
            'Agencies that spin up new client projects and want every project scaffolded the same way',
            'Product teams whose deploy, release, or onboarding steps live in a README nobody follows',
            'Founders who need an internal tool for non-engineers (ops, support, finance) without building a full web app',
            'Teams that currently rely on bash scripts, Makefiles, or one-off Python utilities nobody maintains'
        ],
        deliverables: [
            'A TypeScript CLI with your commands, options, and interactive prompts',
            'Standalone binaries for macOS, Linux, and Windows (no runtime required on the target machine)',
            'GitHub Actions release workflow that publishes binaries on each tag',
            'Documented commands and a `--help` surface that reads like a product',
            'A test harness so future commands have a pattern to follow',
            'Handoff walkthrough and a written runbook for extending the CLI'
        ],
        scopeExamples: [
            {
                name: 'Agency project scaffolder',
                description:
                    'One command to scaffold a new client project from your standard stack: repo, CI, env files, design tokens, starter routes. Prompts for client name, stack variant, and deploy target.'
            },
            {
                name: 'Guided deploy workflow',
                description:
                    'Wrap your deploy steps (migrations, smoke checks, cache purges, notifications) into a single interactive command with pre-flight validation and an audit log of who ran what.'
            },
            {
                name: 'Ops lookup tool',
                description:
                    'A CLI for your support or ops team to look up customers, reset credentials, re-run failed jobs, and export audit snapshots without SQL access or a full admin UI.'
            }
        ],
        process: [
            {
                step: 'Scope call (free)',
                description:
                    'A 30-minute call to map out the commands, users, and systems your CLI needs to touch. You leave with a written scope and fixed price.'
            },
            {
                step: 'Prototype',
                description:
                    'I ship a working CLI with 1-2 commands end-to-end so you can feel the shape of it before we expand.'
            },
            {
                step: 'Build + review',
                description:
                    'The remaining commands, binary builds, CI release workflow, and docs. Regular demos so there are no surprises.'
            },
            {
                step: 'Handoff',
                description:
                    'Walkthrough with your team, written runbook for adding new commands, and post-launch support included.'
            }
        ],
        caseStudies: ['buncli', 'tech-with-seth'],
        faq: [
            {
                question: 'Why a CLI instead of a web app?',
                answer:
                    'CLIs run in seconds, live next to the work (terminals, CI, IDEs), and can be version-controlled, code-reviewed, and scripted. For internal workflows with a small audience, a CLI is faster to build, cheaper to host (there\'s no server), and easier to trust than a one-off admin UI.'
            },
            {
                question: 'What if we\'re a Node shop, not a Bun shop?',
                answer:
                    'The CLI can target Node instead of Bun if you need it. Bun just makes the binary story dramatically simpler: a single executable your team can download and run without installing a runtime.'
            },
            {
                question: 'How do updates work after handoff?',
                answer:
                    'Your repo, your CI, your binaries. The release workflow I set up means publishing a new version is a git tag. For ongoing work, I offer a monthly retainer, but most teams extend their CLI themselves using the patterns from the build.'
            },
            {
                question: 'Can you integrate with our existing APIs and auth?',
                answer:
                    'Yes. The prototype phase is specifically for wiring up your real endpoints, auth (OAuth device flow, PATs, SSO-backed tokens, whatever you use), and any services the CLI needs to hit. The prompt patterns and error handling come from the template; the integration is tailored.'
            }
        ]
    },
    {
        slug: 'contentful-sites',
        title: 'Contentful-powered sites built on React Router 7',
        shortTitle: 'Contentful sites',
        tagline:
            'Your content team gets a CMS they love. Your engineering team gets a typed, server-rendered React app they can actually maintain. I connect the two.',
        seoDescription:
            'Contentful integration with React Router 7: content modeling, live preview, server rendering, SEO, and a frontend your editors and engineers both want to use. Starting at $5,000.',
        startingPrice: '$5,000',
        proofLine: 'Built on React Router 7, the framework behind Shopify and sethdavis.tech.',
        idealFor: [
            'Marketing teams stuck waiting on engineering for every content change',
            'Companies that chose Contentful but still need a frontend to display it',
            'Agencies delivering Contentful-backed sites to clients who need to self-serve content',
            'Teams migrating from WordPress or Webflow to a headless architecture'
        ],
        deliverables: [
            'A React Router 7 app wired to your Contentful space with typed content queries',
            'Content model design (or restructuring of your existing space) for clean editorial workflows',
            'Contentful live preview so editors see changes before they publish',
            'Server-side rendering with stale-while-revalidate caching for fast page loads',
            'SEO baseline: meta, OpenGraph, Twitter cards, canonical URLs, XML sitemap, robots.txt',
            'Deploy to Railway, Vercel, or Cloudflare with preview environments and webhook-triggered rebuilds'
        ],
        scopeExamples: [
            {
                name: 'Marketing site + blog',
                description:
                    'Landing pages, blog, team bios, and case studies. Editors manage everything in Contentful. The frontend is fast, accessible, and SEO-ready without engineering involvement for content changes.'
            },
            {
                name: 'Docs or knowledge base',
                description:
                    'Structured documentation site with sidebar navigation, search, and versioning. Content lives in Contentful so non-engineers can update docs without touching code or markdown.'
            },
            {
                name: 'WordPress or Webflow migration',
                description:
                    'Move your existing content into Contentful and build a React Router 7 frontend that matches (or improves on) your current site. Redirects, SEO equity, and asset migration included.'
            }
        ],
        process: [
            {
                step: 'Scope call (free)',
                description:
                    'We walk through your content, your team, and what the site needs to do. You leave with a written scope and a fixed price.'
            },
            {
                step: 'Content modeling',
                description:
                    'I design (or restructure) your Contentful content types, validations, and editorial experience so your team can publish confidently.'
            },
            {
                step: 'Build + review',
                description:
                    'Routes, components, live preview, caching, and SEO. Preview deploys on every push so you see progress throughout.'
            },
            {
                step: 'Launch + handoff',
                description:
                    'Production deploy, webhooks wired, editor walkthrough, and written documentation. Post-launch support included.'
            }
        ],
        caseStudies: ['tech-with-seth'],
        faq: [
            {
                question: 'Why React Router 7 and not Next.js?',
                answer:
                    'React Router 7 gives you server rendering, route-level data loading, and prerendering without the complexity and vendor lock-in of Next.js. It deploys anywhere (Railway, Vercel, Cloudflare, a Docker container) and the entire data flow is typed end-to-end.'
            },
            {
                question: 'We already have a Contentful space. Can you work with it?',
                answer:
                    'Yes. I\'ll audit your existing content types and either build on them or propose changes if the current structure is making editorial work harder than it should be. No need to start from scratch.'
            },
            {
                question: 'How does live preview work?',
                answer:
                    'Contentful\'s live preview SDK lets editors see draft changes in the actual frontend before publishing. I wire this up so your preview environment shows real-time updates as editors type, not a separate "preview mode" that looks nothing like the live site.'
            },
            {
                question: 'What about images and media?',
                answer:
                    'Contentful\'s built-in asset CDN handles responsive images, format conversion, and quality optimization out of the box. If you have heavier media needs (video, AI-generated imagery), I can layer on Cloudinary as part of the build.'
            }
        ]
    }
];

export function getServiceOfferBySlug(slug: string): ServiceOffer | null {
    return serviceOffers.find((offer) => offer.slug === slug) ?? null;
}

export function getAllServiceSlugs(): string[] {
    return serviceOffers.map((offer) => offer.slug);
}
