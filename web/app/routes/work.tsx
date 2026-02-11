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

const workItems = [
    {
        cta: 'See more',
        title: 'Iridium',
        description:
            'Launch your SaaS in days, not months. Iridium provides a quality foundations—from authentication to subscriptions—so you focus on building what makes your product unique.',
        imageSrc: '/iridium-thumbnail.webp',
        imageAlt: 'Web browser displaying Iridium dashboard',
        url: '/iridium'
    },
    {
        cta: 'View project',
        title: 'Virtruv',
        description:
            'Custom WordPress website build including brand development, visual identity design, and close collaboration with stakeholders to deliver a solution aligned with business objectives.',
        imageSrc: '/virtruv-thumbnail.webp',
        imageAlt: 'Virtruv website redesign',
        url: '/virtruv'
    },
    {
        cta: 'Learn more',
        title: 'Prompt Suite',
        description:
            'Native desktop tray app for instant AI prompt access without disrupting your workflow.',
        imageSrc: '/prompt-suite-thumbnail.webp',
        imageAlt: 'Prompt Suite desktop app in system tray',
        url: '/prompt-suite'
    },
    {
        cta: 'View project',
        title: 'AWS Flashcards',
        description:
            'Electron tray app for studying AWS Cloud Practitioner (CLF-C02) certification with 130+ flashcards.',
        imageSrc: '/aws-flashcards-thumbnail.webp',
        imageAlt: 'AWS Flashcards tray app',
        url: '/aws-flashcards'
    },
    {
        cta: 'Explore platform',
        title: 'Video Machine',
        description:
            'Video rendering platform that creates TikTok-style slide videos using Remotion, with credit-based payments and background processing.',
        imageSrc: '/video-machine-thumbnail.webp',
        imageAlt: 'Video Machine rendering interface',
        url: '/video-machine'
    },
    // {
    //     cta: 'Explore bundles',
    //     title: 'Claude Desktop Bundles for Real Estate + Insurance Agents',
    //     description:
    //         'Two complete AI playbooks for real estate and insurance teams, combining step-by-step workflows, ready-to-use prompts, and client-ready messaging to save hours each week.',
    //     imageSrc: '/claude-desktop-thumbnail.webp',
    //     imageAlt: 'Claude Desktop Bundles for Real Estate + Insurance Agents',
    //     url: '/products'
    // },
    {
        cta: 'View more',
        title: 'Rapidall•E',
        description: "Quickly create images using OpenAI's DALL·E",
        imageSrc: '/rapidalle-thumbnail.webp',
        imageAlt: '3D rendering of photo strip',
        url: '/rapidalle'
    },
    {
        cta: 'Learn more',
        title: 'RR7 Slides',
        description:
            'A React Router based web application for creating and sharing slide presentations',
        imageSrc: '/rr7-slides-thumbnail.webp',
        imageAlt:
            '3D rendering of presenter talking about slideshow in front of an audience',
        url: '/rr7-slides'
    },
    {
        cta: 'Get started',
        title: 'Obsidian MCP Server',
        description: 'A second brain for your everyday',
        imageSrc: '/obsidian-mcp-thumbnail.webp',
        imageAlt: '3D rendering of a brain with network connections',
        url: '/obsidian-mcp-server'
    },
    {
        cta: 'Start learning',
        title: 'AI Maniacs',
        description: 'Learning site for AI enthusiasts',
        imageSrc: '/ai-maniacs-thumbnail.webp',
        imageAlt:
            '3D rendering of presenter talking about slideshow in front of an audience',
        url: '/ai-maniacs'
    },
    {
        cta: 'Browse repositories',
        title: 'Tech with Seth',
        description: 'Open sourced libraries and templates',
        imageSrc: '/tech-with-seth-thumbnail.webp',
        imageAlt: 'Screenshot of GitHub profile page',
        url: '/tech-with-seth'
    },
    {
        cta: 'Show more',
        title: 'Custom File Generator CLI (Guide)',
        description:
            'Instructions on how to create a custom file generator using Plop.js',
        imageSrc: '/custom-file-generator-thumbnail.webp',
        imageAlt: '3D rendering of a drop of water',
        url: '/custom-file-generator'
    }
];

export default function WorkRoute() {
    return (
        <>
            <Heading as="h1">Work</Heading>
            <div className="grid grid-cols-1 gap-8 items-stretch">
                {workItems.map((item, index) => (
                    <ContentSection key={item.url}>
                        <WorkDisplay {...item} reverse={index % 2 !== 0} />
                    </ContentSection>
                ))}
            </div>
        </>
    );
}
