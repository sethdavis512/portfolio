import type { PropsWithChildren, JSX } from 'react';
import type { VariantProps } from 'cva';
import type { LinkProps } from 'react-router';
import { Link } from 'react-router';

import { cva, cx } from '~/cva.config';

export const buttonVariants = cva({
    base: 'inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950',
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
                'border-none bg-transparent text-current',
                'hover:bg-zinc-800',
                'focus-visible:ring-primary-400'
            ]
        },
        size: {
            sm: 'px-3 py-1.5 text-sm gap-1.5',
            md: 'px-4 py-2 text-sm gap-1.5',
            lg: 'px-6 py-3 text-base gap-2'
        }
    },
    defaultVariants: {
        color: 'primary',
        variant: 'solid',
        size: 'md'
    },
    compoundVariants: [
        // Primary solid
        {
            color: 'primary',
            variant: 'solid',
            className: [
                'bg-primary-600 hover:bg-primary-500 text-white',
                'border-none shadow-sm shadow-primary-900/30',
                'focus-visible:ring-primary-400'
            ]
        },
        // Primary outline
        {
            color: 'primary',
            variant: 'outline',
            className: [
                'border border-primary-500/50 hover:border-primary-400 text-primary-400 hover:text-primary-300',
                'bg-transparent hover:bg-primary-500/10',
                'focus-visible:ring-primary-400'
            ]
        },
        // Primary soft
        {
            color: 'primary',
            variant: 'soft',
            className: [
                'border-none bg-primary-500/15 hover:bg-primary-500/25 text-primary-400 hover:text-primary-300',
                'focus-visible:ring-primary-400'
            ]
        },
        // Secondary solid
        {
            color: 'secondary',
            variant: 'solid',
            className: [
                'bg-secondary-600 hover:bg-secondary-500 text-white',
                'border-none shadow-sm shadow-secondary-900/30',
                'focus-visible:ring-secondary-400'
            ]
        },
        // Secondary outline
        {
            color: 'secondary',
            variant: 'outline',
            className: [
                'border border-secondary-500/50 hover:border-secondary-400 text-secondary-400 hover:text-secondary-300',
                'bg-transparent hover:bg-secondary-500/10',
                'focus-visible:ring-secondary-400'
            ]
        },
        // Secondary soft
        {
            color: 'secondary',
            variant: 'soft',
            className: [
                'border-none bg-secondary-500/15 hover:bg-secondary-500/25 text-secondary-400 hover:text-secondary-300',
                'focus-visible:ring-secondary-400'
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
