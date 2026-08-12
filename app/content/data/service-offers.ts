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
    kind: 'project' | 'retainer';
    tagline: string;
    seoDescription: string;
    proofLine: string;
    idealFor: string[];
    deliverables: string[];
    scopeExamples: ServiceScopeExample[];
    /** Heading override for the scope examples section. Defaults to "What an engagement looks like". */
    scopeHeading?: string;
    process: ServiceProcessStep[];
    /** Heading override for the process section. Defaults to "How it works". */
    processHeading?: string;
    caseStudies: string[];
    faq: ServiceFaq[];
}

/** Old offer slugs that should permanently redirect after the 2026 reposition. */
export const LEGACY_SERVICE_REDIRECTS: Record<string, string> = {
    'cli-tools': '/services',
    'contentful-sites': '/services/marketing-sites'
};

export const serviceOffers: ServiceOffer[] = [
    {
        slug: 'marketing-sites',
        title: 'Marketing sites your team can actually edit',
        shortTitle: 'Marketing sites',
        kind: 'project',
        tagline:
            'A fast, well-built marketing site your team updates without filing a ticket. Designed and shipped in weeks, not quarters.',
        seoDescription:
            'Marketing site design and development by Seth Davis. Fast, editable sites on React Router 7 with the CMS that fits your team. Book a free scope call.',
        proofLine:
            'Recent builds: the Cray Networks rebrand and the Virtruv brand and site.',
        idealFor: [
            'Teams whose copy changes wait on an engineer with better things to do',
            'Companies outgrowing WordPress or Webflow and tired of fighting the page builder',
            'Founders launching a product who need a credible site before the announcement date',
            'Marketing teams that want Lighthouse scores they can show to whoever asks'
        ],
        deliverables: [
            'A designed, responsive marketing site built on React Router 7',
            'The CMS that fits your team (Contentful, Sanity, or plain MDX), wired with typed content queries',
            'An editing workflow your team learns in one walkthrough, with preview before publish',
            'SEO baseline: metadata, Open Graph, sitemap, structured data where it earns its place',
            'Deploys with preview environments, so every change is reviewable at a URL',
            'A build process that uses AI where it speeds things up, with every line reviewed by me before it ships'
        ],
        scopeExamples: [
            {
                name: 'Marketing site and blog',
                description:
                    'Home, product, pricing, about, and a blog the content team runs on their own. Launch-ready with analytics and SEO wired in.'
            },
            {
                name: 'Rebrand rollout',
                description:
                    'New identity applied to a live site: design tokens, typography, components, and pages rebuilt without breaking existing URLs or rankings.'
            },
            {
                name: 'Page builder escape',
                description:
                    'Migrate off WordPress or Webflow onto a stack your engineers respect and your editors still enjoy. Content moves over, URLs redirect cleanly.'
            }
        ],
        process: [
            {
                step: 'Scope call (free)',
                description:
                    '30 minutes. We look at what you have, what you need, and whether I am the right fit. You leave with a written scope either way.'
            },
            {
                step: 'Design and content model',
                description:
                    'I design the key pages and model the content so editing feels obvious. You review at a real URL, not a PDF.'
            },
            {
                step: 'Build with previews',
                description:
                    'The site comes together in preview deploys you can click through and comment on as it progresses.'
            },
            {
                step: 'Launch and walkthrough',
                description:
                    'DNS, redirects, analytics, and a recorded walkthrough so your team can edit confidently from day one.'
            }
        ],
        caseStudies: ['craynetworks-rebrand', 'virtruv'],
        faq: [
            {
                question: 'Which CMS do you use?',
                answer:
                    'Whichever fits your team. Contentful and Sanity are both excellent; for small sites, MDX in the repo is often simpler and free. The CMS is an implementation detail. The part that matters is that editing is easy and the output is fast.'
            },
            {
                question: 'How do you use AI in the build?',
                answer:
                    'For speed, not for slop. Agentic tooling accelerates scaffolding, content migration, and testing, which is why I can quote weeks instead of months. Every line of code and copy gets reviewed by me before it ships.'
            },
            {
                question: 'What about SEO?',
                answer:
                    'Every site ships with a real SEO baseline: server rendering, metadata, Open Graph images, sitemap, and structured data where it applies. Migrations include a redirect map so existing rankings carry over.'
            },
            {
                question: 'Where does it get hosted?',
                answer:
                    'Railway, Vercel, or Cloudflare, in your accounts so you own everything. Hosting for a typical marketing site runs a few dollars a month.'
            }
        ]
    },
    {
        slug: 'design-systems',
        title: 'Design systems your team and your tools can use',
        shortTitle: 'Design systems',
        kind: 'project',
        tagline:
            'A component library with tokens, docs, and typed APIs so clear that both your engineers and their coding agents use it correctly.',
        seoDescription:
            'Design system and component library development by Seth Davis. Design tokens, typed React components, docs, and agent-ready APIs. Book a free scope call.',
        proofLine:
            'I build and maintain Lone Star UI and Rivet UI, and helped establish the pattern library at Indeed.',
        idealFor: [
            'Product teams whose UI is drifting: three button styles, four grays, no source of truth',
            'Startups moving from "just ship it" to "we need this to look consistent"',
            'Teams adopting AI coding tools that keep generating off-system UI',
            'Design teams whose Figma library and the actual codebase stopped agreeing months ago'
        ],
        deliverables: [
            'A token system (color, type, spacing) in OKLCH with light and dark modes from day one',
            'Typed React components with variant-driven APIs, built on accessible primitives',
            'Component documentation with live examples your team actually references',
            'Agent-ready conventions: props and patterns predictable enough that coding agents produce on-system UI',
            'Accessibility built in: WCAG AA contrast, keyboard navigation, focus management',
            'An adoption plan and migration path for the UI you already have'
        ],
        scopeExamples: [
            {
                name: 'System from scratch',
                description:
                    'Tokens, core components, and docs for a product that has design debt but no system. Scoped to the components you use, not a 50-component wishlist.'
            },
            {
                name: 'Brand-to-system translation',
                description:
                    'Your brand guidelines turned into a working token system and themed component set, so the brand survives contact with the codebase.'
            },
            {
                name: 'System rescue',
                description:
                    'An existing library that nobody trusts gets audited, consolidated, and documented until it is the easiest way to build UI again.'
            }
        ],
        process: [
            {
                step: 'Scope call (free)',
                description:
                    'We look at your current UI, where it drifts, and what a right-sized system looks like for your team.'
            },
            {
                step: 'Audit and tokens',
                description:
                    'I inventory what exists, define the token system, and get agreement on the foundations before any components are built.'
            },
            {
                step: 'Components and docs',
                description:
                    'Core components land in prioritized batches with documentation, so your team starts using the system before the engagement ends.'
            },
            {
                step: 'Adoption handoff',
                description:
                    'Migration guide, contribution conventions, and a working session with your engineers so the system keeps growing without me.'
            }
        ],
        caseStudies: ['lone-star-ui', 'craynetworks-rebrand'],
        faq: [
            {
                question: 'What stack do you build on?',
                answer:
                    'React, TypeScript, Tailwind CSS, and CVA for variants, on top of accessible primitives like Base UI. If your team is on something else, the token layer still transfers; we talk about it on the scope call.'
            },
            {
                question: 'What does "agent-ready" actually mean?',
                answer:
                    'Typed, variant-driven component APIs with consistent naming and documented conventions. When the patterns are predictable, coding agents (and new hires) produce UI that looks like it belongs. Teams using AI tooling get compounding value from this.'
            },
            {
                question: 'Do you work with our existing Figma library?',
                answer:
                    'Yes. If you have design files, I translate them into tokens and components and flag where the designs disagree with themselves. If you do not, I can define the visual foundations as part of the work.'
            },
            {
                question: 'How do you keep the system from dying after handoff?',
                answer:
                    'The handoff includes contribution conventions, docs, and a working session with your team. Systems die when adding to them is harder than going rogue, so the engagement optimizes for the system being the easy path.'
            }
        ]
    },
    {
        slug: 'ai-prototyping',
        title: 'AI product prototypes built on production patterns',
        shortTitle: 'AI prototyping',
        kind: 'project',
        tagline:
            'A working AI prototype in weeks: agents, tool calling, real chat UX. Validate the idea before you commit a roadmap to it.',
        seoDescription:
            'AI product prototyping by Seth Davis. Working prototypes with agents, tool calling, and designed chat UX, built on production patterns. Book a free scope call.',
        proofLine:
            'Built on patterns from Iridium, my AI app starter kit, and Sprocket, a 12-agent personal assistant.',
        idealFor: [
            'Founders with an AI product idea who need something real to show users or investors',
            'Product teams who need to know if an agent workflow actually fits before staffing it',
            'Companies whose AI demo is a slide deck and needs to become a working thing',
            'Teams that tried building on raw API calls and hit a wall on tool calling or state'
        ],
        deliverables: [
            'A working prototype users can touch: real model calls, real data, deployed at a URL',
            'Agent and tool-calling architecture that maps to how the production version would work',
            'Chat and generative UI that feels designed, not dumped on screen',
            'Model and provider recommendation based on your workload, with costs estimated',
            'Clean TypeScript codebase your team can extend into production',
            'A written readout: what the prototype proved, what it did not, and what production takes'
        ],
        scopeExamples: [
            {
                name: 'Agent workflow prototype',
                description:
                    'An agent that does a real job in your domain with tool calling against your actual APIs, so you can judge usefulness instead of guessing.'
            },
            {
                name: 'AI feature inside your product',
                description:
                    'A designed, working AI feature (assistant, summarization, generation) integrated against a copy of your real product surface.'
            },
            {
                name: 'Investor-ready demo',
                description:
                    'A polished, deployed demo that shows the core magic reliably. Built honest: the readout is clear about what is real and what is staged.'
            }
        ],
        process: [
            {
                step: 'Scope call (free)',
                description:
                    'We define the one question the prototype must answer and the smallest build that answers it.'
            },
            {
                step: 'Architecture sketch',
                description:
                    'Agents, tools, models, and data flows on one page. You know what is being built and why before the build starts.'
            },
            {
                step: 'Build in weekly demos',
                description:
                    'The prototype grows in weekly deployed checkpoints. You steer while it is cheap to steer.'
            },
            {
                step: 'Readout and handoff',
                description:
                    'Working prototype, the codebase, and a straight readout on what production requires. No demo theater.'
            }
        ],
        caseStudies: ['iridium', 'sprocket', 'ai-maniacs'],
        faq: [
            {
                question: 'Prototype or production?',
                answer:
                    'Prototype, built on production patterns. It is real code with real architecture, so nothing has to be thrown away, but the goal is answering "should we build this" in weeks rather than shipping to thousands of users.'
            },
            {
                question: 'Which models and providers do you use?',
                answer:
                    'Claude is my default for agentic work and tool calling. The recommendation depends on your workload, latency, and budget, and the prototype makes switching providers cheap to test.'
            },
            {
                question: 'What happens to the code?',
                answer:
                    'It is yours. Clean TypeScript in your repos, documented well enough that your team or a future contractor extends it without archaeology.'
            },
            {
                question: 'What about our data?',
                answer:
                    'Prototypes run in your accounts against the data you choose to expose. Nothing gets used to train anything, and provider data policies are part of the model recommendation.'
            }
        ]
    },
    {
        slug: 'fractional-design-technologist',
        title: 'A fractional design technologist on your team',
        shortTitle: 'Fractional design technologist',
        kind: 'retainer',
        tagline:
            'A senior design engineer embedded with your team a set number of days per week. Design system stewardship, frontend quality, and AI tooling adoption without a full-time hire.',
        seoDescription:
            'Fractional design technologist retainer with Seth Davis. Embedded design engineering: design systems, frontend quality, AI tooling adoption. Book a free scope call.',
        proofLine:
            'Nine years doing this work inside product teams, most recently as a Senior Design Technologist at Gartner and Indeed.',
        idealFor: [
            'Teams that need design engineering weekly but cannot justify a full-time hire yet',
            'Startups whose product works but looks and feels a step behind the competition',
            'Engineering teams adopting AI coding tools who want the output to stay on-brand and accessible',
            'Design teams who need an engineer that speaks design fluently and closes the handoff gap'
        ],
        deliverables: [
            'Set embedded days per week in your Slack, your standups, and your codebase',
            'Design system stewardship: the tokens, components, and docs stay coherent as the product grows',
            'Interface quality work: motion, polish, accessibility, and the details that usually get deprioritized',
            'AI tooling adoption: conventions and reviews that keep agent-generated UI on-system',
            'Design-to-engineering translation in critiques, planning, and reviews',
            'A monthly written summary of what shipped and where quality is trending'
        ],
        scopeHeading: 'What I take off your plate',
        scopeExamples: [
            {
                name: 'Design system stewardship',
                description:
                    'The component library stops rotting. New patterns get componentized, drift gets caught in review, docs stay current.'
            },
            {
                name: 'Frontend quality ownership',
                description:
                    'Someone is finally accountable for how the product feels: interaction details, empty states, loading states, accessibility.'
            },
            {
                name: 'AI tooling guardrails',
                description:
                    'Your team ships faster with coding agents while the UI stays consistent, because the conventions and reviews are in place.'
            }
        ],
        processHeading: 'How the retainer works',
        process: [
            {
                step: 'Scope call (free)',
                description:
                    'We figure out the days per week, the first priorities, and whether embedded is the right shape for what you need.'
            },
            {
                step: 'Kickoff week',
                description:
                    'I get into the codebase, the design files, and the backlog, then propose a first-month plan you approve.'
            },
            {
                step: 'Weekly rhythm',
                description:
                    'Set days per week of shipping, reviews, and pairing. Async the rest of the time for questions that cannot wait.'
            },
            {
                step: 'Monthly review',
                description:
                    'A written summary of what shipped and a reset of priorities. The retainer is month to month; it continues because it is working.'
            }
        ],
        caseStudies: ['sprocket', 'craynetworks-rebrand'],
        faq: [
            {
                question: 'How many days per week?',
                answer:
                    'Typically one to three, fixed so your team can plan around them. We set the number on the scope call and can adjust it monthly.'
            },
            {
                question: 'How is this different from hiring a contractor?',
                answer:
                    'A contractor takes tickets. This is embedded ownership of a lane (design systems, frontend quality, AI adoption) including the judgment calls, the reviews, and the parts nobody wrote a ticket for.'
            },
            {
                question: 'What do you need access to?',
                answer:
                    'The repo, the design files, and your Slack. I work in your accounts and your tools, so everything stays yours if we stop.'
            },
            {
                question: 'What are the terms?',
                answer:
                    'Month to month with a monthly review. No long lock-in: the arrangement continues because it is obviously worth it, not because a contract says so.'
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
