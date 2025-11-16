import { cx } from 'cva.config';
import { Link } from 'react-router';
import { Button } from '~/components/Button';
import { ContentSection } from '~/components/ContentSection';
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
    reverse?: boolean;
}

function WorkDisplay({
    cta,
    title,
    description,
    url,
    imageSrc,
    imageAlt,
    reverse
}: WorkDisplayProps) {
    return (
        <Link to={url}>
            <div className="hover:scale-[102%] transition-all duration-200 hover:bg-zinc-100 hover:dark:bg-zinc-900 rounded-lg h-full">
                <div
                    className={cx(
                        `flex flex-col lg:flex-row items-center gap-8 p-6`,
                        reverse && 'lg:flex-row-reverse'
                    )}
                >
                    <img className="w-[500px]" src={imageSrc} alt={imageAlt} />
                    <div className={cx(`text-center lg:text-left flex-1`)}>
                        <Heading as="h2" className="text-3xl font-bold">
                            {title}
                        </Heading>
                        <p className="mb-8">{description}</p>
                        <Button>{cta}</Button>
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
            <div className="grid grid-cols-1 gap-8 items-stretch">
                <ContentSection>
                    <WorkDisplay
                        cta="See more"
                        title="Iridium"
                        description="Launch your SaaS in days, not months. Iridium provides a quality foundations—from authentication to subscriptions—so you focus on building what makes your product unique."
                        imageSrc="/iridium-hero.png"
                        imageAlt="Web browser displaying Iridium dashboard"
                        url="/iridium"
                    />
                </ContentSection>
                <ContentSection>
                    <WorkDisplay
                        cta="Explore the tool"
                        title="Prompt Bucket"
                        description="Prompt scoring and organization web application"
                        imageSrc="/prompt-bucket-hero.png"
                        imageAlt="A 3D bucket"
                        url="/prompt-bucket"
                        reverse
                    />
                </ContentSection>
                <ContentSection>
                    <WorkDisplay
                        cta="View more"
                        title="Rapidall•E"
                        description="Quickly create images using OpenAI's DALL·E"
                        url="/rapidalle"
                        imageSrc="/rapidalle-hero.png"
                        imageAlt="3D rendering of photo strip"
                    />
                </ContentSection>
                <ContentSection>
                    <WorkDisplay
                        cta="Learn more"
                        title="RR7 Slides"
                        description="A React Router based web application for creating and sharing slide presentations"
                        url="/rr7-slides"
                        imageSrc="/rr7-slides-hero.png"
                        imageAlt="3D rendering of presenter talking about slideshow in front of an audience"
                        reverse
                    />
                </ContentSection>
                <ContentSection>
                    <WorkDisplay
                        cta="Get started"
                        title="Obsidian MCP Server"
                        description="A second brain for your everyday"
                        imageSrc="/obsidian-mcp-hero.png"
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
                        imageSrc="/ai-maniacs-hero.png"
                        imageAlt="3D rendering of presenter talking about slideshow in front of an audience"
                        reverse
                    />
                </ContentSection>
                <ContentSection>
                    <WorkDisplay
                        cta="Browse repositories"
                        title="Tech with Seth"
                        description="Open sourced libraries and templates"
                        url="/tech-with-seth"
                        imageSrc="/tech-with-seth-hero.png"
                        imageAlt="3D rendering of unlocked padlock"
                    />
                </ContentSection>
                <ContentSection>
                    <WorkDisplay
                        cta="Show more"
                        title="Custom File Generator CLI (Guide)"
                        description="Instructions on how to create a custom file generator using Plop.js"
                        url="/custom-file-generator"
                        imageSrc="/custom-file-generator-hero.png"
                        imageAlt="3D rendering of a drop of water"
                        reverse
                    />
                </ContentSection>
            </div>
            {/* <Divider className="my-8" />
            <Heading as="h2" className="mb-8">
                In progress
            </Heading>
            <div className="grid grid-cols-1 gap-8 items-stretch">
                <ContentSection>
                    <WorkDisplay
                        cta="See progress"
                        title="Generative UI"
                        description="AI-assisted UI chat experience"
                        imageSrc="/generative-ui-hero.png"
                        imageAlt="3D rendering of presenter talking about slideshow in front of an audience"
                        url="/generative-ui"
                        reverse
                    />
                </ContentSection>
                <ContentSection>
                    <WorkDisplay
                        cta="Check it out"
                        title="RR7 Tuner"
                        description="Tweak your React Router 7 app to your liking"
                        url="/rr7-tuner"
                        imageSrc="/rr7-tuner-hero.png"
                        imageAlt="3D rendering of tuner"
                    />
                </ContentSection>
            </div> */}
        </>
    );
}
