import type { ComponentType } from 'react';
import type { WorkFrontmatter } from './types';

interface WorkModule {
    default: ComponentType<{ components?: Record<string, ComponentType> }>;
    frontmatter: WorkFrontmatter;
}

const workModules = import.meta.glob<WorkModule>('./work/*.mdx', {
    eager: true
});

function allWorks() {
    return Object.entries(workModules).map(([path, mod]) => ({
        slug: path.replace('./work/', '').replace('.mdx', ''),
        frontmatter: mod.frontmatter,
        Component: mod.default
    }));
}

export function getPublishedWorks() {
    return allWorks()
        .filter((w) => w.frontmatter.status === 'PUBLISHED')
        .sort((a, b) => a.frontmatter.sortOrder - b.frontmatter.sortOrder);
}


export function getWorkBySlug(slug: string) {
    const key = './work/' + slug + '.mdx';
    const mod = workModules[key];
    if (!mod) return null;
    return {
        frontmatter: mod.frontmatter,
        Component: mod.default
    };
}

export function getAllWorkSlugs() {
    return allWorks()
        .filter((w) => w.frontmatter.status === 'PUBLISHED')
        .map((w) => w.frontmatter.slug);
}
