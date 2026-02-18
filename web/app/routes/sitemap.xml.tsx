import type { Route } from './+types/sitemap.xml';
import {
    GetPromptsListDocument,
    type GetPromptsListQuery,
    GetWorkSlugsDocument,
    type GetWorkSlugsQuery
} from '~/generated/graphql';
import { client } from '~/utils/graphql.server';

interface SitemapRoute {
    url: string;
    changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
    priority: number;
}

export async function loader({ request }: Route.LoaderArgs) {
    // Fetch dynamic routes in parallel
    const [promptsResult, worksResult] = await Promise.all([
        client.request<GetPromptsListQuery>(GetPromptsListDocument),
        client.request<GetWorkSlugsQuery>(GetWorkSlugsDocument)
    ]);

    // Define static routes
    const staticRoutes: SitemapRoute[] = [
        // Homepage
        { url: '/', changefreq: 'weekly', priority: 1.0 },

        // Main pages
        { url: '/about', changefreq: 'monthly', priority: 0.8 },
        { url: '/work', changefreq: 'weekly', priority: 0.9 },
        { url: '/resume', changefreq: 'monthly', priority: 0.8 },
        { url: '/products', changefreq: 'monthly', priority: 0.9 },
        { url: '/freelance', changefreq: 'monthly', priority: 0.8 },
        { url: '/services', changefreq: 'monthly', priority: 0.8 },

        // Utility pages
        { url: '/prompts', changefreq: 'weekly', priority: 0.8 },
        { url: '/setup', changefreq: 'yearly', priority: 0.5 },
        { url: '/thank-you', changefreq: 'yearly', priority: 0.3 }
    ];

    // Add dynamic work routes
    const workRoutes: SitemapRoute[] =
        worksResult.works?.map(function (work) {
            return {
                url: `/work/${work.slug}`,
                changefreq: 'monthly' as const,
                priority: 0.9
            };
        }) || [];

    // Add dynamic prompt routes
    const dynamicRoutes: SitemapRoute[] =
        promptsResult.prompts?.map((prompt) => ({
            url: `/prompts/${prompt.slug}`,
            changefreq: 'monthly' as const,
            priority: 0.7
        })) || [];

    // Combine all routes
    const allRoutes = [...staticRoutes, ...workRoutes, ...dynamicRoutes];

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
