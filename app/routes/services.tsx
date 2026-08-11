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
            'Productized services from Seth Davis: custom CLI tools and Contentful-powered websites on React Router 7. Fixed scope, fixed price.',
        ogUrl: 'https://sethdavis.tech/services'
    });
}

export default function ServicesRoute() {
    return (
        <>
            <div className="border-b-2 border-black dark:border-zinc-200 pb-3 mb-8 font-mono text-xs uppercase tracking-[0.25em] text-zinc-600 dark:text-zinc-400">
                Services — Fixed scope, fixed price
            </div>
            <Heading as="h1" className="text-5xl md:text-7xl mb-6">
                Two things I build,{' '}
                <span className="italic text-primary-600 dark:text-primary-400">
                    on a fixed price.
                </span>
            </Heading>
            <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-3xl mb-4">
                Developer CLI tools and Contentful-powered websites. Each one
                is a productized engagement with a written scope and a fixed
                cost, so you know what you're getting before you sign.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl mb-12">
                Need something else?{' '}
                <Linky href="https://tidycal.com/sethdavis512/meet-and-greet">
                    Book a scope call
                </Linky>{' '}
                and we can figure out whether it's a fit.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
                {serviceOffers.map((offer) => (
                    <Link
                        key={offer.slug}
                        to={`/services/${offer.slug}`}
                        className="group border-2 border-black dark:border-zinc-200 transition-shadow duration-150 hover:shadow-[8px_8px_0_0_var(--color-black)] dark:hover:shadow-[8px_8px_0_0_var(--color-zinc-200)] p-6 flex flex-col"
                    >
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span className="inline-flex items-center gap-1.5 bg-primary-400 text-black px-2.5 py-1 font-mono text-xs uppercase tracking-[0.12em]">
                                <Tag className="size-3" />
                                From {offer.startingPrice}
                            </span>
                        </div>
                        <Heading as="h2" size="3" className="mb-3">
                            {offer.shortTitle}
                        </Heading>
                        <p className="text-zinc-700 dark:text-zinc-300 mb-4 flex-1">
                            {offer.tagline}
                        </p>
                        <p className="text-sm text-zinc-500 mb-5">
                            {offer.proofLine}
                        </p>
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-black dark:text-white font-semibold">
                            See offer details
                            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </span>
                    </Link>
                ))}
            </div>
        </>
    );
}
