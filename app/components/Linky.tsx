import type { HTMLAttributes, PropsWithChildren } from 'react';
import type { VariantProps } from 'cva';
import type { Path } from 'react-router';
import { Link } from 'react-router';

import { cva, cx } from '~/cva.config';

export const linkyVariants = cva({
    base: 'inline-flex cursor-pointer items-center gap-1.5 transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950',
    variants: {
        variant: {
            inline: 'text-primary-400 hover:text-primary-300',
            muted: 'text-zinc-400 hover:text-zinc-200',
            underline:
                'text-primary-400 hover:text-primary-300 underline underline-offset-4 decoration-primary-500/40 hover:decoration-primary-400'
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
