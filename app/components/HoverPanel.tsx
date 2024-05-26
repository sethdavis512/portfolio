import { Link, NavLink } from '@remix-run/react';
import { type ReactNode } from 'react';
import { cn } from '~/utils/css';

interface HoverPanelProps {
    icon: ReactNode;
    to: string;
    text: string;
    className?: string;
    external?: boolean;
    isNavLink?: boolean;
}

const getHoverClassName = (internal: boolean, className: string): string => {
    return cn(
        'dark:bg-gradient-to-t dark:from-zinc-900 px-5 py-4 md:px-6 md:py-4 dark:bg-zinc-800 border-2 transition-colors duration-300 rounded-xl flex gap-2 items-center outline-2',
        internal
            ? 'hover:bg-gradient-to-t hover:from-green-400/10 dark:hover:bg-gradient-to-t dark:hover:from-green-700/10 shadow-lg shadow-zinc-400/20 dark:shadow-zinc-800/60 border-primary-600 hover:border-primary-400 dark:border-primary-800 hover:dark:border-primary-600 outline-primary-500 dark:outline-primary-500'
            : 'hover:bg-gradient-to-t hover:from-sky-400/10 dark:hover:bg-gradient-to-t dark:hover:from-sky-700/10 shadow-lg shadow-zinc-400/20 dark:shadow-zinc-800/60 border-sky-600 hover:border-sky-400 dark:border-sky-800 hover:dark:border-sky-600 outline-sky-500 dark:outline-sky-500',
        className
    );
};

export default function HoverPanel({
    icon,
    className,
    external,
    isNavLink,
    text,
    to,
}: HoverPanelProps) {
    const internal = !external;

    if (isNavLink) {
        return (
            <NavLink
                to={to}
                className={getHoverClassName(
                    internal ?? false,
                    className ?? ''
                )}
            >
                {icon}
                <span>{text}</span>
            </NavLink>
        );
    }

    if (external) {
        return (
            <a
                href={to}
                className={getHoverClassName(
                    internal ?? false,
                    className ?? ''
                )}
                target="_blank"
                rel="noreferrer"
            >
                {icon}
                <span>{text}</span>
            </a>
        );
    }

    return (
        <Link
            to={to}
            className={getHoverClassName(internal ?? false, className ?? '')}
        >
            {icon}
            <span>{text}</span>
        </Link>
    );
}
