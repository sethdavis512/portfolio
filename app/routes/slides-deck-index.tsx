import { Link } from 'react-router';
import { Button } from '~/components/Button';
import { Card } from '~/components/Card';
import { Heading } from '~/components/Heading';
import { Linky } from '~/components/Linky';
import { Tag } from '~/components/Tag';
import { getDeck, getFirstSlideId } from '~/content';
import { generateRouteMeta } from '~/utils/seo';
import type { Route } from './+types/slides-deck-index';

export function meta({ loaderData }: Route.MetaArgs) {
    const title = loaderData?.title ?? 'Slides';
    return generateRouteMeta({
        pageTitle: title,
        descriptionContent:
            loaderData?.description ??
            'A slideshow by Seth Davis.',
        ogUrl: loaderData
            ? `https://sethdavis.tech/slides/${loaderData.slug}`
            : 'https://sethdavis.tech/slides'
    });
}

export function loader({ params }: Route.LoaderArgs) {
    const deck = getDeck(params.deckId!);
    if (!deck) {
        throw new Response('Not Found', { status: 404 });
    }

    const firstSlideId = getFirstSlideId(deck.slug);
    if (!firstSlideId) {
        throw new Response('Not Found', { status: 404 });
    }

    return {
        slug: deck.slug,
        title: deck.meta.title,
        description: deck.meta.description ?? null,
        updatedAt: deck.meta.updatedAt ?? null,
        tags: deck.meta.tags ?? [],
        firstSlideId,
        slides: deck.slides.map((s, i) => ({
            id: s.id,
            title: s.title,
            position: i + 1
        }))
    };
}

function formatDuration(slideCount: number) {
    const seconds = slideCount * 15;
    if (seconds < 60) return `~${seconds}s`;
    const minutes = Math.round(seconds / 60);
    return `~${minutes} min`;
}

export default function SlidesDeckIndexRoute({
    loaderData
}: Route.ComponentProps) {
    const { slug, title, description, updatedAt, tags, firstSlideId, slides } =
        loaderData;

    return (
        <>
            <div className="mb-10">
                <Linky to="/slides" className="text-sm text-zinc-500">
                    ← All slides
                </Linky>
            </div>

            <div className="mb-10">
                <Heading as="h1" className="mb-4">
                    {title}
                </Heading>
                {description && (
                    <p className="text-xl text-zinc-300 max-w-2xl mb-6">
                        {description}
                    </p>
                )}
                <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 mb-8">
                    <span className="font-mono">
                        {slides.length} slide{slides.length === 1 ? '' : 's'}
                    </span>
                    <span className="text-zinc-700">·</span>
                    <span className="font-mono">
                        {formatDuration(slides.length)}
                    </span>
                    {updatedAt && (
                        <>
                            <span className="text-zinc-700">·</span>
                            <span className="font-mono">Updated {updatedAt}</span>
                        </>
                    )}
                </div>
                {tags.length > 0 && (
                    <ul className="flex flex-wrap gap-2 mb-8">
                        {tags.map((tag) => (
                            <li key={tag}>
                                <Tag>{tag}</Tag>
                            </li>
                        ))}
                    </ul>
                )}
                <Button size="lg" to={`/slides/${slug}/${firstSlideId}`}>
                    Start slideshow →
                </Button>
            </div>

            <div>
                <Heading as="h2" size="3" className="mb-4">
                    Outline
                </Heading>
                <ol className="flex flex-col gap-2">
                    {slides.map((slide) => (
                        <li key={slide.id}>
                            <Link
                                to={`/slides/${slug}/${slide.id}`}
                                className="block group"
                            >
                                <Card className="w-full border border-zinc-800 hover:border-zinc-600 transition-colors duration-200 hover:bg-zinc-800/60">
                                    <div className="flex items-center gap-4">
                                        <span className="font-mono text-sm text-zinc-500 tabular-nums w-8">
                                            {String(slide.position).padStart(
                                                2,
                                                '0'
                                            )}
                                        </span>
                                        <span className="flex-1 text-zinc-100 group-hover:text-white transition-colors">
                                            {slide.title}
                                        </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
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
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
}
