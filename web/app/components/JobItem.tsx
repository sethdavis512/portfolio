import type { PropsWithChildren } from 'react';
import Heading from './Heading';

interface JobItemProps {
    title: string;
    className?: string;
    company?: string;
    dates?: string;
    location?: string;
}

export default function JobItem({
    children,
    className,
    company,
    dates,
    location = 'Austin, TX',
    title
}: PropsWithChildren<JobItemProps>) {
    return (
        <ul className={`space-y-4 ${className}`}>
            <li className="block md:flex md:justify-between">
                <div className="mb-4 md:mb-0">
                    <Heading as="h3" size="3">
                        {title}
                    </Heading>
                    {company && location && (
                        <span className="inline-block">{`${company} - ${location}`}</span>
                    )}
                </div>
                {dates && <strong className="inline-block">{dates}</strong>}
            </li>
            <li>{children}</li>
        </ul>
    );
}
