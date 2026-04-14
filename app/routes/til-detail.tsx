import { getTilBySlug } from '~/content';
import { MdxContent } from '~/components/MdxContent';
import type { Route } from './+types/til-detail';
import { Heading } from '~/components/Heading';
import { Tag } from '~/components/Tag';
import { generateRouteMeta } from '~/utils/seo';

export function meta({ loaderData }: Route.MetaArgs) {
    return generateRouteMeta({
        pageTitle: loaderData?.post?.title || 'TIL',
        descriptionContent: loaderData?.post?.excerpt
            || `TIL: "${loaderData?.post?.title}" by Seth Davis.`,
        ogUrl: `https://sethdavis.tech/til/${loaderData?.post?.slug || ''}`
    });
}

export function loader({ params }: Route.LoaderArgs) {
    const til = getTilBySlug(params.slug!);
    if (!til) {
        throw new Response('Not Found', { status: 404 });
    }
    return {
        post: {
            slug: til.frontmatter.slug,
            title: til.frontmatter.title,
            excerpt: til.frontmatter.excerpt,
            tags: til.frontmatter.tags
        }
    };
}

export default function TILDetailRoute({ loaderData }: Route.ComponentProps) {
    const til = getTilBySlug(loaderData.post.slug);

    if (!til) {
        return <p>{'Entry not found :('}</p>;
    }

    return (
        <>
            <div className="mb-8">
                <Heading className="mb-2">{loaderData.post.title}</Heading>
                {loaderData.post.tags.length > 0 && (
                    <ul className="flex gap-2 mt-3">
                        {loaderData.post.tags.map((tag) => (
                            <li key={tag}>
                                <Tag>{tag}</Tag>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="mb-8">
                <MdxContent Component={til.Component} />
            </div>
        </>
    );
}
