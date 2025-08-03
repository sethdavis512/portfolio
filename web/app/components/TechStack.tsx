import { useCallback, type PropsWithChildren } from 'react';
import Linky from './Linky';
import { PostgresLogo } from './PostgresLogo';
import { ReactRouterLogo } from './ReactRouterLogo';
import ReactLogo from './ReactLogo';
import { KeystoneLogo } from './KeystoneLogo';
import { RailwayLogo } from './RailwayLogo';
import PrismaLogo from './PrismaLogo';

type StackElement =
    | 'keystone'
    | 'react'
    | 'react-router'
    | 'postgres'
    | 'prisma'
    | 'railway';

interface TechStackProps {
    icons?: Array<StackElement>;
}

export function TechStack({ icons }: PropsWithChildren<TechStackProps>) {
    const logoClassName =
        'w-10 h-10 fill-zinc-700 dark:fill-white hover:fill-primary-500 dark:hover:fill-primary-400';

    const hasIcon = useCallback(
        (icon: StackElement) => {
            return icons?.includes(icon);
        },
        [icons]
    );

    return (
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
            {hasIcon('keystone') && (
                <div>
                    <Linky external to="https://keystonejs.com/">
                        <KeystoneLogo className={logoClassName} />
                    </Linky>
                </div>
            )}
            {hasIcon('react') && (
                <div>
                    <Linky external to="https://react.dev/">
                        <ReactLogo className={logoClassName} />
                    </Linky>
                </div>
            )}
            {hasIcon('react-router') && (
                <div>
                    <Linky external to="https://reactrouter.com/home">
                        <ReactRouterLogo className={logoClassName} />
                    </Linky>
                </div>
            )}
            {hasIcon('prisma') && (
                <div>
                    <Linky external to="https://www.prisma.io/">
                        <PrismaLogo className={logoClassName} />
                    </Linky>
                </div>
            )}
            {hasIcon('postgres') && (
                <div>
                    <Linky external to="https://www.postgresql.org/">
                        <PostgresLogo className={logoClassName} />
                    </Linky>
                </div>
            )}
            {hasIcon('railway') && (
                <div>
                    <Linky to="https://railway.com/">
                        <RailwayLogo className={logoClassName} />
                    </Linky>
                </div>
            )}
        </div>
    );
}
