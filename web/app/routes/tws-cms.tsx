import { PostgresLogo } from '~/components/PostgresLogo';
import { RailwayLogo } from '~/components/RailwayLogo';
import { ReactRouterLogo } from '~/components/ReactRouterLogo';
import Heading from '~/components/Heading';
import ReactLogo from '~/components/ReactLogo';
import { ButtonLink } from '~/components/ButtonLink';
import Linky from '~/components/Linky';

import heroImage from '~/images/tws-cms-hero.png';
import { KeystoneLogo } from '~/components/KeystoneLogo';
import Card from '~/components/Card';
import { ExternalLinkIcon } from 'lucide-react';

export default function TWSCMSRoute() {
    const logoClassName =
        'w-10 h-10 hover:fill-primary-500 dark:hover:fill-primary-400';
    return (
        <>
            <img
                src={heroImage}
                className="rounded-xl mb-8 border border-zinc-700"
            />
            <Heading as="h1" size="1" className="mb-8">
                tws-cms
            </Heading>
            <div className="md:grid md:grid-cols-[2fr_1fr] md:gap-8">
                <div className="mb-12 md:mb-0 space-y-4">
                    <p>
                        A headless CMS project that is in its early stages of
                        development. This project leverages powerful
                        technologies such as Keystone for managing content,
                        React Router for navigation, Postgres as the database,
                        and Railway for deployment and infrastructure.
                    </p>
                    <p>
                        The CMS is designed to handle essential entities like
                        users, customers, posts, and tags. For instance, users
                        can author posts, which can be tagged for better
                        organization. Customers are also part of the system,
                        making it versatile for various use cases.
                    </p>
                    <p>
                        As the project evolves, more features and refinements
                        will be added. Stay tuned for updates and feel free to
                        explore the codebase to see how it all comes together!
                    </p>
                </div>
                <div>
                    <Heading as="h3" size="3" className="mb-6">
                        Technologies
                    </Heading>
                    <div className="flex gap-4 mb-8">
                        <div>
                            <Linky external to="https://keystonejs.com/">
                                <KeystoneLogo className={logoClassName} />
                            </Linky>
                        </div>
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
                    <div className="flex flex-col gap-4">
                        {/* <Linky
                            external
                            to="https://github.com/tech-with-seth/tws-cms"
                        >
                            <Card className="flex items-center gap-2 w-full">
                                View the code{' '}
                                <ExternalLinkIcon className="w-4 h-4" />
                            </Card>
                        </Linky> */}
                        <Linky external to="https://cms.sethdavis.tech/">
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
