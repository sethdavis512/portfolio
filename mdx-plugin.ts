import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import type { Plugin } from 'vite';

// @mdx-js/rollup strips the query before its own include/exclude check, so it
// would compile `?raw` imports as MDX too. Vite's hook filter sees the full id,
// so `?raw` MDX imports keep their file text in every config that uses this.
export function mdxPlugin(): Plugin {
    const plugin = mdx({
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm]
    });

    return {
        ...plugin,
        enforce: 'pre',
        transform: {
            filter: { id: { exclude: /[?&]raw\b/ } },
            handler: plugin.transform
        }
    };
}
