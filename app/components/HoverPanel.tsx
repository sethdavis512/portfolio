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
        'dark:bg-gradient-to-t dark:from-zinc-900 p-4 md:p-6 dark:bg-zinc-800 border-2 transition-colors duration-300 rounded-xl flex gap-2 items-center outline-2',
        internal
            ? 'shadow-lg shadow-zinc-400/20 dark:shadow-zinc-800/60 border-green-600 hover:border-green-400 dark:border-green-800 hover:dark:border-green-600 outline-green-500 dark:outline-green-500'
            : 'shadow-lg shadow-zinc-400/20 dark:shadow-zinc-800/60 border-blue-600 hover:border-blue-400 dark:border-sky-800 hover:dark:border-sky-600 outline-sky-500 dark:outline-sky-500',
        className
    );
};

export default function HoverPanel({
    icon,
    className,
    external,
    isNavLink,
    text,
    to
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
