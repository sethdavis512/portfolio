import type { PropsWithChildren } from 'react';
import { cx } from 'cva.config';
import { Tag } from './Tag';

interface SkillTagProps {
    className?: string;
}

export default function SkillTag({
    className,
    children
}: PropsWithChildren<SkillTagProps>) {
    return (
        <Tag variant="secondary" className={cx('text-sm py-1 px-2', className)}>
            {children}
        </Tag>
    );
}
