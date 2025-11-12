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
import type { Route } from './+types/home';
import { cx } from 'cva.config';

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

function HomeSection({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section className={cx(`container mx-auto mb-8 md:py-16`, className)}>
            {children}
        </section>
    );
}

export default function Home({ loaderData }: Route.ComponentProps) {
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
                        I build developer infrastructure enhanced by AI
                        <br />
                        to boost efficiency and automate repetitive tasks.
                    </p>
                    <p>
                        {`I am actively seeking new opportunities as a ${ContentStyles.CURRENT_JOB_TITLE}.`}
                    </p>
                </div>
                <div className="flex gap-4">
                    <ButtonLink className="inline-block" size="lg" to="/resume">
                        View Resume
                    </ButtonLink>
                    <ButtonLink
                        variant="outline"
                        className="inline-block"
                        size="lg"
                        to="/work"
                    >
                        See my work
                    </ButtonLink>
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
