import { useEffect, useState } from 'react';
import { cx } from 'cva.config';

interface CodeBlockProps {
    code: string;
    language?: string;
    className?: string;
    showLineNumbers?: boolean;
}

export function CodeBlock({
    code,
    language = 'typescript',
    className,
    showLineNumbers = true
}: CodeBlockProps) {
    const [highlightedHtml, setHighlightedHtml] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    // Map common language aliases to Shiki language names
    const normalizeLanguage = (lang: string): string => {
        const langMap: Record<string, string> = {
            js: 'javascript',
            ts: 'typescript',
            tsx: 'tsx',
            jsx: 'jsx',
            text: 'txt',
            bash: 'bash',
            shell: 'bash',
            json: 'json',
            css: 'css',
            html: 'html',
            yaml: 'yaml',
            yml: 'yaml',
            md: 'markdown',
            markdown: 'markdown'
        };
        return langMap[lang.toLowerCase()] || lang;
    };

    useEffect(() => {
        async function highlightCode() {
            try {
                // Dynamic import to avoid SSR issues
                const { codeToHtml } = await import('shiki');

                const normalizedLang = normalizeLanguage(language);

                // Use professional themes with clean styling
                const html = await codeToHtml(code, {
                    lang: normalizedLang,
                    themes: {
                        light: 'github-dark',
                        dark: 'github-light'
                    },
                    transformers: [
                        {
                            pre(node) {
                                node.properties.style =
                                    'background: transparent !important; margin: 0 !important; padding: 0 !important;';
                            },
                            code(node) {
                                node.properties.style =
                                    'background: transparent !important; font-family: "JetBrains Mono", "Fira Code", Menlo, Monaco, "Courier New", monospace !important; font-size: 14px !important; line-height: 1.75 !important; font-variant-ligatures: common-ligatures !important;';
                            }
                        }
                    ]
                });

                setHighlightedHtml(html);
            } catch (error) {
                console.warn(`Failed to highlight ${language}:`, error);
                // Keep loading state false to show fallback
            } finally {
                setIsLoading(false);
            }
        }

        highlightCode();
    }, [code, language]);

    // Show fallback while loading or if highlighting failed
    if (isLoading || !highlightedHtml) {
        return (
            <div
                className={cx(
                    'not-prose group relative overflow-hidden',
                    'rounded-xl border border-zinc-200/80 dark:border-zinc-700/50',
                    'bg-gradient-to-br from-zinc-50 via-white to-zinc-50/50',
                    'dark:from-zinc-900/90 dark:via-zinc-900 dark:to-zinc-800/90',
                    'shadow-2xl shadow-zinc-900/5 dark:shadow-zinc-900/20',
                    'ring-1 ring-zinc-900/5 dark:ring-white/10',
                    'backdrop-blur-sm',
                    className
                )}
            >
                <div className="flex items-center justify-between border-b border-zinc-200/60 dark:border-zinc-700/40 px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                        </div>
                        <span className="text-xs font-mono font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider px-2 py-1 rounded bg-zinc-100/80 dark:bg-zinc-800/60">
                            {language}
                        </span>
                    </div>
                    <button
                        onClick={copyToClipboard}
                        className="opacity-0 group-hover:opacity-100 transition-all duration-200 text-xs font-mono font-medium text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 px-3 py-1.5 rounded-md bg-zinc-100/80 hover:bg-zinc-200/80 dark:bg-zinc-800/60 dark:hover:bg-zinc-700/60 border border-zinc-200/60 dark:border-zinc-600/40"
                        title="Copy to clipboard"
                    >
                        {copied ? 'COPIED' : 'COPY'}
                    </button>
                </div>
                <div className="overflow-x-auto bg-gradient-to-br from-zinc-50/30 to-white/50 dark:from-zinc-900/40 dark:to-zinc-800/30">
                    <pre className="text-[14px] leading-7 text-zinc-800 dark:text-zinc-100 overflow-x-auto font-mono bg-transparent border-0 m-0">
                        <code>{code}</code>
                    </pre>
                </div>
            </div>
        );
    }

    return (
        <div
            className={cx(
                'not-prose group relative overflow-hidden',
                'rounded-xl border border-zinc-200/80 dark:border-zinc-700/50',
                'bg-gradient-to-br from-zinc-50 via-white to-zinc-50/50',
                'dark:from-zinc-900/90 dark:via-zinc-900 dark:to-zinc-800/90',
                'shadow-2xl shadow-zinc-900/5 dark:shadow-zinc-900/20',
                'ring-1 ring-zinc-900/5 dark:ring-white/10',
                'backdrop-blur-sm',
                className
            )}
        >
            <div className="flex items-center justify-between border-b border-zinc-200/60 dark:border-zinc-700/40 px-6 py-4">
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                    </div>
                    <span className="text-xs font-mono font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider px-2 py-1 rounded bg-zinc-100/80 dark:bg-zinc-800/60">
                        {language}
                    </span>
                </div>
                <button
                    onClick={copyToClipboard}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-200 text-xs font-mono font-medium text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 px-3 py-1.5 rounded-md bg-zinc-100/80 hover:bg-zinc-200/80 dark:bg-zinc-800/60 dark:hover:bg-zinc-700/60 border border-zinc-200/60 dark:border-zinc-600/40"
                    title="Copy to clipboard"
                >
                    {copied ? 'COPIED' : 'COPY'}
                </button>
            </div>
            <div
                className={cx(
                    'overflow-x-auto bg-gradient-to-br from-zinc-50/30 to-white/50 dark:from-zinc-900/40 dark:to-zinc-800/30 p-4',
                    '[&>pre]:!m-0 [&>pre]:!border-0 [&>pre]:!bg-transparent',
                    '[&>pre]:!px-6 [&>pre]:!py-8 [&>pre]:!font-mono [&>pre]:!text-[14px] [&>pre]:!leading-7',
                    '[&>pre]:!text-zinc-800 [&>pre]:dark:!text-zinc-100',
                    '[&_code]:!font-mono [&_code]:!text-[14px] [&_code]:!leading-7'
                )}
                dangerouslySetInnerHTML={{ __html: highlightedHtml }}
            />
        </div>
    );
}
