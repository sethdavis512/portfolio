import type { PropsWithChildren } from 'react';
import { cva, cx } from 'cva.config';

import Card from './Card';
import type { VariantProps } from 'cva';

export const bannerVariants = cva({
    base: 'p-4',
    variants: {
        variant: {
            primary:
                'dark:bg-primary-700/35 dark:border-primary-500 bg-primary-400/35 border-primary-500',
            secondary:
                'dark:bg-secondary-700/35 dark:border-secondary-500 bg-secondary-400/35 border-secondary-500'
        }
    },
    defaultVariants: {
        variant: 'primary'
    },
    compoundVariants: []
});

export interface BannerProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof bannerVariants> {}

export function Banner({
    className,
    children,
    variant
}: PropsWithChildren<BannerProps>) {
    return (
        <Card className={cx(bannerVariants({ variant }), className)}>
            {children}
        </Card>
    );
}
