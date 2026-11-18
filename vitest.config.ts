import { defineConfig } from 'vitest/config';
import { mdxPlugin } from './mdx-plugin';

// Separate from vite.config.ts so tests don't boot the React Router and Hono plugins.
export default defineConfig({
    resolve: {
        tsconfigPaths: true
    },
    plugins: [mdxPlugin()],
    test: {
        include: ['app/**/*.test.ts'],
        // The cached transform of a module keeps its import.meta.glob expansion,
        // so a newly added content file stays invisible to works.ts and friends.
        fsModuleCache: false
    }
});
