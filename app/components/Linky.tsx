import type { HTMLAttributes, PropsWithChildren } from 'react';
import { useMemo } from 'react';
import { Link } from 'react-router';

import { cx } from 'cva.config';

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
        return cx(
            'inline-flex cursor-pointer items-center gap-1.5 focus:outline-none focus:ring-2',
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
                  rel: 'noopener noreferrer'
              }
            : {};
    }, [external]);

    return (
        <Link className={linkClassName} to={to} {...externalProps} {...rest}>
            {children}
        </Link>
    );
}
