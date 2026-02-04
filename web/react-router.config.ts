import type { Config } from '@react-router/dev/config';

export default {
    ssr: true,
    async prerender() {
        return [
            '/',
            '/about',
            '/ai-maniacs',
            '/custom-file-generator',
            '/obsidian-mcp-server',
            '/products',
            '/rapidalle',
            '/resume',
            '/resume',
            '/rr7-slides',
            '/setup',
            '/tech-with-seth',
            '/truck',
            '/tws-cms',
            '/tws-starter',
            '/virtruv',
            '/work',
            '/sitemap.xml'
        ];
    }
} satisfies Config;
