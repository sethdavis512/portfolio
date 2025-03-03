import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Card, Heading, Inset, Link as RadixLink } from '@radix-ui/themes';
import { formatToUSD, getUniqueId } from '~/utils/main';

import Divider from '~/components/Divider';

import truck1 from '~/images/truck-1.jpg';
import truck2 from '~/images/truck-2-768x404.jpg';
import floorMats from '~/images/f150-floor-mats.jpg';
import antenna from '~/images/antenna.jpg';

export async function loader() {
    return json({
        upgrades: [
            {
                name: 'Overpriced short antenna',
                url: 'https://roninfactory.com/collections/ford',
                price: 32,
                img: antenna,
            },
            {
                name: 'WeatherTech floor mats',
                url: 'https://www.weathertech.com/ford/2023/f-150/floorliner-hp/',
                price: 225,
                img: floorMats,
            },
            {
                name: 'Diamondback bed cover',
                url: 'https://diamondbackcovers.com/products/diamondback-switchback-ford-f-150-2021-up?variant=40259006955619',
                price: 1899,
                img: truck2,
            },
        ].map((upgrade) => ({
            ...upgrade,
            id: getUniqueId('upgrade'),
        })),
    });
}

export default function TruckRoute() {
    const { upgrades } = useLoaderData<typeof loader>();

    return (
        <>
            <Heading as="h1" className="mb-4">
                Truck stuff
            </Heading>
            <p className="mb-4">{`I like trucks, plain and simple. No drama, no brand wars—just good ol’ horsepower and hauling. Wanna roll in a Chevy? Go for it. Prefer a Dodge? Have at it. Me? I like Ford, so that’s what I drive 😎`}</p>
            <Heading as="h2" className="mb-4">
                2023 Ford F-150 XLT SuperCrew 2.7L V6 EcoBoost Sport (302A)
            </Heading>
            <p className="mb-4">
                Trailer Tow Package • Interior Work Surface • Pro Power Onboard
                (2.7kw)
                <br />
                Bed Utility Package • 360 Degree Camera Package
            </p>
            <img
                src={truck1}
                alt="Black 2023 Ford F-150"
                className="rounded-lg"
            />
            <Divider className="my-8" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                <div className="col-span-full">
                    <Heading as="h2">Upgrades</Heading>
                </div>
                {upgrades.map((upgrade) => (
                    <div key={upgrade.id} className="col-span-1 md:col-span-4">
                        <RadixLink href={upgrade.url}>
                            <Card className="flex flex-col border border-transparent hover:border hover:border-green-500">
                                <Inset
                                    clip="padding-box"
                                    side="top"
                                    pb="current"
                                >
                                    <img
                                        src={upgrade.img}
                                        alt="F-150 bed cover"
                                        className="block h-[140px] w-full hover:no-underline"
                                        style={{
                                            display: 'block',
                                            objectFit: 'cover',
                                            width: '100%',
                                            height: 140,
                                            backgroundColor: 'var(--gray-5)',
                                        }}
                                    />
                                </Inset>
                                <Heading
                                    as="h3"
                                    className="mb-2 hover:no-underline"
                                >
                                    {formatToUSD(upgrade.price)}
                                </Heading>
                                <p className="block hover:no-underline">
                                    {`${upgrade.name}`}{' '}
                                </p>
                            </Card>
                        </RadixLink>
                    </div>
                ))}
            </div>
        </>
    );
}
