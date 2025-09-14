import type { ReactNode } from 'react';
import { cva, cx } from 'cva.config';

interface HeadingProps {
    children: ReactNode;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
    id?: string;
    size?: '1' | '2' | '3' | '4' | '5' | '6';
    borderBottom?: boolean;
}

const headingVariants = cva({
    variants: {
        size: {
            '1': 'text-4xl md:text-5xl mb-6',
            '2': 'text-3xl mb-4',
            '3': 'text-2xl mb-4',
            '4': 'text-xl',
            '5': 'text-lg',
            '6': 'text-md'
        }
    },
    defaultVariants: {
        size: '2'
    }
});

export function Heading({
    as = 'h2',
    children,
    className,
    id,
    size = '2'
}: HeadingProps) {
    const Component = as;

    return (
        <Component
            id={id}
            className={cx(
                'font-bold text-zinc-700 dark:text-white',
                headingVariants({ className, size })
            )}
        >
            {children}
        </Component>
    );
}
