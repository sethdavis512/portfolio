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

export function meta() {
    return [
        { title: `Blog | Seth Davis' Portfolio` },
        {
            name: 'description',
            content: `Explore insights and discussions on web development, React Router, and more.`
        }
    ];
}

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
            <Heading as="h1" className="mb-6 sm:mb-8">
                Blog
            </Heading>
            {loaderData.posts && loaderData.posts.length > 0 ? (
                <div className="flex flex-col gap-3 sm:gap-4">
                    {loaderData.posts.map((post) => (
                        <Linky
                            to={`/blog/${post.slug}`}
                            className="w-full"
                            key={post.id}
                        >
                            <Card className="w-full">
                                <div className="flex flex-col gap-2 items-start mb-2 sm:flex-row sm:justify-between md:flex-row md:justify-between">
                                    <Heading size="4">{post.title}</Heading>
                                    <Tag variant="muted">
                                        {formatToDate(new Date(post.createdAt))}
                                    </Tag>
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
