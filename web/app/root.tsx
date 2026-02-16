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
import { cx } from 'cva.config';

import { Heading } from './components/Heading';
import { CommandPalette } from '~/components/CommandPalette';
import {
    GetWorkNavItemsDocument,
    type GetWorkNavItemsQuery
} from '~/generated/graphql';
import { client } from '~/utils/graphql.server';

import type { Route } from './+types/root';

import './app.css';

export async function loader() {
    try {
        const { works } = await client.request<GetWorkNavItemsQuery>(
            GetWorkNavItemsDocument
        );
        return {
            workNavItems: (works || []).map(function (w) {
                return { title: w.title || '', slug: w.slug || '' };
            })
        };
    } catch {
        return { workNavItems: [] };
    }
}

function PosthogInit() {
    useEffect(() => {
        posthog.init('phc_NIVP9tJ3sH5xgM3DFKV4ADJFOJb14DCG6KBMzGiHPeC', {
            api_host: 'https://us.i.posthog.com'
        });
    }, []);

    return null;
}

function useCommandPallette(): [boolean, (open: boolean) => void] {
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
    const [open, setOpen] = useCommandPallette();

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
        <main className="pt-16 p-4 container mx-auto">
            <Heading as="h1">{message}</Heading>
            <p>{details}</p>
            {stack && (
                <pre className="w-full p-4 overflow-x-auto">
                    <code>{stack}</code>
                </pre>
            )}
        </main>
    );
}
