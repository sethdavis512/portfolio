import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    json,
    useLoaderData,
} from '@remix-run/react';
import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/node';

import { getThemeSession } from './utils/theme.server';

import stylesheet from '~/tailwind.css?url';
import { Theme } from './utils/theme';

export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: stylesheet },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const themeSession = await getThemeSession(request);

    return json({
        theme: themeSession.getTheme(),
    });
};

export function Layout({ children }: { children: React.ReactNode }) {
    const { theme } = useLoaderData<typeof loader>();

    return (
        <html lang="en" className={theme ?? Theme.LIGHT}>
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}
