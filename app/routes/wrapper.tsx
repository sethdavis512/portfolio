import { cx } from '~/cva.config';
import { MenuIcon } from 'lucide-react';
import { useReducer } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router';
import { Button } from '~/components/Button';
import { Flex } from '~/components/Flex';
import { KeyboardShortcut } from '~/components/KeyboardShortcut';
import { Logo } from '~/components/logos/SethDavisLogo';

const sharedLinkClasses = `text-3xl md:text-sm font-medium`;

interface NavItem {
    type: 'internal' | 'external';
    to: string;
    label: string;
    ariaLabel: string;
    activePaths?: string[];
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
        to: '/writing',
        label: 'Talks & Writing',
        ariaLabel: 'Browse my talks and writing',
        activePaths: ['/til', '/slides']
    },
    {
        type: 'internal',
        to: '/services',
        label: 'Services',
        ariaLabel: 'View my services and offerings'
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
    activePaths?: string[];
}

function AppNavLink({
    to,
    children,
    ariaLabel,
    onClick,
    activePaths
}: AppNavLinkProps) {
    const { pathname } = useLocation();
    const matchesRelatedPath = activePaths?.some(
        (path) => pathname === path || pathname.startsWith(`${path}/`)
    );

    return (
        <NavLink
            aria-label={ariaLabel}
            className={({ isActive: isExactMatch }) => {
                const isActive = isExactMatch || Boolean(matchesRelatedPath);
                return cx(
                    sharedLinkClasses,
                    `transition-colors duration-150 py-2 px-3`,
                    `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ring-offset-white dark:focus-visible:ring-primary-400 dark:ring-offset-zinc-950`,
                    isActive &&
                        `bg-primary-500/15 text-primary-800 dark:text-primary-300 rounded-lg`,
                    !isActive &&
                        `text-zinc-600 dark:text-zinc-400 rounded-lg hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800/70 dark:hover:text-zinc-100`
                );
            }}
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
                `transition-colors duration-150 py-2 px-3 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800/70 dark:hover:text-zinc-100`,
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
            <header className="py-6 border-b border-zinc-200 dark:border-zinc-800">
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
                                            activePaths={item.activePaths}
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
                            <li className="ml-auto">
                                <Button
                                    to="/contact"
                                    color="primary"
                                    aria-label="Get in touch with me"
                                >
                                    Contact
                                </Button>
                            </li>
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
                                                activePaths={item.activePaths}
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
                                    <span
                                        className="self-start"
                                        onClick={toggleIsOpen}
                                    >
                                        <Button
                                            to="/contact"
                                            color="primary"
                                            size="lg"
                                            aria-label="Get in touch with me"
                                        >
                                            Contact
                                        </Button>
                                    </span>
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
            <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-16">
                <Container className="py-8">
                    <Flex className="items-center justify-between text-xs text-zinc-500">
                        <Flex className="items-center gap-4">
                            <span>Seth Davis</span>
                            <a
                                href="https://techwithseth.com/digital-goods"
                                className="hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                            >
                                Digital Goods
                            </a>
                        </Flex>
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
                <span className="rounded-lg bg-white dark:bg-zinc-900 py-2.5 px-4 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs shadow-sm inline-flex items-center gap-2">
                    Navigate <KeyboardShortcut keys={['Cmd', 'K']} />
                </span>
            </div>
        </>
    );
}
