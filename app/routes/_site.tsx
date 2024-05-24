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

interface HeaderProps {
    theme: Theme;
}

export function Header({ theme }: HeaderProps) {
    const themeFetcher = useFetcher();
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isDarkTheme = theme === Theme.DARK;

    return (
        <div className="py-4 md:py-6">
            <Flex className="justify-between">
                <Flex className="gap-4">
                    <div className="h-16">
                        <Link to="/" className="outline-primary">
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
                        className="p-4"
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
        <div className="mx-auto mb-20 max-w-4xl p-6 md:p-8">
            <Header theme={theme} />
            <Outlet />
        </div>
    );
}
