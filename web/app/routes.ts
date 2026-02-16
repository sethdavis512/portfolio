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
        route('work/:slug', 'routes/work-detail.tsx')
    ]),
    // SEO: XML Sitemap (resource route, no wrapper needed)
    route('sitemap.xml', 'routes/sitemap.xml.tsx')
] satisfies RouteConfig;
