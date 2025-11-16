import type { Config } from '@react-router/dev/config';

export default {
    ssr: true,
    async prerender() {
        return [
            '/',
            // Projects
            '/ai-maniacs',
            '/custom-file-generator',
            '/generative-ui',
            '/obsidian-mcp-server',
            '/prompt-bucket',
            '/rapidalle',
            '/resume',
            '/rr7-slides',
            '/rr7-slides',
            '/rr7-tuner',
            '/tech-with-seth',
            '/tws-cms',
            '/tws-starter',
            '/work',
            // Pages
            '/about',
            '/blog',
            '/resume',
            '/setup',
            '/truck'
        ];
    }
} satisfies Config;
