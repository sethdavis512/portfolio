import { HeroImage } from '~/components/HeroImage';
import { TechShowcase } from '~/components/TechShowcase';
import { TechStackLogos } from '~/components/TechStackLogos';

export function meta() {
    return [
        { title: `Setup | Seth Davis' Portfolio` },
        {
            name: 'description',
            content: `Explore the setup of Seth Davis, a skilled frontend engineer with expertise in React, web development, and more.`
        }
    ];
}

export default function GenerativeUIRoute() {
    return (
        <>
            <HeroImage src="/generative-ui-hero.png" alt="Generative UI" />
            <TechShowcase
                title="Generative UI"
                about="Generative UI is an exploration of dynamic, data-driven user interfaces built with modern React and TypeScript. It demonstrates how to create flexible, composable UI components that adapt to changing data and user input."
                learned="Developed advanced component patterns using TypeScript and React, focusing on reusability and scalability. Gained experience with GraphQL data fetching, SSR, and integrating a CMS backend for content management."
                value="Showcases best practices in building maintainable, high-performance UIs with a modern tech stack. Highlights the power of generative patterns for rapid prototyping and robust production apps."
                sourceUrl="https://github.com/sethdavis512/tws-generative-ui"
                // demoUrl=""
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
