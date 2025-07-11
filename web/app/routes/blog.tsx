import Heading from '~/components/Heading';
import {
    GetPublishedPostsDocument,
    type GetPublishedPostsQuery
} from '~/generated/graphql';
import { client } from '~/utils/graphql.server';
import type { Route } from './+types/blog';
import Card from '~/components/Card';
import Linky from '~/components/Linky';
import { formatToDate } from '~/utils/common';
import { Tag } from '~/components/Tag';

export async function loader() {
    try {
        const { posts } = await client.request<GetPublishedPostsQuery>(
            GetPublishedPostsDocument
        );

        return {
            posts
        };
    } catch (error) {
        console.error('Error in loader:', error);

        return { status: 'ERROR' };
    }
}

export default function BlogRoute({ loaderData }: Route.ComponentProps) {
    return (
        <>
            <Heading className="mb-8">Blog</Heading>
            {loaderData.posts && loaderData.posts.length > 0 ? (
                <div className="flex flex-col gap-4">
                    {loaderData.posts.map((post) => (
                        <Linky
                            to={`/blog/${post.slug}`}
                            className="w-full"
                            key={post.id}
                        >
                            <Card className="w-full">
                                <div className="flex gap-2 items-start mb-2">
                                    <div>
                                        <span className="text-xl">📝</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between">
                                            <Heading size="4">
                                                {post.title}
                                            </Heading>
                                            <Tag variant="muted">
                                                {formatToDate(
                                                    new Date(post.createdAt)
                                                )}
                                            </Tag>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                                    {post.excerpt}
                                </p>
                            </Card>
                        </Linky>
                    ))}
                </div>
            ) : (
                <Card className="w-full">
                    <p>No posts available.</p>
                </Card>
            )}
        </>
    );
}
