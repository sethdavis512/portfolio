import { type ReactNode } from 'react';

interface JobItemListProps {
    children: ReactNode;
}

export default function JobItemList({ children }: JobItemListProps) {
    return (
        <ul className="space-y-4 list-outside list-disc m-0 pl-4 ml-4">
            {children}
        </ul>
    );
}
