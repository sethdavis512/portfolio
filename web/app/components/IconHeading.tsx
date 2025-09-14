import type { ReactNode } from 'react';

import { cx } from 'cva.config';
import { Flex } from './Flex';
import { Heading } from './Heading';

interface IconHeadingProps {
    className?: string;
    icon: ReactNode;
    heading: string;
}

export function IconHeading({ className, icon, heading }: IconHeadingProps) {
    return (
        <Flex className={cx('mb-8 gap-3', className)}>
            {icon}
            <Heading as="h2">{heading}</Heading>
        </Flex>
    );
}
