import {
    GetPromptsListDocument,
    type GetPromptsListQuery
} from '~/generated/graphql';
import { client } from '~/utils/graphql.server';
import type { Route } from './+types/prompts';
import { Linky } from '~/components/Linky';
import { Card } from '~/components/Card';
import { Tag } from '~/components/Tag';
import { Heading } from '~/components/Heading';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Prompts',
        descriptionContent:
            'Explore AI prompts and insights on web development, React Router, and modern frontend engineering from Seth Davis.',
        ogUrl: 'https://sethdavis.tech/prompts'
    });
}

export async function loader() {
    const { prompts } = await client.request<GetPromptsListQuery>(
        GetPromptsListDocument
    );

    return {
        prompts
    };
}

export default function PromptsRoute({ loaderData }: Route.ComponentProps) {
    return (
        <>
            <Heading as="h1" className="mb-8">
                Prompts
            </Heading>
            <div className="flex flex-col gap-4">
                {loaderData.prompts?.map((prompt) => (
                    <Linky key={prompt.id} to={`/prompts/${prompt.slug}`}>
                        <Card className="w-full flex items-center justify-between">
                            <div>
                                <Heading as="h3" size="4">
                                    {prompt.title}
                                </Heading>
                            </div>
                            <div>
                                <ul className="flex gap-2">
                                    {prompt.tags?.map((tag) => (
                                        <li key={tag.id}>
                                            <Tag>{tag.name}</Tag>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    </Linky>
                ))}
            </div>
        </>
    );
}
