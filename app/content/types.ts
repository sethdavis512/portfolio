import type { ContentStatus } from './collection';

export interface GalleryImage {
    src: string;
    alt: string;
    sortOrder: number;
}

export interface WorkExample {
    /** Cloudinary public ID of the video */
    video: string;
    title: string;
    caption: string;
    /** The video's aspect ratio, e.g. "1280 / 844" (default 16 / 9) */
    aspect?: string;
}

export interface WorkFrontmatter {
    title: string;
    status: ContentStatus;
    description: string;
    cta: string;
    sortOrder: number;
    heroImage: string;
    thumbnailImage: string;
    /** Cloudinary public ID of a record-browser walkthrough, e.g. portfolio/showcase/<slug> */
    showcaseVideo?: string;
    /** Extra videos of the product at work, shown under "In action". */
    examples?: WorkExample[];
    /** A line from the write-up set large between the chapters. */
    pullQuote?: string;
    /** What Seth did on the project, for the fact sheet. */
    role?: string;
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
    status: ContentStatus;
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
    status?: ContentStatus;
    updatedAt?: string;
    tags?: string[];
}

export interface Testimonial {
    id: string;
    workSlug: string;
    quote: string;
    author: string;
    role: string;
    sortOrder: number;
}
