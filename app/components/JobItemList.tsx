import { type ReactNode } from 'react';

interface JobItemListProps {
    children: ReactNode;
}

export default function JobItemList({ children }: JobItemListProps) {
    return (
        <ul className="m-0 ml-4 list-outside list-disc space-y-4 pl-4">
            {children}
        </ul>
    );
}
