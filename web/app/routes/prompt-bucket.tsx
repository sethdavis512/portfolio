import { HeroImage } from '~/components/HeroImage';
import { TechShowcase } from '~/components/TechShowcase';
import { TechStackLogos } from '~/components/TechStackLogos';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Prompt Bucket',
        descriptionContent:
            'A tool for organizing, saving, and sharing AI prompts. Helps users manage their prompt collections, collaborate, and quickly access prompts for various generative AI tools.'
    });
}

export default function PromptBucketRoute() {
    return (
        <>
            <HeroImage
                src="/prompt-bucket-hero.png"
                alt="Prompt Bucket displayed in a web browser"
            />
            <TechShowcase
                title="Prompt Bucket"
                about="Prompt Bucket is a tool for organizing, saving, and sharing AI prompts. It helps users manage their prompt collections, collaborate, and quickly access prompts for various generative AI tools."
                learned="Built a robust React app with TypeScript, focusing on scalable component architecture, GraphQL data fetching, and advanced state management. Gained experience with SSR, authentication, and integrating a CMS backend."
                value="Prompt Bucket streamlines prompt management for AI enthusiasts and professionals, enabling efficient workflows and knowledge sharing. It demonstrates best practices in modern web app development."
                sourceUrl="https://github.com/sethdavis512/prompt-bucket"
                techStack={
                    <TechStackLogos
                        logos={[
                            'typescript',
                            'react',
                            'react-router',
                            'tailwind',
                            'better-auth',
                            'prisma',
                            'postgres',
                            'railway'
                        ]}
                    />
                }
            />
        </>
    );
}
