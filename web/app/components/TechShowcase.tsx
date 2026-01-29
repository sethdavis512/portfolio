import { Card } from './Card';
import { Heading } from './Heading';
import { Linky } from './Linky';

interface TechShowcaseProps {
    title: string;
    about: string;
    learned: string;
    value: string;
    demoUrl?: string;
    demoUrlText?: string;
    sourceUrl?: string;
    techStack?: React.ReactNode;
}

export function TechShowcase({
    about,
    demoUrl,
    demoUrlText,
    learned,
    sourceUrl,
    techStack,
    title,
    value
}: TechShowcaseProps) {
    return (
        <>
            <Heading as="h1">{title}</Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4 min-w-0">
                    <Heading as="h2" size="5">
                        Project Overview
                    </Heading>
                    <p className="break-words">{about}</p>
                    <Heading as="h2" size="5">
                        Knowledge Gained
                    </Heading>
                    <p className="break-words">{learned}</p>
                    <Heading as="h2" size="5">
                        The Impact
                    </Heading>
                    <p className="break-words">{value}</p>
                </div>
                <div className="md:col-span-1 space-y-4 min-w-0">
                    {techStack && (
                        <>
                            <Heading as="h4" size="5" className="font-bold">
                                Tech Stack
                            </Heading>
                            <Card className="flex flex-wrap gap-3">{techStack}</Card>
                        </>
                    )}
                    {(demoUrl || sourceUrl) && (
                        <>
                            <Heading as="h4" size="5" className="font-bold">
                                Looking for more?
                            </Heading>
                            <Card className="flex flex-col gap-4">
                                {sourceUrl && (
                                    <Linky external to={sourceUrl} className="break-words">
                                        View source code
                                    </Linky>
                                )}
                                {demoUrl && (
                                    <Linky external to={demoUrl} className="break-words">
                                        {demoUrlText || "See the demo"}
                                    </Linky>
                                )}
                            </Card>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
