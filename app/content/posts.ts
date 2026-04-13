import type { ComponentType } from 'react';
import type { PostFrontmatter, TilFrontmatter } from './types';

interface ContentModule {
    default: ComponentType<{ components?: Record<string, ComponentType> }>;
    frontmatter: TilFrontmatter | PostFrontmatter;
}

const tilModules = import.meta.glob<ContentModule>('./til/*.mdx', {
    eager: true
});

const postModules = import.meta.glob<ContentModule>('./post/*.mdx', {
    eager: true
});

function allTils() {
    return Object.entries(tilModules).map(([path, mod]) => ({
        slug: path.replace('./til/', '').replace('.mdx', ''),
        frontmatter: mod.frontmatter as TilFrontmatter,
        Component: mod.default
    }));
}

function allPosts() {
    return Object.entries(postModules).map(([path, mod]) => ({
        slug: path.replace('./post/', '').replace('.mdx', ''),
        frontmatter: mod.frontmatter as PostFrontmatter,
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
        frontmatter: mod.frontmatter as TilFrontmatter,
        Component: mod.default
    };
}

export function getPublishedPosts() {
    return allPosts().filter((p) => p.frontmatter.status === 'PUBLISHED');
}

export function getLastThreePosts() {
    return getPublishedPosts()
        .sort(
            (a, b) =>
                new Date(b.frontmatter.createdAt).getTime() -
                new Date(a.frontmatter.createdAt).getTime()
        )
        .slice(0, 3);
}

export function getAllTilSlugs() {
    return allTils()
        .filter((t) => t.frontmatter.status === 'PUBLISHED')
        .map((t) => t.frontmatter.slug);
}
