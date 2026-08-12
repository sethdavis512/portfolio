import { useEffect, useState } from 'react';
import { cx } from '~/cva.config';

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
                        light: 'github-light',
                        dark: 'github-dark'
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
                <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 px-4 py-2">
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {language}
                    </span>
                    <button
                        onClick={copyToClipboard}
                        className="text-xs font-medium cursor-pointer px-3 py-1 rounded-md border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:text-primary-700 dark:hover:text-primary-300 hover:border-primary-500/60 transition-colors duration-150"
                        title="Copy to clipboard"
                    >
                        {copied ? 'Copied' : 'Copy'}
                    </button>
                </div>
                <div className="overflow-x-auto p-4">
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
                'border border-zinc-200 dark:border-zinc-800',
                'bg-zinc-50 dark:bg-zinc-900',
                className
            )}
        >
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 px-4 py-2">
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    {language}
                </span>
                <button
                    onClick={copyToClipboard}
                    className="text-xs font-medium cursor-pointer px-3 py-1 rounded-md border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:text-primary-700 dark:hover:text-primary-300 hover:border-primary-500/60 transition-colors duration-150"
                    title="Copy to clipboard"
                >
                    {copied ? 'Copied' : 'Copy'}
                </button>
            </div>
            <div
                className={cx(
                    'overflow-x-auto p-4',
                    '[&>pre]:!m-0 [&>pre]:!border-0 [&>pre]:!bg-transparent',
                    '[&>pre]:!p-0 [&>pre]:!font-mono [&>pre]:!text-[14px] [&>pre]:!leading-7',
                    '[&>pre]:!text-zinc-800 [&>pre]:dark:!text-zinc-100',
                    '[&_code]:!font-mono [&_code]:!text-[14px] [&_code]:!leading-7'
                )}
                dangerouslySetInnerHTML={{ __html: highlightedHtml }}
            />
        </div>
    );
}
