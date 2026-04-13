export function generateRouteMeta({
    descriptionContent,
    ogUrl = 'https://sethdavis.tech',
    ogImage = 'https://sethdavis.tech/og-image.png',
    pageTitle
}: {
    ogUrl?: string;
    ogImage?: string;
    pageTitle: string;
    descriptionContent?: string;
}) {
    return [
        { title: `${pageTitle} | Seth Davis' Portfolio` },
        {
            name: 'description',
            content:
                descriptionContent ||
                `Welcome to Seth Davis' portfolio. Explore projects, blog posts, and insights on web development, React, TypeScript, and more.`
        },
        { name: 'author', content: 'Seth Davis' },
        {
            name: 'robots',
            content: 'index, follow'
        },
        // Canonical URL
        { tagName: 'link', rel: 'canonical', href: ogUrl },
        // Open Graph
        {
            property: 'og:title',
            content: `${pageTitle} | Seth Davis' Portfolio`
        },
        {
            property: 'og:description',
            content:
                descriptionContent ||
                `Welcome to Seth Davis' portfolio. Explore projects, blog posts, and insights on web development, React, TypeScript, and more.`
        },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: ogUrl },
        {
            property: 'og:image',
            content: ogImage
        },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        {
            name: 'twitter:title',
            content: `${pageTitle} | Seth Davis' Portfolio`
        },
        {
            name: 'twitter:description',
            content:
                descriptionContent ||
                `Welcome to Seth Davis' portfolio. Explore projects, blog posts, and insights on web development, React, TypeScript, and more.`
        },
        {
            name: 'twitter:image',
            content: ogImage
        },
        { name: 'twitter:site', content: '@sethdavis512' },
        { name: 'twitter:creator', content: '@sethdavis512' }
    ];
}
