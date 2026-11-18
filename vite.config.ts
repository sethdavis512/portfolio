import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import serverAdapter from 'hono-react-router-adapter/vite';
import { defaultOptions } from '@hono/vite-dev-server';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import { createRequire } from 'node:module';
import path from 'node:path';
import { mdxPlugin } from './mdx-plugin';

// In a git worktree, node_modules resolves into the main checkout, which sits
// outside Vite's default fs sandbox and 403s the client entry (breaking
// hydration). Allow the directory dependencies actually resolve from.
const require = createRequire(import.meta.url);
const sharedNodeModules = path.resolve(
    path.dirname(require.resolve('@react-router/dev/package.json')),
    '../..'
);

export default defineConfig({
    resolve: {
        tsconfigPaths: true
    },
    server: {
        fs: {
            allow: [searchForWorkspaceRoot(process.cwd()), sharedNodeModules]
        }
    },
    plugins: [
        tailwindcss(),
        mdxPlugin(),
        reactRouter(),
        serverAdapter({
            entry: './server/index.ts',
            exclude: [
                ...defaultOptions.exclude,
                /.*\.mdx$/,
                '/assets/**',
                '/app/**',
                /\?(?:inline|url|no-inline|raw|import(?:&(?:inline|url|no-inline|raw)?)?)$/
            ]
        })
    ],
});
