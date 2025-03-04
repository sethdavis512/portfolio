import type { PropsWithChildren, ReactNode } from 'react';
import { cx } from 'cva.config';

import IconHeading from './IconHeading';

interface PanelProps {
    heading: string;
    icon: ReactNode;
    className?: string;
}

export default function Panel({
    children,
    className,
    heading,
    icon
}: PropsWithChildren<PanelProps>) {
    return (
        <div className={cx('py-4', className)}>
            <IconHeading icon={icon} heading={heading} />
            {children}
        </div>
    );
}
