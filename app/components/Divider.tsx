import { cx } from '~/cva.config';

interface DividerProps {
    className?: string;
}

export function Divider({ className }: DividerProps) {
    return (
        <hr
            className={cx(
                'my-4 h-0.5 border-0 bg-black dark:bg-zinc-200',
                className
            )}
        />
    );
}
