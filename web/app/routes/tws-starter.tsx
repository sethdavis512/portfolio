import { PostgresLogo } from '~/components/PostgresLogo';
import { RailwayLogo } from '~/components/RailwayLogo';
import { ReactRouterLogo } from '~/components/ReactRouterLogo';
import Heading from '~/components/Heading';
import PrismaLogo from '~/components/PrismaLogo';
import ReactLogo from '~/components/ReactLogo';
import { ButtonLink } from '~/components/ButtonLink';
import Linky from '~/components/Linky';

import heroImage from '~/images/tws-starter-hero.png';
import { ExternalLinkIcon } from 'lucide-react';
import Card from '~/components/Card';
import { TechStack } from '~/components/TechStack';

export default function TWSStarterRoute() {
    const logoClassName =
        'w-10 h-10 fill-zinc-700 dark:fill-white hover:fill-primary-500 dark:hover:fill-primary-400';
    return (
        <>
            <img
                src={heroImage}
                className="rounded-xl mb-8 border border-zinc-700"
            />
            <Heading as="h1" size="1" className="mb-8">
                tws-starter
            </Heading>
            <div className="md:grid md:grid-cols-[2fr_1fr] md:gap-8">
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
                        Technologies
                    </Heading>
                    <TechStack
                        icons={[
                            'react',
                            'react-router',
                            'prisma',
                            'postgres',
                            'railway'
                        ]}
                    />
                    <div className="flex flex-col gap-4">
                        <Linky
                            external
                            to="https://github.com/tech-with-seth/tws-starter"
                        >
                            <Card className="flex items-center gap-2 w-full">
                                View the code{' '}
                                <ExternalLinkIcon className="w-4 h-4" />
                            </Card>
                        </Linky>
                        <Linky external to="https://starter.sethdavis.tech/">
                            <Card className="flex items-center gap-2 w-full">
                                View prototype{' '}
                                <ExternalLinkIcon className="w-4 h-4" />
                            </Card>
                        </Linky>
                    </div>
                </div>
            </div>
        </>
    );
}
