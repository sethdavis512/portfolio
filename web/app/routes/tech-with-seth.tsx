import { HeroImage } from '~/components/HeroImage';
import { TechShowcase } from '~/components/TechShowcase';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Tech With Seth',
        descriptionContent:
            'An exploration of modern web development practices using React and TypeScript. Demonstrates flexible, composable UI components that adapt to changing data and user input.'
    });
}

export default function TechWithSethRoute() {
    return (
        <>
            <HeroImage src="/tech-with-seth-hero.png" alt="Tech With Seth" />
            <TechShowcase
                title="Tech With Seth"
                about="Tech With Seth is an exploration of modern web development practices using React and TypeScript. It demonstrates how to create flexible, composable UI components that adapt to changing data and user input."
                learned="Developed advanced component patterns using TypeScript and React, focusing on reusability and scalability. Gained experience with GraphQL data fetching, SSR, and integrating a CMS backend for content management."
                value="Showcases best practices in building maintainable, high-performance UIs with a modern tech stack. Highlights the power of generative patterns for rapid prototyping and robust production apps."
                sourceUrl="https://github.com/tech-with-seth/"
            />
        </>
    );
}
