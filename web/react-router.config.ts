import type { Config } from '@react-router/dev/config';

export default {
    ssr: true,
    async prerender() {
        return [
            '/',
            '/about',
            '/obsidian-mcp-server',
            '/products',
            '/resume',
            '/resume',
            '/rr7-slides',
            '/setup',
            '/tech-with-seth',
            '/truck',
            '/virtruv',
            '/work',
            '/ai-image-pipeline',
            '/sitemap.xml'
        ];
    }
} satisfies Config;
