import type { ComponentType } from 'react';
import {
    byDeckOrder,
    createCollection,
    deckPaths,
    type CollectionItem
} from './collection';
import type {
    DeckMeta,
    SlideFrontmatter,
    SlideTransition
} from './types';

interface SlideModule {
    default: ComponentType<{ components?: Record<string, ComponentType> }>;
    frontmatter: SlideFrontmatter;
}

export interface SlideMetadata {
    id: string;
    title: string;
    order: number;
    transition: SlideTransition;
    Component: SlideModule['default'];
}

export interface Deck {
    slug: string;
    meta: DeckMeta;
    slides: SlideMetadata[];
}

export interface SlideNavigation {
    deckSlug: string;
    slideId: string;
    title: string;
    transition: SlideTransition;
    currentIndex: number;
    totalSlides: number;
    nextSlideId: string | null;
    prevSlideId: string | null;
    allSlideIds: string[];
    transitionMap: Record<string, SlideTransition>;
}

const slideModules = import.meta.glob<SlideModule>('./slides/*/*.mdx', {
    eager: true
});

const deckMetaModules = import.meta.glob<{ default: DeckMeta }>(
    './slides/*/deck.json',
    { eager: true }
);

function buildDecks(): Map<string, Deck> {
    const bySlug = new Map<string, Deck>();

    for (const [path, mod] of Object.entries(slideModules)) {
        const match = path.match(/^\.\/slides\/([^/]+)\/([^/]+)\.mdx$/);
        if (!match) continue;
        const [, deckSlug, slideId] = match;

        const frontmatter = mod.frontmatter ?? { title: slideId, order: 0 };
        const slide: SlideMetadata = {
            id: slideId,
            title: frontmatter.title ?? slideId,
            order: frontmatter.order ?? 0,
            transition: frontmatter.transition ?? 'depth',
            Component: mod.default
        };

        const deck = bySlug.get(deckSlug);
        if (deck) {
            deck.slides.push(slide);
        } else {
            bySlug.set(deckSlug, {
                slug: deckSlug,
                meta: { title: deckSlug },
                slides: [slide]
            });
        }
    }

    for (const [path, mod] of Object.entries(deckMetaModules)) {
        const match = path.match(/^\.\/slides\/([^/]+)\/deck\.json$/);
        if (!match) continue;
        const [, deckSlug] = match;
        const meta: DeckMeta = {
            ...{ title: deckSlug },
            ...(mod.default ?? {})
        };
        const existing = bySlug.get(deckSlug);
        if (existing) {
            existing.meta = meta;
        } else {
            bySlug.set(deckSlug, {
                slug: deckSlug,
                meta,
                slides: []
            });
        }
    }

    for (const deck of bySlug.values()) {
        deck.slides.sort((a, b) => a.order - b.order);
    }

    return bySlug;
}

export type DeckItem = CollectionItem<DeckMeta, Deck>;

const deckCollection = createCollection(
    Array.from(buildDecks().values())
        .filter((deck) => deck.slides.length > 0)
        .map((deck) => ({ slug: deck.slug, frontmatter: deck.meta, body: deck })),
    {
        basePath: '/slides',
        compare: byDeckOrder,
        includeDrafts: import.meta.env.DEV
    }
);

function slideNavigation(deck: Deck, slideId: string): SlideNavigation | null {
    const index = deck.slides.findIndex((s) => s.id === slideId);
    if (index === -1) return null;

    const current = deck.slides[index];
    const transitionMap: Record<string, SlideTransition> = {};
    for (const s of deck.slides) transitionMap[s.id] = s.transition;

    return {
        deckSlug: deck.slug,
        slideId: current.id,
        title: current.title,
        transition: current.transition,
        currentIndex: index,
        totalSlides: deck.slides.length,
        nextSlideId:
            index < deck.slides.length - 1 ? deck.slides[index + 1].id : null,
        prevSlideId: index > 0 ? deck.slides[index - 1].id : null,
        allSlideIds: deck.slides.map((s) => s.id),
        transitionMap
    };
}

export const decks = {
    ...deckCollection,
    paths() {
        return deckPaths(deckCollection, (item) =>
            item.body.slides.map((s) => s.id)
        );
    },
    firstSlideId(deck: Deck): string {
        return deck.slides[0].id;
    },
    navigation: slideNavigation
};
