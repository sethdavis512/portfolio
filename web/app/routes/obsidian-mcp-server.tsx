// import Linky from '~/components/Linky';

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
            <img
                className="w-full mb-8 border-b border-b-zinc-300 dark:border-b-zinc-700"
                src="/obsidian-mcp-hero.png"
                alt="Obsidian MCP"
            />
            <h1 className="text-4xl font-bold mb-4">Obsidian MCP</h1>
            <p></p>
        </>
    );
}
