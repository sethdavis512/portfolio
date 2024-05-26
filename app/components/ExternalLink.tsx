import { type ReactNode } from 'react';
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';

import { cn } from '~/utils/css';

interface ExternalLinkProps {
    children: ReactNode;
    to: string;
    className?: string;
}

export default function ExternalLink({
    className,
    children,
    to,
}: ExternalLinkProps) {
    return (
        <a
            className={cn(
                `inline-flex items-center gap-2 text-primary-600 underline outline-primary hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300`,
                className
            )}
            href={to}
            target="_blank"
            rel="noreferrer"
        >
            {children}
            <ExternalLinkIcon />
        </a>
    );
}
