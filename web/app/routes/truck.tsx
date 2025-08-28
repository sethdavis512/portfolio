import Divider from '~/components/Divider';

import { formatToUSD, getUniqueId } from '~/utils/common';
import type { Route } from './+types/truck';
import Heading from '~/components/Heading';
import Card from '~/components/Card';

export function meta() {
    return [
        { title: `Truck | Seth Davis Portfolio` },
        {
            name: 'description',
            content: `Explore the truck stuff of Seth Davis, a skilled frontend engineer with expertise in React, web development, and more.`
        }
    ];
}

export async function loader() {
    return {
        upgrades: [
            {
                name: 'Overpriced short antenna',
                url: 'https://roninfactory.com/collections/ford',
                price: 32,
                img: '/antenna.jpg'
            },
            {
                name: 'WeatherTech floor mats',
                url: 'https://www.weathertech.com/ford/2023/f-150/floorliner-hp/',
                price: 225,
                img: '/f150-floor-mats.jpg'
            },
            {
                name: 'Diamondback bed cover',
                url: 'https://diamondbackcovers.com/products/diamondback-switchback-ford-f-150-2021-up?variant=40259006955619',
                price: 1899,
                img: '/truck-2-768x404.jpg'
            }
        ].map((upgrade) => ({
            ...upgrade,
            id: getUniqueId('upgrade')
        })),
        accessories: [
            {
                name: 'Napier Truck Tent',
                url: 'https://a.co/d/hnYnPZA',
                price: undefined,
                img: '/truck-tent.jpg'
            }
        ].map((accessory) => ({
            ...accessory,
            id: getUniqueId('accessory')
        }))
    };
}

export default function TruckRoute({ loaderData }: Route.ComponentProps) {
    return (
        <>
            <Heading as="h1" className="mb-4">
                Truck stuff
            </Heading>
            <p className="mb-4">{`I like trucks, plain and simple. No drama, no brand wars—just good ol’ horsepower and hauling. Wanna roll in a Chevy? Go for it. Prefer a Dodge? Have at it. Me? I like Ford 😎 I drive a:`}</p>
            <Heading as="h2" size="4" className="mb-4">
                2023 Ford F-150 XLT SuperCrew 2.7L V6 EcoBoost Sport (302A)
            </Heading>
            <p className="mb-4">
                Trailer Tow Package • Interior Work Surface • Pro Power Onboard
                (2.7kw) • Bed Utility Package • 360 Degree Camera Package
            </p>
            <img
                src="/truck-1.jpg"
                alt="Black 2023 Ford F-150"
                className="rounded-lg border border-zinc-300 dark:border-zinc-700"
            />
            <Divider className="my-8" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                <div className="col-span-full">
                    <Heading as="h2">Upgrades</Heading>
                </div>
                {loaderData.upgrades.map((upgrade) => (
                    <div key={upgrade.id} className="col-span-1 md:col-span-4">
                        <a href={upgrade.url} target="_blank" rel="noreferrer">
                            <Card className="flex flex-col border border-transparent hover:border hover:border-green-500 overflow-hidden">
                                <div className="-mx-4 -mt-4 mb-4">
                                    <img
                                        src={upgrade.img}
                                        alt="F-150 bed cover"
                                        className="block h-[140px] w-full hover:no-underline"
                                        style={{
                                            display: 'block',
                                            objectFit: 'cover',
                                            width: '100%',
                                            height: 140,
                                            backgroundColor: 'var(--gray-5)'
                                        }}
                                    />
                                </div>
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
                        </a>
                    </div>
                ))}
                <Divider className="my-8 col-span-full" />
                <div className="col-span-full">
                    <Heading as="h2">Accessories</Heading>
                </div>
                {loaderData.accessories.map((accessory) => (
                    <div
                        key={accessory.id}
                        className="col-span-1 md:col-span-4"
                    >
                        <a
                            href={accessory.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Card className="flex flex-col border border-transparent hover:border hover:border-green-500 overflow-hidden">
                                <div className="-mx-4 -mt-4 mb-4">
                                    <img
                                        src={accessory.img}
                                        alt="F-150 bed cover"
                                        className="block h-[140px] w-full hover:no-underline"
                                        style={{
                                            display: 'block',
                                            objectFit: 'cover',
                                            width: '100%',
                                            height: 140,
                                            backgroundColor: 'var(--gray-5)'
                                        }}
                                    />
                                </div>
                                {accessory.price && (
                                    <Heading
                                        as="h3"
                                        className="mb-2 hover:no-underline"
                                    >
                                        {formatToUSD(accessory.price)}
                                    </Heading>
                                )}
                                <p className="block hover:no-underline">
                                    {`${accessory.name}`}{' '}
                                </p>
                            </Card>
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
}
