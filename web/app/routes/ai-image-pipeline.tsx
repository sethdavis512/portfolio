import { HeroImage } from '~/components/HeroImage';
import { TechShowcase } from '~/components/TechShowcase';
import { TechStackLogos } from '~/components/TechStackLogos';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Image Pipeline as a Service',
        descriptionContent:
            'A production-ready TypeScript system for automated AI image generation using Trigger.dev, Replicate, and Cloudinary. Generates 4,300+ themed images daily.',
        ogUrl: 'https://sethdavis.tech/ai-image-pipeline'
    });
}

export default function AiImagePipelineRoute() {
    return (
        <>
            <HeroImage
                src="/ai-image-pipeline-hero.webp"
                alt="Image Pipeline as a Service"
                responsive
            />
            <TechShowcase
                title="Image Pipeline as a Service"
                about="A production-ready TypeScript system for automated AI image generation that combines Trigger.dev for task orchestration, Replicate's AI models for generation, and Cloudinary for storage and delivery. The system uses template-based prompts with intelligent permutation generation to create high-quality themed images on a scheduled basis. It currently runs three active genres (supercars, real estate, arts & crafts) generating 180 images per hour across billions of possible permutations, with built-in incompatibility filtering to ensure every combination makes sense."
                learned="Building this taught me advanced prompt engineering through template-based permutation systems with {placeholder} syntax, creating billions of unique combinations while maintaining quality. I implemented sophisticated incompatibility filtering using partial string matching to prevent nonsensical combinations like 'rain + desert'. The architecture demonstrates true separation of concerns—a completely subject-agnostic core generator that works with any domain through configuration files. I also gained deep experience with Trigger.dev's cron scheduling and structured logging, Replicate's AI model API integration with proper error handling, and Cloudinary's semantic tagging system for organizing massive image libraries. The cost optimization strategies I developed manage $200-400/month operational costs while generating 4,300+ images daily."
                value="This project showcases my ability to architect scalable, production-ready systems that integrate multiple external services into cohesive workflows. It demonstrates advanced TypeScript patterns, proper error handling, cost-conscious design decisions, and the ability to build extensible systems where new domains can be added through simple configuration files without touching core code. The combination of automation orchestration (Trigger.dev), AI integration (Replicate), and cloud storage management (Cloudinary) reflects real-world SaaS development patterns. The structured logging, validation systems, and comprehensive documentation show professional-grade engineering practices ready for team environments and production deployment."
                sourceUrl="https://github.com/sethdavis512/image-pipeline-as-a-service"
                techStack={
                    <TechStackLogos
                        logos={['typescript', 'trigger', 'cloudinary']}
                    />
                }
            />
        </>
    );
}
