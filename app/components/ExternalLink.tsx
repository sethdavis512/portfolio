import { PropsWithChildren } from 'react';
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import { Link as RadixLink } from '@radix-ui/themes';

import { cn } from '~/utils/css';

interface ExternalLinkProps {
    to: string;
    className?: string;
}

export const EXTERNAL_LINK_CLASS_NAME = `cursor-pointer text-primary-600 underline outline-primary hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300`;

export default function ExternalLink({
    className,
    children,
    to,
}: PropsWithChildren<ExternalLinkProps>) {
    return (
        <RadixLink
            className={cn(
                `inline-flex items-center gap-1.5 ${EXTERNAL_LINK_CLASS_NAME}`,
                className
            )}
            href={to}
            target="_blank"
            rel="noreferrer"
        >
            {children}
            <ExternalLinkIcon className="mr-1.5 h-4 w-4" />
        </RadixLink>
    );
}
