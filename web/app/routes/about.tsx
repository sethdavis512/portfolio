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

export function meta() {
    return generateRouteMeta({
        pageTitle: 'About',
        descriptionContent:
            'Learn about Seth Davis, a passionate Frontend Engineer from Austin, Texas. Austin FC fan, CrossFit member, and React Router enthusiast with 8+ years of experience.',
        ogUrl: 'https://sethdavis.tech/about'
    });
}

export async function loader() {
    const data =
        await client.request<GetAboutPageQuery>(GetAboutPageDocument);

    return {
        aboutFacts: data.aboutFacts || [],
        quotes: data.quotes || []
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
