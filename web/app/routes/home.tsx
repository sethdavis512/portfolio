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
import { Heading } from '~/components/Heading';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Welcome',
        descriptionContent:
            'Seth Davis is a Frontend Engineer specializing in React Router 7, TypeScript, and modern web development. Based in Austin, Texas.',
        ogUrl: 'https://sethdavis.tech'
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
            <div className="flex justify-center items-center min-h-screen px-4 sm:px-0">
                <div className="flex flex-col items-start lg:items-center gap-12 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div>
                            <img
                                src="/20240612-seth-davis-profile-cropped-2.jpg"
                                alt="Seth Davis wearing an Austin FC hat in front of the stadium"
                                className="border border-zinc-500 rounded-full h-32 w-32 md:h-56 md:w-56 mb-4"
                            />
                        </div>
                        <div>
                            <span className="font-medium text-xl">
                                Hello. My name is
                            </span>
                            <Heading
                                as="h1"
                                className="text-7xl md:text-9xl font-black mb-4"
                            >
                                Seth Davis
                            </Heading>
                            <p className="text-md md:text-xl font-medium">
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
                        <span className="hidden md:inline">
                            or use <KeyboardShortcut keys={['Cmd', 'K']} /> to
                            navigate
                        </span>
                    </div>
                </div>
            </div>
            <CircularPattern
                symbols={shuffle(['<', '>', '{', '}', '/', '*', '=', '|'])}
            />
        </>
    );
}
