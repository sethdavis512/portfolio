import type { HTMLAttributes, PropsWithChildren } from 'react';
import { cva, cx } from '~/cva.config';
import type { VariantProps } from 'cva';
import { Card } from './Card';

export const tagVariants = cva({
    base: 'inline-block px-2 py-1 font-mono uppercase tracking-[0.12em] text-xs',
    variants: {
        variant: {
            primary:
                'bg-primary-400 dark:bg-primary-400 border-black dark:border-black text-black dark:text-black',
            secondary:
                'bg-transparent border-black text-black dark:border-zinc-200 dark:text-zinc-100',
            muted: 'bg-transparent border-zinc-500 text-zinc-600 dark:text-zinc-400'
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
