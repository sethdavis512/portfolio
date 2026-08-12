import type { HTMLAttributes, PropsWithChildren } from 'react';
import type { VariantProps } from 'cva';
import type { Path } from 'react-router';
import { Link } from 'react-router';

import { cva, cx } from '~/cva.config';

export const linkyVariants = cva({
    base: 'inline-flex cursor-pointer items-center gap-1.5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ring-offset-white dark:focus-visible:ring-primary-400 dark:ring-offset-zinc-950',
    variants: {
        variant: {
            inline: [
                'text-zinc-900 dark:text-zinc-100 underline underline-offset-4',
                'decoration-primary-500/60',
                'hover:text-primary-700 dark:hover:text-primary-300 hover:decoration-primary-500'
            ],
            muted: 'text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white underline decoration-zinc-400/60 underline-offset-4 hover:decoration-current',
            underline: [
                'text-zinc-900 dark:text-zinc-100 underline underline-offset-4',
                'decoration-primary-500/60',
                'hover:text-primary-700 dark:hover:text-primary-300 hover:decoration-primary-500'
            ]
        }
    },
    defaultVariants: {
        variant: 'inline'
    }
});

interface LinkyBaseProps
    extends Omit<HTMLAttributes<HTMLAnchorElement>, 'className'>,
        VariantProps<typeof linkyVariants> {
    className?: string;
}

interface InternalLinkyProps extends LinkyBaseProps {
    to: string | Partial<Path>;
    href?: never;
}

interface ExternalLinkyProps extends LinkyBaseProps {
    href: string;
    to?: never;
}

export type LinkyProps = InternalLinkyProps | ExternalLinkyProps;

export function Linky({
    children,
    className,
    variant,
    ...rest
}: PropsWithChildren<LinkyProps>) {
    const classes = cx(linkyVariants({ variant, className }));

    if ('href' in rest && rest.href != null) {
        const { href, ...anchorProps } = rest;
        return (
            <a
                className={classes}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                {...anchorProps}
            >
                {children}
            </a>
        );
    }

    const { to, ...linkProps } = rest as InternalLinkyProps;
    return (
        <Link className={classes} to={to} {...linkProps}>
            {children}
        </Link>
    );
}
