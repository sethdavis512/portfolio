import { Badge } from '@radix-ui/themes';
import { ReactNode } from 'react';

export default function SkillTag({ children }: { children: ReactNode }) {
    return <Badge color="green">{children}</Badge>;
}
