import type { Config } from '@react-router/dev/config';
import { contentPaths } from './app/content/prerender-paths';

export default {
    ssr: true,
    async prerender() {
        const staticPaths = [
            '/',
            '/about',
            '/contact',
            '/design-technologist',
            '/resume',
            '/setup',
            '/slides',
            '/thank-you',
            '/truck',
            '/work',
            '/writing',
            '/til',
            '/sitemap.xml'
        ];

        return [...staticPaths, ...contentPaths()];
    }
} satisfies Config;
