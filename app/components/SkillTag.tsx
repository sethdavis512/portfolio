import { Badge } from '@radix-ui/themes';
import { PropsWithChildren } from 'react';

export default function SkillTag({ children }: PropsWithChildren) {
    return <Badge color="green">{children}</Badge>;
}
