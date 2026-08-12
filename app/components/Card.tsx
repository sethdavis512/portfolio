import { cx } from '~/cva.config';
import type { HTMLAttributes, PropsWithChildren } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export function Card({
    className,
    children,
    ...rest
}: PropsWithChildren<CardProps>) {
    return (
        <div
            className={cx(
                'p-4 rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900',
                className
            )}
            {...rest}
        >
            {children}
        </div>
    );
}
