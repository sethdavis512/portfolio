import { Link, NavLink, Outlet } from 'react-router';
import Flex from '~/components/Flex';
import KeyboardShortcut from '~/components/KeyboardShortcut';
import Linky from '~/components/Linky';
import Logo from '~/components/Logo';
import { BorderStyles } from '~/constants';

interface AppNavLinkProps {
    to: string;
    children: React.ReactNode;
    ariaLabel?: string;
}

function AppNavLink({ to, children, ariaLabel }: AppNavLinkProps) {
    return (
        <NavLink
            className={({ isActive }) =>
                `transition-colors duration-200 ${
                    isActive
                        ? 'text-zinc-900 dark:text-white font-medium'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`
            }
            to={to}
            aria-label={ariaLabel}
        >
            {children}
        </NavLink>
    );
}

export default function WrapperRoute() {
    return (
        <div className="container flex flex-col mx-auto px-4 sm:max-w-3xl md:max-w-6xl h-full">
            <header className="py-8">
                <nav>
                    <ul className="flex items-center gap-6 md:gap-16">
                        <li>
                            <Link to="/" aria-label="Return to home page">
                                <Logo className="fill-zinc-700 h-12 dark:fill-white" />
                            </Link>
                        </li>
                        <li>
                            <AppNavLink
                                to="/work"
                                aria-label="Return to home page"
                            >
                                Work
                            </AppNavLink>
                        </li>
                        <li>
                            <AppNavLink
                                to="/about"
                                aria-label="Return to home page"
                            >
                                About
                            </AppNavLink>
                        </li>
                        <li>
                            <AppNavLink
                                to="/schedule"
                                aria-label="Return to home page"
                            >
                                Schedule
                            </AppNavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="flex-1">
                <Outlet />
            </main>
            <footer className="flex flex-col items-center gap-4 pb-8">
                <div className="flex w-full items-center justify-between my-12">
                    <div className={`flex-grow ${BorderStyles.BOTTOM}`} />
                    <Flex className="px-4 text-center">
                        <p className="inline-block">✌🏻 Made in Austin, TX </p>
                        <img
                            className="h-5 w-5"
                            src="/flag-of-texas-small.svg"
                            alt="Texas flag"
                        />
                    </Flex>
                    <div className={`flex-grow ${BorderStyles.BOTTOM}`} />
                </div>
            </footer>
            <div className="hidden md:block fixed right-0 bottom-0 p-8">
                Navigate via <KeyboardShortcut keys={['Cmd', 'K']} />
            </div>
        </div>
    );
}
