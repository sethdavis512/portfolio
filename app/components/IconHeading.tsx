import { type ReactNode } from 'react';
import Flex from './Flex';
import Heading from './Heading';
import { cn } from '~/utils/css';

interface IconHeadingProps {
    className?: string;
    icon: ReactNode;
    heading: string;
}

export default function IconHeading({
    className,
    icon,
    heading
}: IconHeadingProps) {
    return (
        <Flex className={cn('gap-3 mb-8', className)}>
            {icon}
            <Heading size="3">{heading}</Heading>
        </Flex>
    );
}
