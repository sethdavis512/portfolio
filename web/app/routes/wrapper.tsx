import { ArrowLeft } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router';
import Flex from '~/components/Flex';
import Linky from '~/components/Linky';
import Logo from '~/components/Logo';
import { BorderStyles } from '~/constants';
import texasFlag from '~/images/flag-of-texas-small.svg';

export default function WrapperRoute() {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isInArticle = location.pathname.startsWith('/blog/');
    const isInPrompts = location.pathname.startsWith('/prompts/');

    return (
        <div className="mx-auto mb-16 sm:mb-20 max-w-5xl px-4 sm:px-6 md:px-8">
            <div className="py-6 sm:py-8 md:py-12">
                <Flex className="justify-between">
                    <Flex className="gap-4 sm:gap-6">
                        <div className="h-16">
                            <Link to="/" aria-label="Return to home page">
                                <Logo className="fill-zinc-700 dark:fill-white" />
                            </Link>
                        </div>
                        {!isHome && (
                            <Linky
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
                                Back to{' '}
                                {isInArticle
                                    ? 'blog'
                                    : isInPrompts
                                    ? 'prompts'
                                    : 'home'}
                            </Linky>
                        )}
                    </Flex>
                </Flex>
            </div>
            <main className="min-w-0 overflow-x-auto">
                <Outlet />
            </main>
            <footer className="flex items-center justify-between py-8 sm:py-12">
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
