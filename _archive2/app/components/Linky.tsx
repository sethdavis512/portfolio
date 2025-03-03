import { HTMLAttributes, PropsWithChildren, useMemo } from 'react';
import { Link as RadixLink } from '@radix-ui/themes';

import { cn } from '~/utils/css';
import { Link } from '@remix-run/react';

interface LinkyProps extends HTMLAttributes<HTMLAnchorElement> {
    to: string;
    className?: string;
    external?: boolean;
    pad?: boolean;
}

export default function Linky({
    children,
    className,
    external,
    pad,
    to,
    ...rest
}: PropsWithChildren<LinkyProps>) {
    const linkClassName = useMemo(() => {
        return cn(
            'inline-flex cursor-pointer items-center gap-1.5 hover:underline focus:outline-none focus:ring-2',
            external
                ? 'text-sky-600 hover:text-sky-500 focus:ring-sky-500 dark:text-sky-400 dark:hover:text-sky-300'
                : 'text-green-600 hover:text-green-500 focus:ring-green-500 dark:text-green-400 dark:hover:text-green-300',
            pad && 'p-4',
            className
        );
    }, [className, external, pad]);

    const externalProps = useMemo(() => {
        return external
            ? {
                  target: '_blank',
                  rel: 'noopener noreferrer',
              }
            : {};
    }, [external]);

    return (
        <RadixLink asChild>
            <Link
                className={linkClassName}
                to={to}
                {...externalProps}
                {...rest}
            >
                {children}
            </Link>
        </RadixLink>
    );
}
