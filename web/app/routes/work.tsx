import { ContentSection } from '~/components/ContentSection';
import Linky from '~/components/Linky';

interface WorkDisplayProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    demoUrl?: string;
    url?: string;
}

function WorkDisplay({
    demoUrl,
    title,
    description,
    url,
    imageSrc,
    imageAlt
}: WorkDisplayProps) {
    return (
        <div className="hover:bg-zinc-900 transition-colors duration-300 rounded-lg p-4">
            <div className="grid justify-items-center md:grid-cols-[200px_1fr] items-center gap-4">
                <a href={url}>
                    <img
                        className="max-w-[200px]"
                        src={imageSrc}
                        alt={imageAlt}
                    />
                </a>
                <div className="self-center text-center sm:text-left">
                    <a href={url}>
                        <h2 className="text-3xl font-bold">{title}</h2>
                    </a>
                    <p className="py-4">{description}</p>
                    {(url || demoUrl) && (
                        <>
                            {url && <Linky to={url}>Learn more</Linky>}
                            {demoUrl && <Linky to={demoUrl}>View demo</Linky>}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function WorkRoute() {
    return (
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 gap-4">
            <ContentSection>
                <WorkDisplay
                    title="Generative UI"
                    description="Learning site for AI enthusiasts."
                    imageSrc="/webpage.png"
                    imageAlt="3D rendering of presenter talking about slideshow in front of an audience"
                />
            </ContentSection>
            <ContentSection>
                <WorkDisplay
                    title="Prompt Bucket"
                    description="Prompt scoring and organization tool"
                    imageSrc="/bucket.png"
                    imageAlt="A 3D bucket"
                />
            </ContentSection>
            <ContentSection>
                <WorkDisplay
                    title="Obsidian MCP Server"
                    description="A second brain for your everyday"
                    imageSrc="/server.png"
                    imageAlt="3D rendering of presenter talking about slideshow in front of an audience"
                />
            </ContentSection>
            <ContentSection>
                <WorkDisplay
                    title="RR7 Slides"
                    description="A React Router based web application for creating and sharing slide presentations."
                    url="/rr7-slides"
                    imageSrc="/presentation.png"
                    imageAlt="3D rendering of presenter talking about slideshow in front of an audience"
                />
            </ContentSection>
            <ContentSection>
                <WorkDisplay
                    title="AI Maniacs"
                    description="Learning site for AI enthusiasts."
                    url="https://ai-maniacs.com/"
                    imageSrc="/ai-maniacs-logo.png"
                    imageAlt="3D rendering of presenter talking about slideshow in front of an audience"
                />
            </ContentSection>
        </div>
    );
}
