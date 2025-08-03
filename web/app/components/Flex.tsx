import type { PropsWithChildren } from 'react';

import { cx } from 'cva.config';

interface FlexProps {
    className?: string;
    gap?: 2 | 4 | 6 | 8;
    items?: 'center' | 'start' | 'end' | 'baseline' | 'stretch';
    vertical?: boolean;
    responsive?: boolean; // Adds responsive gap and flex direction
}

export default function Flex({
    children,
    className,
    gap = 2,
    items = 'start',
    vertical,
    responsive = false
}: PropsWithChildren<FlexProps>) {
    return (
        <div
            className={cx(
                'flex',
                vertical && 'flex-col',
                responsive ? `gap-${gap - 1 >= 2 ? gap - 1 : 2} sm:gap-${gap}` : `gap-${gap}`,
                items,
                className
            )}
        >
            {children}
        </div>
    );
}
