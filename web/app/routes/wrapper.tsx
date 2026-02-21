import { cx } from 'cva.config';
import { MenuIcon } from 'lucide-react';
import { useReducer } from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { Button } from '~/components/Button';
import { Flex } from '~/components/Flex';
import { KeyboardShortcut } from '~/components/KeyboardShortcut';
import { Logo } from '~/components/logos/SethDavisLogo';
import { BorderStyles } from '~/constants';

const sharedLinkClasses = `text-4xl md:text-lg`;

interface NavItem {
    type: 'internal' | 'external';
    to: string;
    label: string;
    ariaLabel: string;
}

const NAV_ITEMS: NavItem[] = [
    {
        type: 'internal',
        to: '/work',
        label: 'Work',
        ariaLabel: 'View my work'
    },
    {
        type: 'internal',
        to: '/resume',
        label: 'Resume',
        ariaLabel: 'View my resume'
    },
    {
        type: 'internal',
        to: '/products',
        label: 'Products',
        ariaLabel: 'View digital products and resources'
    },
    {
        type: 'internal',
        to: '/freelance',
        label: 'Freelance',
        ariaLabel: 'View my freelance services and offerings'
    },
    // {
    //     type: 'internal',
    //     to: '/services',
    //     label: 'Services',
    //     ariaLabel: 'View my services and offerings'
    // },
    {
        type: 'internal',
        to: '/til',
        label: 'TIL',
        ariaLabel: 'Browse things I have learned'
    },
    {
        type: 'internal',
        to: '/about',
        label: 'About',
        ariaLabel: 'Learn more about me'
    }
];

interface AppNavLinkProps {
    to: string;
    children: React.ReactNode;
    ariaLabel?: string;
    onClick?: () => void;
}

function AppNavLink({ to, children, ariaLabel, onClick }: AppNavLinkProps) {
    return (
        <NavLink
            aria-label={ariaLabel}
            className={({ isActive }) =>
                cx(
                    sharedLinkClasses,
                    `transition-colors duration-200 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 py-3 px-4`,
                    isActive &&
                        `text-zinc-900 dark:text-white font-bold bg-zinc-100 dark:bg-zinc-900`,
                    !isActive &&
                        `text-zinc-600 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white`
                )
            }
            to={to}
            onClick={onClick}
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
            className={cx(
                sharedLinkClasses,
                `transition-colors duration-200 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 py-3 px-4 text-zinc-600 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white`
            )}
            href={to}
            {...rest}
        >
            {children}
        </a>
    );
}

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

function Container({ children, className }: ContainerProps) {
    return (
        <div className={cx(`px-4 max-w-6xl mx-auto`, className)}>
            {children}
        </div>
    );
}

export default function WrapperRoute() {
    const [isOpen, toggleIsOpen] = useReducer((s) => !s, false);

    return (
        <>
            <header className="py-8">
                <Container>
                    <nav>
                        <ul className="hidden lg:flex items-center gap-4 md:gap-8">
                            <li>
                                <Link to="/" aria-label="Return to home page">
                                    <Logo className="fill-zinc-700 h-16 dark:fill-white" />
                                </Link>
                            </li>
                            {NAV_ITEMS.map((item) => (
                                <li key={item.to}>
                                    {item.type === 'internal' ? (
                                        <AppNavLink
                                            to={item.to}
                                            ariaLabel={item.ariaLabel}
                                        >
                                            {item.label}
                                        </AppNavLink>
                                    ) : (
                                        <StaticNavLink to={item.to}>
                                            {item.label}
                                        </StaticNavLink>
                                    )}
                                </li>
                            ))}
                        </ul>
                        {/* //////////////////// */}
                        {/* Mobile Navigation */}
                        {/* //////////////////// */}
                        <ul className="lg:hidden flex justify-between">
                            <li>
                                <Link to="/" aria-label="Return to home page">
                                    <Logo className="fill-zinc-700 h-12 dark:fill-white" />
                                </Link>
                            </li>
                            <li>
                                <Button
                                    className="p-2 flex items-center justify-center"
                                    onClick={toggleIsOpen}
                                >
                                    <span className="sr-only">Open menu</span>
                                    <MenuIcon className="h-6 w-6" />
                                </Button>
                                {isOpen && (
                                    <div className="py-8 px-4 fixed top-0 left-0 w-full h-full bg-white dark:bg-zinc-950 z-50 flex flex-col gap-8 overflow-y-auto transform transition-transform duration-300 ease-in-out">
                                        <div className="flex justify-between items-center">
                                            <Link
                                                to="/"
                                                aria-label="Return to home page"
                                            >
                                                <Logo className="fill-zinc-700 h-12 dark:fill-white" />
                                            </Link>
                                            <Button
                                                className="p-2 flex items-center justify-center"
                                                onClick={toggleIsOpen}
                                            >
                                                <span className="sr-only">
                                                    Close menu
                                                </span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </Button>
                                        </div>
                                        <AppNavLink
                                            to="/"
                                            onClick={toggleIsOpen}
                                        >
                                            Home
                                        </AppNavLink>
                                        {NAV_ITEMS.map((item) =>
                                            item.type === 'internal' ? (
                                                <AppNavLink
                                                    key={item.to}
                                                    to={item.to}
                                                    ariaLabel={item.ariaLabel}
                                                    onClick={toggleIsOpen}
                                                >
                                                    {item.label}
                                                </AppNavLink>
                                            ) : (
                                                <StaticNavLink
                                                    key={item.to}
                                                    to={item.to}
                                                >
                                                    {item.label}
                                                </StaticNavLink>
                                            )
                                        )}
                                    </div>
                                )}
                            </li>
                        </ul>
                    </nav>
                </Container>
            </header>
            <main className="py-8">
                <Container>
                    <Outlet />
                </Container>
            </main>
            <footer className="py-0 md:py-8">
                <Container className="flex flex-col items-center gap-4">
                    <div className="flex w-full items-center justify-between my-12">
                        <div className={`flex-grow ${BorderStyles.BOTTOM}`} />
                        <Flex className="px-4 text-center">
                            <p className="inline-block">
                                ✌🏻 Made in Austin, TX{' '}
                            </p>
                            <img
                                className="h-5 w-5"
                                src="/flag-of-texas-small.svg"
                                alt="Texas flag"
                            />
                        </Flex>
                        <div className={`flex-grow ${BorderStyles.BOTTOM}`} />
                    </div>
                </Container>
            </footer>
            <div className="hidden md:block fixed right-0 bottom-0 p-8">
                <span className="bg-zinc-300 dark:bg-zinc-800 p-4 border border-zinc-700 text-zinc-700 dark:text-white rounded-lg text-sm">
                    Navigate via <KeyboardShortcut keys={['Cmd', 'K']} />
                </span>
            </div>
        </>
    );
}
