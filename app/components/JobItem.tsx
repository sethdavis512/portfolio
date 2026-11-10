import type { PropsWithChildren } from 'react';
import { Heading } from './Heading';
import { cx } from '~/cva.config';
import { BorderStyles } from '~/constants';

interface JobItemProps {
    title: string;
    className?: string;
    company?: string;
    dates?: string;
    location?: string;
}

export function JobItem({
    children,
    className,
    company,
    dates,
    location,
    title
}: PropsWithChildren<JobItemProps>) {
    const place = [company, location].filter(Boolean).join(' - ');

    return (
        <ul className={cx(`flex flex-col space-y-4 mb-8`, className)}>
            <li
                className={`block lg:flex lg:items-center lg:justify-between ${BorderStyles.BOTTOM} pb-2`}
            >
                <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-4 md:mb-0">
                    <Heading as="h3" size="3" className="m-0">
                        {title}
                    </Heading>
                    {place && <span className="inline-block">{place}</span>}
                </div>
                {dates && (
                    <strong className="inline-block whitespace-nowrap">
                        {dates}
                    </strong>
                )}
            </li>
            <li>{children}</li>
        </ul>
    );
}
