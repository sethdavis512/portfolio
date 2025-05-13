import { ExternalLinkIcon } from 'lucide-react';

import { PostgresLogo } from '~/components/PostgresLogo';
import { RailwayLogo } from '~/components/RailwayLogo';
import { ReactRouterLogo } from '~/components/ReactRouterLogo';
import Heading from '~/components/Heading';
import PrismaLogo from '~/components/PrismaLogo';
import ReactLogo from '~/components/ReactLogo';
import truck1 from '~/images/truck-1.jpg';
import { ButtonLink } from '~/components/ButtonLink';

export default function TWSStarterRoute() {
    return (
        <>
            <Heading as="h1" size="1" className="mb-8">
                tws-starter
            </Heading>
            <div className="flex gap-8">
                <div>
                    <div className="flex gap-4 mb-8">
                        <div>
                            <ReactLogo className="w-12 h-12" />
                        </div>
                        <div>
                            <ReactRouterLogo className="w-12 h-12" />
                        </div>
                        <div>
                            <PrismaLogo className="w-12 h-12" />
                        </div>
                        <div>
                            <PostgresLogo className="w-12 h-12" />
                        </div>
                        <div>
                            <RailwayLogo className="w-12 h-12" />
                        </div>
                    </div>
                    <p className="mb-4">
                        This is a starter project for{' '}
                        <a
                            href="https://tws.dev"
                            target="_blank"
                            rel="noreferrer"
                        >
                            TWS
                        </a>
                        . It is a full stack web application built with React,
                        React Router, Prisma, Postgres, and hosted on Railway.
                    </p>
                    <p className="mb-8">Check it out!</p>
                    <ButtonLink
                        to="https://github.com/tech-with-seth/tws-starter"
                        iconAfter={<ExternalLinkIcon />}
                    >
                        Go to the repo
                    </ButtonLink>
                </div>
                <div>
                    <img src={truck1} className="rounded-xl" />
                </div>
            </div>
        </>
    );
}
