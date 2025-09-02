import type { Config } from '@react-router/dev/config';

export default {
    ssr: true,
    async prerender() {
        return [
            '/',
            // Projects
            '/work',
            '/generative-ui',
            '/obsidian-mcp-server',
            '/resume',
            '/rr7-slides',
            '/ai-maniacs',
            // Pages
            '/about',
            '/blog',
            '/schedule',
            '/setup',
            '/truck'
        ];
    }
} satisfies Config;
