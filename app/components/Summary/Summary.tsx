import { ReactNode } from 'react';

const Summary = ({
    children,
    className
}: {
    children: ReactNode;
    className?: string;
}) => <summary className={`cursor-pointer ${className}`}>{children}</summary>;

export default Summary;
