import { ArrowRight } from 'lucide-react';

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
import { HiringCallToAction } from '~/components/HiringCallToAction';
import { ShowcaseHeroVideo } from '~/components/ShowcaseVideo';
import { ShutterPromo } from '~/components/ShutterPromo';
import { decks as deckCollection } from '~/content';
import type { Route } from './+types/home';

export function meta() {
    return generateRouteMeta({
        pageTitle: ContentStyles.CURRENT_JOB_TITLE,
        fullTitle: `Seth Davis, ${ContentStyles.CURRENT_JOB_TITLE}`,
        descriptionContent:
            'Seth Davis helps product teams ship better interfaces faster, through design systems and AI tooling. Based in Austin, Texas.',
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
        <section className={cx(`mb-12 last:mb-0 md:mb-8 md:py-8`, className)}>
            {children}
        </section>
    );
}

export function loader() {
    const decks = deckCollection.published()
        .slice(0, 3)
        .map((d) => ({
            slug: d.slug,
            title: d.frontmatter.title,
            description: d.frontmatter.description ?? null,
            slideCount: d.body.slides.length
        }));
    return { decks };
}

export default function Home({ loaderData }: Route.ComponentProps) {
    const socialLogoClassNames = 'w-11 h-11 md:w-12 md:h-12';
    const { decks } = loaderData;

    return (
        <>
            <HomeSection className="relative isolate md:pt-0 md:pb-16">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-192 w-screen -translate-x-1/2 bg-hero-light opacity-60 dark:opacity-100"
                />
                <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3 mb-8 text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400">
                    <span>{ContentStyles.CURRENT_JOB_TITLE}</span>
                    <span aria-hidden="true">Austin, TX</span>
                </div>
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7">
                        <Heading
                            as="h1"
                            className="text-[clamp(3.5rem,10vw,8rem)] md:text-[clamp(3.5rem,10vw,8rem)] leading-[0.95] mb-6 tracking-tight"
                        >
                            Seth{' '}
                            <span className="text-primary-600 dark:text-primary-400">
                                Davis
                            </span>
                        </Heading>
                        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6">
                            <p className="text-xl md:text-2xl font-medium max-w-2xl mb-4 text-zinc-800 dark:text-zinc-200">
                                I help product teams ship better interfaces
                                faster, through design systems and AI tooling.
                            </p>
                            <p className="mb-8 text-zinc-600 dark:text-zinc-400">
                                Open to senior frontend and frontend-leaning
                                full-stack roles. Remote, hybrid, or Austin.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    to="/work"
                                    iconAfter={
                                        <ArrowRight className="size-4" />
                                    }
                                >
                                    See my work
                                </Button>
                                <Button
                                    size="lg"
                                    to="/resume"
                                    variant="outline"
                                >
                                    View resume
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 lg:self-center border-t border-zinc-200 dark:border-zinc-800 pt-6 lg:border-t-0 lg:pt-0">
                        <ShowcaseHeroVideo
                            publicId="portfolio/showcase/resume-video-home"
                            title="Seth Davis resume"
                            placement="hero"
                            scrubber
                            expandable
                            width={1280}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </HomeSection>
            <HomeSection>
                <Card className="p-0 overflow-hidden grid md:grid-cols-2 border-transparent dark:border-transparent bg-origin-border bg-linear-to-br from-primary-200 to-primary-300 dark:from-primary-100">
                    <div className="p-8 md:p-10 flex flex-col">
                        <span className="text-xs font-semibold tracking-wide text-zinc-900 mb-3">
                            Spotlight
                        </span>
                        <Heading className="text-4xl md:text-5xl text-black dark:text-black">
                            Fresh Visit
                        </Heading>
                        <p className="mb-8 text-lg text-zinc-900">
                            A browser agent that tests a site the way a
                            first-time visitor would, then comes back with a
                            video of the run and a verdict: Found, Stuck, or
                            Out of steps.
                        </p>
                        <div className="mt-auto flex flex-col sm:flex-row gap-4">
                            <Button
                                color="ink"
                                size="lg"
                                to="/work/fresh-visit"
                            >
                                Read the case study
                            </Button>
                            <Button
                                color="ink"
                                variant="outline"
                                size="lg"
                                href="https://www.freshvisit.app"
                            >
                                Visit freshvisit.app
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-end pl-8 md:pl-0 md:pt-10">
                        <img
                            src="https://res.cloudinary.com/setholito/image/upload/c_scale,f_auto,q_90,w_1280/v1/portfolio/freshvisit-landing.png"
                            alt="The Fresh Visit landing page: name a task, see whether a first-time visitor can finish it"
                            width={1280}
                            height={800}
                            loading="lazy"
                            className="w-full h-auto rounded-tl-lg border-t border-l border-black/20 shadow-2xl"
                        />
                    </div>
                </Card>
            </HomeSection>
            <HomeSection>
                <div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3 mb-8">
                    <Heading className="mb-0">Featured projects</Heading>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    {/* Hero project: full width amber slab, screenshot on the left */}
                    <Card className="p-0 overflow-hidden grid md:grid-cols-2 border-transparent dark:border-transparent bg-origin-border bg-linear-to-br from-primary-300 to-primary-500">
                        <div className="p-8 md:p-10 flex flex-col">
                            <span className="text-xs font-semibold tracking-wide text-zinc-900 mb-3">
                                Education
                            </span>
                            <Heading className="text-4xl md:text-5xl text-black dark:text-black">
                                AI Maniacs
                            </Heading>
                            <p className="mb-8 text-lg text-zinc-900">
                                A free AI education platform for modern AI
                                systems: agents, automation, and real workflows.
                                Curriculum, infrastructure, and maintenance, all
                                mine.
                            </p>
                            <Button
                                className="mt-auto self-start"
                                color="ink"
                                size="lg"
                                to="/work/ai-maniacs"
                            >
                                Learn more
                            </Button>
                        </div>
                        <div className="flex items-end pr-8 md:order-first md:pr-0 md:pt-10">
                            <img
                                src="https://res.cloudinary.com/setholito/image/upload/c_scale,f_auto,q_90,w_1280/v1/portfolio/ai-maniacs-com.png"
                                alt="The AI Maniacs home page with its mascot and the line: learn modern AI systems"
                                width={1280}
                                height={844}
                                loading="lazy"
                                className="w-full h-auto rounded-tr-lg border-t border-r border-black/20 shadow-2xl"
                            />
                        </div>
                    </Card>
                    {/* Secondary projects: 3-column */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <Card className="p-0 overflow-hidden flex flex-col">
                            <img
                                src="https://res.cloudinary.com/setholito/image/upload/c_scale,f_auto,q_90,w_1280/v1/portfolio/iridium-2026-login.png"
                                alt="The Iridium sign-in screen beside a particle sphere"
                                width={1280}
                                height={800}
                                loading="lazy"
                                className="aspect-16/10 w-full object-cover object-top border-b border-zinc-200 dark:border-zinc-800"
                            />
                            <div className="p-8 flex flex-1 flex-col">
                                <span className="text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400 mb-3">
                                    Foundation
                                </span>
                                <Heading>Iridium</Heading>
                                <p className="mb-8 text-zinc-700 dark:text-zinc-300">
                                    The full-stack AI app starter behind my
                                    newer apps, with TypeScript, React Router,
                                    Better Auth, and Anthropic.
                                </p>
                                <Button
                                    className="mt-auto self-start"
                                    color="primary"
                                    variant="outline"
                                    size="md"
                                    to="/work/iridium"
                                >
                                    Learn more
                                </Button>
                            </div>
                        </Card>
                        <Card className="p-0 overflow-hidden flex flex-col">
                            <img
                                src="https://res.cloudinary.com/setholito/image/upload/c_scale,f_auto,q_90,w_1280/v1/portfolio/t78jfM9bfyWyr1MGnWefJbeUH8A.webp"
                                alt="Lone Star UI components"
                                width={1280}
                                height={831}
                                loading="lazy"
                                className="aspect-16/10 w-full object-cover object-top border-b border-zinc-200 dark:border-zinc-800"
                            />
                            <div className="p-8 flex flex-1 flex-col">
                                <span className="text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400 mb-3">
                                    Open Source
                                </span>
                                <Heading>Lone Star UI</Heading>
                                <p className="mb-8 text-zinc-700 dark:text-zinc-300">
                                    A React 19 component library on Base UI,
                                    Tailwind CSS 4, and CVA, published to npm as
                                    ESM with full type declarations.
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
                        <Card className="p-0 overflow-hidden flex flex-col">
                            <div className="relative aspect-16/10 overflow-hidden bg-primary-400 border-b border-zinc-200 dark:border-zinc-800">
                                <img
                                    src="https://techwithseth.com/claude-code-skill-library-cover.png"
                                    alt="Cover of Building Your Claude Code Skill Library"
                                    width={816}
                                    height={1056}
                                    loading="lazy"
                                    className="absolute left-1/2 top-6 w-3/5 h-auto -translate-x-1/2 -rotate-3 rounded-sm shadow-2xl"
                                />
                            </div>
                            <div className="p-8 flex flex-1 flex-col">
                                <span className="text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400 mb-3">
                                    Product
                                </span>
                                <Heading>Claude Code Skill Library</Heading>
                                <p className="mb-8 text-zinc-700 dark:text-zinc-300">
                                    A 15-chapter guide to building a Claude
                                    Code skill library that compounds, with a
                                    worked example and copy-paste templates.
                                </p>
                                <Button
                                    className="mt-auto self-start"
                                    color="primary"
                                    variant="outline"
                                    size="md"
                                    href="https://techwithseth.com/digital-goods/claude-code-skill-library"
                                >
                                    Learn more
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </HomeSection>
            <HomeSection>
                <HiringCallToAction />
            </HomeSection>
            <HomeSection>
                <ShutterPromo />
            </HomeSection>
            {decks.length > 0 && (
                <HomeSection>
                    <div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3 mb-8">
                        <Heading className="mb-0">Recent slides</Heading>
                        <Linky to="/writing" className="text-sm">
                            Slides &amp; writing →
                        </Linky>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                        data-ph-capture-attribute-link_kind="social"
                        aria-label="GitHub"
                    >
                        <GitHubLogo className={socialLogoClassNames} />
                    </Linky>
                    <Linky
                        href="https://www.linkedin.com/in/sethdavis512/"
                        data-ph-capture-attribute-link_kind="social"
                        aria-label="LinkedIn"
                    >
                        <LinkedInLogo className={socialLogoClassNames} />
                    </Linky>
                    <Linky
                        href="https://www.x.com/sethdavis512/"
                        data-ph-capture-attribute-link_kind="social"
                        aria-label="X (Twitter)"
                    >
                        <XLogo className={socialLogoClassNames} />
                    </Linky>
                    <Linky
                        href="https://www.codepen.io/sethdavis512/"
                        data-ph-capture-attribute-link_kind="social"
                        aria-label="CodePen"
                    >
                        <CodepenLogo className={socialLogoClassNames} />
                    </Linky>
                </div>
            </HomeSection>
        </>
    );
}
