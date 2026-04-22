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
        route('services', 'routes/services.tsx'),
        route('services/:slug', 'routes/service-detail.tsx'),
        route('til', 'routes/til.tsx'),
        route('til/:slug', 'routes/til-detail.tsx'),
        route('resume', 'routes/resume.tsx'),
        route('setup', 'routes/setup.tsx'),
        route('design-technologist', 'routes/design-technologist.tsx'),
        route('thank-you', 'routes/thank-you.tsx'),
        route('truck', 'routes/truck.tsx'),
        route('work', 'routes/work.tsx'),
        route('work/:slug', 'routes/work-detail.tsx'),
        route('slides', 'routes/slides-index.tsx'),
        route('slides/:deckId', 'routes/slides-deck-index.tsx'),
        route('*', 'routes/not-found.tsx')
    ]),
    route('slides/:deckId/:slideId', 'routes/slides-deck-stage.tsx'),
    route('sitemap.xml', 'routes/sitemap.xml.tsx')
] satisfies RouteConfig;
