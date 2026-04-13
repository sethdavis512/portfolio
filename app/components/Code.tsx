import type { PropsWithChildren } from 'react';
import { BorderStyles } from '~/constants';

interface CodeProps {
    heading: string;
}

export function Code({
    children,
    heading
}: PropsWithChildren<CodeProps>) {
    return (
        <div className="prose w-full">
            <pre
                className={`dark:bg-zinc-700 block rounded-lg ${BorderStyles.DEFAULT} bg-zinc-700 p-0`}
            >
                <header className={`px-4 py-3 ${BorderStyles.BOTTOM}`}>
                    <span className="text-gray-400">{heading}</span>
                </header>
                <code className="block overflow-x-auto p-4">{children}</code>
            </pre>
        </div>
    );
}
