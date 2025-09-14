import { cx } from 'cva.config';

interface TriggerDevLogoProps {
    className?: string;
}

export function TriggerDevLogo({ className }: TriggerDevLogoProps) {
    return (
        <svg
            className={cx('fill-zinc-700 dark:fill-white', className)}
            width="109"
            height="95"
            viewBox="0 0 109 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.569 38.1914L54.5301 0.158447L108.956 94.4175H0.104248L22.0654 56.3834L37.6003 65.3517L31.1753 76.4795H77.885L54.5301 36.0332L48.1051 47.1609L32.569 38.1914Z"
            />
        </svg>
    );
}
