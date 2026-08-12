import type { PropsWithChildren, JSX } from 'react';
import type { VariantProps } from 'cva';
import type { LinkProps } from 'react-router';
import { Link } from 'react-router';

import { cva, cx } from '~/cva.config';

export const buttonVariants = cva({
    base: [
        'inline-flex items-center justify-center cursor-pointer select-none',
        'font-medium rounded-lg',
        'border transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'focus-visible:ring-primary-500 ring-offset-white dark:focus-visible:ring-primary-400 dark:ring-offset-zinc-950'
    ],
    variants: {
        color: {
            primary: [],
            secondary: []
        },
        variant: {
            solid: [],
            soft: [],
            outline: [],
            ghost: [
                'border-transparent bg-transparent text-current',
                'hover:bg-zinc-100 dark:hover:bg-zinc-800/70'
            ]
        },
        size: {
            sm: 'px-3 py-1.5 text-sm gap-1.5',
            md: 'px-4 py-2 text-sm gap-2',
            lg: 'px-6 py-3 text-base gap-2.5'
        }
    },
    defaultVariants: {
        color: 'primary',
        variant: 'solid',
        size: 'md'
    },
    compoundVariants: [
        // Primary solid: warm amber, ink text for contrast
        {
            color: 'primary',
            variant: 'solid',
            className: [
                'bg-primary-400 hover:bg-primary-300 text-black border-transparent',
                'shadow-sm'
            ]
        },
        // Primary outline: quiet frame, amber on hover
        {
            color: 'primary',
            variant: 'outline',
            className: [
                'bg-transparent text-zinc-800 dark:text-zinc-200',
                'border-zinc-300 dark:border-zinc-700',
                'hover:border-primary-500/60 hover:text-primary-700 dark:hover:text-primary-300'
            ]
        },
        // Primary soft: amber wash
        {
            color: 'primary',
            variant: 'soft',
            className: [
                'border-transparent bg-primary-500/15 text-primary-800 dark:text-primary-300',
                'hover:bg-primary-500/25'
            ]
        },
        // Secondary solid: sage
        {
            color: 'secondary',
            variant: 'solid',
            className: [
                'bg-secondary-500 hover:bg-secondary-400 text-black border-transparent',
                'shadow-sm'
            ]
        },
        // Secondary outline
        {
            color: 'secondary',
            variant: 'outline',
            className: [
                'bg-transparent text-secondary-700 dark:text-secondary-300',
                'border-zinc-300 dark:border-zinc-700',
                'hover:border-secondary-500/60'
            ]
        },
        // Secondary soft
        {
            color: 'secondary',
            variant: 'soft',
            className: [
                'border-transparent bg-secondary-500/15 text-secondary-700 dark:text-secondary-300',
                'hover:bg-secondary-500/25'
            ]
        }
    ]
});

interface SharedButtonProps extends VariantProps<typeof buttonVariants> {
    className?: string;
    iconBefore?: JSX.Element;
    iconAfter?: JSX.Element;
}

interface NativeButtonProps
    extends SharedButtonProps,
        Pick<
            React.ButtonHTMLAttributes<HTMLButtonElement>,
            'disabled' | 'name' | 'type' | 'value' | 'onClick'
        > {
    to?: never;
    href?: never;
}

interface LinkButtonProps extends SharedButtonProps {
    to: LinkProps['to'];
    href?: never;
    disabled?: never;
    name?: never;
    type?: never;
    value?: never;
    onClick?: never;
}

interface ExternalButtonProps extends SharedButtonProps {
    href: string;
    to?: never;
    disabled?: never;
    name?: never;
    type?: never;
    value?: never;
    onClick?: never;
}

export type ButtonProps = NativeButtonProps | LinkButtonProps | ExternalButtonProps;

export function Button({
    children,
    className,
    color,
    iconBefore: IconBefore,
    iconAfter: IconAfter,
    size,
    variant,
    ...rest
}: PropsWithChildren<ButtonProps>) {
    const classes = cx(
        buttonVariants({
            className,
            color,
            size,
            variant
        }),
        (Boolean(IconBefore) || Boolean(IconAfter)) &&
            children &&
            'flex items-center gap-1.5'
    );

    const content = (
        <>
            {IconBefore ?? null}
            {children && <span className="inline-block">{children}</span>}
            {IconAfter ?? null}
        </>
    );

    if ('to' in rest && rest.to != null) {
        const { to } = rest;
        return (
            <Link className={classes} to={to}>
                {content}
            </Link>
        );
    }

    if ('href' in rest && rest.href != null) {
        const { href } = rest;
        return (
            <a
                className={classes}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                {content}
            </a>
        );
    }

    const { disabled, name, type, value, onClick } = rest as NativeButtonProps;
    return (
        <button
            className={classes}
            disabled={disabled}
            name={name}
            type={type}
            value={value}
            onClick={onClick}
        >
            {content}
        </button>
    );
}
