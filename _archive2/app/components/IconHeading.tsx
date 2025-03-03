import { type ReactNode } from 'react';
import { Heading } from '@radix-ui/themes';

import Flex from './Flex';
import { cn } from '~/utils/css';

interface IconHeadingProps {
    className?: string;
    icon: ReactNode;
    heading: string;
}

export default function IconHeading({
    className,
    icon,
    heading,
}: IconHeadingProps) {
    return (
        <Flex className={cn('mb-8 gap-3', className)}>
            {icon}
            <Heading as="h2">{heading}</Heading>
        </Flex>
    );
}
