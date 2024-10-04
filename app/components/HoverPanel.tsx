import { PropsWithChildren } from 'react';
import { Card, Link as RadixLink } from '@radix-ui/themes';
import { Link, NavLink } from '@remix-run/react';

interface HoverPanelProps {
    to: string;
    className?: string;
    external?: boolean;
    isNavLink?: boolean;
}

export default function HoverPanel({
    children,
    external,
    isNavLink,
    to,
}: PropsWithChildren<HoverPanelProps>) {
    if (external) {
        return (
            <Card className="p-0 focus:outline-sky-400" tabIndex={0}>
                <RadixLink
                    tabIndex={-1}
                    className="inline-block p-4 text-sky-600 hover:text-sky-400"
                    href={to}
                    target="_blank"
                >
                    {children}
                </RadixLink>
            </Card>
        );
    }

    if (isNavLink) {
        return (
            <Card asChild className="p-0">
                <NavLink
                    className="p-4 text-green-600 hover:text-green-400"
                    to={to}
                >
                    {children}
                </NavLink>
            </Card>
        );
    }

    return (
        <Card asChild className="p-0">
            <Link className="p-4 text-green-600 hover:text-green-400" to={to}>
                {children}
            </Link>
        </Card>
    );
}
