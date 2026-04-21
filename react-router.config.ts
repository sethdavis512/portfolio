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

        return [
            ...staticPaths,
            ...workSlugs.map((s) => `/work/${s}`),
            ...tilSlugs.map((s) => `/til/${s}`),
            ...serviceSlugs.map((s) => `/services/${s}`)
        ];
    }
} satisfies Config;
