import { useEffect, useState } from 'react';
import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
} from 'react-router';
import posthog from 'posthog-js';
import { cx } from '~/cva.config';

import { Heading } from './components/Heading';
import { CommandPalette } from '~/components/CommandPalette';
import { getPublishedWorks } from '~/content';

import type { Route } from './+types/root';

import './app.css';

export function loader() {
    const allWorks = getPublishedWorks();
    return {
        workNavItems: allWorks.map((w) => ({
            title: w.frontmatter.title,
            slug: w.frontmatter.slug
        }))
    };
}

function PosthogInit() {
    useEffect(() => {
        if (window.location.hostname === 'localhost') return;

        posthog.init('phc_NIVP9tJ3sH5xgM3DFKV4ADJFOJb14DCG6KBMzGiHPeC', {
            // Proxied through our own server (see server/index.ts) so ad blockers don't drop events
            api_host: '/lantern',
            ui_host: 'https://us.posthog.com',
            // Pageviews on client-side navigation, plus scroll depth on $pageleave.
            defaults: '2026-01-30',
            // Crawlers that run JS but aren't on posthog-js's built-in bot list (Sogou).
            custom_blocked_useragents: ['spider'],
            loaded: () => {
                window.posthog = posthog;
                flagInternalTraffic();
            }
        });
    }, []);

    return null;
}

/** `?internal=1` marks this browser as Seth's so PostHog's internal-traffic filter drops it; `?internal=0` clears it. */
function flagInternalTraffic() {
    const internal = new URLSearchParams(window.location.search).get('internal');
    if (internal === '1') posthog.register({ internal_user: true });
    if (internal === '0') posthog.unregister('internal_user');
}

function useCommandPalette(): [boolean, (open: boolean) => void] {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener('keydown', down);

        return () => document.removeEventListener('keydown', down);
    }, []);

    return [open, setOpen];
}

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="preconnect"
                    href="https://res.cloudinary.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
                />
                <Meta />
                <Links />
            </head>
            <body
                className={cx(
                    `md:min-h-screen md:grid md:grid-rows-[auto_1fr_auto]`
                )}
            >
                {children}
                <ScrollRestoration />
                <Scripts />
                <PosthogInit />
            </body>
        </html>
    );
}

export default function App({ loaderData }: Route.ComponentProps) {
    const [open, setOpen] = useCommandPalette();

    return (
        <>
            <Outlet />
            <CommandPalette
                open={open}
                onOpenChange={setOpen}
                workItems={loaderData.workNavItems}
            />
        </>
    );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = 'Oops!';
    let details = 'An unexpected error occurred.';
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? '404' : 'Error';
        details =
            error.status === 404
                ? 'The requested page could not be found.'
                : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <>
            <title>{`${message} | Seth Davis' Portfolio`}</title>
            <main className="pt-16 p-4 container mx-auto">
                <Heading as="h1">{message}</Heading>
                <p>{details}</p>
                {stack && (
                    <pre className="w-full p-4 overflow-x-auto">
                        <code>{stack}</code>
                    </pre>
                )}
            </main>
        </>
    );
}
