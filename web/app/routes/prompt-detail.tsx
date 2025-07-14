import {
    GetPromptDetailsDocument,
    type GetPromptDetailsQuery
} from '~/generated/graphql';
import { client } from '~/utils/graphql.server';
import type { Route } from './+types/prompt-detail';
import Heading from '~/components/Heading';

export function meta({ data }: Route.MetaArgs) {
    return [
        { title: `${data.prompt?.title} | Seth Davis' Blog` },
        {
            name: 'description',
            content: `Read the prompt titled "${data.prompt?.title}" by Seth Davis. Explore insights and discussions on web development, React Router, and more.`
        }
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    const { prompt } = await client.request<GetPromptDetailsQuery>(
        GetPromptDetailsDocument,
        {
            slug: params.slug
        }
    );

    return {
        prompt
    };
}

export default function BlogDetailRoute({ loaderData }: Route.ComponentProps) {
    if (!loaderData.prompt) {
        return <p>{`No content available  :(`}</p>;
    }

    return (
        <>
            <Heading className="mb-8">{loaderData.prompt.title}</Heading>
            {JSON.stringify(loaderData.prompt.content?.document)}
        </>
    );
}
