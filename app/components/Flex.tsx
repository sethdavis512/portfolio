import { type ReactNode } from 'react';
import { cn } from '~/utils/css';

interface FlexProps {
    children: ReactNode;
    className?: string;
}

export default function Flex({ children, className }: FlexProps) {
    return (
        <div className={cn('flex items-center gap-2', className)}>
            {children}
        </div>
    );
}
