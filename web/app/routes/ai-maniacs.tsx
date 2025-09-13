// import Linky from '~/components/Linky';

import { HeroImage } from '~/components/HeroImage';
import { TechShowcase } from '~/components/TechShowcase';
import { TechStackLogos } from '~/components/TechStackLogos';

export function meta() {
    return [
        { title: `AI Maniacs | Seth Davis' Portfolio` },
        {
            name: 'description',
            content: `Explore the AI Maniacs project of Seth Davis, a skilled frontend engineer with expertise in React, web development, and more.`
        }
    ];
}

export default function AIManiacsRoute() {
    return (
        <>
            <HeroImage src="/ai-maniacs-hero.png" alt="AI Maniacs" />
            <TechShowcase
                title="AI Maniacs"
                about="AI Maniacs is a learning resource website dedicated to providing comprehensive tutorials, articles, and guides on artificial intelligence. The platform aims to make AI concepts accessible to beginners while also offering advanced insights for experienced practitioners."
                learned="Developed advanced component patterns using TypeScript and React, focusing on reusability and scalability. Gained experience with GraphQL data fetching, SSR, and integrating a CMS backend for content management."
                value="Showcases best practices in building maintainable, high-performance UIs with a modern tech stack. Highlights the power of generative patterns for rapid prototyping and robust production apps."
                sourceUrl="https://github.com/sethdavis512/ai-maniacs"
                demoUrl="https://ai-maniacs.com/"
                techStack={
                    <TechStackLogos
                        logos={['typescript', 'react', 'docusaurus', 'github']}
                    />
                }
            />
        </>
    );
}
