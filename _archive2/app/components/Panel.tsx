import { PropsWithChildren, type ReactNode } from 'react';
import { cn } from '~/utils/css';
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
    icon,
}: PropsWithChildren<PanelProps>) {
    return (
        <div className={cn('py-4', className)}>
            <IconHeading icon={icon} heading={heading} />
            {children}
        </div>
    );
}
