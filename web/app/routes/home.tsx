import { shuffle } from '~/utils/common';
import { generateRouteMeta } from '~/utils/seo';
import {
    GetPublishedPostsDocument,
    type GetPublishedPostsQuery
} from '~/generated/graphql';
import { client } from '~/utils/graphql.server';

import { ButtonLink } from '~/components/ButtonLink';
import { CircularPattern } from '~/components/CircularPattern';
import { KeyboardShortcut } from '~/components/KeyboardShortcut';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Welcome',
        descriptionContent:
            'Seth Davis is a Frontend Engineer at Indeed specializing in React Router 7, TypeScript, and modern web development. Based in Austin, Texas.'
    });
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
                <div className="flex flex-col items-start sm:items-center gap-12 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div>
                            <img
                                src="/20240612-seth-davis-profile-cropped-2.jpg"
                                alt="Seth Davis wearing an Austin FC hat in front of the stadium"
                                className="border border-zinc-500 rounded-full h-56 w-56 mb-4"
                            />
                        </div>
                        <div>
                            <span className="font-medium text-xl">
                                Hello. My name is
                            </span>
                            <h1 className="text-9xl font-black mb-4">
                                Seth Davis
                            </h1>
                            <p className="text-xl font-medium">
                                I build developer infrastructure enhanced by AI
                                <br />
                                to boost efficiency and automate repetitive
                                tasks.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <ButtonLink className="mr-2" size="lg" to="/work">
                            See my projects
                        </ButtonLink>
                        or use <KeyboardShortcut keys={['Cmd', 'K']} /> to
                        navigate
                    </div>
                </div>
            </div>
            <CircularPattern
                symbols={shuffle(['<', '>', '{', '}', '/', '*', '=', '|'])}
            />
        </>
    );
}
