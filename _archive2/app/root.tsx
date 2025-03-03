import { PropsWithChildren } from 'react';
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react';
import { Theme } from '@radix-ui/themes';

import '@radix-ui/themes/styles.css';
import '~/tailwind.css';

export function Layout({ children }: PropsWithChildren) {
    return (
        <html lang="en" className="h-full">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <Theme asChild accentColor="green" appearance="dark">
                <body className="h-full">
                    {children}
                    <ScrollRestoration />
                    <Scripts />
                </body>
            </Theme>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}
