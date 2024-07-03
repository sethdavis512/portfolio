import { Button } from '@lemonsqueezy/wedges';
import {
    Link,
    Outlet,
    useFetcher,
    useLocation,
    useRouteLoaderData,
} from '@remix-run/react';
import { ArrowLeft, Moon, Sun } from 'lucide-react';
import Flex from '~/components/Flex';

import Logo from '~/components/Logo';
import { Theme } from '~/utils/theme';
import texasFlag from '../images/flag-of-texas-small.svg';
import { BORDER_BOTTOM } from '~/constants';

interface HeaderProps {
    theme: Theme;
}

export function Header({ theme }: HeaderProps) {
    const themeFetcher = useFetcher();
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isDarkTheme = theme === Theme.DARK;

    return (
        <div className="py-8 md:py-12">
            <Flex className="justify-between">
                <Flex className="gap-4">
                    <div className="h-16">
                        <Link
                            to="/"
                            className="outline-primary"
                            aria-label="Return to home page"
                        >
                            <Logo className="fill-zinc-600 dark:fill-white" />
                        </Link>
                    </div>
                    {!isHome && (
                        <Button asChild variant="transparent">
                            <Link to="/" className="flex gap-2">
                                <ArrowLeft />
                                <span>Back to home</span>
                            </Link>
                        </Button>
                    )}
                </Flex>
                <themeFetcher.Form
                    method="POST"
                    action="/api/theme"
                    className="flex items-center gap-4"
                >
                    <Button
                        variant="transparent"
                        type="submit"
                        name="themeSelection"
                        value={isDarkTheme ? Theme.LIGHT : Theme.DARK}
                        className="p-2"
                    >
                        <span className="sr-only">
                            Toggle light and dark theme
                        </span>
                        {isDarkTheme ? <Sun /> : <Moon />}
                    </Button>
                </themeFetcher.Form>
            </Flex>
        </div>
    );
}

export default function SiteLayout() {
    const { theme } = useRouteLoaderData('root') as { theme: Theme };

    return (
        <div className="mx-auto mb-20 grid h-full max-w-4xl grid-rows-[auto_1fr_auto] px-6 md:px-8">
            <Header theme={theme} />
            <div>
                <Outlet />
            </div>
            <footer className="flex items-center justify-between pb-8 pt-16">
                <div className={`flex-grow ${BORDER_BOTTOM}`} />
                <Flex className="px-4 text-center">
                    <p className="inline-block">✌🏻 Made in Austin, TX </p>
                    <img className="h-5 w-5" src={texasFlag} alt="Texas flag" />
                </Flex>
                <div className={`flex-grow ${BORDER_BOTTOM}`} />
            </footer>
        </div>
    );
}
