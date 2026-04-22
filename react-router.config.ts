import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import type { Config } from '@react-router/dev/config';
import { getAllServiceSlugs } from './app/content/data/service-offers';

export default {
    ssr: true,
    async prerender() {
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

        const serviceSlugs = getAllServiceSlugs();

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
            ...serviceSlugs.map((s) => `/services/${s}`),
            ...deckPaths,
            ...slidePaths
        ];
    }
} satisfies Config;
