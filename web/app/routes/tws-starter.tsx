import { Heading } from '~/components/Heading';
import { Linky } from '~/components/Linky';

import { ExternalLinkIcon } from 'lucide-react';
import { Card } from '~/components/Card';
import { TechStackLogos } from '~/components/TechStackLogos';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'TWS Starter',
        descriptionContent:
            'A full-stack web application starter built with React Router 7, Prisma, PostgreSQL, and hosted on Railway. Provides a solid foundation for modern web development.'
    });
}

export default function TWSStarterRoute() {
    return (
        <>
            <img
                src="/tws-starter-hero.png"
                className="rounded-lg mb-8 border border-zinc-700"
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
                    <Heading as="h3" size="3" className="mb-8">
                        Technologies
                    </Heading>
                    <TechStackLogos
                        logos={[
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
