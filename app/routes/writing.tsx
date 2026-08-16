import { getAllDecks, getPublishedTils } from '~/content';
import { Card } from '~/components/Card';
import { Heading } from '~/components/Heading';
import { Linky } from '~/components/Linky';
import { Tag } from '~/components/Tag';
import { generateRouteMeta } from '~/utils/seo';
import type { Route } from './+types/writing';

const TIL_PREVIEW_COUNT = 5;

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Talks & Writing',
        descriptionContent:
            'Talks, decks, and short field notes from Seth Davis on web development, React, TypeScript, and AI tooling.',
        ogUrl: 'https://sethdavis.tech/writing'
    });
}

export function loader() {
    const decks = getAllDecks().map((d) => ({
        slug: d.slug,
        title: d.meta.title,
        description: d.meta.description ?? null,
        slideCount: d.slides.length
    }));
    const tils = getPublishedTils();
    const posts = tils.slice(0, TIL_PREVIEW_COUNT).map((t) => ({
        id: t.slug,
        slug: t.frontmatter.slug,
        title: t.frontmatter.title,
        excerpt: t.frontmatter.excerpt,
        tags: t.frontmatter.tags.map((name) => ({ id: name, name }))
    }));
    return { decks, posts, totalTils: tils.length };
}

function ChevronIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-0.5 transition-all duration-200 shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
    );
}

export default function WritingRoute({ loaderData }: Route.ComponentProps) {
    const { decks, posts, totalTils } = loaderData;

    return (
        <>
            <div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3 mb-4">
                <Heading as="h1" className="mb-0">
                    Talks & Writing
                </Heading>
                <span className="text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400">
                    Decks & field notes
                </span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 mb-12">
                Talks I have given as navigable decks, and short notes on things
                I have learned while building.
            </p>
            <section className="mb-12">
                <div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3 mb-6">
                    <Heading as="h2" size="2" className="mb-0">
                        Talks
                    </Heading>
                    <Linky to="/slides" className="text-sm">
                        All slides →
                    </Linky>
                </div>
                <div className="flex flex-col gap-3">
                    {decks.length > 0 ? (
                        decks.map((deck) => (
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
                                                {deck.slideCount === 1
                                                    ? ''
                                                    : 's'}
                                            </p>
                                        </div>
                                        <ChevronIcon />
                                    </div>
                                </Card>
                            </Linky>
                        ))
                    ) : (
                        <p className="text-zinc-600 dark:text-zinc-400">
                            No decks yet.
                        </p>
                    )}
                </div>
            </section>
            <section>
                <div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3 mb-6">
                    <Heading as="h2" size="2" className="mb-0">
                        TIL
                    </Heading>
                    <Linky to="/til" className="text-sm">
                        {totalTils > TIL_PREVIEW_COUNT
                            ? `All ${totalTils} notes →`
                            : 'All notes →'}
                    </Linky>
                </div>
                <div className="flex flex-col gap-3">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <Linky
                                key={post.id}
                                to={`/til/${post.slug}`}
                                className="block no-underline hover:bg-transparent hover:text-current dark:hover:text-current"
                            >
                                <Card className="w-full group transition-shadow duration-150 hover:border-primary-500/60">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1 min-w-0">
                                            <Heading as="h3" size="4">
                                                {post.title}
                                            </Heading>
                                            {post.excerpt && (
                                                <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1 line-clamp-2">
                                                    {post.excerpt}
                                                </p>
                                            )}
                                            {post.tags.length > 0 && (
                                                <ul className="flex flex-wrap gap-2 mt-3">
                                                    {post.tags.map((tag) => (
                                                        <li key={tag.id}>
                                                            <Tag>{tag.name}</Tag>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                        <ChevronIcon />
                                    </div>
                                </Card>
                            </Linky>
                        ))
                    ) : (
                        <p className="text-zinc-600 dark:text-zinc-400">
                            Nothing here yet — check back soon.
                        </p>
                    )}
                </div>
            </section>
        </>
    );
}
