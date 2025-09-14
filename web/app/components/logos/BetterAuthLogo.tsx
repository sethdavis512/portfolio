import { cx } from 'cva.config';

interface BetterAuthLogoProps {
    className?: string;
}

export function BetterAuthLogo({ className }: BetterAuthLogoProps) {
    return (
        <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={cx('fill-zinc-700 dark:fill-white', className)}
        >
            <title>Better Auth</title>
            <path d="M0 3.39v17.22h5.783V15.06h6.434V8.939H5.783V3.39ZM12.217 8.94h5.638v6.122h-5.638v5.548H24V3.391H12.217Z" />
        </svg>
    );
}
