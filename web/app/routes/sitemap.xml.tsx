import type { Route } from './+types/sitemap.xml';
import {
    GetPromptsListDocument,
    type GetPromptsListQuery
} from '~/generated/graphql';
import { client } from '~/utils/graphql.server';

interface SitemapRoute {
    url: string;
    changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
    priority: number;
}

export async function loader({ request }: Route.LoaderArgs) {
    // Fetch dynamic prompt routes
    const { prompts } = await client.request<GetPromptsListQuery>(
        GetPromptsListDocument
    );

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

        // Product pages
        { url: '/iridium', changefreq: 'monthly', priority: 0.9 },
        { url: '/prompt-suite', changefreq: 'monthly', priority: 0.9 },
        { url: '/video-machine', changefreq: 'monthly', priority: 0.9 },
        { url: '/rapidalle', changefreq: 'monthly', priority: 0.9 },
        { url: '/obsidian-mcp-server', changefreq: 'monthly', priority: 0.9 },
        { url: '/custom-file-generator', changefreq: 'monthly', priority: 0.9 },
        { url: '/rr7-slides', changefreq: 'monthly', priority: 0.9 },

        // Project pages
        { url: '/ai-maniacs', changefreq: 'monthly', priority: 0.8 },
        { url: '/tech-with-seth', changefreq: 'monthly', priority: 0.8 },
        { url: '/truck', changefreq: 'monthly', priority: 0.8 },
        { url: '/virtruv', changefreq: 'monthly', priority: 0.8 },

        // Guide pages
        {
            url: '/claude-desktop-for-real-estate-agents',
            changefreq: 'monthly',
            priority: 0.8
        },
        {
            url: '/claude-desktop-for-insurance-agents',
            changefreq: 'monthly',
            priority: 0.8
        },
        { url: '/tray-app-guide', changefreq: 'monthly', priority: 0.8 },

        // Utility pages
        { url: '/prompts', changefreq: 'weekly', priority: 0.8 },
        { url: '/setup', changefreq: 'yearly', priority: 0.5 },
        { url: '/thank-you', changefreq: 'yearly', priority: 0.3 }
    ];

    // Add dynamic prompt routes
    const dynamicRoutes: SitemapRoute[] =
        prompts?.map((prompt) => ({
            url: `/prompts/${prompt.slug}`,
            changefreq: 'monthly' as const,
            priority: 0.7
        })) || [];

    // Combine all routes
    const allRoutes = [...staticRoutes, ...dynamicRoutes];

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
