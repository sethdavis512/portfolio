import type { HTMLAttributes, PropsWithChildren } from 'react';
import { cva, cx } from '~/cva.config';
import type { VariantProps } from 'cva';
import { Card } from './Card';

export const tagVariants = cva({
    base: 'inline-block px-2 py-1 font-medium text-xs',
    variants: {
        variant: {
            primary:
                'bg-primary-500/15 border-transparent text-primary-800 dark:text-primary-300',
            secondary:
                'bg-transparent border-zinc-300 text-zinc-700 dark:border-zinc-700 dark:text-zinc-300',
            muted: 'bg-transparent border-zinc-300 dark:border-zinc-800 text-zinc-500 dark:text-zinc-500'
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
