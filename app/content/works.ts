import type { ComponentType } from 'react';
import {
    bySortOrder,
    createCollection,
    itemsFromModules,
    type CollectionItem
} from './collection';
import type { WorkFrontmatter } from './types';

type MdxComponent = ComponentType<{ components?: Record<string, ComponentType> }>;

interface WorkModule {
    default: MdxComponent;
    frontmatter: WorkFrontmatter;
}

export type WorkItem = CollectionItem<WorkFrontmatter, MdxComponent>;

/** Work items that moved (renamed, or turned into TIL posts), so shared links keep working. */
export const MOVED_WORK: Record<string, string> = {
    freshvisit: '/work/fresh-visit',
    buncli: '/til/building-a-cli-for-people-and-ai-agents',
    'hog-watch': '/til/a-posthog-dashboard-in-the-menu-bar',
    'aws-flashcards': '/til/studying-for-aws-cloud-practitioner-from-the-system-tray',
    'tech-with-seth': '/work'
};

const workModules = import.meta.glob<WorkModule>('./work/*.mdx', {
    eager: true
});

export const works = createCollection(
    itemsFromModules(workModules, (mod) => ({
        frontmatter: mod.frontmatter,
        body: mod.default
    })),
    {
        basePath: '/work',
        compare: bySortOrder,
        moved: MOVED_WORK,
        includeDrafts: import.meta.env.DEV
    }
);
