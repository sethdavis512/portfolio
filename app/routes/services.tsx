import { ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router';

import { Heading } from '~/components/Heading';
import { Linky } from '~/components/Linky';
import { generateRouteMeta } from '~/utils/seo';
import { serviceOffers } from '~/content/data/service-offers';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Services',
        descriptionContent:
            'Productized services from Seth Davis: custom CLI tools, image and media pipelines, and marketing sites for developers. Fixed scope, fixed price.',
        ogUrl: 'https://sethdavis.tech/services'
    });
}

export default function ServicesRoute() {
    return (
        <>
            <Heading as="h1" className="text-4xl md:text-6xl font-black mb-6">
                Services
            </Heading>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mb-4">
                Fixed-scope engagements I deliver over and over, so you know exactly
                what you get and when.
            </p>
            <p className="text-zinc-400 max-w-3xl mb-12">
                Need something else?{' '}
                <Linky href="https://tidycal.com/sethdavis512/meet-and-greet">
                    Book a scope call
                </Linky>{' '}
                and we can figure out whether it's a fit.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {serviceOffers.map((offer) => (
                    <Link
                        key={offer.slug}
                        to={`/services/${offer.slug}`}
                        className="group rounded-xl bg-zinc-900 border border-zinc-800 hover:border-primary-500/50 transition-colors duration-200 p-6 flex flex-col"
                    >
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-500/15 text-primary-300 px-2.5 py-0.5 text-xs font-medium">
                                <Tag className="size-3" />
                                From {offer.startingPrice}
                            </span>
                        </div>
                        <Heading as="h2" size="3" className="mb-3">
                            {offer.shortTitle}
                        </Heading>
                        <p className="text-zinc-300 mb-4 flex-1">
                            {offer.tagline}
                        </p>
                        <p className="text-sm text-zinc-500 mb-5">
                            {offer.proofLine}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-primary-400 group-hover:text-primary-300 font-medium">
                            See offer details
                            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </span>
                    </Link>
                ))}
            </div>
        </>
    );
}
