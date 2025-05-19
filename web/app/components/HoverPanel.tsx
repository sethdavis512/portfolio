import type { PropsWithChildren } from 'react';
import type { LinkProps } from 'react-router';

import { cx } from 'cva.config';
import Card from './Card';
import Linky from './Linky';

interface HoverPanelProps extends LinkProps {
    className?: string;
    disabled?: boolean;
    external?: boolean;
}

export default function HoverPanel({
    children,
    disabled,
    external,
    to,
    ...rest
}: PropsWithChildren<HoverPanelProps>) {
    return (
        <Card
            className={cx(
                `border border-zinc-300 p-0 dark:focus:outline-none focus:outline-none focus:ring-2 dark:focus:ring-2`,
                `hover:border-primary-500 hover:dark:border-primary-800 focus:ring-primary-500 focus:dark:ring-primary-500`,
                external &&
                    `hover:border-secondary-500 hover:dark:border-secondary-800 focus:ring-secondary-500 focus:dark:ring-secondary-500`,
                disabled && `pointer-events-none opacity-50`
            )}
            tabIndex={0}
        >
            <Linky
                tabIndex={-1}
                external={external}
                className={cx(
                    `p-4 hover:no-underline`,
                    external &&
                        `hover:text-secondary-500 text-secondary-600 dark:hover:text-secondary-500 dark:text-secondary-400`
                )}
                to={to}
                {...rest}
            >
                {children}
            </Linky>
        </Card>
    );
}
