import { PropsWithChildren } from 'react';
import { cn } from '~/utils/css';

interface FlexProps {
    className?: string;
}

export default function Flex({
    children,
    className,
}: PropsWithChildren<FlexProps>) {
    return (
        <div className={cn('flex items-center gap-2', className)}>
            {children}
        </div>
    );
}
