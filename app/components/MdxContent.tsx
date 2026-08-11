import type { ComponentType, ReactNode } from 'react';
import { CodeBlock } from './CodeBlock';
import { linkyVariants } from './Linky';

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

    a: function MdxAnchor({ href, children, ...props }: { href?: string; children: ReactNode }) {
        return (
            <a
                href={href}
                className={linkyVariants({ variant: 'underline' })}
                {...(href?.startsWith('http') && {
                    target: '_blank',
                    rel: 'noopener noreferrer'
                })}
                {...props}
            >
                {children}
            </a>
        );
    },

    code: function MdxInlineCode({ children, className }: { children: ReactNode; className?: string }) {
        // Fenced code blocks get className="language-xxx" from MDX
        // Those are handled by the <pre> override above, so just render as-is
        if (className?.startsWith('language-')) {
            return <code className={className}>{children}</code>;
        }
        // Inline code
        return (
            <code className="bg-primary-400/25 px-1.5 py-0.5 text-black dark:text-zinc-50 font-mono text-sm border border-black/40 dark:border-zinc-200/40">
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
        <div className="prose prose-lg max-w-none dark:prose-invert prose-code:before:content-[''] prose-code:after:content-[''] prose-headings:my-4 prose-headings:font-display prose-headings:font-black prose-pre:p-0 prose-pre:bg-none prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:not-italic prose-hr:border-t-2 prose-hr:border-black dark:prose-hr:border-zinc-200">
            <Component components={mdxComponents} />
        </div>
    );
}
