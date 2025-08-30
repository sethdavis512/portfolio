import type { Config } from '@react-router/dev/config';

export default {
    ssr: true,
    async prerender() {
        return [
            '/',
            '/about',
            '/ai-maniacs',
            '/blog',
            '/generative-ui',
            '/obsidian-mcp-server',
            '/resume',
            '/rr7-slides',
            '/schedule',
            '/setup',
            '/truck',
            '/work'
        ];
    }
} satisfies Config;
