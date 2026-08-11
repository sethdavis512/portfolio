import type { PropsWithChildren } from 'react';
import { cx } from '~/cva.config';

import { Tag } from './Tag';

interface SkillTagProps {
    className?: string;
}

export function SkillTag({
    className,
    children
}: PropsWithChildren<SkillTagProps>) {
    return (
        <Tag variant="secondary" className={cx(className)}>
            {children}
        </Tag>
    );
}
