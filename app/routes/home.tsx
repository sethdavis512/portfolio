import { Button } from '~/components/Button';
import { Heading } from '~/components/Heading';
import { generateRouteMeta } from '~/utils/seo';
import { LinkedInLogo } from '~/components/logos/LinkedInLogo';
import { CodepenLogo } from '~/components/logos/CodepenLogo';
import { Linky } from '~/components/Linky';
import { GitHubLogo } from '~/components/logos/GitHubLogo';
import { XLogo } from '~/components/logos/XLogo';
import { ContentStyles } from '~/constants';
import { cx } from '~/cva.config';
import { Card } from '~/components/Card';
import { getAllDecks } from '~/content';
import type { Route } from './+types/home';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Seth Davis | Design Technologist',
        descriptionContent:
            'Seth Davis helps product teams ship better interfaces faster, through design systems, AI tooling, and front-end engineering. Based in Austin, Texas.',
        ogUrl: 'https://sethdavis.tech'
    });
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

export function loader() {
    const decks = getAllDecks()
        .slice(0, 3)
        .map((d) => ({
            slug: d.slug,
            title: d.meta.title,
            description: d.meta.description ?? null,
            slideCount: d.slides.length
        }));
    return { decks };
}

export default function Home({ loaderData }: Route.ComponentProps) {
    const socialLogoClassNames = 'w-11 h-11 md:w-12 md:h-12';
    const { decks } = loaderData;

    return (
        <>
            <HomeSection className="md:py-16">
                <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3 mb-8 text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400">
                    <span>Design Technologist</span>
                    <span aria-hidden="true">Austin, TX</span>
                </div>
                <Heading
                    as="h1"
                    className="text-[clamp(3.5rem,10vw,8rem)] md:text-[clamp(3.5rem,10vw,8rem)] leading-[0.95] mb-8 tracking-tight"
                >
                    Seth
                    <br />
                    <span className="italic text-primary-600 dark:text-primary-400">
                        Davis
                    </span>
                </Heading>
                <div className="grid md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-7 border-t border-zinc-200 dark:border-zinc-800 pt-6">
                        <p className="text-xl md:text-2xl font-medium max-w-2xl mb-4 text-zinc-800 dark:text-zinc-200">
                            I help product teams ship better interfaces
                            faster, through design systems, AI tooling, and
                            front-end engineering.
                        </p>
                        <p className="mb-10 text-zinc-600 dark:text-zinc-400">
                            Open to new engagements as a{' '}
                            <Linky to="/design-technologist">
                                {ContentStyles.CURRENT_JOB_TITLE}
                            </Linky>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" to="/work">
                                See my work
                            </Button>
                            <Button size="lg" to="/resume" variant="outline">
                                View resume
                            </Button>
                        </div>
                    </div>
                    <div className="hidden md:block md:col-span-5 border-t border-zinc-200 dark:border-zinc-800 pt-6 text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400 space-y-2">
                        <p>Design systems</p>
                        <p>AI tooling</p>
                        <p>Front-end engineering</p>
                    </div>
                </div>
            </HomeSection>
            <HomeSection>
                <div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3 mb-8">
                    <Heading className="mb-0">Featured projects</Heading>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    {/* Hero project: full width acid slab */}
                    <Card className="p-0 grid overflow-hidden bg-primary-500/10 dark:bg-primary-500/10 border-primary-500/40">
                        <div className="col-start-1 row-start-1 p-8 md:p-10 flex flex-col">
                            <span className="text-xs font-medium tracking-wide text-primary-700 dark:text-primary-300 mb-3">
                                Flagship
                            </span>
                            <Heading className="text-4xl md:text-5xl">
                                Iridium
                            </Heading>
                            <p className="mb-8 max-w-2xl text-lg text-zinc-700 dark:text-zinc-300">
                                Full-stack AI app starter kit with TypeScript,
                                React Router, Better Auth, and Anthropic. Ship
                                faster, not from scratch.
                            </p>
                            <Button
                                className="self-start"
                                color="primary"
                                size="lg"
                                to="/work/iridium"
                            >
                                Learn more
                            </Button>
                        </div>
                    </Card>
                    {/* Secondary projects: 3-column */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="p-0 grid overflow-hidden">
                            <div className="col-start-1 row-start-1 p-8 flex flex-col">
                                <span className="text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400 mb-3">
                                    Open Source
                                </span>
                                <Heading>Lone Star UI</Heading>
                                <p className="mb-8 text-zinc-700 dark:text-zinc-300">
                                    A React 19 component library built with
                                    TypeScript, Tailwind CSS 4, and CVA.
                                    Publishes ESM-only to npm with full type
                                    declarations.
                                </p>
                                <Button
                                    className="mt-auto self-start"
                                    color="primary"
                                    variant="outline"
                                    size="md"
                                    to="/work/lone-star-ui"
                                >
                                    Learn more
                                </Button>
                            </div>
                        </Card>
                        <Card className="p-0 grid overflow-hidden">
                            <div className="col-start-1 row-start-1 p-8 flex flex-col">
                                <span className="text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400 mb-3">
                                    Learning
                                </span>
                                <Heading>AI Maniacs</Heading>
                                <p className="mb-8 text-zinc-700 dark:text-zinc-300">
                                    Free AI education platform. Fundamentals
                                    through agent workflows, built to keep up
                                    with how fast the field moves.
                                </p>
                                <Button
                                    className="mt-auto self-start"
                                    color="primary"
                                    variant="outline"
                                    size="md"
                                    to="/work/ai-maniacs"
                                >
                                    Learn more
                                </Button>
                            </div>
                        </Card>
                        <Card className="p-0 grid overflow-hidden">
                            <div className="col-start-1 row-start-1 p-8 flex flex-col">
                                <span className="text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400 mb-3">
                                    Product
                                </span>
                                <Heading>Prompt Suite</Heading>
                                <p className="mb-8 text-zinc-700 dark:text-zinc-300">
                                    Native desktop tray app for instant AI
                                    prompt access. Quick interactions without
                                    disrupting your workflow.
                                </p>
                                <Button
                                    className="mt-auto self-start"
                                    color="primary"
                                    variant="outline"
                                    size="md"
                                    href="https://techwithseth.com/digital-goods/prompt-suite"
                                >
                                    Learn more
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </HomeSection>
            {decks.length > 0 && (
                <HomeSection>
                    <div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3 mb-8">
                        <Heading className="mb-0">Recent slides</Heading>
                        <Linky to="/slides" className="text-sm">
                            All slides →
                        </Linky>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {decks.map((deck) => (
                            <Linky
                                key={deck.slug}
                                to={`/slides/${deck.slug}`}
                                className="block no-underline hover:bg-transparent hover:text-current dark:hover:text-current"
                            >
                                <Card className="h-full p-0 grid overflow-hidden group transition-colors duration-200 hover:border-primary-500/60">
                                    <div className="col-start-1 row-start-1 p-8 flex flex-col">
                                        <span className="text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400 mb-3">
                                            Deck
                                        </span>
                                        <Heading>
                                            {deck.title}
                                        </Heading>
                                        {deck.description && (
                                            <p className="mb-6 text-zinc-700 dark:text-zinc-300">
                                                {deck.description}
                                            </p>
                                        )}
                                        <span className="mt-auto text-xs text-zinc-500">
                                            {deck.slideCount} slide
                                            {deck.slideCount === 1 ? '' : 's'}
                                        </span>
                                    </div>
                                </Card>
                            </Linky>
                        ))}
                    </div>
                </HomeSection>
            )}
            <HomeSection>
                <div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3 mb-8">
                    <Heading className="mb-0">Socials</Heading>
                </div>
                <div className="flex gap-8">
                    <Linky
                        href="https://github.com/sethdavis512"
                        aria-label="GitHub"
                    >
                        <GitHubLogo className={socialLogoClassNames} />
                    </Linky>
                    <Linky
                        href="https://www.linkedin.com/in/sethdavis512/"
                        aria-label="LinkedIn"
                    >
                        <LinkedInLogo className={socialLogoClassNames} />
                    </Linky>
                    <Linky
                        href="https://www.x.com/sethdavis512/"
                        aria-label="X (Twitter)"
                    >
                        <XLogo className={socialLogoClassNames} />
                    </Linky>
                    <Linky
                        href="https://www.codepen.io/sethdavis512/"
                        aria-label="CodePen"
                    >
                        <CodepenLogo className={socialLogoClassNames} />
                    </Linky>
                </div>
            </HomeSection>
        </>
    );
}
