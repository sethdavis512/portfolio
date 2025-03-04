import { cx } from 'cva.config';
import type { HTMLAttributes, PropsWithChildren } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export default function Card({
    className,
    children,
    ...rest
}: PropsWithChildren<CardProps>) {
    return (
        <div
            className={cx(
                'p-4 rounded-lg border border-zinc-400 dark:border-zinc-700',
                className
            )}
            {...rest}
        >
            {children}
        </div>
    );
}
