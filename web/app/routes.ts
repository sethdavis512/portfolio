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
        route('ai-maniacs', 'routes/ai-maniacs.tsx'),
        route('blog', 'routes/blog.tsx'),
        route('blog/:slug', 'routes/blog-detail.tsx'),
        route('custom-file-generator', 'routes/custom-file-generator.tsx'),
        route('freelance', 'routes/freelance.tsx'),
        route('generative-ui', 'routes/generative-ui.tsx'),
        route('iridium', 'routes/iridium.tsx'),
        route('obsidian-mcp-server', 'routes/obsidian-mcp-server.tsx'),
        route('prompt-bucket', 'routes/prompt-bucket.tsx'),
        route('prompts', 'routes/prompts.tsx'),
        route('prompts/:slug', 'routes/prompt-detail.tsx'),
        route('rapidalle', 'routes/rapidalle.tsx'),
        route('resume', 'routes/resume.tsx'),
        route('rr7-slides', 'routes/rr7-slides.tsx'),
        route('rr7-tuner', 'routes/rr7-tuner.tsx'),
        route('setup', 'routes/setup.tsx'),
        route('tech-with-seth', 'routes/tech-with-seth.tsx'),
        route('truck', 'routes/truck.tsx'),
        route('tws-cms', 'routes/tws-cms.tsx'),
        route('tws-starter', 'routes/tws-starter.tsx'),
        route('work', 'routes/work.tsx')
    ])
] satisfies RouteConfig;
