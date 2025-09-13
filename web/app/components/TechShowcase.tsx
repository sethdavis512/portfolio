import Card from './Card';
import Heading from './Heading';
import Linky from './Linky';

interface TechShowcaseProps {
    title: string;
    about: string;
    learned: string;
    value: string;
    demoUrl?: string;
    sourceUrl?: string;
    techStack?: React.ReactNode;
}

export function TechShowcase({
    about,
    demoUrl,
    learned,
    sourceUrl,
    techStack,
    title,
    value
}: TechShowcaseProps) {
    return (
        <>
            <Heading as="h1">{title}</Heading>
            <div className="flex gap-4">
                <div className="basis-2/3 space-y-4">
                    <Heading as="h2">About</Heading>
                    <p>{about}</p>
                    <Heading as="h2">What I Learned</Heading>
                    <p>{learned}</p>
                    <Heading as="h2">Real-World Benefits</Heading>
                    <p>{value}</p>
                </div>
                <div className="basis-1/3 space-y-4">
                    {techStack && (
                        <>
                            <h4 className="font-bold">Tech Stack</h4>
                            <Card className="flex gap-3">{techStack}</Card>
                        </>
                    )}
                    {(demoUrl || sourceUrl) && (
                        <>
                            <h4 className="font-bold">Looking for more?</h4>
                            <Card className="flex flex-col gap-4">
                                {sourceUrl && (
                                    <Linky external to={sourceUrl}>
                                        View source code
                                    </Linky>
                                )}
                                {demoUrl && (
                                    <Linky external to={demoUrl}>
                                        See the demo
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
