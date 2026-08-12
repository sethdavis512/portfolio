import type { PropsWithChildren } from 'react';
import { TriangleAlert } from 'lucide-react';
import { Banner } from './Banner';

interface FormAlertProps {
    variant: 'success' | 'error';
}

export function FormAlert({
    variant,
    children
}: PropsWithChildren<FormAlertProps>) {
    if (variant === 'success') {
        return <Banner role="alert">{children}</Banner>;
    }

    return (
        <div
            role="alert"
            className="rounded-xl border border-tertiary-500/50 bg-tertiary-500/10 p-4"
        >
            <div className="mb-2">
                <TriangleAlert className="text-tertiary-600 dark:text-tertiary-400" />
            </div>
            <p className="text-tertiary-700 dark:text-tertiary-300">
                {children}
            </p>
        </div>
    );
}
