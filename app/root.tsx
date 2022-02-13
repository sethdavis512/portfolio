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
import portfolioStyles from './portfolio.css';

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
        { rel: 'stylesheet', href: portfolioStyles }
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
