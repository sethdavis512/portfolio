import { Command } from 'cmdk';
import { Home, LinkIcon } from 'lucide-react';
import { useNavigate } from 'react-router';

interface CommandPaletteProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    loading?: boolean;
}

const workLinks = [
    {
        to: '/work',
        icon: LinkIcon,
        label: 'See all'
    },
    {
        to: '/video-machine',
        icon: LinkIcon,
        label: 'Video Machine'
    },
    {
        to: '/iridium',
        icon: LinkIcon,
        label: 'Iridium'
    },
    {
        to: '/virtruv',
        icon: LinkIcon,
        label: 'Virtruv'
    },
    {
        to: '/freelance',
        icon: LinkIcon,
        label: 'Freelance'
    },
    {
        to: '/prompt-suite',
        icon: LinkIcon,
        label: 'Prompt Suite'
    },
    {
        to: '/rapidalle',
        icon: LinkIcon,
        label: 'Rapidall•E'
    },
    {
        to: '/rr7-slides',
        icon: LinkIcon,
        label: 'RR7 Slides'
    },
    {
        to: '/obsidian-mcp-server',
        icon: LinkIcon,
        label: 'Obsidian MCP Server'
    },
    {
        to: '/ai-maniacs',
        icon: LinkIcon,
        label: 'AI Maniacs'
    },
    {
        to: '/tech-with-seth',
        icon: LinkIcon,
        label: 'Tech with Seth'
    },
    {
        to: '/aws-flashcards',
        icon: LinkIcon,
        label: 'AWS Flashcards'
    },
    {
        to: '/custom-file-generator',
        icon: LinkIcon,
        label: 'Custom File Generator (Guide)'
    },
    {
        to: '/tray-app-guide',
        icon: LinkIcon,
        label: 'Tray App Guide'
    }
];

const pagesLinks = [
    {
        to: '/',
        icon: LinkIcon,
        label: 'Home'
    },
    {
        to: '/about',
        icon: LinkIcon,
        label: 'About'
    },
    {
        to: '/products',
        icon: LinkIcon,
        label: 'Products'
    },
    {
        to: '/truck',
        icon: LinkIcon,
        label: 'Truck'
    }
];

const socialLinks = [
    {
        to: 'https://www.linkedin.com/in/sethdavis512/',
        icon: LinkIcon,
        label: 'LinkedIn'
    },
    {
        to: 'https://x.com/sethdavis512',
        icon: LinkIcon,
        label: 'X'
    },
    {
        to: 'https://github.com/sethdavis512',
        icon: LinkIcon,
        label: 'GitHub'
    },
    {
        to: 'https://codepen.com/sethdavis512',
        icon: LinkIcon,
        label: 'CodePen'
    }
];

interface CommandSectionProps {
    title: string;
    links: {
        to: string;
        icon: React.ComponentType<{ className?: string }>;
        label: string;
    }[];
    onSelect: (to: string) => void;
}

function CommandSection({ title, links, onSelect }: CommandSectionProps) {
    if (links.length === 0) {
        return null;
    }

    return (
        <Command.Group
            heading={title}
            className="p-6 [&_[cmdk-group-heading]]:text-zinc-700 dark:[&_[cmdk-group-heading]]:text-zinc-300 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:mb-4"
        >
            {links.map((link) => (
                <Command.Item
                    key={link.to}
                    value={link.label}
                    onSelect={() => onSelect(link.to)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 data-[selected=true]:bg-zinc-100 dark:data-[selected=true]:bg-zinc-700 cursor-pointer group"
                >
                    <div className="flex items-center gap-3 flex-1">
                        <link.icon className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                        <span className="text-zinc-700 dark:text-zinc-300">
                            {link.label}
                        </span>
                    </div>
                </Command.Item>
            ))}
        </Command.Group>
    );
}

export function CommandPalette({
    open,
    onOpenChange,
    loading = false
}: CommandPaletteProps) {
    const navigate = useNavigate();
    return (
        <Command.Dialog
            className="fixed inset-0 z-50 flex items-start justify-center pt-20"
            open={open}
            onOpenChange={onOpenChange}
            label="Command Palette"
            loop
        >
            <div
                className="fixed inset-0 bg-black/50"
                onClick={() => onOpenChange(false)}
            />
            <div className="relative bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700 w-full max-w-2xl mx-4 overflow-hidden shadow-2xl">
                {/* Navigation Header */}
                <div className="flex items-center gap-3 px-6 py-4 border-b border-zinc-200 dark:border-zinc-700">
                    <Home className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                    <span className="text-zinc-700 dark:text-zinc-300 text-sm font-medium">
                        Home
                    </span>
                </div>

                {/* Main Search Input */}
                <div className="p-6 border-b border-zinc-200 dark:border-zinc-700">
                    <Command.Input
                        placeholder="Where would you like to go?"
                        className="w-full bg-transparent text-zinc-900 dark:text-zinc-100 text-xl font-medium placeholder-zinc-400 dark:placeholder-zinc-500 border-none outline-none"
                    />
                </div>

                <Command.List className="max-h-96 overflow-y-auto">
                    {loading && (
                        <Command.Loading className="p-6 text-zinc-500 dark:text-zinc-400">
                            Hang on…
                        </Command.Loading>
                    )}

                    <Command.Empty className="p-6 text-center text-zinc-400 dark:text-zinc-500">
                        No results found.
                    </Command.Empty>

                    <CommandSection
                        title="Work"
                        links={workLinks}
                        onSelect={(to) => {
                            onOpenChange(false);
                            navigate(to);
                        }}
                    />
                    <CommandSection
                        title="Pages"
                        links={pagesLinks}
                        onSelect={(to) => {
                            onOpenChange(false);
                            navigate(to);
                        }}
                    />
                    <CommandSection
                        title="Social"
                        links={socialLinks}
                        onSelect={(to) => {
                            onOpenChange(false);
                            window.open(to, '_blank', 'noopener,noreferrer');
                        }}
                    />
                </Command.List>
            </div>
        </Command.Dialog>
    );
}
