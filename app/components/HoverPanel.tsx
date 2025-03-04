import type { PropsWithChildren } from 'react';

import { cx } from 'cva.config';
import Card from './Card';
import Linky from './Linky';

interface HoverPanelProps {
    to: string;
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
                `border border-transparent p-0 dark:focus:outline-none focus:outline-none focus:ring-2 dark:focus:ring-2`,
                `hover:border-secondary-500 hover:dark:border-secondary-800 focus:ring-secondary-500 focus:dark:ring-secondary-500`,
                disabled && `pointer-events-none opacity-50`
            )}
            tabIndex={0}
        >
            <Linky
                tabIndex={-1}
                external={external}
                className="p-4 hover:no-underline"
                to={to}
                {...rest}
            >
                {children}
            </Linky>
        </Card>
    );
}
