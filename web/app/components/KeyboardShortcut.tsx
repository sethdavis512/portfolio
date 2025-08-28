interface KeyboardShortcutProps {
    keys: string[];
    className?: string;
}

export default function KeyboardShortcut({ keys, className = '' }: KeyboardShortcutProps) {
    return (
        <span className={`inline-flex items-center gap-1 ${className}`}>
            {keys.map((key, index) => (
                <span key={index} className="inline-flex items-center">
                    <kbd className="px-2 py-1 text-xs bg-zinc-700 text-zinc-300 rounded border border-zinc-600 font-mono">
                        {key}
                    </kbd>
                    {index < keys.length - 1 && (
                        <span className="mx-1 text-zinc-400">+</span>
                    )}
                </span>
            ))}
        </span>
    );
}