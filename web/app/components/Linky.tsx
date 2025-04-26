import type { HTMLAttributes, PropsWithChildren } from 'react';
import { useMemo } from 'react';
import { Link } from 'react-router';

import { cx } from 'cva.config';

interface Path {
    /**
     * A URL pathname, beginning with a /.
     */
    pathname: string;
    /**
     * A URL search string, beginning with a ?.
     */
    search: string;
    /**
     * A URL fragment identifier, beginning with a #.
     */
    hash: string;
}

interface LinkyProps extends HTMLAttributes<HTMLAnchorElement> {
    to: string | Partial<Path>;
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
            'inline-flex cursor-pointer items-center gap-1.5 focus:outline-none',
            'text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300',
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
