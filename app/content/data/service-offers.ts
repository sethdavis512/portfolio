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
        slug: 'image-pipelines',
        title: 'Image and media pipelines that run themselves',
        shortTitle: 'Image pipelines',
        tagline:
            'Automated image generation, transformation, and delivery on Cloudinary, Trigger.dev, and Replicate. Thousands of assets a day, without you touching Photoshop.',
        seoDescription:
            'Image pipeline as a service: Cloudinary setup, responsive image generation, AI image pipelines on Trigger.dev and Replicate. Production SaaS-grade automation. Starting at $3,500.',
        startingPrice: '$3,500',
        proofLine: 'Based on a live pipeline generating 4,300+ AI images per day across three genres.',
        idealFor: [
            'Marketplaces, directories, and editorial sites that need fresh imagery at scale',
            'Ecommerce teams producing thousands of product images with consistent treatment',
            'Content platforms that want AI-generated hero and thumbnail imagery without manual design work',
            'Teams whose image workflow today is a designer, a Dropbox folder, and a lot of Slack'
        ],
        deliverables: [
            'A production Cloudinary account, structured with folders, tags, and naming you can actually navigate',
            'Responsive image generation: auto-format, auto-quality, breakpoint variants, lazy loading',
            'Optional AI generation layer: prompt templates, permutation engine, incompatibility filtering',
            'Scheduled background jobs on Trigger.dev with retries, structured logs, and cost monitoring',
            'A typed SDK or helper module your app imports to request and render images',
            'Runbook covering cost controls, failure modes, and how to add new image types'
        ],
        scopeExamples: [
            {
                name: 'Responsive image rollout',
                description:
                    'Replace every `<img>` in your app with Cloudinary-backed responsive images: auto format, auto quality, device-appropriate sizes. Typical LCP improvements of 30-50% on image-heavy pages.'
            },
            {
                name: 'AI image pipeline',
                description:
                    'Template-driven prompts + permutation engine + Replicate + Cloudinary, scheduled on Trigger.dev. Generates themed imagery on a cron, tags it semantically, and monitors cost.'
            },
            {
                name: 'Bulk transform + migration',
                description:
                    'Migrate an existing library (S3, local, WordPress, Shopify) to Cloudinary with preserved URLs, renamed assets, applied transformations, and a redirect map so SEO doesn\'t break.'
            }
        ],
        process: [
            {
                step: 'Scope call (free)',
                description:
                    'We cover your current image setup, volumes, budgets, and what a good outcome looks like. You leave with a written scope and fixed price.'
            },
            {
                step: 'Infrastructure',
                description:
                    'Cloudinary structure, Trigger.dev project, environment separation, secret management, and the first end-to-end image flowing through.'
            },
            {
                step: 'Pipeline build',
                description:
                    'The real generation and/or transformation logic, error handling, cost controls, and observability. Regular demos.'
            },
            {
                step: 'Integration + handoff',
                description:
                    'Your app consuming the pipeline via a typed helper, runbook, and post-launch support.'
            }
        ],
        caseStudies: ['ai-image-pipeline', 'video-machine'],
        faq: [
            {
                question: 'Why Cloudinary specifically?',
                answer:
                    'It\'s the most complete media CDN for developer workflows: format/quality automation, transformation URLs, semantic tagging, AI add-ons, generous free tier. If you have a strong preference for another provider (Imgix, Bunny, self-hosted), the pipeline patterns port over — Cloudinary is the default, not a requirement.'
            },
            {
                question: 'What about costs at scale?',
                answer:
                    'Cost control is built into the pipeline, not bolted on. You get daily spend logging, per-job budget caps, and alerts when volumes spike. The live pipeline this is based on runs at $200-400/month while generating 4,300+ images a day.'
            },
            {
                question: 'Can you integrate with our existing CMS?',
                answer:
                    'Yes. Common targets are Sanity, Keystone, Contentful, Prismic, or a custom DB. The integration is a field or webhook in your CMS that the pipeline watches, writes back to, or replaces.'
            },
            {
                question: 'Do you handle the design direction for AI images?',
                answer:
                    'I handle the system: prompt templates, permutation rules, filtering, and the feedback loop to improve output. Creative direction (what "good" looks like for your brand) is something we define together in the scope call, with you as the judge.'
            }
        ]
    },
    {
        slug: 'marketing-sites',
        title: 'Marketing and portfolio sites for developers and founders',
        shortTitle: 'Marketing sites',
        tagline:
            'Fast, typed, content-driven sites built on React Router 7 and MDX. SEO-ready, dark-mode-first, and a joy to ship content to.',
        seoDescription:
            'Developer portfolio and marketing site development in React Router 7 with MDX. Fast, typed, SEO-ready, dark-mode-first. Starting at $2,500.',
        startingPrice: '$2,500',
        proofLine: 'This site is one of them: RR7, MDX, Cloudinary, prerendered, 100 Lighthouse.',
        idealFor: [
            'Indie devs and technical founders who need a site that actually ranks and converts',
            'Small agencies rebuilding their own site "when they get a minute"',
            'Open-source maintainers who want a proper home for docs, posts, and case studies',
            'Solo consultants replacing a Squarespace or Webflow setup they\'ve outgrown'
        ],
        deliverables: [
            'React Router 7 site, server-rendered or prerendered depending on hosting target',
            'MDX content pipeline: posts, work, TILs, and custom sections writable in markdown',
            'SEO baseline: meta, OpenGraph, Twitter cards, canonical URLs, XML sitemap, robots.txt',
            'Design system using your tokens or a bespoke palette, dark-mode-first',
            'Cloudinary-backed responsive imagery',
            'Deploy to Railway, Vercel, Netlify, or Cloudflare (your pick), with preview environments'
        ],
        scopeExamples: [
            {
                name: 'Founder / solo consultant site',
                description:
                    'Hero, work, writing, services, contact. Typed content in MDX. Ships with real case studies and an actually-converting services page.'
            },
            {
                name: 'Indie dev portfolio',
                description:
                    'Work, TIL posts, resume, setup page. Prerendered static site. Designed to rank for your name + your stack and land you inbound without ads.'
            },
            {
                name: 'Small agency site',
                description:
                    'Services, work, team, blog. Productized service landing pages (like the page you\'re reading). Content-editable by non-devs via MDX in the repo.'
            }
        ],
        process: [
            {
                step: 'Scope call (free)',
                description:
                    'We cover pages, content, audience, and what "done" looks like. You leave with a written scope and fixed price.'
            },
            {
                step: 'Content + design',
                description:
                    'Content inventory, sitemap, page wireframes, typography and color pass. Real copy, not lorem.'
            },
            {
                step: 'Build + review',
                description:
                    'Routes, MDX pipeline, components, SEO, animations. Preview deploys on every push; regular demos.'
            },
            {
                step: 'Launch + handoff',
                description:
                    'Production deploy, analytics wired up, walkthrough of how to add posts and projects yourself. Post-launch support included.'
            }
        ],
        caseStudies: ['tech-with-seth', 'iridium'],
        faq: [
            {
                question: 'Why React Router 7 and not Next.js or Astro?',
                answer:
                    'React Router 7 gives you server rendering, route-level data loading, and prerendering without Next\'s framework tax. It\'s small, typed end-to-end, and dead simple to host anywhere. Astro is a great choice for mostly-static content sites; if that\'s you, I\'ll recommend it instead.'
            },
            {
                question: 'How do I edit content after handoff?',
                answer:
                    'Content is MDX files in your repo. You (or your writer) edit markdown, commit, and the preview deploy updates. No CMS to pay for, no lock-in. If a CMS fits your team better (Sanity, Keystone), I\'ll wire it up on request.'
            },
            {
                question: 'Will it actually rank?',
                answer:
                    'The technical foundation will be right: crawlable, fast, structured markup, clean URLs, sitemap. Ranking itself depends on the content you publish and the intent you target — I can\'t promise #1 for "React developer", but I can promise the site won\'t be the reason you don\'t rank.'
            },
            {
                question: 'Can you migrate from my current site?',
                answer:
                    'Yes. I\'ll pull existing content, set up redirects so you don\'t lose SEO equity, and migrate assets to Cloudinary. Migration work is included in the scope if you mention it on the scope call.'
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
