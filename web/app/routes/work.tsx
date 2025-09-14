import { Link } from 'react-router';
import { Button } from '~/components/Button';
import { ContentSection } from '~/components/ContentSection';
import { Divider } from '~/components/Divider';
import { Heading } from '~/components/Heading';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Work',
        descriptionContent: 'Projects and applications built by Seth Davis'
    });
}

interface WorkDisplayProps {
    cta: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    url: string;
}

function WorkDisplay({
    cta,
    title,
    description,
    url,
    imageSrc,
    imageAlt
}: WorkDisplayProps) {
    return (
        <Link to={url}>
            <div className="hover:scale-[102%] transition-all duration-200 hover:bg-zinc-100 hover:dark:bg-zinc-900 rounded-lg p-8 h-full">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <img className="w-[200px]" src={imageSrc} alt={imageAlt} />
                    <div className="text-center md:text-left flex-1">
                        <Heading as="h2" className="text-3xl font-bold mb-4">
                            {title}
                        </Heading>
                        <p className="mb-4">{description}</p>
                        <Button variant="outline">{cta}</Button>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default function WorkRoute() {
    return (
        <>
            <Heading as="h1">My work</Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
                <ContentSection>
                    <WorkDisplay
                        cta="Explore the tool"
                        title="Prompt Bucket"
                        description="Prompt scoring and organization web application"
                        imageSrc="/bucket.png"
                        imageAlt="A 3D bucket"
                        url="/prompt-bucket"
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
                    />
                </ContentSection>
                <ContentSection>
                    <WorkDisplay
                        cta="Browse repositories"
                        title="Tech with Seth"
                        description="Open sourced libraries and templates"
                        url="/tech-with-seth"
                        imageSrc="/unlocked.png"
                        imageAlt="3D rendering of unlocked padlock"
                    />
                </ContentSection>
                <ContentSection>
                    <WorkDisplay
                        cta="Learn more"
                        title="Custom File Generator CLI (Guide)"
                        description="Instructions on how to create a custom file generator using Plop.js"
                        url="/custom-file-generator"
                        imageSrc="/plop-drop.png"
                        imageAlt="3D rendering of a drop of water"
                    />
                </ContentSection>
            </div>
            <Divider className="my-8" />
            <Heading as="h2" className="mb-8">
                In progress
            </Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
                <ContentSection>
                    <WorkDisplay
                        cta="Try the demo"
                        title="Generative UI"
                        description="AI-assisted UI chat experience"
                        imageSrc="/webpage.png"
                        imageAlt="3D rendering of presenter talking about slideshow in front of an audience"
                        url="/generative-ui"
                    />
                </ContentSection>
                <ContentSection>
                    <WorkDisplay
                        cta="Check it out"
                        title="RR7 Tuner"
                        description="Tweak your React Router 7 app to your liking"
                        url="/rr7-tuner"
                        imageSrc="/tuner.png"
                        imageAlt="3D rendering of tuner"
                    />
                </ContentSection>
            </div>
        </>
    );
}
