import { type ReactNode } from 'react';

interface ContentContainerProps {
    children: ReactNode;
}

export default function ContentContainer({ children }: ContentContainerProps) {
    return <div className="max-w-4xl p-8 sm:p-12 mx-auto">{children}</div>;
}
