import type { HTMLAttributes, PropsWithChildren } from 'react';
import { cva, cx } from 'cva.config';
import type { VariantProps } from 'cva';
import Card from './Card';

export const tagVariants = cva({
    base: 'text-sm inline-block px-2 py-1',
    variants: {
        variant: {
            primary:
                'dark:bg-primary-700/35 dark:border-primary-500 bg-primary-400/35 border-primary-500',
            secondary:
                'dark:bg-secondary-700/35 dark:border-secondary-500 bg-secondary-400/35 border-secondary-500',
            muted: 'dark:bg-zinc-700/35 dark:border-zinc-700 bg-zinc-300 border-zinc-700 text-zinc-900 dark:text-white'
        }
    },
    defaultVariants: {
        variant: 'primary'
    },
    compoundVariants: []
});

interface TagProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof tagVariants> {}

export function Tag({
    className,
    children,
    variant
}: PropsWithChildren<TagProps>) {
    return (
        <Card className={cx(tagVariants({ variant, className }))}>
            {children}
        </Card>
    );
}
