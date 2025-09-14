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
            <HeroImage src="/obsidian-mcp-hero.png" alt="Obsidian MCP" />
            <TechShowcase
                title="Obsidian MCP"
                about="The Obsidian MCP Server is a comprehensive Model Context Protocol implementation that bridges the gap between AI assistants and personal knowledge management systems. This server enables seamless integration between popular AI tools like Claude, Cursor, and VS Code with Obsidian vaults, allowing users to leverage AI for note-taking, content generation, and knowledge synthesis. The project features AI-powered content operations, and robust error handling. What makes this project unique is its client-agnostic design - it works with any MCP-compatible client while providing advanced features like bulk operations, metadata handling, and intelligent content summarization."
                learned="This project immersed me in the Model Context Protocol specification and taught me how to build robust, scalable integration layers between AI systems and external data sources. I gained expertise in TypeScript server architecture, advanced file system operations, and the intricacies of protocol-based communication. Working with OpenAI's API in a server context taught me about responsible AI integration. I also learned about the challenges of building tools that work across multiple AI platforms, which required careful attention to protocol compliance and flexible architecture design. The project significantly expanded my understanding of how AI can augment personal productivity workflows."
                value="The Obsidian MCP Server enhances productivity for knowledge workers who want to leverage AI with their existing note-taking workflows. By creating this bridge, I've enabled users to enhance their productivity without abandoning their established systems. The project showcases my ability to work with emerging protocols and standards while building production-ready software that handles real user data. From a technical perspective, it demonstrates my skills in building flexible, maintainable server applications and my understanding of AI integration."
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
