export type ContentStatus = 'PUBLISHED' | 'DRAFT';

/** What every collection's frontmatter carries. `status` defaults to PUBLISHED when omitted. */
export interface CollectionFrontmatter {
    status?: ContentStatus;
}

export interface CollectionItem<F, C> {
    /** The filename (or folder name), never an authored field. */
    slug: string;
    frontmatter: F;
    body: C;
}

export type CollectionLookup<F, C> =
    | {
          kind: 'found';
          item: CollectionItem<F, C>;
          /** The next published item, wrapping around; null for drafts or a single item. */
          next: CollectionItem<F, C> | null;
          /** 1-based place among published items; null for drafts. */
          position: { index: number; total: number } | null;
      }
    | { kind: 'moved'; to: string }
    | { kind: 'missing' };

export interface Collection<F, C> {
    /** Published items in display order. Drafts never appear here. */
    published(): CollectionItem<F, C>[];
    /** Drafts resolve only when the collection was built with `includeDrafts`. */
    bySlug(slug: string): CollectionLookup<F, C>;
    /** URL paths of every published item, e.g. `/work/fresh-visit`. */
    paths(): string[];
}

export interface CollectionOptions<F> {
    /** URL prefix for `paths()`, e.g. `/work`. */
    basePath: string;
    compare: (a: F, b: F) => number;
    /** Old slugs that redirect elsewhere, so shared links keep working. */
    moved?: Record<string, string>;
    includeDrafts: boolean;
}

/** `./work/fresh-visit.mdx` -> `fresh-visit` */
export function slugFromPath(path: string): string {
    return path.slice(path.lastIndexOf('/') + 1).replace(/\.mdx$/, '');
}

export function isPublished(frontmatter: CollectionFrontmatter): boolean {
    return (frontmatter.status ?? 'PUBLISHED') === 'PUBLISHED';
}

export function createCollection<F extends CollectionFrontmatter, C>(
    items: CollectionItem<F, C>[],
    options: CollectionOptions<F>
): Collection<F, C> {
    const published = items
        .filter((item) => isPublished(item.frontmatter))
        .sort((a, b) => options.compare(a.frontmatter, b.frontmatter));

    return {
        published() {
            return published;
        },
        bySlug(slug) {
            const to = options.moved?.[slug];
            if (to) return { kind: 'moved', to };

            const item = items.find((i) => i.slug === slug);
            if (!item) return { kind: 'missing' };
            if (!isPublished(item.frontmatter) && !options.includeDrafts) {
                return { kind: 'missing' };
            }

            const index = published.indexOf(item);
            const next =
                index >= 0 && published.length > 1
                    ? published[(index + 1) % published.length]
                    : null;
            const position =
                index >= 0 ? { index: index + 1, total: published.length } : null;
            return { kind: 'found', item, next, position };
        },
        paths() {
            return published.map((item) => `${options.basePath}/${item.slug}`);
        }
    };
}

/** Build items from an `import.meta.glob` record keyed by file path. */
export function itemsFromModules<M, F, C>(
    modules: Record<string, M>,
    read: (mod: M) => { frontmatter: F; body: C }
): CollectionItem<F, C>[] {
    return Object.entries(modules).map(([path, mod]) => ({
        slug: slugFromPath(path),
        ...read(mod)
    }));
}

export function byNewest(a: { createdAt: string }, b: { createdAt: string }) {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
}

export function bySortOrder(a: { sortOrder: number }, b: { sortOrder: number }) {
    return a.sortOrder - b.sortOrder;
}

export function byDeckOrder(
    a: { order?: number; title: string },
    b: { order?: number; title: string }
) {
    const ao = a.order ?? Number.POSITIVE_INFINITY;
    const bo = b.order ?? Number.POSITIVE_INFINITY;
    if (ao !== bo) return ao - bo;
    return a.title.localeCompare(b.title);
}

/** Deck URLs: each published deck plus one per slide. */
export function deckPaths<F, C>(
    decks: Collection<F, C>,
    slideIds: (deck: CollectionItem<F, C>) => string[]
): string[] {
    return [
        ...decks.paths(),
        ...decks
            .published()
            .flatMap((deck) =>
                slideIds(deck).map((id) => `/slides/${deck.slug}/${id}`)
            )
    ];
}
