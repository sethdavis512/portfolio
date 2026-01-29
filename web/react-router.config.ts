import type { Config } from '@react-router/dev/config';

export default {
    ssr: true,
    async prerender() {
        return [
            '/',
            // Projects
            '/ai-maniacs',
            '/claude-desktop-for-real-estate-agents',
            '/claude-desktop-for-insurance-agents',
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
            '/virtruv',
            '/work',
            // Pages
            '/about',
            '/blog',
            '/products',
            '/resume',
            '/setup',
            '/truck'
        ];
    }
} satisfies Config;
