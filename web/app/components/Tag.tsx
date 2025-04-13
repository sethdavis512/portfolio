import type { HTMLAttributes, PropsWithChildren } from 'react';
import { cva, cx } from 'cva.config';
import type { VariantProps } from 'cva';
import Card from './Card';

export const tagVariants = cva({
    base: 'p-1',
    variants: {
        variant: {
            primary:
                'dark:bg-sky-700/35 dark:border-sky-500 bg-sky-400/35 border-sky-500',
            secondary:
                'dark:bg-green-700/35 dark:border-green-500 bg-green-400/35 border-green-500'
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
