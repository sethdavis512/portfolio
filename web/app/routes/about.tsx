import { Card } from '~/components/Card';
import {
    GetAboutPageDocument,
    type GetAboutPageQuery
} from '~/generated/graphql';
import { generateRouteMeta } from '~/utils/seo';
import { Heading } from '~/components/Heading';
import { Linky } from '~/components/Linky';
import { client } from '~/utils/graphql.server';
import type { Route } from './+types/about';
import { ButtonLink } from '~/components/ButtonLink';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'About',
        descriptionContent:
            'Learn about Seth Davis, a passionate Frontend Engineer from Austin, Texas. Austin FC fan, CrossFit member, and React Router enthusiast with 8+ years of experience.',
        ogUrl: 'https://sethdavis.tech/about'
    });
}

export async function loader() {
    const data = await client.request<GetAboutPageQuery>(GetAboutPageDocument);

    return {
        aboutFacts: data.aboutFacts || [],
        quotes: data.quotes || [],
        values: data.values || []
    };
}

function Quote({ quote, author }: { quote: string; author: string }) {
    return (
        <blockquote>
            <p className="mb-2">{`"${quote}"`}</p>
            <footer>
                <cite className="text-sm">&mdash; {author}</cite>
            </footer>
        </blockquote>
    );
}

function FactCard({
    emoji,
    title,
    content,
    linkUrl,
    linkExternal
}: {
    emoji?: string | null;
    title: string;
    content?: string | null;
    linkUrl?: string | null;
    linkExternal?: string | null;
}) {
    const heading = `${emoji ? emoji + ' ' : ''}${title}`;
    const isExternal = linkExternal === 'true';

    return (
        <Card>
            <Heading as="h3" size="4" className="mb-2">
                {heading}
            </Heading>
            {linkUrl && content ? (
                <p>
                    <Linky external={isExternal} to={linkUrl}>
                        {content}
                    </Linky>
                </p>
            ) : content ? (
                <p>{content}</p>
            ) : null}
        </Card>
    );
}

function ValueCard({
    title,
    description
}: {
    title: string;
    description: string;
}) {
    return (
        <Card className="h-full p-6">
            <Heading as="h3" size="4" className="mb-4">
                {title}
            </Heading>
            <p className="text-zinc-300">{description}</p>
        </Card>
    );
}

export default function AboutRoute({ loaderData }: Route.ComponentProps) {
    const midpoint = Math.ceil(loaderData.aboutFacts.length / 2);
    const leftFacts = loaderData.aboutFacts.slice(0, midpoint);
    const rightFacts = loaderData.aboutFacts.slice(midpoint);

    return (
        <>
            <Heading as="h1" className="mb-8">
                About me
            </Heading>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <ul className="basis-1/2 space-y-4">
                    {leftFacts.map(function (fact) {
                        return (
                            <li key={fact.id}>
                                <FactCard
                                    emoji={fact.emoji}
                                    title={fact.title || ''}
                                    content={fact.content}
                                    linkUrl={fact.linkUrl}
                                    linkExternal={fact.linkExternal}
                                />
                            </li>
                        );
                    })}
                </ul>
                <ul className="basis-1/2 space-y-4">
                    {rightFacts.map(function (fact) {
                        return (
                            <li key={fact.id}>
                                <FactCard
                                    emoji={fact.emoji}
                                    title={fact.title || ''}
                                    content={fact.content}
                                    linkUrl={fact.linkUrl}
                                    linkExternal={fact.linkExternal}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
            {loaderData.values.length > 0 && (
                <>
                    <Heading as="h2" className="mb-8">
                        How I Work
                    </Heading>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                        {loaderData.values.map(function (value, index) {
                            const isLast =
                                index === loaderData.values.length - 1;
                            const isOddTotal =
                                loaderData.values.length % 3 !== 0;
                            const shouldSpanFull =
                                isLast &&
                                isOddTotal &&
                                loaderData.values.length % 3 === 1;
                            const shouldSpanTwo =
                                isLast && loaderData.values.length % 3 === 2;

                            return (
                                <div
                                    key={value.id}
                                    className={
                                        shouldSpanFull
                                            ? 'md:col-span-2 lg:col-span-3'
                                            : shouldSpanTwo
                                              ? 'lg:col-span-1'
                                              : ''
                                    }
                                >
                                    <ValueCard
                                        title={value.title || ''}
                                        description={value.description || ''}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </>
            )}
            <hr className="border-zinc-500 my-12" />
            <section className="">
                <Heading as="h2" className="mb-4">
                    Want to see it in action?
                </Heading>
                <p className="text-zinc-300 mb-6">
                    Check out projects where I put these values into practice,
                    or get in touch to discuss working together.
                </p>
                <div className="flex gap-4">
                    <ButtonLink to="/work" size="lg">
                        See my work
                    </ButtonLink>
                    <ButtonLink to="/freelance" size="lg" variant="outline">
                        Get in touch
                    </ButtonLink>
                </div>
            </section>
            <hr className="border-zinc-500 my-12" />
            <Heading as="h2" className="mb-8">
                Motivation
            </Heading>
            <ul className="space-y-8 mb-8">
                {loaderData.quotes.map(function (q) {
                    return (
                        <li key={q.id}>
                            <Quote
                                quote={q.text || ''}
                                author={q.author || ''}
                            />
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
