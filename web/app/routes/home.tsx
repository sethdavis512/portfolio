import {
    ArrowRightCircle,
    BookHeartIcon,
    BookUserIcon,
    BotIcon,
    BoxIcon,
    CableIcon,
    Code2Icon,
    CodepenIcon,
    FileStackIcon,
    GalleryHorizontalEndIcon,
    Github,
    HandshakeIcon,
    KeySquareIcon,
    LaughIcon,
    Linkedin,
    PaperclipIcon,
    ScrollText,
    SparklesIcon,
    Twitter,
    WaypointsIcon,
    Zap
} from 'lucide-react';

import { ContentStyles, largeIconProps } from '~/constants';
import Flex from '~/components/Flex';
import Heading from '~/components/Heading';
import Linky from '~/components/Linky';
import Panel from '~/components/Panel';
import type { Route } from './+types/home';
import { generateHomeMeta } from '~/utils/meta';
import {
    GetPublishedPostsDocument,
    type GetPublishedPostsQuery
} from '~/generated/graphql';
import { client } from '~/utils/graphql.server';

export function meta({}: Route.MetaArgs) {
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

export default function Home({ loaderData }: Route.ComponentProps) {
    return (
        <>
            <Heading as="h1" size="1" className="mb-4">
                Welcome
            </Heading>
            <p className="pb-3 sm:pb-4 md:pb-6">
                {[
                    `My name is Seth Davis. I am a ${
                        ContentStyles.CURRENT_JOB_TITLE
                    } living in Austin, Texas. While I do enjoy all varieties of ${ContentStyles.FRONTEND.toLowerCase()} technologies, I'm most passionate about `,
                    <Linky
                        external
                        to="https://reactrouter.com/"
                        key={`react-router-link`}
                    >
                        React Router
                    </Linky>,
                    ` based full stack web applications.`
                ]}
            </p>
            <Flex className="mb-4" items="center">
                <ScrollText {...largeIconProps} />
                <Heading as="h2">Resume</Heading>
            </Flex>
            <p className="mb-6 sm:mb-8">
                I’m currently exploring new opportunities in frontend
                development in the Austin area. I’d love to connect and discuss
                how my experience and skill set could support your team’s goals.{' '}
                <Linky to="/resume">View my resume</Linky> to learn more about
                my work.
            </p>
            <Flex className="mb-4" items="center">
                <WaypointsIcon {...largeIconProps} />
                <Heading as="h2">Connect</Heading>
            </Flex>
            <p className="mb-6 sm:mb-8">
                Interested in talking about a project?{' '}
                <Linky to="https://tidycal.com/sethdavis512">
                    Click here to schedule a time to meet with me!
                </Linky>
            </p>
            <div className="space-y-8 sm:space-y-4">
                <Panel>
                    <Flex
                        gap={4}
                        className="flex-col gap-8 sm:gap-12 sm:flex-row"
                    >
                        <div className="basis-1/2">
                            <Flex items="center" className="mb-4">
                                <Code2Icon {...largeIconProps} />
                                <Heading as="h2">Tech with Seth</Heading>
                            </Flex>
                            <p className="mb-4">
                                A collection of my open source projects and
                                resources
                            </p>
                            <Flex vertical>
                                <Linky external to="https://sethdavis512.github.io/ai-maniacs/" py={2}>
                                    <BotIcon />
                                    <span>A.I. Maniacs</span>
                                </Linky>
                                <Linky to="/prompts" py={2}>
                                    <SparklesIcon />
                                    <span>Prompts</span>
                                </Linky>
                                <Linky to="/projects/tws-starter" py={2}>
                                    <Zap />
                                    <span>TWS Starter</span>
                                </Linky>
                                <Linky to="/projects/tws-cms" py={2}>
                                    <FileStackIcon />
                                    <span>TWS CMS</span>
                                </Linky>
                                <Linky
                                    external
                                    to="https://github.com/sethdavis512/rr7-slides"
                                    py={2}
                                >
                                    <GalleryHorizontalEndIcon />
                                    <span>RR7 Slides</span>
                                </Linky>
                                <Linky
                                    external
                                    to="https://github.com/orgs/tech-with-seth/repositories"
                                    py={2}
                                >
                                    <BoxIcon />
                                    <span>Repos</span>
                                </Linky>
                                <Linky
                                    external
                                    to="https://sethdavis512.github.io/custom-file-generator-guide/"
                                    py={2}
                                >
                                    <BookHeartIcon />
                                    <span>Custom Plop.js (Guide)</span>
                                </Linky>
                            </Flex>
                        </div>
                        <div className="basis-1/2">
                            <Flex items="center" className="mb-4">
                                <PaperclipIcon {...largeIconProps} />
                                <Heading as="h2">Blog</Heading>
                            </Flex>
                            <p className="mb-4">{`I want to write and share more`}</p>

                            <ul className="flex flex-col gap-2">
                                {loaderData.lastThreePosts?.map((post) => (
                                    <li>
                                        <Linky
                                            key={post?.slug}
                                            to={`/blog/${post?.slug}`}
                                            py={2}
                                        >
                                            <span>{post?.title}</span>
                                        </Linky>
                                    </li>
                                ))}
                                <li>
                                    <Linky to="/blog">
                                        See all posts <ArrowRightCircle />
                                    </Linky>
                                </li>
                            </ul>
                        </div>
                    </Flex>
                </Panel>
                <Panel>
                    <Flex
                        gap={4}
                        className="flex-col gap-8 sm:gap-12 sm:flex-row"
                    >
                        <div className="basis-1/2">
                            <Flex items="center" className="mb-4">
                                <LaughIcon {...largeIconProps} />
                                <Heading as="h2">About Me</Heading>
                            </Flex>
                            <p className="mb-4">{`I'm a Texan through and through`}</p>
                            <Flex vertical>
                                <Linky to="/about" py={2}>
                                    <BookUserIcon />
                                    {`Fun facts`}
                                </Linky>
                                <Linky to="/truck" py={2}>
                                    <KeySquareIcon />
                                    {`Truck stuff`}
                                </Linky>
                                <Linky to="/setup" py={2}>
                                    <CableIcon />
                                    {`My setup`}
                                </Linky>
                            </Flex>
                        </div>
                        <div className="basis-1/2">
                            <Flex items="center" className="mb-4">
                                <HandshakeIcon {...largeIconProps} />
                                <Heading as="h2">Socials</Heading>
                            </Flex>
                            <p className="mb-4">{`Here's where you can find me online`}</p>
                            <Flex vertical>
                                <Linky
                                    external
                                    py={2}
                                    to="https://www.linkedin.com/in/sethdavis512/"
                                >
                                    <Linkedin />
                                    {`LinkedIn`}
                                </Linky>
                                <Linky
                                    py={2}
                                    external
                                    to="https://twitter.com/sethdavis512"
                                >
                                    <Twitter />
                                    {`Twitter`}
                                </Linky>
                                <Linky
                                    py={2}
                                    external
                                    to="https://github.com/sethdavis512"
                                >
                                    <Github />
                                    {`GitHub`}
                                </Linky>
                                <Linky
                                    py={2}
                                    external
                                    to="https://codepen.com/sethdavis512"
                                >
                                    <CodepenIcon />
                                    {`Codepen`}
                                </Linky>
                            </Flex>
                        </div>
                    </Flex>
                </Panel>
            </div>
        </>
    );
}
