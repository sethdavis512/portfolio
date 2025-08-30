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
                'p-4 rounded-lg bg-zinc-100 dark:bg-zinc-900',
                className
            )}
            {...rest}
        >
            {children}
        </div>
    );
}
