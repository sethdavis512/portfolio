import { PropsWithChildren } from 'react';
import { cn } from '~/utils/css';

interface JobItemListProps {
    className?: string;
}

export default function JobItemList({
    children,
    className,
}: PropsWithChildren<JobItemListProps>) {
    return (
        <ul
            className={cn(
                'm-0 ml-4 list-outside list-disc space-y-2 pl-4',
                className
            )}
        >
            {children}
        </ul>
    );
}
