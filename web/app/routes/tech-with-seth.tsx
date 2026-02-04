import { HeroImage } from '~/components/HeroImage';
import { TechShowcase } from '~/components/TechShowcase';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Tech With Seth',
        descriptionContent:
            'An exploration of modern web development practices using React and TypeScript. Demonstrates flexible, composable UI components that adapt to changing data and user input.',
        ogUrl: 'https://sethdavis.tech/tech-with-seth'
    });
}

export default function TechWithSethRoute() {
    return (
        <>
            <HeroImage
                src="/tech-with-seth-hero.png"
                alt="Tech With Seth"
                responsive
            />
            <TechShowcase
                title="Tech With Seth"
                about="I kept running into the same setup tasks across different projects - scaffolding React components, configuring build tools, writing the same utility functions. Instead of solving these problems over and over, I started building reusable tools and templates. The Tech with Seth GitHub organization is where I put these solutions so other developers can skip the repetitive parts and get to the interesting work faster. It's a mix of CLI tools, starter templates, and utility libraries that handle the boring stuff I got tired of doing manually."
                learned="The biggest lesson was learning to prioritize simplicity over cleverness. Early versions of these tools tried to handle every possible use case, which made them complicated and hard to understand. I learned that most developers just want to get started quickly with sensible defaults. This meant stripping away features that seemed cool but weren't essential, writing clearer documentation, and focusing on the 80% use case rather than trying to be everything to everyone. The goal became making tools that someone could understand and use productively within their first few minutes."
                value="These tools save me time on every new project, and apparently they help other people too. The real value isn't in the individual tools - it's in the approach of identifying repetitive work and automating it away. More than anything, maintaining these tools forces me to think about what actually matters in development workflows versus what just feels important. It's a constant reminder to focus on solving real problems rather than building overly flashy solutions."
                sourceUrl="https://github.com/orgs/tech-with-seth/repositories"
            />
        </>
    );
}
