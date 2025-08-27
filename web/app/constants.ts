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
