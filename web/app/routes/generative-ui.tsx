import { HeroImage } from '~/components/HeroImage';
import { TechShowcase } from '~/components/TechShowcase';
import { TechStackLogos } from '~/components/TechStackLogos';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Generative UI',
        descriptionContent:
            'Dynamic, data-driven user interfaces built with modern React and TypeScript. Demonstrates flexible, composable UI components that adapt to changing data and user input.',
        ogUrl: 'https://sethdavis.tech/generative-ui'
    });
}

export default function GenerativeUIRoute() {
    return (
        <>
            <HeroImage src="/generative-ui-hero.png" alt="Generative UI" />
            <TechShowcase
                title="Generative UI"
                about="Generative UI is a React Router 7 application that showcases the power of AI-driven user interface generation. This project demonstrates how Large Language Models can dynamically create interactive UI components in real-time through natural language conversations. Built with modern technologies including OpenAI's API, Prisma, and TailwindCSS, the application features a sophisticated tool system that can generate charts, dashboards, forms, alerts, and complex data visualizations on demand. The system includes user authentication, persistent chat threads, and a comprehensive suite of AI tools that can create everything from simple toggles to complex multi-widget dashboards."
                learned="This project pushed the boundaries of my understanding of AI integration in web applications and taught me how to architect systems that bridge natural language processing with dynamic UI generation. I gained experience in React Router 7's server-side rendering capabilities and learned to implement AI tool systems using the Vercel AI SDK. The project challenged me to think about UI/UX from a completely new perspective - how to design interfaces that can be generated programmatically while maintaining usability and accessibility. I also learned advanced patterns for real-time AI interactions, state management in AI-powered applications, and how to create flexible, reusable component systems that can adapt to AI-generated requirements."
                value="Generative UI represents the future of human-computer interaction, where users can describe what they need and have interfaces created in real-time. This project positions me at the forefront of this technological shift and demonstrates my ability to work with emerging AI technologies. The practical applications are immense - from rapid prototyping to personalized user experiences to accessibility improvements for users who struggle with traditional interfaces. Building this project has given me invaluable experience in AI-human collaboration patterns and has opened up new possibilities for client work in the generative AI space. It also serves as a powerful demonstration of how AI can augment rather than replace human creativity and technical skill."
                sourceUrl="https://github.com/sethdavis512/tws-generative-ui"
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
                            'railway',
                            'vibe'
                        ]}
                    />
                }
            />
        </>
    );
}
