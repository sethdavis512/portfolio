import { DocumentRenderer } from '@keystone-6/document-renderer';
import {
    GetTilBySlugDocument,
    type GetTilBySlugQuery
} from '~/generated/graphql';
import { client } from '~/utils/graphql.server';
import type { Route } from './+types/til-detail';
import { Heading } from '~/components/Heading';
import { Tag } from '~/components/Tag';
import { renderers } from '~/components/BlogArticle';
import { generateRouteMeta } from '~/utils/seo';

export function meta({ data }: Route.MetaArgs) {
    return generateRouteMeta({
        pageTitle: data?.post?.title || 'TIL',
        descriptionContent: data?.post?.title
            ? `TIL: "${data.post.title}" — a short discovery by Seth Davis.`
            : 'TIL entry not found.',
        ogUrl: `https://sethdavis.tech/til/${data?.post?.slug || ''}`
    });
}

export async function loader({ params }: Route.LoaderArgs) {
    const { post } = await client.request<GetTilBySlugQuery>(
        GetTilBySlugDocument,
        { slug: params.slug }
    );

    return { post };
}

export default function TILDetailRoute({ loaderData }: Route.ComponentProps) {
    if (!loaderData.post) {
        return <p>{'Entry not found :('}</p>;
    }

    const { post } = loaderData;

    return (
        <>
            <div className="mb-8">
                <Heading className="mb-2">{post.title}</Heading>
                {post.tags && post.tags.length > 0 && (
                    <ul className="flex gap-2 mt-3">
                        {post.tags.map((tag) => (
                            <li key={tag.id}>
                                <Tag>{tag.name}</Tag>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="prose prose-lg max-w-none dark:prose-invert prose-code:before:content-[''] prose-code:after:content-[''] prose-headings:my-4 mb-8 prose-pre:p-0 prose-pre:bg-none prose-p:text-white">
                <DocumentRenderer
                    document={post.content?.document}
                    renderers={renderers}
                />
            </div>
        </>
    );
}
