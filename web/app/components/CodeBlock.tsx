import { useEffect, useState } from 'react';
import { cx } from 'cva.config';

interface CodeBlockProps {
    code: string;
    language?: string;
    className?: string;
}

export function CodeBlock({ code, language = 'typescript', className }: CodeBlockProps) {
    const [highlightedHtml, setHighlightedHtml] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);

    // Map common language aliases to Shiki language names
    const normalizeLanguage = (lang: string): string => {
        const langMap: Record<string, string> = {
            'js': 'javascript',
            'ts': 'typescript',
            'tsx': 'tsx',
            'jsx': 'jsx',
            'text': 'txt',
            'bash': 'bash',
            'shell': 'bash',
            'json': 'json',
            'css': 'css',
            'html': 'html',
            'yaml': 'yaml',
            'yml': 'yaml',
            'md': 'markdown',
            'markdown': 'markdown'
        };
        return langMap[lang.toLowerCase()] || lang;
    };

    useEffect(() => {
        async function highlightCode() {
            try {
                // Dynamic import to avoid SSR issues
                const { codeToHtml } = await import('shiki');
                
                const normalizedLang = normalizeLanguage(language);
                console.log(`Highlighting code as: ${normalizedLang} (original: ${language})`);
                
                const html = await codeToHtml(code, {
                    lang: normalizedLang,
                    theme: 'github-dark'
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
            <div className={cx(
                'relative overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700',
                'bg-gray-50 dark:bg-gray-900',
                className
            )}>
                <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-4 py-2">
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                        {language}
                    </span>
                </div>
                <pre className="p-4 text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                    <code>{code}</code>
                </pre>
            </div>
        );
    }

    return (
        <div className={cx(
            'relative overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700',
            '[&_pre]:!bg-transparent [&_pre]:!m-0 [&_pre]:!p-4',
            className
        )}>
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-4 py-2">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    {language}
                </span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
        </div>
    );
}
