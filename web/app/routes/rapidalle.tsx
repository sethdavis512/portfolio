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
            <HeroImage src="/rapidalle-hero.png" alt="Rapidall•E" />
            <TechShowcase
                title="Rapidall•E"
                about="RapiDall•E is a modern, full-stack AI-powered image generation platform. Built with React Router 7, the application features real-time image generation using OpenAI's DALL-E 3, background task processing with Trigger.dev, and user management including a credit system. The platform emphasizes typography and artistic design generation, with sophisticated prompt engineering that ensures high-quality, design-focused outputs. The application includes features like responsive design, real-time status updates, and integration with Cloudinary for optimized image storage and delivery."
                learned="This project provided plentiful learning in background job processing and real-time systems architecture. Working with Trigger.dev taught me how to build resilient, scalable task processing systems with retry logic and error handling. I gained experience with image processing pipelines, learned to optimize for both quality and performance while managing API costs effectively. I also learned advanced prompt engineering techniques specific to image generation, discovering how to craft prompts that consistently produce professional-quality design outputs. The integration with multiple third-party services (OpenAI, Trigger.dev, Cloudinary) taught me valuable lessons about building resilient systems that gracefully handle external service failures."
                value="RapiDall•E demonstrates my ability to build complete, production-ready applications that integrate cutting-edge AI capabilities with robust business logic. The project showcases skills in real-time systems, and user experience design for AI-powered applications. By focusing on typography and design generation, the platform serves a specific professional market need while demonstrating how AI can augment creative workflows. The project has commercial viability and positions me as capable of building AI-powered SaaS applications from concept to deployment. It also serves as a powerful portfolio piece that demonstrates technical breadth, from front-end React development to backend job processing, database design, and third-party integrations. The project opens opportunities in the creative technology space and establishes credibility for building AI-powered creative tools."
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
