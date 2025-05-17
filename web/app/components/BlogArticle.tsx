import {
    DocumentRenderer,
    type DocumentRendererProps
} from '@keystone-6/document-renderer';

const renderers: DocumentRendererProps['renderers'] = {
    block: {
        code: ({ children }) => {
            return (
                <pre>
                    <code className="text-zinc-100">{children}</code>
                </pre>
            );
        }
    }
};

interface BlogArticleProps {
    document: DocumentRendererProps['document'];
}

export function BlogArticle({ document }: BlogArticleProps) {
    return (
        <div className="prose prose-lg max-w-none dark:prose-invert prose-code:before:content-[''] prose-code:after:content-[''] prose-code:bg-zinc-700 prose-code:p-4 prose-code:rounded-lg prose-code:border prose-code:border-zinc-700 prose-code:block prose-code:whitespace-pre-wrap prose-code:break-words prose-headings:my-4 mb-8 prose-pre:p-0 prose-pre:bg-none">
            <DocumentRenderer document={document} renderers={renderers} />
        </div>
    );
}
