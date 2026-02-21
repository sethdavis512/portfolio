import type { Config } from '@react-router/dev/config';

export default {
    ssr: true,
    async prerender() {
        const staticPaths = [
            '/',
            '/about',
            '/products',
            '/resume',
            '/setup',
            '/truck',
            '/work',
            '/til',
            '/sitemap.xml'
        ];

        try {
            const endpoint =
                process.env.GRAPHQL_ENDPOINT ||
                'https://admin.sethdavis.tech/api/graphql';

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: `query { works(where: { status: { equals: "PUBLISHED" } }) { slug } }`
                })
            });

            const json = await response.json();
            const workPaths = (json.data?.works || []).map(
                (w: { slug: string }) => `/work/${w.slug}`
            );

            const tilResponse = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: `query { posts(where: { status: { equals: "PUBLISHED" }, type: { equals: "TIL" } }) { slug } }`
                })
            });
            const tilJson = await tilResponse.json();
            const tilPaths = (tilJson.data?.posts || []).map(
                (p: { slug: string }) => `/til/${p.slug}`
            );

            return [...staticPaths, ...workPaths, ...tilPaths];
        } catch {
            return staticPaths;
        }
    }
} satisfies Config;
