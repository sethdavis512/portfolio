import { GetPostDocument, type GetPostQuery } from '~/generated/graphql';
import { client } from '~/utils/graphql.server';
import type { Route } from './+types/blog-detail';
import Heading from '~/components/Heading';
import { BlogArticle } from '~/components/BlogArticle';

export async function loader({ params }: Route.LoaderArgs) {
    const { post } = await client.request<GetPostQuery>(GetPostDocument, {
        where: {
            id: params.id
        }
    });

    return {
        post
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
        </>
    );
}
