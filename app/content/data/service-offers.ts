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
    /** Work slug whose testimonial renders on this offer page. */
    testimonialWorkSlug?: string;
    faq: ServiceFaq[];
}

/**
 * Old offer slugs that should permanently redirect.
 * 2026-05: cli-tools and contentful-sites retired.
 * 2026-09: collapsed to a single headless CMS frontend offer. CMS-shaped slugs
 * point at the new offer; embedded engineering slugs point at the explainer.
 */
export const LEGACY_SERVICE_REDIRECTS: Record<string, string> = {
    'cli-tools': '/design-technologist',
    'contentful-sites': '/services/headless-cms-frontends',
    'marketing-sites': '/services/headless-cms-frontends',
    'design-systems': '/design-technologist',
    'ai-prototyping': '/design-technologist',
    'fractional-design-technologist': '/design-technologist'
};

export const serviceOffers: ServiceOffer[] = [
    {
        slug: 'headless-cms-frontends',
        title: 'Contentful and Sanity frontends your editors and engineers both trust',
        shortTitle: 'Headless CMS frontends',
        kind: 'project',
        tagline:
            'Your editors keep Contentful or Sanity. I build the frontend on top of it: live preview they will actually use, and a typed, server-rendered codebase your engineers can extend. Your team owns the content model. I own the code that renders it.',
        seoDescription:
            'Contentful and Sanity frontend development by Seth Davis: typed queries, live preview, server rendering, and clean deploys. Book a free scope call.',
        proofLine:
            'Nine years of frontend engineering, a headless-CMS-backed site I built and later migrated off, and client sites whose owners publish their own content without calling a developer.',
        idealFor: [
            'Teams leaving their current CMS for Contentful or Sanity who need the frontend built alongside the move',
            'Teams who already have a space and a filled-in content model, but nothing rendering it',
            'Marketing teams whose copy changes sit in an engineering backlog two weeks at a time',
            'Companies moving off WordPress or Webflow who want a frontend their engineers will actually maintain'
        ],
        deliverables: [
            'A frontend rendering your Contentful or Sanity content, server-rendered and typed end to end',
            'Typed content queries generated from the schema you already have, so a field rename becomes a compile error instead of a blank page in production',
            'Live preview wired up, so editors see unpublished drafts inside the real site instead of a preview mode that looks nothing like it',
            'Caching, webhook-driven revalidation, and deploys to Railway, Vercel, or Cloudflare in your accounts, with a preview URL on every branch',
            'SEO baseline: server-rendered metadata, Open Graph, canonical URLs, XML sitemap, and a redirect map when you are migrating',
            'A clear scope line: I build against the content model your team owns. If a field shape is fighting the frontend I will tell you exactly why, then build whatever you decide.'
        ],
        scopeExamples: [
            {
                name: 'CMS switch, frontend included',
                description:
                    'You are moving to Contentful or Sanity. Your team defines the content model in the new space; I build the site that renders it, plus the redirect map so your URLs and your rankings survive the move.'
            },
            {
                name: 'A space with no site',
                description:
                    'The content model is done and the space is full. What is missing is the frontend. I build it against your existing types, wire live preview, and hand back a repo your engineers can extend without archaeology.'
            },
            {
                name: 'Page builder escape',
                description:
                    'WordPress or Webflow to headless. Content gets migrated into Contentful or Sanity, the frontend gets rebuilt, and every old URL redirects to its new home.'
            }
        ],
        process: [
            {
                step: 'Scope call (free)',
                description:
                    '30 minutes. We look at your space, your content model, and your deadline, and I tell you straight whether this is a fit. You leave with a written scope either way.'
            },
            {
                step: 'Schema walkthrough',
                description:
                    'Your team walks me through the content types you have already defined. I generate types from them and come back with a query plan plus a list of anything that will be awkward to render, before any code gets written.'
            },
            {
                step: 'Build with previews',
                description:
                    'The frontend comes together in preview deploys you can click through. Editors get live preview early, so they pressure-test publishing while there is still time to change things.'
            },
            {
                step: 'Launch and handoff',
                description:
                    'DNS, redirects, webhooks, analytics, and a walkthrough for both sides: editors on preview and publish, engineers on the repo.'
            }
        ],
        caseStudies: [],
        testimonialWorkSlug: 'virtruv',
        faq: [
            {
                question: 'Do you do content modeling or content strategy?',
                answer:
                    'No, and that is deliberate. Your team knows your content better than I will in six weeks, and content architecture is a different discipline from frontend engineering. I build against the model you own. If a field shape is going to make the frontend worse, I will say so with specifics and let you decide. If you need help designing the model itself, I will point you at people who do that for a living.'
            },
            {
                question: 'Why only Contentful and Sanity?',
                answer:
                    'Depth beats breadth. Those two cover most of the headless market, both have a real preview story, and by building on only two I know their SDKs, their preview quirks, and their gotchas cold instead of relearning a CMS every engagement. If you are on Strapi, Prismic, Storyblok, or Payload, I will say so on the call rather than take the work.'
            },
            {
                question: 'Have you shipped Contentful or Sanity specifically?',
                answer:
                    'Not for a client yet, and I would rather tell you that than dress it up. What I have shipped is the same architecture on a different headless CMS: a Keystone-backed site with GraphQL codegen, typed queries, draft and publish, and rich text rendering, which I ran in production and later migrated off when MDX became the better fit. I know both directions of that move. Contentful and Sanity are the two I have standardized on, and I am building public reference implementations of both.'
            },
            {
                question: 'What framework do you build in?',
                answer:
                    'React Router 7 by default. It gives you server rendering, route-level data loading, and prerendering without the framework tax or the hosting lock-in, it runs on Railway, Vercel, Cloudflare, or a plain Docker container, and the data flow stays typed from your CMS schema down to the component props. If your team already runs Next.js or Astro, I build in that instead. The architecture I care about is the same either way: typed queries, server rendering, real preview. The framework is the part I am flexible on.'
            },
            {
                question: 'What about migrating our existing content?',
                answer:
                    'Migration is part of the build when you need it: scripted extraction from the old system, a mapping into your new content types, and a redirect map so existing URLs and rankings carry over. I have done this end to end, including the unglamorous part where the old rich text does not map cleanly onto the new one. What I do not do is decide what the new content types should be.'
            },
            {
                question: 'How do you use AI in the build?',
                answer:
                    'For speed, not for slop. Agentic tooling accelerates scaffolding, content migration, and testing, which is why I can quote weeks instead of months. Every line of code and copy gets reviewed by me before it ships.'
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
