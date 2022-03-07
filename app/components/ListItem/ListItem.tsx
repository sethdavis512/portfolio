import { ReactNode } from 'react';

const ListItem = ({
    children,
    className
}: {
    children: ReactNode;
    className?: string;
}) => <li className={`mb-1 ${className}`}>{children}</li>;

export default ListItem;
