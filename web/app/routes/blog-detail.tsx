import {
    GetPostBySlugDocument,
    type GetPostBySlugQuery
} from '~/generated/graphql';
import { client } from '~/utils/graphql.server';
import type { Route } from './+types/blog-detail';
import Heading from '~/components/Heading';
import { BlogArticle } from '~/components/BlogArticle';
import Divider from '~/components/Divider';
import Linky from '~/components/Linky';

export function meta({ data }: Route.MetaArgs) {
    return [
        { title: `${data.post?.title} | Seth Davis' Portfolio` },
        {
            name: 'description',
            content: `Read the blog post titled "${data.post?.title}" by Seth Davis. Explore insights and discussions on web development, React Router, and more.`
        }
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    const { post, relatedPosts } = await client.request<GetPostBySlugQuery>(
        GetPostBySlugDocument,
        {
            slug: params.slug
        }
    );

    return {
        post,
        relatedPosts
    };
}

export default function BlogDetailRoute({ loaderData }: Route.ComponentProps) {
    if (!loaderData.post) {
        return <p>{`No content available  :(`}</p>;
    }

    return (
        <>
            <Heading as="h1" size="1" className="mb-8">
                {loaderData.post.title}
            </Heading>
            <BlogArticle document={loaderData.post.content?.document} />
            <Divider className="my-8" />
            <p>
                Thank you for reading! If you enjoyed this article, feel free to
                share it on social media to help others discover it. Stay tuned
                for more updates and insights!
            </p>
            {loaderData.relatedPosts && loaderData.relatedPosts.length > 2 && (
                <>
                    <Divider className="my-8" />
                    <Heading as="h4" size="4" className="mb-4">
                        Additional articles
                    </Heading>
                    <ul className="flex flex-col gap-2 mb-8">
                        {loaderData.relatedPosts.map((post, index) => (
                            <li key={index} className="flex flex-col gap-4">
                                <Linky
                                    className="py-2"
                                    key={post.id}
                                    to={`/blog/${post.slug}`}
                                >
                                    {post.title}
                                </Linky>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
}
