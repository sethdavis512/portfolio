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
    purchaseUrl: string;
    purchaseButtonText: string;
    sidebarTitle: string;
    features: string[];
    sidebarType: string;
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

export interface Offering {
    id: string;
    name: string;
    description: string;
}

export interface Package {
    id: string;
    name: string;
    description: string;
    type: string;
    price: number;
    order: number;
    status: string;
    offerings: Offering[];
}
