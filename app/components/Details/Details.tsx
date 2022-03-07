import { ReactNode } from 'react';

const Details = ({
    children,
    className
}: {
    children: ReactNode;
    className?: string;
}) => <details className={`mb-4 ${className}`}>{children}</details>;

export default Details;
