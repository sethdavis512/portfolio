import { describe, expect, it } from 'vitest';
import {
    byDeckOrder,
    bySortOrder,
    createCollection,
    deckPaths,
    slugFromPath,
    type CollectionItem
} from './collection';

type Fm = { title: string; sortOrder: number; status?: 'PUBLISHED' | 'DRAFT' };

function item(slug: string, sortOrder: number, status?: Fm['status']): CollectionItem<Fm, null> {
    return { slug, frontmatter: { title: slug, sortOrder, status }, body: null };
}

const items = [item('c', 3), item('a', 1), item('draft', 0, 'DRAFT'), item('b', 2, 'PUBLISHED')];

function build(includeDrafts = false) {
    return createCollection(items, {
        basePath: '/work',
        compare: bySortOrder,
        moved: { old: '/work/a' },
        includeDrafts
    });
}

describe('createCollection', () => {
    it('lists published items in order and leaves drafts out', () => {
        expect(build().published().map((i) => i.slug)).toEqual(['a', 'b', 'c']);
        expect(build(true).published().map((i) => i.slug)).toEqual(['a', 'b', 'c']);
    });

    it('builds paths for published items only', () => {
        expect(build().paths()).toEqual(['/work/a', '/work/b', '/work/c']);
    });

    it('finds an item with its next item and position, wrapping around', () => {
        const lookup = build().bySlug('c');
        expect(lookup.kind).toBe('found');
        if (lookup.kind !== 'found') return;
        expect(lookup.next?.slug).toBe('a');
        expect(lookup.position).toEqual({ index: 3, total: 3 });
    });

    it('reports moved slugs before looking anything up', () => {
        expect(build().bySlug('old')).toEqual({ kind: 'moved', to: '/work/a' });
    });

    it('hides drafts unless drafts are included', () => {
        expect(build().bySlug('draft')).toEqual({ kind: 'missing' });
        const lookup = build(true).bySlug('draft');
        expect(lookup).toMatchObject({ kind: 'found', next: null, position: null });
    });

    it('reports unknown slugs as missing', () => {
        expect(build().bySlug('nope')).toEqual({ kind: 'missing' });
    });

    it('has no next item when only one is published', () => {
        const single = createCollection([item('solo', 1)], {
            basePath: '/work',
            compare: bySortOrder,
            includeDrafts: false
        });
        expect(single.bySlug('solo')).toMatchObject({ kind: 'found', next: null });
    });
});

describe('deckPaths', () => {
    it('lists each published deck and its slides', () => {
        const decks = createCollection(
            [
                { slug: 'b', frontmatter: { title: 'B', order: 2 }, body: ['intro'] },
                { slug: 'a', frontmatter: { title: 'A', order: 1 }, body: ['one', 'two'] },
                { slug: 'x', frontmatter: { title: 'X', status: 'DRAFT' as const }, body: ['hidden'] }
            ],
            { basePath: '/slides', compare: byDeckOrder, includeDrafts: false }
        );
        expect(deckPaths(decks, (deck) => deck.body)).toEqual([
            '/slides/a',
            '/slides/b',
            '/slides/a/one',
            '/slides/a/two',
            '/slides/b/intro'
        ]);
    });
});

describe('slugFromPath', () => {
    it('takes the filename without the extension', () => {
        expect(slugFromPath('./work/fresh-visit.mdx')).toBe('fresh-visit');
        expect(slugFromPath('./slides/bun-cli/deck.json')).toBe('deck.json');
    });
});
