import type { ComponentType } from 'react';
import type { TilFrontmatter } from './types';

interface ContentModule {
    default: ComponentType<{ components?: Record<string, ComponentType> }>;
    frontmatter: TilFrontmatter;
}

const tilModules = import.meta.glob<ContentModule>('./til/*.mdx', {
    eager: true
});

function allTils() {
    return Object.entries(tilModules).map(([path, mod]) => ({
        slug: path.replace('./til/', '').replace('.mdx', ''),
        frontmatter: mod.frontmatter,
        Component: mod.default
    }));
}

export function getPublishedTils() {
    return allTils()
        .filter((t) => t.frontmatter.status === 'PUBLISHED')
        .sort(
            (a, b) =>
                new Date(b.frontmatter.createdAt).getTime() -
                new Date(a.frontmatter.createdAt).getTime()
        );
}

export function getTilBySlug(slug: string) {
    const key = './til/' + slug + '.mdx';
    const mod = tilModules[key];
    if (!mod) return null;
    return {
        frontmatter: mod.frontmatter,
        Component: mod.default
    };
}

export function getAllTilSlugs() {
    return allTils()
        .filter((t) => t.frontmatter.status === 'PUBLISHED')
        .map((t) => t.frontmatter.slug);
}
