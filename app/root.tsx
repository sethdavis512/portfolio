import { cssBundleHref } from '@remix-run/css-bundle';
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
} from '@remix-run/react';
import { Analytics } from '@vercel/analytics/react';
import type { LinksFunction } from '@vercel/remix';

import styles from './tailwind.css';

export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: styles },
    ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : [])
];

export default function App() {
    return (
        <html lang="en" className="bg-zinc-800 text-white">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body className="p-8">
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
                <Analytics />
            </body>
        </html>
    );
}
