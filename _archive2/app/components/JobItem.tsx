import { PropsWithChildren } from 'react';
import { Heading } from '@radix-ui/themes';

interface JobItemProps {
    company: string;
    dates: string;
    title: string;
    location?: string;
}

export default function JobItem({
    children,
    company,
    dates,
    location = 'Austin, TX',
    title,
}: PropsWithChildren<JobItemProps>) {
    return (
        <ul className="space-y-4">
            <li className="block md:flex md:justify-between">
                <div className="mb-4 md:mb-0">
                    <Heading as="h4" size="3">
                        {title}
                    </Heading>
                    <span className="inline-block">{`${company} - ${location}`}</span>
                </div>
                <strong className="inline-block">{dates}</strong>
            </li>
            <li>{children}</li>
        </ul>
    );
}
