import {
    type RouteConfig,
    index,
    layout,
    prefix,
    route
} from '@react-router/dev/routes';

export default [
    index('routes/home.tsx'),
    layout('routes/wrapper.tsx', [
        route('about', 'routes/about.tsx'),
        route('ai-maniacs', 'routes/ai-maniacs.tsx'),
        route('blog', 'routes/blog.tsx'),
        route('blog/:slug', 'routes/blog-detail.tsx'),
        route('generative-ui', 'routes/generative-ui.tsx'),
        route('hack', 'routes/hack.tsx'),
        route('obsidian-mcp-server', 'routes/obsidian-mcp-server.tsx'),
        route('prompt-bucket', 'routes/prompt-bucket.tsx'),
        route('rr7-slides', 'routes/rr7-slides.tsx'),
        route('prompts', 'routes/prompts.tsx'),
        route('prompts/:slug', 'routes/prompt-detail.tsx'),
        route('resume', 'routes/resume.tsx'),
        route('setup', 'routes/setup.tsx'),
        route('socialize', 'routes/socialize.tsx'),
        route('truck', 'routes/truck.tsx'),
        route('work', 'routes/work.tsx'),
        ...prefix('projects', [
            route('tws-starter', 'routes/tws-starter.tsx'),
            route('tws-cms', 'routes/tws-cms.tsx')
        ])
    ])
] satisfies RouteConfig;
