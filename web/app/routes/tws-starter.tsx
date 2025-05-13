import { PostgresLogo } from '~/components/PostgresLogo';
import { RailwayLogo } from '~/components/RailwayLogo';
import { ReactRouterLogo } from '~/components/ReactRouterLogo';
import Heading from '~/components/Heading';
import PrismaLogo from '~/components/PrismaLogo';
import ReactLogo from '~/components/ReactLogo';
import { ButtonLink } from '~/components/ButtonLink';
import Linky from '~/components/Linky';

import heroImage from '~/images/tws-starter-hero.png';

export default function TWSStarterRoute() {
    const logoClassName =
        'w-10 h-10 hover:fill-primary-500 dark:hover:fill-primary-400';
    return (
        <>
            <img
                src={heroImage}
                className="rounded-xl mb-8 border border-zinc-700"
            />
            <Heading as="h1" size="1" className="mb-8">
                tws-starter
            </Heading>
            <div className="md:grid md:grid-cols-[auto_1fr] md:gap-8">
                <div className="mb-8 md:mb-0">
                    <p>
                        This starter project for{' '}
                        <Linky to="https://github.com/tech-with-seth">
                            Tech with Seth
                        </Linky>{' '}
                        is a full stack web application built with React, React
                        Router, Prisma, Postgres, and hosted on Railway. It
                        integrates popular technologies to provide a solid
                        foundation for building modern web applications, saving
                        time and effort with a pre-configured environment that
                        lets developers focus on features rather than
                        infrastructure.
                    </p>
                </div>
                <div className="">
                    <Heading as="h3" size="3" className="mb-6">
                        Learn more
                    </Heading>
                    <div className="flex gap-4 mb-8">
                        <div>
                            <Linky external to="https://react.dev/">
                                <ReactLogo className={logoClassName} />
                            </Linky>
                        </div>
                        <div>
                            <Linky external to="https://reactrouter.com/home">
                                <ReactRouterLogo className={logoClassName} />
                            </Linky>
                        </div>
                        <div>
                            <Linky external to="https://www.prisma.io/">
                                <PrismaLogo className={logoClassName} />
                            </Linky>
                        </div>
                        <div>
                            <Linky external to="https://www.postgresql.org/">
                                <PostgresLogo className={logoClassName} />
                            </Linky>
                        </div>
                        <div>
                            <Linky to="https://railway.com/">
                                <RailwayLogo className={logoClassName} />
                            </Linky>
                        </div>
                    </div>
                    <ButtonLink to="https://github.com/tech-with-seth/tws-starter">
                        View the code
                    </ButtonLink>
                </div>
            </div>
        </>
    );
}
