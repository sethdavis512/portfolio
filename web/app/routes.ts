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
        route('work', 'routes/work.tsx'),
        route('hack', 'routes/hack.tsx'),
        route('meet', 'routes/meet.tsx'),
        route('resume', 'routes/resume.tsx'),
        route('setup', 'routes/setup.tsx'),
        route('socialize', 'routes/socialize.tsx'),
        route('truck', 'routes/truck.tsx'),
        route('blog', 'routes/blog.tsx'),
        route('blog/:slug', 'routes/blog-detail.tsx'),
        route('prompts', 'routes/prompts.tsx'),
        route('prompts/:slug', 'routes/prompt-detail.tsx'),
        ...prefix('projects', [
            route('tws-starter', 'routes/tws-starter.tsx'),
            route('tws-cms', 'routes/tws-cms.tsx')
        ])
    ])
] satisfies RouteConfig;
