import { Link } from 'react-router';
import { getAllDecks } from '~/content';
import { Card } from '~/components/Card';
import { Heading } from '~/components/Heading';
import { Linky } from '~/components/Linky';
import { generateRouteMeta } from '~/utils/seo';
import type { Route } from './+types/slides-index';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Slides',
        descriptionContent:
            'Talks and decks by Seth Davis — MDX slideshows with keyboard navigation.',
        ogUrl: 'https://sethdavis.tech/slides'
    });
}

export function loader() {
    const decks = getAllDecks().map((d) => ({
        slug: d.slug,
        title: d.meta.title,
        description: d.meta.description ?? null,
        slideCount: d.slides.length
    }));
    return { decks };
}

export default function SlidesIndexRoute({
    loaderData
}: Route.ComponentProps) {
    return (
        <>
            <div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3 mb-4">
                <Heading as="h1" className="mb-0">
                    Slides
                </Heading>
                <span className="text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400">
                    Talks & decks
                </span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                Decks and talk walkthroughs. Use ← and → to navigate once you're
                inside a deck.
            </p>
            <div className="flex flex-col gap-3">
                {loaderData.decks.length > 0 ? (
                    loaderData.decks.map((deck) => (
                        <Linky
                            key={deck.slug}
                            to={`/slides/${deck.slug}`}
                            className="block no-underline hover:bg-transparent hover:text-current dark:hover:text-current"
                        >
                            <Card className="w-full group transition-shadow duration-150 hover:border-primary-500/60">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1 min-w-0">
                                        <Heading as="h3" size="4">
                                            {deck.title}
                                        </Heading>
                                        {deck.description && (
                                            <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1 line-clamp-2">
                                                {deck.description}
                                            </p>
                                        )}
                                        <p className="text-zinc-500 text-xs mt-3 font-medium tracking-wide">
                                            {deck.slideCount} slide
                                            {deck.slideCount === 1 ? '' : 's'}
                                        </p>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-0.5 transition-all duration-200 shrink-0 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </Card>
                        </Linky>
                    ))
                ) : (
                    <p className="text-zinc-600 dark:text-zinc-400">No decks yet.</p>
                )}
            </div>
        </>
    );
}
