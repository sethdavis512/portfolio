import { Tag } from '@lemonsqueezy/wedges';
import { ReactNode } from 'react';

export default function SkillTag({ children }: { children: ReactNode }) {
    return (
        <Tag color="green" shape="pill" stroke>
            {children}
        </Tag>
    );
}
