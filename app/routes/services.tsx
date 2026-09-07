import { ArrowRight } from 'lucide-react';
import { Link, redirect } from 'react-router';

import { Button } from '~/components/Button';
import { Heading } from '~/components/Heading';
import { Linky } from '~/components/Linky';
import { generateRouteMeta } from '~/utils/seo';
import { SCOPE_CALL_URL } from '~/constants';
import { serviceOffers } from '~/content/data/service-offers';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Services',
        descriptionContent:
            'Headless CMS frontend development from Seth Davis: Contentful and Sanity sites with typed queries, live preview, and server rendering. Book a free scope call.',
        ogUrl: 'https://sethdavis.tech/services'
    });
}

/**
 * With a single offer, an index listing one card is a dead click. Delete this
 * loader (and restore '/services' to staticPaths in react-router.config.ts) to
 * bring the index grid back.
 */
export function loader() {
    const [only] = serviceOffers;
    if (serviceOffers.length === 1 && only) {
        throw redirect(`/services/${only.slug}`, 302);
    }
    return null;
}

export default function ServicesRoute() {
    return (
        <>
            <p className="text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400 mb-4">
                Services
            </p>
            <Heading as="h1" className="text-5xl md:text-7xl mb-6">
                Frontends for teams on{' '}
                <span className="italic text-primary-600 dark:text-primary-400">
                    Contentful and Sanity.
                </span>
            </Heading>
            <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-3xl mb-4">
                Your editors keep the CMS they chose. I build the typed,
                server-rendered frontend on top of it. Every engagement starts
                with a free scope call.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl mb-8">
                Not sure it is a fit?{' '}
                <Linky href={SCOPE_CALL_URL}>
                    Book the call
                </Linky>{' '}
                and we'll figure it out together in 30 minutes.
            </p>
            <div className="mb-12 flex">
                <Button
                    href={SCOPE_CALL_URL}
                    size="lg"
                    iconAfter={<ArrowRight className="size-4" />}
                >
                    Book a scope call
                </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                {serviceOffers.map((offer) => (
                    <Link
                        key={offer.slug}
                        to={`/services/${offer.slug}`}
                        className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-colors duration-200 hover:border-primary-500/60 p-6 flex flex-col"
                    >
                        <p className="text-xs font-medium tracking-wide text-primary-700 dark:text-primary-300 mb-4">
                            {offer.kind === 'retainer'
                                ? 'Ongoing retainer'
                                : 'Project engagement'}
                        </p>
                        <Heading as="h2" size="3" className="mb-3">
                            {offer.shortTitle}
                        </Heading>
                        <p className="text-zinc-700 dark:text-zinc-300 mb-4 flex-1">
                            {offer.tagline}
                        </p>
                        <p className="text-sm text-zinc-500 mb-5">
                            {offer.proofLine}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-700 dark:text-primary-300">
                            See details
                            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </span>
                    </Link>
                ))}
            </div>
        </>
    );
}
