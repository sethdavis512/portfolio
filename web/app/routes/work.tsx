import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { BetterAuthLogo } from '~/components/BetterAuthLogo';
import { Button } from '~/components/Button';
import { ContentSection } from '~/components/ContentSection';
import { DocusaurusLogo } from '~/components/DocusaurusLogo';
import { MCPLogo } from '~/components/MCPLogo';
import { ObsidianLogo } from '~/components/ObsidianLogo';
import { PostgresLogo } from '~/components/PostgresLogo';
import PrismaLogo from '~/components/PrismaLogo';
import { RailwayLogo } from '~/components/RailwayLogo';
import ReactLogo from '~/components/ReactLogo';
import { ReactRouterLogo } from '~/components/ReactRouterLogo';
import { TailwindLogo } from '~/components/TailwindLogo';
import { TriggerDevLogo } from '~/components/TriggerDevLogo';
import { TypescriptLogo } from '~/components/TypescriptLogo';

interface WorkDisplayProps {
    cta: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    url: string;
    icons: ReactNode;
}

function WorkDisplay({
    cta,
    title,
    description,
    url,
    icons,
    imageSrc,
    imageAlt
}: WorkDisplayProps) {
    return (
        <Link to={url}>
            <div className="hover:scale-[102%] transition-all duration-200 hover:bg-zinc-100 hover:dark:bg-zinc-900 rounded-lg p-8 h-full">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <img className="w-[200px]" src={imageSrc} alt={imageAlt} />
                    <div className="text-center md:text-left flex-1">
                        <h2 className="text-3xl font-bold mb-4">{title}</h2>
                        <p className="mb-4">{description}</p>
                        <div className="flex gap-2 mb-6">{icons}</div>
                        <Button variant="outline">{cta}</Button>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default function WorkRoute() {
    const workLogoClassName = 'w-5 h-5';

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
            <ContentSection>
                <WorkDisplay
                    cta="Explore the tool"
                    title="Prompt Bucket"
                    description="Prompt scoring and organization web application"
                    imageSrc="/bucket.png"
                    imageAlt="A 3D bucket"
                    url="/prompt-bucket"
                    icons={
                        <>
                            <TypescriptLogo className={workLogoClassName} />
                            <ReactLogo className={workLogoClassName} />
                            <ReactRouterLogo className={workLogoClassName} />
                            <TailwindLogo className={workLogoClassName} />
                            <BetterAuthLogo className={workLogoClassName} />
                            <PrismaLogo className={workLogoClassName} />
                            <PostgresLogo className={workLogoClassName} />
                            <RailwayLogo className={workLogoClassName} />
                        </>
                    }
                />
            </ContentSection>
            <ContentSection>
                <WorkDisplay
                    cta="Try the demo"
                    title="Generative UI"
                    description="AI-assisted UI chat experience"
                    imageSrc="/webpage.png"
                    imageAlt="3D rendering of presenter talking about slideshow in front of an audience"
                    url="/generative-ui"
                    icons={
                        <>
                            <TypescriptLogo className={workLogoClassName} />
                            <ReactLogo className={workLogoClassName} />
                            <ReactRouterLogo className={workLogoClassName} />
                            <TailwindLogo className={workLogoClassName} />
                            <BetterAuthLogo className={workLogoClassName} />
                            <PrismaLogo className={workLogoClassName} />
                            <PostgresLogo className={workLogoClassName} />
                            <RailwayLogo className={workLogoClassName} />
                        </>
                    }
                />
            </ContentSection>
            <ContentSection>
                <WorkDisplay
                    cta="Get started"
                    title="Obsidian MCP Server"
                    description="A second brain for your everyday"
                    imageSrc="/server.png"
                    imageAlt="3D rendering of presenter talking about slideshow in front of an audience"
                    url="/obsidian-mcp-server"
                    icons={
                        <>
                            <TypescriptLogo className={workLogoClassName} />
                            <MCPLogo className={workLogoClassName} />
                            <ObsidianLogo className={workLogoClassName} />
                        </>
                    }
                />
            </ContentSection>
            <ContentSection>
                <WorkDisplay
                    cta="Create images now"
                    title="Rapidall•E"
                    description="Quickly create images using OpenAI's DALL·E"
                    url="/rapidalle"
                    imageSrc="/photo-strip.png"
                    imageAlt="3D rendering of photo strip"
                    icons={
                        <>
                            <TypescriptLogo className={workLogoClassName} />
                            <ReactLogo className={workLogoClassName} />
                            <ReactRouterLogo className={workLogoClassName} />
                            <TailwindLogo className={workLogoClassName} />
                            <BetterAuthLogo className={workLogoClassName} />
                            <PrismaLogo className={workLogoClassName} />
                            <TriggerDevLogo className={workLogoClassName} />
                        </>
                    }
                />
            </ContentSection>
            <ContentSection>
                <WorkDisplay
                    cta="Build presentations"
                    title="RR7 Slides"
                    description="A React Router based web application for creating and sharing slide presentations"
                    url="/rr7-slides"
                    imageSrc="/presentation.png"
                    imageAlt="3D rendering of presenter talking about slideshow in front of an audience"
                    icons={
                        <>
                            <TypescriptLogo className={workLogoClassName} />
                            <ReactLogo className={workLogoClassName} />
                            <ReactRouterLogo className={workLogoClassName} />
                            <TailwindLogo className={workLogoClassName} />
                            <RailwayLogo className={workLogoClassName} />
                        </>
                    }
                />
            </ContentSection>
            <ContentSection>
                <WorkDisplay
                    cta="Start learning"
                    title="AI Maniacs"
                    description="Learning site for AI enthusiasts"
                    url="/ai-maniacs"
                    imageSrc="/ai-maniacs-logo.png"
                    imageAlt="3D rendering of presenter talking about slideshow in front of an audience"
                    icons={
                        <>
                            <TypescriptLogo className={workLogoClassName} />
                            <ReactLogo className={workLogoClassName} />
                            <DocusaurusLogo className={workLogoClassName} />
                        </>
                    }
                />
            </ContentSection>
            <ContentSection>
                <WorkDisplay
                    cta="Browse repositories"
                    title="Tech with Seth"
                    description="Open sourced projects and tutorials"
                    url="https://github.com/orgs/tech-with-seth/repositories"
                    imageSrc="/unlocked.png"
                    imageAlt="3D rendering of unlocked padlock"
                    icons={
                        <>
                            <TypescriptLogo className={workLogoClassName} />
                            <ReactLogo className={workLogoClassName} />
                        </>
                    }
                />
            </ContentSection>
        </div>
    );
}
