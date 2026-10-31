import type { Route } from './+types/sitemap.xml';
import { decks, tils, works } from '~/content';

interface SitemapRoute {
    url: string;
    changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
    priority: number;
}

export function loader({ request }: Route.LoaderArgs) {
    const staticRoutes: SitemapRoute[] = [
        { url: '/', changefreq: 'weekly', priority: 1.0 },
        { url: '/about', changefreq: 'monthly', priority: 0.8 },
        { url: '/work', changefreq: 'weekly', priority: 0.9 },
        { url: '/resume', changefreq: 'monthly', priority: 0.8 },
        { url: '/writing', changefreq: 'weekly', priority: 0.8 },
        { url: '/til', changefreq: 'weekly', priority: 0.8 },
        { url: '/design-technologist', changefreq: 'monthly', priority: 0.8 },
        { url: '/truck', changefreq: 'yearly', priority: 0.4 },
        { url: '/setup', changefreq: 'yearly', priority: 0.5 },
        { url: '/contact', changefreq: 'yearly', priority: 0.6 },
        { url: '/slides', changefreq: 'monthly', priority: 0.6 }
    ];

    function contentRoute(changefreq: SitemapRoute['changefreq'], priority: number) {
        return function (url: string): SitemapRoute {
            return { url, changefreq, priority };
        };
    }

    const allRoutes = [
        ...staticRoutes,
        ...works.paths().map(contentRoute('monthly', 0.9)),
        ...tils.paths().map(contentRoute('monthly', 0.7)),
        ...decks.paths().map(contentRoute('monthly', 0.5))
    ];

    // Generate XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
    .map(
        (route) => `  <url>
    <loc>https://sethdavis.tech${route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('\n')}
</urlset>`;

    return new Response(sitemap, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600'
        }
    });
}
