import { ArrowLeft } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router';
import { Button } from '~/components/Button';
import { ButtonLink } from '~/components/ButtonLink';
import Flex from '~/components/Flex';
import HoverPanel from '~/components/HoverPanel';
import Logo from '~/components/Logo';
import { BORDER_BOTTOM } from '~/constants';
import texasFlag from '~/images/flag-of-texas-small.svg';

export default function WrapperRoute() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="mx-auto mb-20 grid h-full max-w-5xl grid-rows-[auto_1fr_auto] px-6 md:px-8">
            <div className="py-8 md:py-12">
                <Flex className="justify-between">
                    <Flex className="gap-4">
                        <div className="h-16">
                            <Link to="/" aria-label="Return to home page">
                                <Logo className="fill-zinc-600 dark:fill-white" />
                            </Link>
                        </div>
                        {!isHome && (
                            <HoverPanel to="/" className="px-3 py-2">
                                <ArrowLeft />
                                Back to home
                            </HoverPanel>
                        )}
                    </Flex>
                </Flex>
            </div>
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
