import { HeroImage } from '~/components/HeroImage';
import { TechShowcase } from '~/components/TechShowcase';
import { TechStackLogos } from '~/components/TechStackLogos';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Rapidall•E',
        descriptionContent:
            'A cutting-edge AI model designed to generate high-quality images from text prompts. Leverages advanced machine learning techniques to understand and interpret user inputs, producing stunning visuals.',
        ogUrl: 'https://sethdavis.tech/rapidalle'
    });
}

export default function RapidalleRoute() {
    return (
        <>
            <HeroImage src="/rapidalle-hero.png" alt="Rapidall•E" responsive />
            <TechShowcase
                title="Rapidall•E"
                about="Design asset generation platform for typography and visual design workflows. Built with React Router 7, the application features real-time image generation using OpenAI's DALL-E 3, background task processing with Trigger.dev, and a credit-based user system. Emphasizes design-focused outputs through sophisticated prompt engineering that ensures consistent, professional-quality typography and artistic results. Integrates with Cloudinary for optimized image storage and delivery."
                learned="Background job processing and real-time systems architecture for creative tooling. Building resilient task processing systems with Trigger.dev including retry logic and error handling. Advanced prompt engineering techniques specific to design asset generation—crafting prompts that consistently produce professional-quality outputs. Integration patterns for multiple third-party services in creative workflows."
                value="Demonstrates ability to build creative tooling that augments design workflows. The focus on typography and design generation serves professional market needs while showcasing how AI can enhance rather than replace creative processes. Establishes credibility in the creative technology space and AI-powered design tools. Technical breadth from frontend React development to backend job processing, database design, and third-party service integration."
                sourceUrl="https://github.com/sethdavis512/rapidalle"
                techStack={
                    <TechStackLogos
                        logos={[
                            'typescript',
                            'react',
                            'react-router',
                            'cloudinary',
                            'trigger',
                            'vibe'
                        ]}
                    />
                }
            />
        </>
    );
}
