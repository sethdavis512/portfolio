import { ButtonLink } from '~/components/ButtonLink';
import { Heading } from '~/components/Heading';
import { generateRouteMeta } from '~/utils/seo';
import { LinkedInLogo } from '~/components/logos/LinkedInLogo';
import { CodepenLogo } from '~/components/logos/CodepenLogo';
import { Linky } from '~/components/Linky';
import { GitHubLogo } from '~/components/logos/GitHubLogo';
import { XLogo } from '~/components/logos/XLogo';
import { ContentStyles } from '~/constants';
import { client } from '~/utils/graphql.server';
import {
    GetPublishedPostsDocument,
    type GetPublishedPostsQuery
} from '~/generated/graphql';
import { cx } from 'cva.config';
import { Card } from '~/components/Card';
import { Link } from 'react-router';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Welcome',
        descriptionContent:
            'Seth Davis is a Design Engineer specializing in AI-assisted design tooling, design systems, and generative interfaces. Based in Austin, Texas.',
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

function HomeSection({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section className={cx(`container mx-auto mb-8 md:py-8`, className)}>
            {children}
        </section>
    );
}

export default function Home() {
    const socialLogoClassNames = 'w-8 h-8 md:w-12 md:h-12';

    return (
        <>
            <HomeSection>
                <span className="font-medium text-2xl">Hello. My name is</span>
                <Heading
                    as="h1"
                    className="text-7xl md:text-9xl font-black mb-4"
                >
                    Seth Davis
                </Heading>
                <div className="space-y-4 md:space-y-8 mb-8">
                    <p className="text-md md:text-2xl font-medium">
                        I build AI-assisted tools and design systems that bridge
                        <br />
                        design intent and programmable interfaces.
                    </p>
                    <p>
                        {`Currently seeking new opportunities as a ${ContentStyles.CURRENT_JOB_TITLE}.`}
                    </p>
                </div>
                <div className="flex gap-4">
                    <ButtonLink className="inline-block" size="lg" to="/resume">
                        View resume
                    </ButtonLink>
                    <ButtonLink size="lg" to="/work" variant="outline">
                        See my work
                    </ButtonLink>
                </div>
            </HomeSection>
            <HomeSection>
                <Heading>Featured projects</Heading>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    <Card className="p-0 grid overflow-hidden bg-linear-to-br from-red-800 via-zinc-600 to-zinc-700 dark:from-red-950 dark:via-zinc-800 dark:to-zinc-900">
                        <div className="col-start-1 row-start-1 p-8 text-white">
                            <Heading className="text-white">
                                Video Machine
                            </Heading>
                            <p className="mb-8 text-zinc-100">
                                A video rendering platform that creates
                                TikTok-style slide presentations using Remotion.
                                Features credit-based payments and background
                                processing for seamless video creation.
                            </p>
                            <ButtonLink
                                color="primary"
                                size="lg"
                                to="/video-machine"
                            >
                                Learn more
                            </ButtonLink>
                        </div>
                    </Card>
                    <Card className="p-0 grid overflow-hidden bg-linear-to-br from-blue-800 via-zinc-600 to-zinc-700 dark:from-blue-950 dark:via-zinc-800 dark:to-zinc-900">
                        <div className="col-start-1 row-start-1 p-8 text-white">
                            <Heading className="text-white">
                                Prompt Suite
                            </Heading>
                            <p className="mb-8 text-zinc-100">
                                Native desktop tray app for instant AI prompt
                                access. Quick interactions without disrupting
                                your workflow, perfect for creative
                                professionals.
                            </p>
                            <ButtonLink
                                color="primary"
                                size="lg"
                                to="/prompt-suite"
                            >
                                Learn more
                            </ButtonLink>
                        </div>
                    </Card>
                    <Card className="p-0 grid overflow-hidden bg-linear-to-br from-purple-800 via-zinc-600 to-zinc-700 dark:from-purple-950 dark:via-zinc-800 dark:to-zinc-900">
                        <div className="col-start-1 row-start-1 p-8 text-white">
                            <Heading className="text-white">Iridium</Heading>
                            <p className="mb-8 text-zinc-100">
                                Production-ready SaaS boilerplate with
                                TypeScript, React Router, Prisma, and PostHog.
                                Focus on building features, not infrastructure.
                            </p>
                            <ButtonLink color="primary" size="lg" to="/iridium">
                                Learn more
                            </ButtonLink>
                        </div>
                    </Card>
                </div>
            </HomeSection>
            <HomeSection>
                <Heading>Socials</Heading>
                <div className="flex gap-8">
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
                    <Linky external to="https://www.codepen.io/sethdavis512/">
                        <CodepenLogo className={socialLogoClassNames} />
                    </Linky>
                </div>
            </HomeSection>
        </>
    );
}
