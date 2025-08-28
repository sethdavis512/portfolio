import CircularPattern from '~/components/CircularPattern';
import KeyboardShortcut from '~/components/KeyboardShortcut';
import { shuffle } from '~/utils/common';
import { generateHomeMeta } from '~/utils/meta';
import {
    GetPublishedPostsDocument,
    type GetPublishedPostsQuery
} from '~/generated/graphql';
import { client } from '~/utils/graphql.server';
import { ButtonLink } from '~/components/ButtonLink';

export function meta() {
    return generateHomeMeta();
}

export async function loader() {
    try {
        const { posts } = await client.request<GetPublishedPostsQuery>(
            GetPublishedPostsDocument
        );

        return {
            lastThreePosts: posts?.slice(-3).reverse() || []
        };
    } catch (error) {
        console.error('Error in loader:', error);

        return { status: 'ERROR' };
    }
}

export default function Home() {
    return (
        <>
            <div className="flex justify-center items-center h-full px-4 sm:px-0">
                <div className="flex flex-col items-start sm:items-center gap-24 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div>
                            <img
                                src="/austin-fc-profile.jpg"
                                alt="Seth Davis wearing an Austin FC hat in front of the stadium"
                                className="rounded-full h-48 w-48 mb-4"
                            />
                        </div>
                        <div>
                            <span className="font-bold text-xl">
                                Hello. My name is
                            </span>
                            <h1 className="text-9xl font-bold">Seth Davis</h1>
                            <p className="text-xl font-bold">
                                I design web applications that boost efficiency
                                <br />
                                and simplify tasks
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <ButtonLink className="mr-2" size="lg" to="/work">
                            View my work
                        </ButtonLink>
                        or use <KeyboardShortcut keys={['Cmd', 'K']} /> to
                        navigate
                    </div>
                </div>
            </div>
            <CircularPattern
                symbols={shuffle([
                    '<',
                    '>',
                    '{',
                    '}',
                    '/',
                    '*',
                    '+',
                    '=',
                    '|',
                    '%',
                    '@',
                    '~'
                ])}
                // opacity={0.08}
            />
        </>
    );
}
