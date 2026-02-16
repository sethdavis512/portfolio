import {
    type RouteConfig,
    index,
    layout,
    route
} from '@react-router/dev/routes';

export default [
    layout('routes/wrapper.tsx', [
        index('routes/home.tsx'),
        route('about', 'routes/about.tsx'),
        // route('blog', 'routes/blog.tsx'),
        // route('blog/:slug', 'routes/blog-detail.tsx'),
        route('freelance', 'routes/freelance.tsx'),
        route('products', 'routes/products.tsx'),
        route('prompts', 'routes/prompts.tsx'),
        route('prompts/:slug', 'routes/prompt-detail.tsx'),
        route('resume', 'routes/resume.tsx'),
        route('setup', 'routes/setup.tsx'),
        route('thank-you', 'routes/thank-you.tsx'),
        route('truck', 'routes/truck.tsx'),
        route('work', 'routes/work.tsx'),
        route('work/:slug', 'routes/work-detail.tsx'),

        // Redirects from old flat URLs to /work/:slug
        route('iridium', 'routes/work-redirects.tsx', {
            id: 'redirect-iridium'
        }),
        route('ai-image-pipeline', 'routes/work-redirects.tsx', {
            id: 'redirect-ai-image-pipeline'
        }),
        route('virtruv', 'routes/work-redirects.tsx', {
            id: 'redirect-virtruv'
        }),
        route('prompt-suite', 'routes/work-redirects.tsx', {
            id: 'redirect-prompt-suite'
        }),
        route('aws-flashcards', 'routes/work-redirects.tsx', {
            id: 'redirect-aws-flashcards'
        }),
        route('video-machine', 'routes/work-redirects.tsx', {
            id: 'redirect-video-machine'
        }),
        route('rr7-slides', 'routes/work-redirects.tsx', {
            id: 'redirect-rr7-slides'
        }),
        route('obsidian-mcp-server', 'routes/work-redirects.tsx', {
            id: 'redirect-obsidian-mcp-server'
        }),
        route('tech-with-seth', 'routes/work-redirects.tsx', {
            id: 'redirect-tech-with-seth'
        }),
        route('tray-app-guide', 'routes/work-redirects.tsx', {
            id: 'redirect-tray-app-guide'
        }),
        route(
            'claude-desktop-for-real-estate-agents',
            'routes/work-redirects.tsx',
            { id: 'redirect-claude-real-estate' }
        ),
        route(
            'claude-desktop-for-insurance-agents',
            'routes/work-redirects.tsx',
            { id: 'redirect-claude-insurance' }
        )
    ]),
    // SEO: XML Sitemap (resource route, no wrapper needed)
    route('sitemap.xml', 'routes/sitemap.xml.tsx')
] satisfies RouteConfig;
