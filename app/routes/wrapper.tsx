import { cx } from '~/cva.config';
import { MenuIcon } from 'lucide-react';
import { useReducer } from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { Button } from '~/components/Button';
import { Flex } from '~/components/Flex';
import { KeyboardShortcut } from '~/components/KeyboardShortcut';
import { Logo } from '~/components/logos/SethDavisLogo';

const sharedLinkClasses = `text-3xl md:text-sm font-mono uppercase tracking-[0.15em]`;

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
        to: '/services',
        label: 'Services',
        ariaLabel: 'View my services and offerings'
    },
    {
        type: 'internal',
        to: '/til',
        label: 'TIL',
        ariaLabel: 'TIL – Browse things I have learned'
    },
    {
        type: 'internal',
        to: '/slides',
        label: 'Slides',
        ariaLabel: 'Browse slideshows and talks'
    },
    {
        type: 'internal',
        to: '/about',
        label: 'About',
        ariaLabel: 'Learn more about me'
    },
    {
        type: 'internal',
        to: '/contact',
        label: 'Contact',
        ariaLabel: 'Get in touch with me'
    },
    {
        type: 'external',
        to: 'https://techwithseth.com/digital-goods',
        label: 'Digital Goods',
        ariaLabel: 'Browse digital goods on Tech with Seth'
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
                    `transition-colors duration-150 py-2 px-3`,
                    `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ring-offset-white dark:focus-visible:ring-primary-400 dark:ring-offset-zinc-950`,
                    isActive && `bg-primary-400 text-black font-semibold`,
                    !isActive &&
                        `text-zinc-600 dark:text-zinc-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black`
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
                `transition-colors duration-150 py-2 px-3 text-zinc-600 dark:text-zinc-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black`,
                `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ring-offset-white dark:focus-visible:ring-primary-400 dark:ring-offset-zinc-950`
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
            <header className="py-6 border-b-2 border-black dark:border-zinc-200">
                <Container>
                    <nav>
                        <ul className="hidden lg:flex items-center gap-4 md:gap-8">
                            <li>
                                <Link
                                    to="/"
                                    aria-label="Return to home page"
                                    className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ring-offset-white dark:focus-visible:ring-primary-400 dark:ring-offset-zinc-950"
                                >
                                    <Logo className="fill-black h-14 dark:fill-white" />
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
                        <ul className="lg:hidden flex justify-between">
                            <li>
                                <Link to="/" aria-label="Return to home page">
                                    <Logo className="fill-black h-12 dark:fill-white" />
                                </Link>
                            </li>
                            <li>
                                <Button
                                    variant="ghost"
                                    className="p-2.5"
                                    onClick={toggleIsOpen}
                                >
                                    <span className="sr-only">Open menu</span>
                                    <MenuIcon className="h-6 w-6" />
                                </Button>
                                <div
                                    className={cx(
                                        'py-8 px-4 fixed top-0 left-0 w-full h-full bg-white dark:bg-zinc-950 z-50 flex flex-col gap-8 overflow-y-auto transition-all duration-300 ease-in-out',
                                        isOpen
                                            ? 'opacity-100 translate-y-0 pointer-events-auto'
                                            : 'opacity-0 -translate-y-4 pointer-events-none'
                                    )}
                                    aria-hidden={!isOpen}
                                    inert={!isOpen}
                                >
                                    <div className="flex justify-between items-center">
                                        <Link
                                            to="/"
                                            aria-label="Return to home page"
                                        >
                                            <Logo className="fill-black h-12 dark:fill-white" />
                                        </Link>
                                        <Button
                                            variant="ghost"
                                            className="p-2.5"
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
                                    <AppNavLink to="/" onClick={toggleIsOpen}>
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
            <footer className="border-t-2 border-black dark:border-zinc-200 mt-16">
                <Container className="py-8">
                    <Flex className="items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">
                        <span>Seth Davis</span>
                        <Flex className="items-center gap-2">
                            <span>✌🏻 Made in Austin, TX</span>
                            <img
                                className="h-4 w-4"
                                src="https://res.cloudinary.com/setholito/image/upload/v1/portfolio/flag-of-texas-small.svg"
                                alt="Texas flag"
                            />
                        </Flex>
                    </Flex>
                </Container>
            </footer>
            <div className="hidden md:block fixed right-6 bottom-6">
                <span className="bg-white dark:bg-zinc-950 py-2.5 px-4 border-2 border-black dark:border-zinc-200 text-black dark:text-white font-mono text-xs uppercase tracking-[0.15em] shadow-[4px_4px_0_0_var(--color-black)] dark:shadow-[4px_4px_0_0_var(--color-zinc-200)] inline-flex items-center gap-2">
                    Navigate <KeyboardShortcut keys={['Cmd', 'K']} />
                </span>
            </div>
        </>
    );
}
