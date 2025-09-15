import { Link } from 'react-router';

import { ButtonLink } from '~/components/ButtonLink';
import { KeyboardShortcut } from '~/components/KeyboardShortcut';
import { Heading } from '~/components/Heading';
import { generateRouteMeta } from '~/utils/seo';
import { BetterAuthLogo } from '~/components/logos/BetterAuthLogo';
import { ReactRouterLogo } from '~/components/logos/ReactRouterLogo';
import { PostgresLogo } from '~/components/logos/PostgresLogo';
import { PrismaLogo } from '~/components/logos/PrismaLogo';
import { ReactLogo } from '~/components/logos/ReactLogo';
import { TailwindLogo } from '~/components/logos/TailwindLogo';
import { TypescriptLogo } from '~/components/logos/TypescriptLogo';
import { Tooltip } from '~/components/Tooltip';
import { LinkedInLogo } from '~/components/logos/LinkedInLogo';
import { CodepenLogo } from '~/components/logos/CodepenLogo';
import { Linky } from '~/components/Linky';
import { GitHubLogo } from '~/components/logos/GitHubLogo';
import { XLogo } from '~/components/logos/XLogo';
import { Flex } from '~/components/Flex';
import { BorderStyles } from '~/constants';
import { client } from '~/utils/graphql.server';
import {
    GetPublishedPostsDocument,
    type GetPublishedPostsQuery
} from '~/generated/graphql';
import type { Route } from './+types/home';
import { Card } from '~/components/Card';

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

interface ProjectHighlightProps {
    description: string;
    heroAlt: string;
    heroImage: string;
    logoAlt: string;
    logoImage: string;
    title: string;
    to: string;
}

function ProjectHighlight({
    description,
    heroAlt,
    heroImage,
    logoAlt,
    logoImage,
    title,
    to
}: ProjectHighlightProps) {
    return (
        <Link to={to} className="md:basis-1/3 cursor-pointer">
            <figure className="relative">
                <img className="w-full" src={heroImage} alt={heroAlt} />
                <div className="absolute bottom-0 w-32 max-w-sm right-0 md:-right-5 dark:bg-primary-700 rounded-full">
                    <img className="w-full p-4" src={logoImage} alt={logoAlt} />
                </div>
            </figure>
            <Heading as="h3" size="3">
                {title}
            </Heading>
            <p className="mb-8">{description}</p>
            <ButtonLink to={to}>View Project</ButtonLink>
        </Link>
    );
}

function HomeSection({ children }: { children: React.ReactNode }) {
    return (
        <section className="container mx-auto flex items-center justify-center py-16">
            {children}
        </section>
    );
}

export default function Home({ loaderData }: Route.ComponentProps) {
    const stackLogoClassNames = 'w-8 h-8 md:w-24 md:h-24';
    const socialLogoClassNames = 'w-8 h-8 md:w-18 md:h-18';

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-900/80 to-zinc-900/50 pt-16">
            <HomeSection>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div>
                        <img
                            src="/20240612-seth-davis-profile-cropped-2.jpg"
                            alt="Seth Davis wearing an Austin FC hat in front of the stadium"
                            className="border border-zinc-500 rounded-full h-32 w-32 md:h-56 md:w-56 mb-4"
                        />
                    </div>
                    <div className="basis-3/4">
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
                            to boost efficiency and automate repetitive tasks.
                        </p>
                    </div>
                </div>
            </HomeSection>
            <HomeSection>
                <div>
                    <Heading as="h2" size="2" className="text-center">
                        View my top projects
                    </Heading>
                    <div className="flex flex-col md:flex-row gap-16 md:gap-4 p-4">
                        <ProjectHighlight
                            to="/prompt-bucket"
                            heroImage="/prompt-bucket-hero.png"
                            heroAlt="Prompt bucket app displayed in a web browser"
                            logoImage="/bucket.png"
                            logoAlt="3D rendering of a bucket"
                            title="Prompt Bucket"
                            description="A prompt management SaaS for organizing, saving, and sharing AI prompts. Helps users manage their prompt collections, collaborate, and quickly access prompts for various generative AI tools."
                        />
                        <ProjectHighlight
                            to="/rapidalle"
                            heroImage="/rapidalle-hero.png"
                            heroAlt="Rapidalle app displayed in a web browser"
                            logoImage="/photo-strip.png"
                            logoAlt="3D rendering of a rapid alle logo"
                            title="Rapidall•E"
                            description="A rapid prototyping tool for building AI applications. Helps developers quickly create and iterate on their ideas using a visual interface and pre-built components."
                        />
                        <ProjectHighlight
                            to="/obsidian-mcp-server"
                            heroImage="/obsidian-mcp-hero.png"
                            heroAlt="Obsidian MCP plugin displayed in the Obsidian app"
                            logoImage="/server.png"
                            logoAlt="3D rendering of a server"
                            title="Obsidian MCP"
                            description="The Obsidian MCP Server is a comprehensive Model Context Protocol implementation that bridges the gap between AI assistants and personal knowledge management systems."
                        />
                    </div>
                </div>
            </HomeSection>
            <HomeSection>
                <ButtonLink className="mr-2" size="lg" to="/work">
                    See all my projects{' '}
                </ButtonLink>{' '}
                <span className="hidden md:inline">
                    or use <KeyboardShortcut keys={['Cmd', 'K']} /> to navigate
                </span>
            </HomeSection>
            <HomeSection>
                <div className="flex flex-col items-center gap-8">
                    <Heading as="h2" size="2">
                        My stack of choice
                    </Heading>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-16">
                        <Tooltip content="TypeScript">
                            <TypescriptLogo className={stackLogoClassNames} />
                        </Tooltip>
                        <Tooltip content="React">
                            <ReactLogo className={stackLogoClassNames} />
                        </Tooltip>
                        <Tooltip content="React Router">
                            <ReactRouterLogo className={stackLogoClassNames} />
                        </Tooltip>
                        <Tooltip content="PostgreSQL">
                            <PostgresLogo className={stackLogoClassNames} />
                        </Tooltip>
                        <Tooltip content="Prisma">
                            <PrismaLogo className={stackLogoClassNames} />
                        </Tooltip>
                        <Tooltip content="BetterAuth">
                            <BetterAuthLogo className={stackLogoClassNames} />
                        </Tooltip>
                        <Tooltip content="Tailwind CSS">
                            <TailwindLogo className={stackLogoClassNames} />
                        </Tooltip>
                    </div>
                </div>
            </HomeSection>
            <HomeSection>
                <div className="flex flex-col items-center gap-8 px-4">
                    <Heading>Read up on my latest blog posts</Heading>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-12 flex-wrap justify-center">
                        <ul className="flex flex-col gap-4">
                            {loaderData?.lastThreePosts?.map((post) => (
                                <li key={post.id}>
                                    <Card
                                        className={`hover:scale-[102%] transition-all duration-200 hover:bg-zinc-100 hover:dark:bg-zinc-900 rounded-lg p-8 bg-zinc-200 dark:bg-zinc-950`}
                                    >
                                        <Link to={`/blog/${post.slug}`}>
                                            <Heading as="h3" size="3">
                                                {post.title}
                                            </Heading>
                                        </Link>
                                    </Card>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </HomeSection>
            <HomeSection>
                <div className="flex flex-col items-center gap-8">
                    <Heading>Socials</Heading>
                    <div className="flex md:flex-row gap-4 md:gap-12 flex-wrap justify-center">
                        <Linky external to="https://github.com/sethdavis512">
                            <GitHubLogo className={socialLogoClassNames} />
                        </Linky>
                        <Linky
                            external
                            to="https://www.linkedin.com/in/sethdavis512/"
                        >
                            <LinkedInLogo className={socialLogoClassNames} />
                        </Linky>
                        <Linky external to="https://www.x.com/sethdavis512/">
                            <XLogo className={socialLogoClassNames} />
                        </Linky>
                        <Linky
                            external
                            to="https://www.codepen.io/sethdavis512/"
                        >
                            <CodepenLogo className={socialLogoClassNames} />
                        </Linky>
                    </div>
                </div>
            </HomeSection>
            <HomeSection>
                <footer className="py-8 flex w-full items-center justify-between my-12">
                    <div className={`flex-grow ${BorderStyles.BOTTOM}`} />
                    <Flex className="items-center gap-4 px-4 text-center">
                        <p className="text-2xl">✌🏻</p>
                        <p className="text-2xl">Made in Austin, TX </p>
                        <img
                            className="h-8 w-8"
                            src="/flag-of-texas-small.svg"
                            alt="Texas flag"
                        />
                    </Flex>
                    <div className={`flex-grow ${BorderStyles.BOTTOM}`} />
                </footer>
            </HomeSection>
        </div>
    );
}
