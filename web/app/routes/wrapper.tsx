import { ArrowLeft } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router';
import Flex from '~/components/Flex';
import HoverPanel from '~/components/HoverPanel';
import Logo from '~/components/Logo';
import { BorderStyles } from '~/constants';
import texasFlag from '~/images/flag-of-texas-small.svg';

export default function WrapperRoute() {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isInArticle = location.pathname.startsWith('/blog/');
    const isInPrompts = location.pathname.startsWith('/prompts/');

    return (
        <div className="mx-auto mb-20 grid h-full max-w-5xl grid-rows-[auto_1fr_auto] px-6 md:px-8">
            <div className="py-8 md:py-12">
                <Flex className="justify-between">
                    <Flex className="gap-6">
                        <div className="h-16">
                            <Link to="/" aria-label="Return to home page">
                                <Logo className="fill-zinc-700 dark:fill-white" />
                            </Link>
                        </div>
                        {!isHome && (
                            <HoverPanel
                                to={
                                    isInArticle
                                        ? '/blog'
                                        : isInPrompts
                                        ? '/prompts'
                                        : '/'
                                }
                                className="px-3 py-2"
                            >
                                <ArrowLeft />
                                Back to {isInArticle ? 'blog' : 'home'}
                            </HoverPanel>
                        )}
                    </Flex>
                </Flex>
            </div>
            <main>
                <Outlet />
            </main>
            <footer className="flex items-center justify-between py-12">
                <div className={`flex-grow ${BorderStyles.BOTTOM}`} />
                <Flex className="px-4 text-center">
                    <p className="inline-block">✌🏻 Made in Austin, TX </p>
                    <img className="h-5 w-5" src={texasFlag} alt="Texas flag" />
                </Flex>
                <div className={`flex-grow ${BorderStyles.BOTTOM}`} />
            </footer>
        </div>
    );
}
