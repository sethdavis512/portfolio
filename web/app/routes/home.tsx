import {
    BookHeartIcon,
    BookUserIcon,
    BoxIcon,
    CableIcon,
    Code2Icon,
    CodepenIcon,
    FileStackIcon,
    Github,
    HandshakeIcon,
    KeySquareIcon,
    LaughIcon,
    Linkedin,
    PaperclipIcon,
    PencilIcon,
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
import {
    GetPublishedPostsDocument,
    type GetPublishedPostsQuery
} from '~/generated/graphql';
import { client } from '~/utils/graphql.server';

export function meta({}: Route.MetaArgs) {
    return [
        { title: `Home | Seth Davis' Portfolio` },
        { name: 'description', content: `Welcome to Seth Davis' Portfolio` }
    ];
}

export async function loader() {
    try {
        const { posts } = await client.request<GetPublishedPostsQuery>(
            GetPublishedPostsDocument
        );

        return {
            lastThreePosts: posts?.slice(0, 3) || []
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
            <p className="pb-4 md:pb-6">
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
            <p className="mb-8">
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
            <p className="mb-8">
                Interested in talking about a project?{' '}
                <Linky to="https://tidycal.com/sethdavis512">
                    Click here to schedule a time to meet with me!
                </Linky>
            </p>
            <div className="space-y-12 sm:space-y-4">
                <Panel>
                    <Flex gap={4} className="flex-col gap-12 sm:flex-row">
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
                            <Flex vertical>
                                {loaderData.lastThreePosts &&
                                loaderData.lastThreePosts.length > 0 ? (
                                    loaderData.lastThreePosts?.map((post) => (
                                        <Linky
                                            key={post?.slug}
                                            to={`/blog/${post?.slug}`}
                                            py={2}
                                        >
                                            <PencilIcon />
                                            <span>{post?.title}</span>
                                        </Linky>
                                    ))
                                ) : (
                                    <p>No blog posts available</p>
                                )}
                            </Flex>
                        </div>
                    </Flex>
                </Panel>
                <Panel>
                    <Flex gap={4} className="flex-col gap-12 sm:flex-row">
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
