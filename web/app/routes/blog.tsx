import Heading from '~/components/Heading';
import { GetPostsDocument, type GetPostsQuery } from '~/generated/graphql';
import { client } from '~/utils/graphql.server';
import type { Route } from './+types/blog';
import Card from '~/components/Card';
import Linky from '~/components/Linky';
import Divider from '~/components/Divider';

export async function loader() {
    try {
        const { posts } = await client.request<GetPostsQuery>(GetPostsDocument);

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
                            to={`/blog/${post.id}`}
                            className="w-full"
                            key={post.id}
                        >
                            <Card className="w-full">
                                📝 <span className="pl-1.5">{post.title}</span>
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
