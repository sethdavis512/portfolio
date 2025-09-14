import { HeroImage } from '~/components/HeroImage';
import { TechShowcase } from '~/components/TechShowcase';
import { TechStackLogos } from '~/components/TechStackLogos';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Prompt Bucket',
        descriptionContent:
            'A tool for organizing, saving, and sharing AI prompts. Helps users manage their prompt collections, collaborate, and quickly access prompts for various generative AI tools.',
        ogUrl: 'https://sethdavis.tech/prompt-bucket'
    });
}

export default function PromptBucketRoute() {
    return (
        <>
            <HeroImage
                src="/prompt-bucket-hero.png"
                alt="Prompt Bucket app displayed in a web browser"
            />
            <TechShowcase
                title="Prompt Bucket"
                about="Prompt Bucket is a sophisticated SaaS platform designed for professional AI prompt management, featuring a structured 10-section methodology for creating, organizing, and collaborating on high-quality AI prompts. Built with React Router 7, the platform includes advanced features like AI-powered prompt scoring, team prompt library, subscription management through Polar, and comprehensive prompt chain functionality. The application implements a freemium model with role-based access control, public sharing capabilities, and a robust category system for prompt organization. What sets Prompt Bucket apart is its systematic approach to prompt engineering, treating prompts as professional assets that require proper structure, evaluation, and collaboration tools."
                learned="Building Prompt Bucket taught me advanced SaaS architecture patterns, particularly around subscription management, team collaboration features, and complex role-based permission systems. I gained deep expertise in React Router 7's full-stack capabilities, including server-side rendering, API routes, and data loading patterns. The project required sophisticated database design with Prisma to handle complex relationships between users, teams, prompts, and subscriptions. The project also taught me about modern authentication flows with Better Auth and how to build scalable team based features."
                value="Prompt Bucket addresses the growing need for professional prompt management as AI becomes central to business operations. By creating a platform that treats prompts as valuable business assets, I'm helping organizations standardize and improve their AI interactions. The structured methodology helps users create more effective prompts while the collaboration features enable knowledge sharing across teams. This project demonstrates my ability to identify market opportunities in the AI space and build production-ready SaaS solutions. It highlights my growing experience in product strategy, user experience design, and technical implementation, building my credentials in AI workflow optimization. The project has significant commercial potential and serves as a foundation for building a business around AI productivity tools."
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
                            'polar',
                            'railway',
                            'vibe'
                        ]}
                    />
                }
            />
        </>
    );
}
