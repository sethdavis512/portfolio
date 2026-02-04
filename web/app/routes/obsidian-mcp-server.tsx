import { HeroImage } from '~/components/HeroImage';
import { TechShowcase } from '~/components/TechShowcase';
import { TechStackLogos } from '~/components/TechStackLogos';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Obsidian MCP',
        descriptionContent:
            "Obsidian Model Context Protocol (MCP) extends Obsidian's capabilities by enabling seamless integration with external AI models for enhanced content generation, summarization, and more.",
        ogUrl: 'https://sethdavis.tech/obsidian-mcp-server'
    });
}

export default function ObsidianMCPRoute() {
    return (
        <>
            <HeroImage
                src="/obsidian-mcp-hero.png"
                alt="Obsidian MCP"
                responsive
            />
            <TechShowcase
                title="Obsidian MCP"
                about="Extensible Model Context Protocol server demonstrating plugin architecture for AI agent integration. Bridges AI assistants (Claude, Cursor, VS Code) with Obsidian vaults for note-taking, content generation, and knowledge synthesis. Client-agnostic design works with any MCP-compatible tool while providing advanced features: bulk operations, metadata handling, intelligent content summarization. A practical example of building agentic infrastructure that extends AI capabilities through standardized protocols."
                learned="Deep expertise in the Model Context Protocol specification and building robust integration layers between AI systems and external data sources. TypeScript server architecture, protocol-based communication patterns, and designing tools that work across multiple AI platforms. Understanding how to create extensible plugin systems that maintain protocol compliance while enabling advanced functionality."
                value="Demonstrates ability to build agentic infrastructure—plugins, automation tools, workflow extensions that augment AI assistant capabilities. Showcases understanding of emerging protocols and standards in the AI tooling ecosystem. This type of extensible architecture is central to building design intelligence systems that integrate with creative workflows and automate repetitive design tasks."
                sourceUrl="https://github.com/sethdavis512/obsidian-mcp-server"
                techStack={
                    <TechStackLogos
                        logos={['typescript', 'mcp', 'obsidian', 'vibe']}
                    />
                }
            />
        </>
    );
}
