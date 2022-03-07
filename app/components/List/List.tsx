import { ReactNode } from 'react';

const List = ({
    children,
    className
}: {
    children: ReactNode;
    className?: string;
}) => <ul className={`list-disc list-inside pl-3 ${className}`}>{children}</ul>;

export default List;
