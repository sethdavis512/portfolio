import { cx } from 'cva.config';

interface KeyboardShortcutProps {
    keys: string[];
    className?: string;
}

export function KeyboardShortcut({ keys, className }: KeyboardShortcutProps) {
    return (
        <span className={cx(`inline-flex items-center gap-1`, className)}>
            {keys.map((key, index) => (
                <span key={index} className="inline-flex items-center">
                    <kbd className="px-2 py-1 text-xs bg-zinc-200 dark:bg-zinc-900 text-zinc-900 dark:text-white rounded border border-zinc-600 font-mono">
                        {key}
                    </kbd>
                    {index < keys.length - 1 && (
                        <span className="mx-1 text-white">+</span>
                    )}
                </span>
            ))}
        </span>
    );
}
