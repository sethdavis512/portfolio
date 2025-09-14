import type { PropsWithChildren } from 'react';
import { cx } from 'cva.config';

interface JobItemListProps {
    className?: string;
}

export function JobItemList({
    children,
    className
}: PropsWithChildren<JobItemListProps>) {
    return (
        <ul
            className={cx(
                'm-0 ml-4 list-outside list-disc space-y-2 pl-4',
                className
            )}
        >
            {children}
        </ul>
    );
}
