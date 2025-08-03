import {
    DocumentRenderer,
    type DocumentRendererProps
} from '@keystone-6/document-renderer';

export const renderers: DocumentRendererProps['renderers'] = {
    block: {
        code: ({ children }) => {
            return (
                <pre className="bg-slate-800 border border-zinc-700 rounded-lg my-6 overflow-x-auto">
                    <code className="block p-4 text-zinc-100 font-mono text-sm">
                        {children}
                    </code>
                </pre>
            );
        }
    },
    inline: {
        code: ({ children }) => {
            return (
                <code className="bg-slate-800 px-2 py-1.5 rounded text-zinc-50 font-mono text-sm border border-zinc-700">
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
        <div className="prose prose-lg max-w-none dark:prose-invert prose-code:before:content-[''] prose-code:after:content-[''] prose-headings:my-4 mb-8 prose-pre:p-0 prose-pre:bg-none prose-p:text-white">
            <DocumentRenderer document={document} renderers={renderers} />
        </div>
    );
}
