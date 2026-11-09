export function generateRouteMeta({
    descriptionContent,
    ogUrl = 'https://sethdavis.tech',
    ogImage = 'https://res.cloudinary.com/setholito/image/upload/v1/portfolio/og-image.png',
    pageTitle,
    fullTitle
}: {
    ogUrl?: string;
    ogImage?: string;
    pageTitle: string;
    /** Replaces the default "<pageTitle> | Seth Davis' Portfolio" title. */
    fullTitle?: string;
    descriptionContent?: string;
}) {
    const title = fullTitle ?? `${pageTitle} | Seth Davis' Portfolio`;
    return [
        { title },
        {
            name: 'description',
            content:
                descriptionContent ||
                `Welcome to Seth Davis' portfolio. Explore projects, field notes, and slide decks on frontend engineering, React, TypeScript, and AI tooling.`
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
            content: title
        },
        {
            property: 'og:description',
            content:
                descriptionContent ||
                `Welcome to Seth Davis' portfolio. Explore projects, field notes, and slide decks on frontend engineering, React, TypeScript, and AI tooling.`
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
            content: title
        },
        {
            name: 'twitter:description',
            content:
                descriptionContent ||
                `Welcome to Seth Davis' portfolio. Explore projects, field notes, and slide decks on frontend engineering, React, TypeScript, and AI tooling.`
        },
        {
            name: 'twitter:image',
            content: ogImage
        },
        { name: 'twitter:site', content: '@sethdavis512' },
        { name: 'twitter:creator', content: '@sethdavis512' }
    ];
}
