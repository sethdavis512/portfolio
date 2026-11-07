import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { defineConfig } from 'vitest/config';

const mdxPlugin = mdx({
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm]
});

// Separate from vite.config.ts so tests don't boot the React Router and Hono plugins.
export default defineConfig({
    resolve: {
        tsconfigPaths: true
    },
    plugins: [
        {
            ...mdxPlugin,
            enforce: 'pre',
            // @mdx-js/rollup drops the query and would compile `?raw` imports
            // too; prerender-paths.ts reads raw MDX the way react-router.config.ts does.
            transform(code, id) {
                if (id.includes('?raw')) return;
                return mdxPlugin.transform.call(this, code, id);
            }
        }
    ],
    test: {
        include: ['app/**/*.test.ts'],
        // The cached transform of a module keeps its import.meta.glob expansion,
        // so a newly added content file stays invisible to works.ts and friends.
        fsModuleCache: false
    }
});
