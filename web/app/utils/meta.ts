import {
    generateSEOMeta,
    SEO_CONSTANTS,
    type SEOMetaOptions,
    type MetaDescriptor
} from './seo';

// Page-specific meta generation helpers
export function generatePageMeta(options: SEOMetaOptions): MetaDescriptor[] {
    return generateSEOMeta({
        canonicalUrl: `${SEO_CONSTANTS.SITE_URL}${options.canonicalUrl || ''}`,
        ...options
    });
}

// Home page specific meta
export function generateHomeMeta(): MetaDescriptor[] {
    return generatePageMeta({
        title: `${SEO_CONSTANTS.AUTHOR.NAME} | ${SEO_CONSTANTS.AUTHOR.JOB_TITLE} in ${SEO_CONSTANTS.AUTHOR.LOCATION}`,
        description: `${SEO_CONSTANTS.AUTHOR.NAME} is a ${SEO_CONSTANTS.AUTHOR.JOB_TITLE} at ${SEO_CONSTANTS.AUTHOR.COMPANY} specializing in React Router 7, TypeScript, and modern web development. Based in ${SEO_CONSTANTS.AUTHOR.LOCATION}.`,
        keywords: [
            ...SEO_CONSTANTS.KEYWORDS,
            'React Router 7 expert',
            'Austin frontend developer',
            'Austin React developer',
            'frontend engineer jobs Austin',
            'tech portfolio Austin',
            'Gartner engineer'
        ],
        canonicalUrl: '',
        type: 'profile'
    });
}

// About page specific meta
export function generateAboutMeta(): MetaDescriptor[] {
    return generatePageMeta({
        title: `About | ${SEO_CONSTANTS.AUTHOR.NAME} - ${SEO_CONSTANTS.AUTHOR.JOB_TITLE}`,
        description: `Learn about ${SEO_CONSTANTS.AUTHOR.NAME}, a passionate ${SEO_CONSTANTS.AUTHOR.JOB_TITLE} from ${SEO_CONSTANTS.AUTHOR.LOCATION}. Austin FC fan, CrossFit member, and React Router enthusiast with 8+ years of experience.`,
        keywords: [
            ...SEO_CONSTANTS.KEYWORDS,
            'Austin FC supporter',
            'CrossFit Austin',
            'React Router fanatic',
            'Austin developer community',
            'tech meetups Austin',
            'personal story developer'
        ],
        canonicalUrl: '/about',
        type: 'profile'
    });
}

// Resume page specific meta
export function generateResumeMeta(): MetaDescriptor[] {
    return generatePageMeta({
        title: `Resume | ${SEO_CONSTANTS.AUTHOR.NAME} - ${SEO_CONSTANTS.AUTHOR.JOB_TITLE}`,
        description: `View ${SEO_CONSTANTS.AUTHOR.NAME}'s resume. 8+ years experience as a ${SEO_CONSTANTS.AUTHOR.JOB_TITLE}, specializing in React, TypeScript, and React Router. Currently at ${SEO_CONSTANTS.AUTHOR.COMPANY}. Available for opportunities in Austin, Texas.`,
        keywords: [
            ...SEO_CONSTANTS.KEYWORDS,
            'resume Seth Davis',
            'Austin frontend engineer resume',
            'React developer resume',
            'Indeed engineer resume',
            'Gartner engineer resume',
            'Austin tech jobs',
            'frontend developer available',
            'hire React developer Austin'
        ],
        canonicalUrl: '/resume'
    });
}

// Blog listing page meta
export function generateBlogMeta(): MetaDescriptor[] {
    return generatePageMeta({
        title: `Blog | ${SEO_CONSTANTS.AUTHOR.NAME} - Web Development Insights`,
        description: `Read ${SEO_CONSTANTS.AUTHOR.NAME}'s blog covering React Router 7, TypeScript, modern web development, and frontend engineering insights from a ${SEO_CONSTANTS.AUTHOR.JOB_TITLE} perspective.`,
        keywords: [
            ...SEO_CONSTANTS.KEYWORDS,
            'web development blog',
            'React Router 7 tutorials',
            'TypeScript articles',
            'frontend engineering blog',
            'Austin tech blog',
            'React tutorials'
        ],
        canonicalUrl: '/blog'
    });
}

// Blog post specific meta
export function generateBlogPostMeta(post: {
    title: string;
    excerpt?: string;
    slug: string;
    createdAt: string;
    tags?: string[];
}): MetaDescriptor[] {
    return generatePageMeta({
        title: post.title,
        description:
            post.excerpt ||
            `Read ${post.title} by ${SEO_CONSTANTS.AUTHOR.NAME}, ${SEO_CONSTANTS.AUTHOR.JOB_TITLE} sharing insights on web development and frontend engineering.`,
        keywords: [...SEO_CONSTANTS.KEYWORDS, ...(post.tags || [])],
        canonicalUrl: `/blog/${post.slug}`,
        type: 'article',
        publishedTime: new Date(post.createdAt).toISOString(),
        section: 'Technology',
        tags: post.tags
    });
}

// Project page meta
export function generateProjectMeta(project: {
    name: string;
    description: string;
    slug: string;
    tech?: string[];
}): MetaDescriptor[] {
    return generatePageMeta({
        title: `${project.name} | ${SEO_CONSTANTS.AUTHOR.NAME} Portfolio`,
        description: `${project.description} Built by ${SEO_CONSTANTS.AUTHOR.NAME}, ${SEO_CONSTANTS.AUTHOR.JOB_TITLE} specializing in modern web development.`,
        keywords: [
            ...SEO_CONSTANTS.KEYWORDS,
            project.name.toLowerCase(),
            'portfolio project',
            'open source project',
            ...(project.tech || [])
        ],
        canonicalUrl: `/projects/${project.slug}`
    });
}

// Utility to combine structured data with meta tags
export function withStructuredData(
    meta: MetaDescriptor[],
    structuredData: object
): { meta: MetaDescriptor[]; structuredData: string } {
    return {
        meta,
        structuredData: JSON.stringify(structuredData)
    };
}
