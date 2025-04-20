import {
    DocumentRenderer,
    type DocumentRendererProps
} from '@keystone-6/document-renderer';

const renderers: DocumentRendererProps['renderers'] = {
    // use your editor's autocomplete to see what other renderers you can override
    block: {
        code: ({ children }) => {
            return (
                <pre className="overflow-x-auto whitespace-pre-wrap break-words bg-zinc-800 p-4 rounded-lg border border-zinc-700 my-3">
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
        <div className="prose prose-lg max-w-none dark:prose-invert">
            <DocumentRenderer document={document} renderers={renderers} />
        </div>
    );
}
