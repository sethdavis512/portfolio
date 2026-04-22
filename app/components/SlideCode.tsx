import { useEffect, useState } from 'react';
import { cx } from '~/cva.config';

type Props = {
    code: string;
    language?: string;
    className?: string;
};

const LANG_ALIASES: Record<string, string> = {
    js: 'javascript',
    ts: 'typescript',
    tsx: 'tsx',
    jsx: 'jsx',
    bash: 'bash',
    shell: 'bash',
    sh: 'bash',
    zsh: 'bash',
    json: 'json',
    yaml: 'yaml',
    yml: 'yaml',
    css: 'css',
    html: 'html',
    md: 'markdown',
    markdown: 'markdown',
    text: 'txt'
};

function normalizeLanguage(lang: string): string {
    return LANG_ALIASES[lang.toLowerCase()] ?? lang;
}

export function SlideCode({ code, language = 'typescript', className }: Props) {
    const [highlightedHtml, setHighlightedHtml] = useState<string>('');

    useEffect(() => {
        let cancelled = false;
        async function run() {
            try {
                const { codeToHtml } = await import('shiki');
                const html = await codeToHtml(code, {
                    lang: normalizeLanguage(language),
                    theme: 'github-dark-default',
                    transformers: [
                        {
                            pre(node) {
                                node.properties.style =
                                    'background: transparent !important; margin: 0 !important; padding: 0 !important;';
                            },
                            code(node) {
                                node.properties.style =
                                    'background: transparent !important; font-family: "JetBrains Mono", Menlo, Monaco, monospace !important; font-variant-ligatures: common-ligatures !important;';
                            }
                        }
                    ]
                });
                if (!cancelled) setHighlightedHtml(html);
            } catch {
                /* fall through to raw-code fallback */
            }
        }
        run();
        return () => {
            cancelled = true;
        };
    }, [code, language]);

    return (
        <div
            className={cx(
                'relative rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-2xl shadow-black/40 overflow-hidden',
                className
            )}
        >
            <div className="absolute top-2 right-3 sm:top-4 sm:right-5 text-[0.6rem] sm:text-[0.7rem] font-mono uppercase tracking-[0.2em] text-zinc-500 pointer-events-none">
                {language}
            </div>
            <div
                className={cx(
                    'overflow-x-auto px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8',
                    '[&>pre]:!m-0 [&>pre]:!bg-transparent [&>pre]:!border-0',
                    '[&_code]:!font-mono [&_code]:!text-[clamp(0.75rem,1.6vw+0.3rem,1.35rem)] [&_code]:!leading-[1.55] sm:[&_code]:!leading-[1.65]'
                )}
            >
                {highlightedHtml ? (
                    <div dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
                ) : (
                    <pre className="m-0 bg-transparent">
                        <code className="font-mono text-zinc-100 text-[clamp(0.75rem,1.6vw+0.3rem,1.35rem)] leading-[1.55] sm:leading-[1.65]">
                            {code}
                        </code>
                    </pre>
                )}
            </div>
        </div>
    );
}
