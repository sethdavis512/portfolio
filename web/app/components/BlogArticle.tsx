import {
    DocumentRenderer,
    type DocumentRendererProps
} from '@keystone-6/document-renderer';
import { CodeBlock } from './CodeBlock';

export const renderers: DocumentRendererProps['renderers'] = {
    block: {
        code: ({ children }: any) => {
            const code =
                typeof children === 'string'
                    ? children
                    : String(children || '');

            // Smart language detection based on code content
            const detectLanguage = (codeContent: string): string => {
                const content = codeContent.trim().toLowerCase();

                // TypeScript/TSX patterns
                if (
                    content.includes('interface ') ||
                    content.includes('type ') ||
                    content.includes(': string') ||
                    content.includes(': number') ||
                    content.includes('export interface') ||
                    content.includes('export type')
                ) {
                    return content.includes('<') && content.includes('/>')
                        ? 'tsx'
                        : 'typescript';
                }

                // JSX patterns
                if (
                    content.includes('<') &&
                    content.includes('/>') &&
                    (content.includes('function ') ||
                        content.includes('const ') ||
                        content.includes('export '))
                ) {
                    return 'jsx';
                }

                // JavaScript patterns
                if (
                    content.includes('function ') ||
                    content.includes('const ') ||
                    content.includes('let ') ||
                    content.includes('var ') ||
                    content.includes('export ') ||
                    content.includes('import ')
                ) {
                    return 'javascript';
                }

                // CSS patterns
                if (
                    content.includes('{') &&
                    content.includes('}') &&
                    content.includes(':') &&
                    content.includes(';')
                ) {
                    return 'css';
                }

                // JSON patterns
                if (
                    (content.startsWith('{') && content.endsWith('}')) ||
                    (content.startsWith('[') && content.endsWith(']'))
                ) {
                    try {
                        JSON.parse(codeContent);
                        return 'json';
                    } catch {}
                }

                // HTML patterns
                if (
                    content.includes('<html') ||
                    content.includes('<!doctype') ||
                    (content.includes('<div') && content.includes('</div>'))
                ) {
                    return 'html';
                }

                // Bash patterns
                if (
                    content.includes('#!/bin/bash') ||
                    content.includes('npm ') ||
                    content.includes('cd ') ||
                    content.includes('ls ') ||
                    content.includes('mkdir ') ||
                    content.includes('git ')
                ) {
                    return 'bash';
                }

                // Default to typescript for your React Router content
                return 'typescript';
            };

            const language = detectLanguage(code);

            return (
                <CodeBlock code={code} language={language} className="my-6" />
            );
        }
    },
    inline: {
        code: ({ children }) => {
            return (
                <code className="bg-zinc-100 dark:bg-slate-800 px-2 py-1.5 rounded text-zinc-900 dark:text-zinc-50 font-mono text-sm border border-zinc-300 dark:border-zinc-700">
                    {children}
                </code>
            );
        }
    }
};

interface BlogArticleProps {
    document: DocumentRendererProps['document'];
}

export function BlogArticle({ document }: BlogArticleProps) {
    return (
        <div className="w-full prose prose-lg max-w-none dark:prose-invert prose-code:before:content-[''] prose-code:after:content-[''] prose-headings:my-4 mb-8 prose-pre:p-0 prose-pre:bg-none prose-p:text-zinc-900 dark:prose-p:text-white">
            <DocumentRenderer document={document} renderers={renderers} />
        </div>
    );
}
