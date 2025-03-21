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
        route('hack', 'routes/hack.tsx'),
        route('meet', 'routes/meet.tsx'),
        route('resume', 'routes/resume.tsx'),
        route('setup', 'routes/setup.tsx'),
        route('socialize', 'routes/socialize.tsx'),
        route('truck', 'routes/truck.tsx')
    ])
] satisfies RouteConfig;
