export interface GalleryImage {
    src: string;
    alt: string;
    sortOrder: number;
}

export interface WorkFrontmatter {
    title: string;
    slug: string;
    status: string;
    description: string;
    cta: string;
    sortOrder: number;
    heroImage: string;
    thumbnailImage: string;
    about: string;
    learned: string;
    impact: string;
    techStack: string[];
    sourceUrl: string;
    demoUrl: string;
    demoUrlText: string;
    tags: string[];
    galleryImages: GalleryImage[];
    hasContent: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface TilFrontmatter {
    title: string;
    slug: string;
    status: string;
    type: string;
    tags: string[];
    excerpt: string;
    createdAt: string;
    updatedAt: string;
}

export interface PostFrontmatter {
    title: string;
    slug: string;
    status: string;
    type: string;
    tags: string[];
    excerpt: string;
    createdAt: string;
    updatedAt: string;
}

export interface AboutFact {
    id: string;
    emoji: string | null;
    title: string;
    content: string | null;
    linkUrl: string | null;
    linkExternal: string | null;
    sortOrder: number;
}

export interface Quote {
    id: string;
    text: string;
    author: string;
    sortOrder: number;
}

export interface Value {
    id: string;
    title: string;
    description: string;
    sortOrder: number;
}

export interface Skill {
    id: string;
    name: string;
    sortOrder: number;
}

export type SlideTransition =
    | 'depth'
    | 'fade'
    | 'lift'
    | 'zoom'
    | 'flip'
    | 'none';

export interface SlideFrontmatter {
    title: string;
    order: number;
    transition?: SlideTransition;
}

export interface DeckMeta {
    title: string;
    description?: string;
    order?: number;
    status?: 'PUBLISHED' | 'DRAFT';
    updatedAt?: string;
    tags?: string[];
}