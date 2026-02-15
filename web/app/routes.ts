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
        route('aws-flashcards', 'routes/aws-flashcards.tsx'),
        // route('blog', 'routes/blog.tsx'),
        // route('blog/:slug', 'routes/blog-detail.tsx'),
        // route(
        //     'claude-desktop-for-real-estate-agents',
        //     'routes/claude-desktop-for-real-estate-agents.tsx'
        // ),
        // route(
        //     'claude-desktop-for-insurance-agents',
        //     'routes/claude-desktop-for-insurance-agents.tsx'
        // ),
        route('freelance', 'routes/freelance.tsx'),
        route('iridium', 'routes/iridium.tsx'),
        route('obsidian-mcp-server', 'routes/obsidian-mcp-server.tsx'),
        route('prompt-suite', 'routes/prompt-suite.tsx'),
        route('products', 'routes/products.tsx'),
        route('prompts', 'routes/prompts.tsx'),
        route('prompts/:slug', 'routes/prompt-detail.tsx'),
        route('resume', 'routes/resume.tsx'),
        route('rr7-slides', 'routes/rr7-slides.tsx'),
        route('setup', 'routes/setup.tsx'),
        route('tech-with-seth', 'routes/tech-with-seth.tsx'),
        route('thank-you', 'routes/thank-you.tsx'),
        route('tray-app-guide', 'routes/tray-app-guide.tsx'),
        route('truck', 'routes/truck.tsx'),
        route('video-machine', 'routes/video-machine.tsx'),
        route('virtruv', 'routes/virtruv.tsx'),
        route('ai-image-pipeline', 'routes/ai-image-pipeline.tsx'),
        route('work', 'routes/work.tsx')
    ]),
    // SEO: XML Sitemap (resource route, no wrapper needed)
    route('sitemap.xml', 'routes/sitemap.xml.tsx')
] satisfies RouteConfig;
