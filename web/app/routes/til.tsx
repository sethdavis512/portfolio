import { GetTilListDocument, type GetTilListQuery } from '~/generated/graphql';
import { client } from '~/utils/graphql.server';
import type { Route } from './+types/til';
import { Linky } from '~/components/Linky';
import { Card } from '~/components/Card';
import { Tag } from '~/components/Tag';
import { Heading } from '~/components/Heading';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'TIL',
        descriptionContent:
            'Short things I have learned — snippets, discoveries, and explanations from Seth Davis on web development, React, TypeScript, and more.',
        ogUrl: 'https://sethdavis.tech/til'
    });
}

export async function loader() {
    const { posts } = await client.request<GetTilListQuery>(GetTilListDocument);

    return { posts };
}

export default function TILRoute({ loaderData }: Route.ComponentProps) {
    return (
        <>
            <Heading as="h1" className="mb-2">
                TIL
            </Heading>
            <p className="text-zinc-400 mb-8">
                Short things I have learned — snippets, discoveries, and quick
                explanations.
            </p>
            <div className="flex flex-col gap-3">
                {loaderData.posts && loaderData.posts.length > 0 ? (
                    loaderData.posts.map((post) => (
                        <Linky key={post.id} to={`/til/${post.slug}`}>
                            <Card className="w-full group border border-zinc-800 hover:border-zinc-600 dark:hover:border-zinc-500 transition-colors duration-200 hover:bg-zinc-800/60 dark:hover:bg-zinc-800/60">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1 min-w-0">
                                        <Heading as="h3" size="4">
                                            {post.title}
                                        </Heading>
                                        {post.excerpt && (
                                            <p className="text-zinc-400 text-sm mt-1 line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                        )}
                                        {post.tags && post.tags.length > 0 && (
                                            <ul className="flex flex-wrap gap-2 mt-3">
                                                {post.tags.map((tag) => (
                                                    <li key={tag.id}>
                                                        <Tag>{tag.name}</Tag>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
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
                                </div>
                            </Card>
                        </Linky>
                    ))
                ) : (
                    <p className="text-zinc-400">
                        Nothing here yet — check back soon.
                    </p>
                )}
            </div>
        </>
    );
}
