import type { PropsWithChildren, ReactNode } from 'react';
import { cx } from 'cva.config';
import Flex from './Flex';

interface PanelProps {
    className?: string;
}

export default function Panel({
    children,
    className
}: PropsWithChildren<PanelProps>) {
    return (
        <div
            className={cx(
                'sm:bg-gradient-to-br sm:from-zinc-950/60 sm:via-zinc-900/80 sm:to-zinc-950/70',
                'sm:backdrop-blur-md sm:border sm:border-zinc-800/40',
                'sm:shadow-2xl sm:shadow-black/30',
                'p-0 sm:p-8 rounded-xl',
                className
            )}
        >
            {children}
        </div>
    );
}
