import {
    GetPostBySlugDocument,
    type GetPostBySlugQuery
} from '~/generated/graphql';
import { client } from '~/utils/graphql.server';
import type { Route } from './+types/blog-detail';
import Heading from '~/components/Heading';
import { BlogArticle } from '~/components/BlogArticle';
import Card from '~/components/Card';
import Divider from '~/components/Divider';
import chunk from 'lodash/chunk';
import { Link } from 'react-router';
import Linky from '~/components/Linky';

export async function loader({ params }: Route.LoaderArgs) {
    const { post } = await client.request<GetPostBySlugQuery>(
        GetPostBySlugDocument,
        {
            slug: params.slug
        }
    );

    return {
        post,
        additionalPosts: chunk(
            [
                {
                    id: '1',
                    title: 'Additional Post 1',
                    slug: 'additional-post-1'
                },
                {
                    id: '2',
                    title: 'Additional Post 2',
                    slug: 'additional-post-2'
                },
                {
                    id: '3',
                    title: 'Additional Post 3',
                    slug: 'additional-post-3'
                },
                {
                    id: '4',
                    title: 'Additional Post 4',
                    slug: 'additional-post-4'
                },
                {
                    id: '5',
                    title: 'Additional Post 5',
                    slug: 'additional-post-5'
                },
                {
                    id: '6',
                    title: 'Additional Post 6',
                    slug: 'additional-post-6'
                }
            ],
            3
        )
    };
}

export default function BlogDetailRoute({ loaderData }: Route.ComponentProps) {
    if (!loaderData.post) {
        return <p>{`No content available  :(`}</p>;
    }

    return (
        <>
            <Heading className="mb-8">{loaderData.post.title}</Heading>
            <BlogArticle document={loaderData.post.content?.document} />
            <Divider className="my-8" />
            <p>
                Thank you for reading! If you enjoyed this article, feel free to
                share it on social media to help others discover it. Stay tuned
                for more updates and insights!
            </p>
            <Divider className="my-8" />
            <Heading as="h4" size="4" className="mb-4">
                Additional articles
            </Heading>
            <ul className="grid grid-cols-3 gap-4 mb-8">
                {loaderData.additionalPosts.map((chunk, index) => (
                    <li key={index} className="flex flex-col gap-4">
                        {chunk.map((post) => (
                            <Linky
                                className="py-2"
                                key={post.id}
                                to={`/blog/${post.slug}`}
                            >
                                {post.title}
                            </Linky>
                        ))}
                    </li>
                ))}
            </ul>
        </>
    );
}
