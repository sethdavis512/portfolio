import { parse } from 'yaml';
import {
    byDeckOrder,
    byNewest,
    bySortOrder,
    createCollection,
    deckPaths,
    slugFromPath,
    type CollectionFrontmatter,
    type CollectionItem
} from './collection';
import type { DeckMeta, TilFrontmatter, WorkFrontmatter } from './types';

// react-router.config.ts runs in a Vite context with no plugins, so MDX
// modules can't be imported here. Read the raw files and parse only the
// frontmatter, then hand them to the same collection rules the app uses.

const rawWork = import.meta.glob<string>('./work/*.mdx', {
    eager: true,
    query: '?raw',
    import: 'default'
});
const rawTil = import.meta.glob<string>('./til/*.mdx', {
    eager: true,
    query: '?raw',
    import: 'default'
});
const deckMeta = import.meta.glob<DeckMeta>('./slides/*/deck.json', {
    eager: true,
    import: 'default'
});
// Not eager: only the file paths are needed, never the modules.
const slideFiles = Object.keys(import.meta.glob('./slides/*/*.mdx'));

function readFrontmatter<F>(source: string): F {
    const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    return (match ? parse(match[1]) : {}) as F;
}

function rawItems<F extends CollectionFrontmatter>(
    files: Record<string, string>
): CollectionItem<F, null>[] {
    return Object.entries(files).map(([path, source]) => ({
        slug: slugFromPath(path),
        frontmatter: readFrontmatter<F>(source),
        body: null
    }));
}

function deckItems(): CollectionItem<DeckMeta, string[]>[] {
    const slideIdsByDeck = new Map<string, string[]>();
    for (const path of slideFiles) {
        const [, deckSlug, file] = path.split('/').slice(-3);
        const ids = slideIdsByDeck.get(deckSlug) ?? [];
        ids.push(slugFromPath(file));
        slideIdsByDeck.set(deckSlug, ids);
    }
    const metaByDeck = new Map(
        Object.entries(deckMeta).map(([path, meta]) => [
            path.split('/').at(-2)!,
            meta
        ])
    );
    return Array.from(slideIdsByDeck, ([slug, ids]) => ({
        slug,
        frontmatter: { title: slug, ...metaByDeck.get(slug) },
        body: ids
    }));
}

/** Every published content URL: work, TIL, decks and their slides. */
export function contentPaths(): string[] {
    const works = createCollection(rawItems<WorkFrontmatter>(rawWork), {
        basePath: '/work',
        compare: bySortOrder,
        includeDrafts: false
    });
    const tils = createCollection(rawItems<TilFrontmatter>(rawTil), {
        basePath: '/til',
        compare: byNewest,
        includeDrafts: false
    });
    const decks = createCollection(deckItems(), {
        basePath: '/slides',
        compare: byDeckOrder,
        includeDrafts: false
    });
    return [
        ...works.paths(),
        ...tils.paths(),
        ...deckPaths(decks, (deck) => deck.body)
    ];
}
