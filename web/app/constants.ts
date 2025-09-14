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
    FRONTEND = `Front-End`,
    CURRENT_JOB_TITLE = `Senior ${FRONTEND} Engineer`
}

// SEO and metadata constants
export const SITE_META = {
    DEFAULT_KEYWORDS: [
        'Seth Davis',
        'Senior Front-End Engineer',
        'React Router 7',
        'TypeScript',
        'React Developer',
        'Austin Texas developer',
        'Frontend engineer Austin',
        'Web developer portfolio',
        'Full-stack developer'
    ],
    LOCATION: 'Austin, Texas',
    PROFESSION: 'Senior Front-End Engineer',
    COMPANY: 'Gartner'
} as const;

export const SEO_CONSTANTS = {
    SITE_NAME: "Seth Davis' Portfolio",
    SITE_URL: 'https://sethdavis.tech',
    AUTHOR: {
        NAME: 'Seth Davis',
        EMAIL: 'sethdavis512@gmail.com',
        LOCATION: 'Austin, Texas',
        JOB_TITLE: 'Senior Front-End Engineer',
        COMPANY: 'Gartner',
        LINKEDIN: 'https://www.linkedin.com/in/sethdavis512/',
        GITHUB: 'https://github.com/sethdavis512',
        TWITTER: 'https://x.com/sethdavis512'
    },
    DEFAULT_DESCRIPTION:
        'Seth Davis is a Senior Front-End Engineer in Austin, Texas, specializing in React Router 7, TypeScript, and full-stack web development. Explore his portfolio, blog, and open source projects.',
    KEYWORDS: [
        'Seth Davis',
        'Senior Front-End Engineer',
        'React Router 7',
        'TypeScript',
        'React',
        'Austin Texas developer',
        'Full-stack developer',
        'Frontend engineer',
        'JavaScript developer',
        'Web developer',
        'React Router',
        'GraphQL',
        'Prisma',
        'Portfolio'
    ],
    SOCIAL_IMAGE: '/seth-davis-social-card.png', // You may want to create this
    FAVICON: '/favicon.ico'
} as const;
