import type { PropsWithChildren } from 'react';

import { cx } from 'cva.config';

interface FlexProps {
    className?: string;
    gap?: 2 | 4 | 6 | 8;
    items?: 'center' | 'start' | 'end' | 'baseline' | 'stretch';
    vertical?: boolean;
}

export default function Flex({
    children,
    className,
    gap = 2,
    items = 'start',
    vertical
}: PropsWithChildren<FlexProps>) {
    return (
        <div
            className={cx(
                'flex',
                vertical && 'flex-col',
                `gap-${gap}`,
                items,
                className
            )}
        >
            {children}
        </div>
    );
}
