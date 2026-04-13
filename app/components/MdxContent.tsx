import type { ComponentType, ReactNode } from 'react';
import { CodeBlock } from './CodeBlock';

function getCodeProps(children: ReactNode): { code: string; className: string } | null {
    if (
        children !== null &&
        typeof children === 'object' &&
        'props' in (children as any)
    ) {
        const props = (children as any).props;
        if (typeof props?.children === 'string') {
            return { code: props.children, className: props.className || '' };
        }
    }
    return null;
}

const mdxComponents: Record<string, ComponentType<any>> = {
    pre: function MdxPre({ children }: { children: ReactNode }) {
        const codeProps = getCodeProps(children);
        if (codeProps) {
            const language = codeProps.className.replace('language-', '') || 'typescript';
            return <CodeBlock code={codeProps.code} language={language} className="my-6" />;
        }
        return <pre>{children}</pre>;
    },

    code: function MdxInlineCode({ children, className }: { children: ReactNode; className?: string }) {
        // Fenced code blocks get className="language-xxx" from MDX
        // Those are handled by the <pre> override above, so just render as-is
        if (className?.startsWith('language-')) {
            return <code className={className}>{children}</code>;
        }
        // Inline code
        return (
            <code className="bg-zinc-100 dark:bg-slate-800 px-2 py-1.5 rounded text-zinc-900 dark:text-zinc-50 font-mono text-sm border border-zinc-300 dark:border-zinc-700">
                {children}
            </code>
        );
    }
};

interface MdxContentProps {
    Component: ComponentType<{ components?: Record<string, ComponentType<any>> }>;
}

export function MdxContent({ Component }: MdxContentProps) {
    return (
        <div className="prose prose-lg max-w-none dark:prose-invert prose-code:before:content-[''] prose-code:after:content-[''] prose-headings:my-4 prose-pre:p-0 prose-pre:bg-none prose-p:text-white">
            <Component components={mdxComponents} />
        </div>
    );
}
