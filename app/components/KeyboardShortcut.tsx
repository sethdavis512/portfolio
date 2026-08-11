import { cx } from '~/cva.config';

interface KeyboardShortcutProps {
    keys: string[];
    className?: string;
}

export function KeyboardShortcut({ keys, className }: KeyboardShortcutProps) {
    return (
        <span className={cx(`inline-flex items-center gap-1`, className)}>
            {keys.map((key, index) => (
                <span key={index} className="inline-flex items-center">
                    <kbd className="px-2 py-0.5 text-xs bg-transparent text-black dark:text-white border-2 border-black dark:border-zinc-200 font-mono uppercase">
                        {key}
                    </kbd>
                    {index < keys.length - 1 && (
                        <span className="mx-1 text-zinc-700 dark:text-zinc-300 font-mono">
                            +
                        </span>
                    )}
                </span>
            ))}
        </span>
    );
}
