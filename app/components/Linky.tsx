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
            'inline-flex cursor-pointer items-center gap-1.5 focus:outline-none',
            'text-secondary-600 hover:text-secondary-500 dark:text-secondary-400 dark:hover:text-secondary-300',
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
