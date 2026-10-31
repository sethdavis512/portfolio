import { tils } from '~/content';
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
    const lookup = tils.bySlug(params.slug!);
    if (lookup.kind !== 'found') {
        throw new Response('Not Found', { status: 404 });
    }
    const til = lookup.item;
    return {
        post: {
            slug: til.slug,
            title: til.frontmatter.title,
            excerpt: til.frontmatter.excerpt,
            tags: til.frontmatter.tags
        }
    };
}

export default function TILDetailRoute({ loaderData }: Route.ComponentProps) {
    const lookup = tils.bySlug(loaderData.post.slug);

    if (lookup.kind !== 'found') {
        return <p>{'Entry not found :('}</p>;
    }

    return (
        <>
            <div className="mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-6">
                <span className="text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400 block mb-3">
                    TIL — Field note
                </span>
                <Heading as="h1" size="1" className="mb-2">
                    {loaderData.post.title}
                </Heading>
                {loaderData.post.tags.length > 0 && (
                    <ul className="flex gap-2 mt-4">
                        {loaderData.post.tags.map((tag) => (
                            <li key={tag}>
                                <Tag>{tag}</Tag>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="mb-8">
                <MdxContent Component={lookup.item.body} />
            </div>
        </>
    );
}
