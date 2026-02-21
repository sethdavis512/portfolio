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
        route('freelance', 'routes/freelance.tsx'),
        route('services', 'routes/services.tsx'),
        route('products', 'routes/products.tsx'),
        route('til', 'routes/til.tsx'),
        route('til/:slug', 'routes/til-detail.tsx'),
        route('resume', 'routes/resume.tsx'),
        route('setup', 'routes/setup.tsx'),
        route('thank-you', 'routes/thank-you.tsx'),
        route('truck', 'routes/truck.tsx'),
        route('work', 'routes/work.tsx'),
        route('work/:slug', 'routes/work-detail.tsx'),
        route('*', 'routes/not-found.tsx')
    ]),
    route('sitemap.xml', 'routes/sitemap.xml.tsx')
] satisfies RouteConfig;
