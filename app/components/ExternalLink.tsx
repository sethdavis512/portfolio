import { type ReactNode } from 'react';
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';

interface ExternalLinkProps {
    children: ReactNode;
    href: string;
}

export default function ExternalLink({ children, href }: ExternalLinkProps) {
    return (
        <a
            className="inline-flex gap-2 text-green-500 hover:text-green-300 underline"
            href={href}
        >
            {children}
            <ExternalLinkIcon />
        </a>
    );
}
