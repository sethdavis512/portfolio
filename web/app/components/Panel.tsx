import type { PropsWithChildren, ReactNode } from 'react';
import { cx } from 'cva.config';

import IconHeading from './IconHeading';

interface PanelProps {
    heading: string;
    icon: ReactNode;
    className?: string;
    description?: string;
}

export default function Panel({
    children,
    className,
    description,
    heading,
    icon
}: PropsWithChildren<PanelProps>) {
    return (
        <div className={cx('py-4', className)}>
            <IconHeading icon={icon} heading={heading} />
            {description && (
                <div className="mb-4">
                    <p>{description}</p>
                </div>
            )}
            {children}
        </div>
    );
}
