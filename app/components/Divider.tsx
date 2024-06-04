import { cn } from '../utils/css';

export default function Divider({ className }: { className?: string }) {
    return (
        <hr
            className={cn(
                'my-4 h-px border-0 bg-zinc-300 dark:bg-zinc-700',
                className
            )}
        />
    );
}
