import { PropsWithChildren } from 'react';
import { Card } from '@radix-ui/themes';

import Linky from './Linky';
import { cn } from '~/utils/css';

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
            className={cn(
                `border border-transparent p-0`,
                external
                    ? `hover:border-sky-500 hover:dark:border-sky-500 focus:dark:outline-sky-500`
                    : `hover:border-green-300 hover:dark:border-green-800 focus:dark:outline-green-500`,
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
