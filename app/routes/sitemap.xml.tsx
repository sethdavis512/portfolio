import type { Route } from './+types/sitemap.xml';
import { getAllWorkSlugs, getAllTilSlugs } from '~/content';

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
        { url: '/services', changefreq: 'monthly', priority: 0.8 },
        { url: '/til', changefreq: 'weekly', priority: 0.8 },
        { url: '/design-technologist', changefreq: 'monthly', priority: 0.8 },
        { url: '/truck', changefreq: 'yearly', priority: 0.4 },
        { url: '/setup', changefreq: 'yearly', priority: 0.5 },
        { url: '/thank-you', changefreq: 'yearly', priority: 0.3 }
    ];

    const workRoutes: SitemapRoute[] = getAllWorkSlugs().map((slug) => ({
        url: `/work/${slug}`,
        changefreq: 'monthly' as const,
        priority: 0.9
    }));

    const tilRoutes: SitemapRoute[] = getAllTilSlugs().map((slug) => ({
        url: `/til/${slug}`,
        changefreq: 'monthly' as const,
        priority: 0.7
    }));

    const allRoutes = [...staticRoutes, ...workRoutes, ...tilRoutes];

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
