import type { PropsWithChildren } from 'react';

import { cx } from 'cva.config';

interface FlexProps {
    className?: string;
}

export default function Flex({
    children,
    className,
}: PropsWithChildren<FlexProps>) {
    return (
        <div className={cx('flex items-center gap-2', className)}>
            {children}
        </div>
    );
}
