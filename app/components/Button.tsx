import type { PropsWithChildren, JSX } from 'react';
import type { VariantProps } from 'cva';
import type { LinkProps } from 'react-router';
import { Link } from 'react-router';

import { cva, cx } from '~/cva.config';

export const buttonVariants = cva({
    base: [
        'inline-flex items-center justify-center cursor-pointer select-none',
        'font-mono uppercase tracking-[0.15em] font-semibold',
        'border-2 transition-[background-color,color,transform,box-shadow] duration-150',
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
                'hover:bg-zinc-200 dark:hover:bg-zinc-800'
            ]
        },
        size: {
            sm: 'px-3 py-1.5 text-xs gap-1.5',
            md: 'px-5 py-2.5 text-xs gap-2',
            lg: 'px-7 py-3.5 text-sm gap-2.5'
        }
    },
    defaultVariants: {
        color: 'primary',
        variant: 'solid',
        size: 'md'
    },
    compoundVariants: [
        // Primary solid: acid slab with hard offset shadow that collapses on press
        {
            color: 'primary',
            variant: 'solid',
            className: [
                'bg-primary-400 text-black border-black dark:border-white',
                'shadow-[4px_4px_0_0_var(--color-black)] dark:shadow-[4px_4px_0_0_var(--color-white)]',
                'hover:translate-x-[2px] hover:translate-y-[2px]',
                'hover:shadow-[2px_2px_0_0_var(--color-black)] dark:hover:shadow-[2px_2px_0_0_var(--color-white)]',
                'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
            ]
        },
        // Primary outline: ink frame, inverts to acid on hover
        {
            color: 'primary',
            variant: 'outline',
            className: [
                'bg-transparent text-black border-black dark:text-white dark:border-white',
                'hover:bg-primary-400 hover:text-black dark:hover:text-black dark:hover:border-primary-400'
            ]
        },
        // Primary soft: quiet acid wash
        {
            color: 'primary',
            variant: 'soft',
            className: [
                'border-transparent bg-primary-400/20 text-primary-800 dark:text-primary-300',
                'hover:bg-primary-400/35'
            ]
        },
        // Secondary solid: bone slab
        {
            color: 'secondary',
            variant: 'solid',
            className: [
                'bg-white text-black border-black dark:border-white',
                'shadow-[4px_4px_0_0_var(--color-black)] dark:shadow-[4px_4px_0_0_var(--color-white)]',
                'hover:translate-x-[2px] hover:translate-y-[2px]',
                'hover:shadow-[2px_2px_0_0_var(--color-black)] dark:hover:shadow-[2px_2px_0_0_var(--color-white)]',
                'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
            ]
        },
        // Secondary outline: slate frame
        {
            color: 'secondary',
            variant: 'outline',
            className: [
                'bg-transparent text-secondary-700 border-secondary-700 dark:text-secondary-300 dark:border-secondary-400',
                'hover:bg-secondary-400 hover:text-black dark:hover:text-black'
            ]
        },
        // Secondary soft
        {
            color: 'secondary',
            variant: 'soft',
            className: [
                'border-transparent bg-secondary-500/15 text-secondary-700 dark:text-secondary-300',
                'hover:bg-secondary-500/30'
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
