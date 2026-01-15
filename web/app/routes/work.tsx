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
            <Heading as="h1">Work</Heading>
            <div className="grid grid-cols-1 gap-8 items-stretch">
                <ContentSection>
                    <WorkDisplay
                        cta="See more"
                        title="Iridium"
                        description="Launch your SaaS in days, not months. Iridium provides a quality foundations—from authentication to subscriptions—so you focus on building what makes your product unique."
                        imageSrc="/iridium-thumbnail.webp"
                        imageAlt="Web browser displaying Iridium dashboard"
                        url="/iridium"
                    />
                </ContentSection>
                <ContentSection>
                    <WorkDisplay
                        cta="Explore the tool"
                        title="Prompt Bucket"
                        description="Prompt scoring and organization web application"
                        imageSrc="/prompt-bucket-thumbnail.webp"
                        imageAlt="A 3D bucket"
                        url="/prompt-bucket"
                        reverse
                    />
                </ContentSection>
                <ContentSection>
                    <WorkDisplay
                        cta="Explore bundles"
                        title="Claude Desktop Bundles for Real Estate + Insurance Agents"
                        description="Two complete AI playbooks for real estate and insurance teams, combining step-by-step workflows, ready-to-use prompts, and client-ready messaging to save hours each week."
                        url="/products"
                        imageSrc="/claude-desktop-thumbnail.webp"
                        imageAlt="Claude Desktop Bundles for Real Estate + Insurance Agents"
                    />
                </ContentSection>
                <ContentSection>
                    <WorkDisplay
                        cta="View more"
                        title="Rapidall•E"
                        description="Quickly create images using OpenAI's DALL·E"
                        url="/rapidalle"
                        imageSrc="/rapidalle-thumbnail.webp"
                        imageAlt="3D rendering of photo strip"
                        reverse
                    />
                </ContentSection>
                <ContentSection>
                    <WorkDisplay
                        cta="Learn more"
                        title="RR7 Slides"
                        description="A React Router based web application for creating and sharing slide presentations"
                        url="/rr7-slides"
                        imageSrc="/rr7-slides-thumbnail.webp"
                        imageAlt="3D rendering of presenter talking about slideshow in front of an audience"
                    />
                </ContentSection>
                <ContentSection>
                    <WorkDisplay
                        cta="Get started"
                        title="Obsidian MCP Server"
                        description="A second brain for your everyday"
                        imageSrc="/obsidian-mcp-thumbnail.webp"
                        imageAlt="3D rendering of a brain with network connections"
                        url="/obsidian-mcp-server"
                        reverse
                    />
                </ContentSection>
                <ContentSection>
                    <WorkDisplay
                        cta="Start learning"
                        title="AI Maniacs"
                        description="Learning site for AI enthusiasts"
                        url="/ai-maniacs"
                        imageSrc="/ai-maniacs-thumbnail.webp"
                        imageAlt="3D rendering of presenter talking about slideshow in front of an audience"
                    />
                </ContentSection>
                <ContentSection>
                    <WorkDisplay
                        cta="Browse repositories"
                        title="Tech with Seth"
                        description="Open sourced libraries and templates"
                        url="/tech-with-seth"
                        imageSrc="/tech-with-seth-thumbnail.webp"
                        imageAlt="Screenshot of GitHub profile page"
                        reverse
                    />
                </ContentSection>
                <ContentSection>
                    <WorkDisplay
                        cta="Show more"
                        title="Custom File Generator CLI (Guide)"
                        description="Instructions on how to create a custom file generator using Plop.js"
                        url="/custom-file-generator"
                        imageSrc="/custom-file-generator-thumbnail.webp"
                        imageAlt="3D rendering of a drop of water"
                    />
                </ContentSection>
            </div>
        </>
    );
}
