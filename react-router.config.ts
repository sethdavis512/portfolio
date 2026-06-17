import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import type { Config } from '@react-router/dev/config';

export default {
    ssr: true,
    async prerender() {
        // NOTE: Do not prerender routes that export an `action` (currently
        // /contact and /services/:slug). A prerendered route emits a static
        // `<path>.data` file that shadows the server action, so form POSTs
        // never run the action and the client throws a route error. Those
        // routes are server-rendered on demand instead (ssr: true).
        const staticPaths = [
            '/',
            '/about',
            '/design-technologist',
            '/resume',
            '/services',
            '/setup',
            '/slides',
            '/thank-you',
            '/truck',
            '/work',
            '/til',
            '/sitemap.xml'
        ];

        const contentDir = resolve(import.meta.dirname, 'app/content');

        const workSlugs = readdirSync(resolve(contentDir, 'work'))
            .filter((f) => f.endsWith('.mdx'))
            .map((f) => f.replace('.mdx', ''));

        const tilSlugs = readdirSync(resolve(contentDir, 'til'))
            .filter((f) => f.endsWith('.mdx'))
            .map((f) => f.replace('.mdx', ''));

        const slidesDir = resolve(contentDir, 'slides');
        const deckPaths: string[] = [];
        const slidePaths: string[] = [];
        for (const entry of readdirSync(slidesDir, { withFileTypes: true })) {
            if (!entry.isDirectory()) continue;
            const deckSlug = entry.name;
            const slideIds = readdirSync(resolve(slidesDir, deckSlug))
                .filter((f) => f.endsWith('.mdx'))
                .map((f) => f.replace('.mdx', ''));
            if (slideIds.length === 0) continue;
            deckPaths.push(`/slides/${deckSlug}`);
            for (const id of slideIds) {
                slidePaths.push(`/slides/${deckSlug}/${id}`);
            }
        }

        return [
            ...staticPaths,
            ...workSlugs.map((s) => `/work/${s}`),
            ...tilSlugs.map((s) => `/til/${s}`),
            ...deckPaths,
            ...slidePaths
        ];
    }
} satisfies Config;
