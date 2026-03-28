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
        return <Banner>{children}</Banner>;
    }

    return (
        <div className="rounded-lg border border-red-500 bg-red-500/15 p-4">
            <div className="mb-2">
                <TriangleAlert className="text-red-400" />
            </div>
            <p className="text-red-300">{children}</p>
        </div>
    );
}
