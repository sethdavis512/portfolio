// import Linky from '~/components/Linky';

import { HeroImage } from '~/components/HeroImage';
import { TechShowcase } from '~/components/TechShowcase';
import { TechStackLogos } from '~/components/TechStackLogos';

export function meta() {
    return [
        { title: `Obsidian MCP | Seth Davis' Portfolio` },
        {
            name: 'description',
            content: `Explore the Obsidian MCP setup of Seth Davis, a skilled frontend engineer with expertise in React, web development, and more.`
        }
    ];
}

export default function ObsidianMCPRoute() {
    return (
        <>
            <HeroImage src="/obsidian-mcp-hero.png" alt="Obsidian MCP" />
            <TechShowcase
                title="Obsidian MCP"
                about="Obsidian Model Context Protocol (MCP) is a community-driven project that extends Obsidian's capabilities by enabling seamless integration with external AI models. It allows users to connect their Obsidian notes to various AI services for enhanced functionality, such as content generation, summarization, and more."
                learned="Developed advanced component patterns using TypeScript and React, focusing on reusability and scalability. Gained experience with GraphQL data fetching, SSR, and integrating a CMS backend for content management."
                value="Showcases best practices in building maintainable, high-performance UIs with a modern tech stack. Highlights the power of generative patterns for rapid prototyping and robust production apps."
                sourceUrl="https://github.com/sethdavis512/obsidian-mcp-server"
                techStack={
                    <TechStackLogos logos={['typescript', 'mcp', 'obsidian']} />
                }
            />
        </>
    );
}
