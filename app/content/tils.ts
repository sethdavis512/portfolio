import type { ComponentType } from 'react';
import {
    byNewest,
    createCollection,
    itemsFromModules,
    type CollectionItem
} from './collection';
import type { TilFrontmatter } from './types';

type MdxComponent = ComponentType<{ components?: Record<string, ComponentType> }>;

interface TilModule {
    default: MdxComponent;
    frontmatter: TilFrontmatter;
}

export type TilItem = CollectionItem<TilFrontmatter, MdxComponent>;

/** TIL posts that moved to a new slug, so shared links keep working. */
export const MOVED_TIL: Record<string, string> = {
    'prompt-thesaurus-50-action-verbs-for-better-llm-outputs':
        '/til/prompt-thesaurus-action-verbs-for-better-llm-outputs'
};

const tilModules = import.meta.glob<TilModule>('./til/*.mdx', {
    eager: true
});

export const tils = createCollection(
    itemsFromModules(tilModules, (mod) => ({
        frontmatter: mod.frontmatter,
        body: mod.default
    })),
    {
        basePath: '/til',
        compare: byNewest,
        moved: MOVED_TIL,
        includeDrafts: import.meta.env.DEV
    }
);
