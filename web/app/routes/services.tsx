import invariant from 'tiny-invariant';
import { Heading } from '~/components/Heading';
import {
    GetPackagesDocument,
    type GetPackagesQuery
} from '~/generated/graphql';
import { client } from '~/utils/graphql.server';
import type { Route } from './+types/services';
import { Card } from '~/components/Card';
import { cx } from 'cva.config';
import { ComingSoonCard } from './products';
import { Linky } from '~/components/Linky';
import { ArrowRight } from 'lucide-react';

export async function loader() {
    const { packages } =
        await client.request<GetPackagesQuery>(GetPackagesDocument);
    invariant(packages, 'No packages found');

    return {
        packages
    };
}

export default function ServicesRoute({ loaderData }: Route.ComponentProps) {
    return (
        <>
            <Heading as="h1">Services</Heading>
            <p className="mb-8">
                I offer a range of services to help businesses and individuals
                leverage the power of AI and technology. Whether you're looking
                for custom software development, AI consulting, or training
                workshops, I can provide tailored solutions to meet your needs.
                With a focus on practical applications and measurable results,
                my services are designed to help you achieve your goals and stay
                ahead in the rapidly evolving tech landscape.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
                {loaderData.packages.map((pkg) => (
                    <div key={pkg.id}>
                        <Card
                            className={cx(
                                'p-6 h-full flex flex-col justify-between items-start gap-4 min-h-100 bg-linear-to-br from-zinc-800 to-zinc-900'
                            )}
                        >
                            <div className="self-start items-start">
                                <div className="bg-green-700 inline-block rounded-full py-1 px-2 mb-4">
                                    <p className="font-bold">
                                        ${pkg.price}
                                        {pkg.type === 'HOURLY' ? ' / hr' : ''}
                                    </p>
                                </div>
                                <div>
                                    <Heading>{pkg.name}</Heading>
                                    <p className="mb-4">{pkg.description}</p>
                                    <ul className="flex flex-col gap-4">
                                        {pkg.offerings?.map((offering) => (
                                            <li key={offering.id}>
                                                <p className="mb-2">
                                                    <strong>
                                                        {offering.name}
                                                    </strong>
                                                </p>
                                                <p>{offering.description}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="self-end pt-4">
                                <Linky
                                    className="underline"
                                    external
                                    to={`mailto:sethdavis512@gmail.com?subject=Inquiry about ${pkg.name} service&body=Hi Seth, I am interested in your ${pkg.name} service. Thank you!`}
                                >
                                    Inquire
                                    <ArrowRight className="w-4 h-4" />
                                </Linky>
                            </div>
                        </Card>
                    </div>
                ))}
                {loaderData.packages.length % 2 > 0 && <ComingSoonCard />}
            </div>
        </>
    );
}
