import {
    type RouteConfig,
    index,
    layout,
    prefix,
    route
} from '@react-router/dev/routes';

export default [
    layout('routes/wrapper.tsx', [
        index('routes/home.tsx'),
        route('about', 'routes/about.tsx'),
        route('hack', 'routes/hack.tsx'),
        route('meet', 'routes/meet.tsx'),
        route('resume', 'routes/resume.tsx'),
        route('setup', 'routes/setup.tsx'),
        route('socialize', 'routes/socialize.tsx'),
        route('truck', 'routes/truck.tsx'),
        route('blog', 'routes/blog.tsx'),
        route('blog/:slug', 'routes/blog-detail.tsx'),
        ...prefix('projects', [
            route('tws-starter', 'routes/tws-starter.tsx'),
            route('tws-cms', 'routes/tws-cms.tsx')
        ])
    ])
] satisfies RouteConfig;
