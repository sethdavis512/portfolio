import { type ReactNode } from 'react';
import { cn } from '~/utils/css';
import Flex from './Flex';
import IconHeading from './IconHeading';

interface PanelProps {
    children: ReactNode;
    heading: string;
    icon: ReactNode;
    className?: string;
    flexWrapperClassName?: string;
}

export default function Panel({
    children,
    className,
    flexWrapperClassName,
    heading,
    icon
}: PanelProps) {
    return (
        <div className={cn('py-4 md:py-6', className)}>
            <IconHeading icon={icon} heading={heading} />
            <Flex className={cn('gap-4', flexWrapperClassName)}>
                {children}
            </Flex>
        </div>
    );
}
