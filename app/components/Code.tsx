import type { PropsWithChildren } from 'react';
import { BORDER_COLOR, BORDER_BOTTOM } from '~/constants';

interface CodeProps {
    heading: string;
}

export default function Code({
    children,
    heading,
}: PropsWithChildren<CodeProps>) {
    return (
        <div className="prose w-full">
            <pre
                className={`dark:bg-zinc-750 block rounded-lg border ${BORDER_COLOR} bg-zinc-800 p-0`}
            >
                <header className={`px-4 py-3 ${BORDER_BOTTOM}`}>
                    <span className="text-gray-400">{heading}</span>
                </header>
                <code className="block overflow-x-auto p-4">{children}</code>
            </pre>
        </div>
    );
}
