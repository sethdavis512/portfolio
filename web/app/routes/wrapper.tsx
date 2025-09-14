import { Link, NavLink, Outlet } from 'react-router';
import { Flex } from '~/components/Flex';
import { KeyboardShortcut } from '~/components/KeyboardShortcut';
import { Logo } from '~/components/logos/SethDavisLogo';
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
                `transition-colors duration-200 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 py-3 px-4 ${
                    isActive
                        ? 'text-zinc-900 dark:text-white font-medium bg-zinc-100 dark:bg-zinc-900'
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

function StaticNavLink({
    to,
    children,
    ...rest
}: {
    to: string;
    children: React.ReactNode;
}) {
    return (
        <a
            className="transition-colors duration-200 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 py-3 px-4 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            href={to}
            {...rest}
        >
            {children}
        </a>
    );
}

export default function WrapperRoute() {
    return (
        <div className="container flex flex-col mx-auto px-4 sm:max-w-3xl md:max-w-6xl h-full">
            <header className="py-8 mb-4 sm:mb-8">
                <nav>
                    <ul className="flex items-center gap-4 md:gap-8">
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
                                to="/resume"
                                aria-label="View my resume"
                            >
                                Resume
                            </AppNavLink>
                        </li>
                        <li>
                            <AppNavLink
                                to="/about"
                                aria-label="Learn more about me"
                            >
                                About
                            </AppNavLink>
                        </li>
                        <li>
                            <AppNavLink to="/blog" aria-label="Read the blog">
                                Blog
                            </AppNavLink>
                        </li>
                        <li>
                            <AppNavLink
                                to="/prompts"
                                aria-label="Read the prompts"
                            >
                                Prompts
                            </AppNavLink>
                        </li>
                        <li>
                            <StaticNavLink to="https://tidycal.com/sethdavis512">
                                Meet
                            </StaticNavLink>
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
