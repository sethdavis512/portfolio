import Heading from '~/components/Heading';
import Linky from '~/components/Linky';

import heroImage from '~/images/tws-cms-hero.png';
import Card from '~/components/Card';
import { ExternalLinkIcon } from 'lucide-react';
import { TechStack } from '~/components/TechStack';

export function meta() {
    return [
        { title: `CMS Stack | Seth Davis' Portfolio` },
        {
            name: 'description',
            content: `Explore the TWS content management system setup of Seth Davis, a skilled frontend engineer with expertise in React, web development, and more.`
        }
    ];
}

export default function TWSCMSRoute() {
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
                    <Heading as="h3" size="3" className="mb-8">
                        Technologies
                    </Heading>
                    <TechStack
                        icons={[
                            'keystone',
                            'react',
                            'react-router',
                            'postgres',
                            'railway'
                        ]}
                    />
                    <div className="flex flex-col gap-4">
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
