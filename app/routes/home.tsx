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

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Welcome',
        descriptionContent:
            'Seth Davis is a Design Technologist specializing in AI-assisted design tooling, design systems, and generative interfaces. Based in Austin, Texas.',
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

export default function Home() {
    const socialLogoClassNames = 'w-11 h-11 md:w-12 md:h-12';

    return (
        <>
            <HomeSection className="md:py-16">
                <div className="flex items-start gap-6">
                    <div className="hidden md:block w-1 self-stretch bg-primary-500 rounded-full" />
                    <div>
                        <span className="text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2 block">
                            Design Technologist
                        </span>
                        <Heading
                            as="h1"
                            className="text-7xl md:text-9xl font-black mb-6"
                        >
                            Seth Davis
                        </Heading>
                        <p className="text-lg md:text-2xl font-medium max-w-2xl mb-4 text-zinc-300">
                            I build AI-assisted tools and design systems that
                            bridge design intent and programmable interfaces.
                        </p>
                        <p className="mb-10 text-zinc-400">
                            Currently seeking new opportunities as a{' '}
                            <Linky to="/design-technologist">
                                {ContentStyles.CURRENT_JOB_TITLE}
                            </Linky>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <Button size="lg" to="/work">
                                See my work
                            </Button>
                            <Button
                                size="lg"
                                to="/resume"
                                color="secondary"
                                variant="outline"
                            >
                                View resume
                            </Button>
                        </div>
                    </div>
                </div>
            </HomeSection>
            <HomeSection>
                <Heading>Featured projects</Heading>
                <div className="grid grid-cols-1 gap-6">
                    {/* Hero project: full width */}
                    <Card className="p-0 grid overflow-hidden border border-primary-800/40 bg-zinc-900">
                        <div className="col-start-1 row-start-1 p-8 md:p-10 text-white flex flex-col">
                            <span className="text-xs uppercase tracking-widest text-primary-400 mb-3">
                                Flagship
                            </span>
                            <Heading className="text-white text-3xl md:text-4xl">
                                Iridium
                            </Heading>
                            <p className="mb-8 text-zinc-300 max-w-2xl text-lg">
                                Full-stack AI app starter kit with TypeScript,
                                React Router, Better Auth, and OpenAI. Ship
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
                    {/* Secondary projects: 2-column */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="p-0 grid overflow-hidden border border-primary-900/40 bg-zinc-900">
                            <div className="col-start-1 row-start-1 p-8 text-white flex flex-col">
                                <span className="text-xs uppercase tracking-widest text-primary-500 mb-3">
                                    Open Source
                                </span>
                                <Heading className="text-white">
                                    Lone Star UI
                                </Heading>
                                <p className="mb-8 text-zinc-300">
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
                        <Card className="p-0 grid overflow-hidden border border-primary-900/40 bg-zinc-900">
                            <div className="col-start-1 row-start-1 p-8 text-white flex flex-col">
                                <span className="text-xs uppercase tracking-widest text-primary-500 mb-3">
                                    Product
                                </span>
                                <Heading className="text-white">
                                    Prompt Suite
                                </Heading>
                                <p className="mb-8 text-zinc-300">
                                    Native desktop tray app for instant AI
                                    prompt access. Quick interactions without
                                    disrupting your workflow.
                                </p>
                                <Button
                                    className="mt-auto self-start"
                                    color="primary"
                                    variant="outline"
                                    size="md"
                                    to="/work/prompt-suite"
                                >
                                    Learn more
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </HomeSection>
            <HomeSection>
                <Heading>Socials</Heading>
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
