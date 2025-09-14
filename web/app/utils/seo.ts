import { SEO_CONSTANTS } from '~/constants';

export interface MetaDescriptor {
    title?: string;
    name?: string;
    content?: string;
    property?: string;
    httpEquiv?: string;
    charSet?: string;
    tagName?: 'link' | 'meta';
    rel?: string;
    href?: string;
    media?: string;
    sizes?: string;
    type?: string;
}

export interface SEOMetaOptions {
    title: string;
    description?: string;
    keywords?: string[];
    canonicalUrl?: string;
    imageUrl?: string;
    imageAlt?: string;
    type?: 'website' | 'article' | 'profile';
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
    author?: string;
    noIndex?: boolean;
    noFollow?: boolean;
}

export function generateSEOMeta(options: SEOMetaOptions): MetaDescriptor[] {
    const {
        title,
        description = SEO_CONSTANTS.DEFAULT_DESCRIPTION,
        keywords = SEO_CONSTANTS.KEYWORDS,
        canonicalUrl,
        imageUrl = SEO_CONSTANTS.SOCIAL_IMAGE,
        imageAlt = `${SEO_CONSTANTS.AUTHOR.NAME} - ${SEO_CONSTANTS.AUTHOR.JOB_TITLE}`,
        type = 'website',
        publishedTime,
        modifiedTime,
        section,
        tags = [],
        author = SEO_CONSTANTS.AUTHOR.NAME,
        noIndex = false,
        noFollow = false
    } = options;

    const fullTitle = title.includes(SEO_CONSTANTS.SITE_NAME)
        ? title
        : `${title} | ${SEO_CONSTANTS.SITE_NAME}`;

    const meta: MetaDescriptor[] = [
        // Basic meta tags
        { title: fullTitle },
        { name: 'description', content: description },
        { name: 'keywords', content: [...keywords, ...tags].join(', ') },
        { name: 'author', content: author },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // Robots meta
        ...(noIndex || noFollow
            ? [
                  {
                      name: 'robots',
                      content: [noIndex && 'noindex', noFollow && 'nofollow']
                          .filter(Boolean)
                          .join(', ')
                  }
              ]
            : []),

        // Canonical URL
        ...(canonicalUrl
            ? [
                  {
                      tagName: 'link' as const,
                      rel: 'canonical',
                      href: canonicalUrl
                  }
              ]
            : []),

        // Open Graph tags
        { property: 'og:title', content: fullTitle },
        { property: 'og:description', content: description },
        { property: 'og:type', content: type },
        { property: 'og:url', content: canonicalUrl || SEO_CONSTANTS.SITE_URL },
        { property: 'og:site_name', content: SEO_CONSTANTS.SITE_NAME },
        { property: 'og:locale', content: 'en_US' },

        // Open Graph image
        { property: 'og:image', content: imageUrl },
        { property: 'og:image:alt', content: imageAlt },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },

        // Twitter Card tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@sethdavis512' },
        { name: 'twitter:creator', content: '@sethdavis512' },
        { name: 'twitter:title', content: fullTitle },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: imageUrl },
        { name: 'twitter:image:alt', content: imageAlt },

        // Article specific tags
        ...(type === 'article' && publishedTime
            ? [
                  {
                      property: 'article:published_time',
                      content: publishedTime
                  },
                  {
                      property: 'article:author',
                      content: SEO_CONSTANTS.AUTHOR.LINKEDIN
                  },
                  ...(modifiedTime
                      ? [
                            {
                                property: 'article:modified_time',
                                content: modifiedTime
                            }
                        ]
                      : []),
                  ...(section
                      ? [{ property: 'article:section', content: section }]
                      : []),
                  ...tags.map((tag) => ({
                      property: 'article:tag' as const,
                      content: tag
                  }))
              ]
            : []),

        // Profile specific tags
        ...(type === 'profile'
            ? [
                  { property: 'profile:first_name', content: 'Seth' },
                  { property: 'profile:last_name', content: 'Davis' },
                  { property: 'profile:username', content: 'sethdavis512' }
              ]
            : [])
    ];

    return meta;
}

export function generateStructuredData(
    type: 'Person' | 'Website' | 'Article',
    data?: any
) {
    const baseUrl = SEO_CONSTANTS.SITE_URL;

    switch (type) {
        case 'Person':
            return {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: SEO_CONSTANTS.AUTHOR.NAME,
                jobTitle: SEO_CONSTANTS.AUTHOR.JOB_TITLE,
                worksFor: {
                    '@type': 'Organization',
                    name: SEO_CONSTANTS.AUTHOR.COMPANY
                },
                url: baseUrl,
                email: SEO_CONSTANTS.AUTHOR.EMAIL,
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Austin',
                    addressRegion: 'Texas',
                    addressCountry: 'US'
                },
                sameAs: [
                    SEO_CONSTANTS.AUTHOR.LINKEDIN,
                    SEO_CONSTANTS.AUTHOR.GITHUB,
                    SEO_CONSTANTS.AUTHOR.TWITTER
                ],
                knowsAbout: [
                    'React',
                    'TypeScript',
                    'React Router',
                    'Frontend Engineering',
                    'JavaScript',
                    'Web Development',
                    'GraphQL',
                    'Prisma'
                ]
            };

        case 'Website':
            return {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: SEO_CONSTANTS.SITE_NAME,
                url: baseUrl,
                author: {
                    '@type': 'Person',
                    name: SEO_CONSTANTS.AUTHOR.NAME
                },
                description: SEO_CONSTANTS.DEFAULT_DESCRIPTION,
                inLanguage: 'en-US'
            };

        case 'Article':
            return {
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: data?.title,
                description: data?.description,
                author: {
                    '@type': 'Person',
                    name: SEO_CONSTANTS.AUTHOR.NAME,
                    url: baseUrl
                },
                publisher: {
                    '@type': 'Person',
                    name: SEO_CONSTANTS.AUTHOR.NAME
                },
                datePublished: data?.publishedTime,
                dateModified: data?.modifiedTime || data?.publishedTime,
                url: data?.url,
                mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': data?.url
                },
                ...(data?.tags && { keywords: data.tags.join(', ') })
            };

        default:
            return null;
    }
}

// Utility function to combine multiple structured data objects
export function combineStructuredData(...schemas: (object | null)[]): string {
    const validSchemas = schemas.filter(Boolean);
    return JSON.stringify(
        validSchemas.length === 1 ? validSchemas[0] : validSchemas
    );
}

export function generateRouteMeta({
    descriptionContent,
    pageTitle
}: {
    descriptionContent?: string;
    pageTitle: string;
}) {
    return [
        { title: `${pageTitle} | Seth Davis' Portfolio` },
        {
            name: 'description',
            content:
                descriptionContent ||
                `Welcome to Seth Davis' portfolio. Explore projects, blog posts, and insights on web development, React, TypeScript, and more.`
        }
    ];
}
