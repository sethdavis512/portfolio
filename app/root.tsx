import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLocation
} from 'remix';
import type { MetaFunction } from 'remix';
import styles from './tailwind.css';

import appleTouch from './images/favicon/apple-touch-icon.png';
import favicon32 from './images/favicon/favicon-32x32.png';
import favicon16 from './images/favicon/favicon-16x16.png';
import androidChrome192 from './images/favicon/android-chrome-192x192.png';
import androidChrome512 from './images/favicon/android-chrome-512x512.png';
// @ts-ignore
// import favicon from './images/favicon/favicon.ico';

export const meta: MetaFunction = () => {
    return {
        title: `Portfolio | Tech with Seth`,
        description: `A place to showcase Seth Davis' work.`,
        keywords: `Seth Davis, Seth Davis UX Developer, Seth Davis Portfolio`
    };
};

export function links() {
    return [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossoriginisolated: 'true'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
        },
        { rel: 'stylesheet', href: styles },
        { rel: 'apple-touch-icon', href: appleTouch, sizes: '180x180' },
        // { rel: 'icon', href: favicon },
        { rel: 'icon', type: 'image/png', href: favicon32, sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: favicon16, sizes: '16x16' },
        {
            rel: 'icon',
            type: 'image/png',
            href: androidChrome192,
            sizes: '192x192'
        },
        {
            rel: 'icon',
            type: 'image/png',
            href: androidChrome512,
            sizes: '512x512'
        }
    ];
}

export default function App() {
    const location = useLocation();
    const isSoccerSchedule = location.pathname.includes('austin-fc');

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                {!isSoccerSchedule && <ScrollRestoration />}
                <Scripts />
                {process.env.NODE_ENV === 'development' && <LiveReload />}
                <script
                    async
                    src="https://platform.twitter.com/widgets.js"
                    charSet="utf-8"
                ></script>
            </body>
        </html>
    );
}
