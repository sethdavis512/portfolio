import { HeroImage } from '~/components/HeroImage';
import { TechShowcase } from '~/components/TechShowcase';
import { TechStackLogos } from '~/components/TechStackLogos';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'RR7 Tuner',
        descriptionContent:
            'An exploration of dynamic, data-driven user interfaces built with modern React and TypeScript. Demonstrates flexible, composable UI components that adapt to changing data and user input.',
        ogUrl: 'https://sethdavis.tech/rr7-tuner'
    });
}

export default function RR7TunerRoute() {
    return (
        <>
            <HeroImage src="/rr7-tuner-hero.png" alt="RR7 Tuner" responsive />
            <TechShowcase
                title="RR7 Tuner"
                about="RR7 Tuner is an exploration of dynamic, data-driven user interfaces built with modern React and TypeScript. It demonstrates how to create flexible, composable UI components that adapt to changing data and user input."
                learned="Developed advanced component patterns using TypeScript and React, focusing on reusability and scalability. Gained experience with GraphQL data fetching, SSR, and integrating a CMS backend for content management."
                value="Showcases best practices in building maintainable, high-performance UIs with a modern tech stack. Highlights the power of generative patterns for rapid prototyping and robust production apps."
                sourceUrl="https://github.com/sethdavis512/rr7-tuner"
                techStack={<TechStackLogos logos={['typescript']} />}
            />
        </>
    );
}
