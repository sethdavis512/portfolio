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
                responsive
            />
            <TechShowcase
                title="Prompt Bucket"
                about="SaaS platform treating prompts as professional design assets requiring proper structure, evaluation, and collaboration tools. Features a structured 10-section methodology for creating high-quality AI prompts, AI-powered prompt scoring, team libraries, and comprehensive prompt chain functionality. Built with React Router 7, the platform addresses an emerging need in design workflows: managing the prompts that drive AI-assisted creative tools. Implements subscription management through Polar, role-based access control, and public sharing capabilities."
                learned="Advanced SaaS architecture patterns for design workflow tooling: subscription management, team collaboration, complex permission systems. Deep expertise in React Router 7's full-stack capabilities and sophisticated database design with Prisma. Understanding how to build tools that support creative professionals managing AI interactions across projects and teams."
                value="Addresses the emerging need for design workflow tooling in AI-augmented creative processes. As prompts become central to design-to-development workflows, proper management becomes essential. Demonstrates ability to identify opportunities in the creative technology space and build production-ready solutions. Showcases experience in product strategy and technical implementation for AI-assisted design workflows."
                // sourceUrl="https://github.com/sethdavis512/prompt-bucket"
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
                            'railway'
                            // 'vibe'
                        ]}
                    />
                }
            />
        </>
    );
}
