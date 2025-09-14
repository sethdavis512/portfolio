import { cx } from 'cva.config';

interface DividerProps {
    className?: string;
}

export function Divider({ className }: DividerProps) {
    return (
        <hr
            className={cx(
                'my-4 h-px border-0 bg-zinc-300 dark:bg-zinc-700',
                className
            )}
        />
    );
}
