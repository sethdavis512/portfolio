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
        includeDrafts: import.meta.env.DEV
    }
);
