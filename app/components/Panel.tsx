import { type ReactNode } from 'react';
import { cn } from '~/utils/css';
import IconHeading from './IconHeading';

interface PanelProps {
    children: ReactNode;
    heading: string;
    icon: ReactNode;
    className?: string;
}

export default function Panel({
    children,
    className,
    heading,
    icon,
}: PanelProps) {
    return (
        <div className={cn('py-4 md:py-6', className)}>
            <IconHeading icon={icon} heading={heading} />
            {children}
        </div>
    );
}
