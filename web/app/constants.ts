export const largeIconProps = {
    width: 32,
    height: 32
};

export enum TextStyles {
    DEFAULT = 'text-base text-zinc-700 dark:text-zinc-200'
}

export enum BorderStyles {
    DEFAULT = 'border border-zinc-300 dark:border-zinc-700',
    BOTTOM = 'border-b border-b-zinc-300 dark:border-b-zinc-700',
    TOP = 'border-t border-t-zinc-300 dark:border-t-zinc-700'
}

export enum ContentStyles {
    FRONTEND = `Design`,
    CURRENT_JOB_TITLE = `Design Engineer`
}

// SEO and metadata constants
export const SITE_META = {
    DEFAULT_KEYWORDS: [
        'Seth Davis',
        'Design Engineer',
        'Design Systems',
        'AI Tooling',
        'Creative Technology',
        'Generative UI',
        'React Router 7',
        'TypeScript',
        'Austin Texas developer',
        'Web developer portfolio'
    ],
    LOCATION: 'Austin, Texas',
    PROFESSION: `Design Engineer`,
    COMPANY: 'Tech with Seth'
} as const;

export const SEO_CONSTANTS = {
    SITE_NAME: "Seth Davis' Portfolio",
    SITE_URL: 'https://sethdavis.tech',
    AUTHOR: {
        NAME: 'Seth Davis',
        EMAIL: 'sethdavis512@gmail.com',
        LOCATION: 'Austin, Texas',
        JOB_TITLE: `Design Engineer`,
        COMPANY: 'Tech with Seth',
        LINKEDIN: 'https://www.linkedin.com/in/sethdavis512/',
        GITHUB: 'https://github.com/sethdavis512',
        TWITTER: 'https://x.com/sethdavis512'
    },
    DEFAULT_DESCRIPTION: `Seth Davis is a Design Engineer in Austin, Texas, specializing in design systems, AI-assisted tooling, and generative interfaces. Explore his portfolio showcasing creative technology and modern React development.`,
    KEYWORDS: [
        'Seth Davis',
        'Design Engineer',
        'Design Systems',
        'AI Tooling',
        'Creative Technology',
        'Generative UI',
        'React Router 7',
        'TypeScript',
        'React',
        'Austin Texas developer',
        'JavaScript developer',
        'Web developer',
        'GraphQL',
        'Prisma',
        'Portfolio'
    ],
    SOCIAL_IMAGE: '/seth-davis-social-card.png', // You may want to create this
    FAVICON: '/favicon.ico'
} as const;

// Product links
export const PRODUCT_LINKS = {
    CLAUDE_REAL_ESTATE_BUNDLE:
        'https://buy.polar.sh/polar_cl_ez4JvNqYGYnmHZCOCYxzyFPMR56mYP3G3zSHi2TBYuc',
    CLAUDE_INSURANCE_BUNDLE:
        'https://buy.polar.sh/polar_cl_ZuGd99lGoIt8kG0BJgJf6sDarWhsq378Y5AdT17KqIq',
    TRAY_APP_GUIDE:
        'https://buy.polar.sh/polar_cl_A09UreUuvxMfMzSLzHZZVolqkWD50M9aaV0ji28TFjz'
} as const;
