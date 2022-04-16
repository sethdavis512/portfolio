import { useEffect } from 'react';
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
import * as gtag from '~/utils/gtags.client';

import appleTouch from './images/favicon/apple-touch-icon.png';
import favicon32 from './images/favicon/favicon-32x32.png';
import favicon16 from './images/favicon/favicon-16x16.png';
import androidChrome192 from './images/favicon/android-chrome-192x192.png';
import androidChrome512 from './images/favicon/android-chrome-512x512.png';
// @ts-ignore
// import favicon from './images/favicon/favicon.ico';

export const meta: MetaFunction = () => {
    return {
        charset: 'utf-8',
        title: `Portfolio | Tech with Seth`,
        description: `A place to showcase Seth Davis' work.`,
        keywords: `Seth Davis, Seth Davis UX Developer, Seth Davis Portfolio`,
        viewport: 'width=device-width,initial-scale=1'
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

    useEffect(() => {
        gtag.pageview(location.pathname);
    }, [location]);

    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                {process.env.NODE_ENV === 'development' ? null : (
                    <>
                        <script
                            async
                            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
                        />
                        <script
                            async
                            id="gtag-init"
                            dangerouslySetInnerHTML={{
                                __html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', '${gtag.GA_TRACKING_ID}', {
                                        page_path: window.location.pathname,
                                    });
                                `
                            }}
                        />
                    </>
                )}

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
