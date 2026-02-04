import { Heading } from '~/components/Heading';
import { Linky } from '~/components/Linky';

import { Card } from '~/components/Card';
import { ExternalLinkIcon } from 'lucide-react';
import { TechStackLogos } from '~/components/TechStackLogos';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'TWS CMS',
        descriptionContent:
            'A headless content management system built with Keystone.js, React Router 7, PostgreSQL, and Railway. Designed to handle users, customers, posts, and tags with a modern tech stack.',
        ogUrl: 'https://sethdavis.tech/tws-cms'
    });
}

export default function TWSCMSRoute() {
    return (
        <>
            {/* TODO: Add tws-cms-hero image */}
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
                    <TechStackLogos
                        logos={[
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
