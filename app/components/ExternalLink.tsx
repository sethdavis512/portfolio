import { type ReactNode } from 'react';
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';

interface ExternalLinkProps {
    children: ReactNode;
    href: string;
    className?: string;
}

export default function ExternalLink({
    className,
    children,
    href
}: ExternalLinkProps) {
    return (
        <a
            className={`inline-flex items-center gap-2 text-green-500 hover:text-green-300 underline ${className}`}
            href={href}
            target="_blank"
            rel="noreferrer"
        >
            {children}
            <ExternalLinkIcon className="h-4 w-4" />
        </a>
    );
}
