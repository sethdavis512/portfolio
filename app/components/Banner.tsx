import type { PropsWithChildren } from 'react';
import { cva, cx } from '~/cva.config';

import { Card } from './Card';
import type { VariantProps } from 'cva';

export const bannerVariants = cva({
    base: 'p-4 border border-zinc-200 dark:border-zinc-800',
    variants: {
        variant: {
            primary: 'bg-primary-400/30 dark:bg-primary-400/15',
            secondary: 'bg-secondary-400/25 dark:bg-secondary-500/15',
            tertiary: 'bg-tertiary-400/25 dark:bg-tertiary-500/15'
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
    variant,
    ...rest
}: PropsWithChildren<BannerProps>) {
    return (
        <Card className={cx(bannerVariants({ variant }), className)} {...rest}>
            {children}
        </Card>
    );
}
