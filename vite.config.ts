import mdx from '@mdx-js/rollup';
import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import serverAdapter from 'hono-react-router-adapter/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [
        tailwindcss(),
        mdx({
            remarkPlugins: [
                remarkFrontmatter,
                remarkMdxFrontmatter,
                remarkGfm
            ]
        }),
        reactRouter(),
        serverAdapter({ entry: './server/index.ts' }),
        tsconfigPaths()
    ],
});
