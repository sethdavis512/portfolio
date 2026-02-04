import { HeroImage } from '~/components/HeroImage';
import { TechShowcase } from '~/components/TechShowcase';
import { TechStackLogos } from '~/components/TechStackLogos';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Custom File Generator',
        descriptionContent:
            'A tool for generating custom files and configurations for web development projects. Streamlines setup processes and standardizes project structure.',
        ogUrl: 'https://sethdavis.tech/custom-file-generator'
    });
}

export default function GenerativeUIRoute() {
    return (
        <>
            <HeroImage
                src="/custom-file-generator-hero.png"
                alt="Custom File Generator"
                responsive
            />
            <TechShowcase
                title="Custom File Generator"
                about="The Custom File Generator Guide emerged from my desire to experiment with developer productivity automation. While working across multiple React projects, I wanted to explore how to eliminate repetitive boilerplate generation that was consuming valuable development time. This comprehensive tutorial represents my investigation into building personalized CLI tools using Plop.js as the foundation. The guide demonstrates how to build custom CLIs capable of generating React components, markdown templates, Python scripts, and virtually any repetitive code structure. It serves as a practical blueprint for automating the mundane aspects of development workflow."
                learned="I wanted to challenge myself to break down development concepts and present them in a digestible way. This project taught me how to think from a beginner's perspective and anticipate where confusion might arise. I learned to structure information progressively, starting with foundational concepts before building to more advanced implementations. The biggest revelation was discovering how much more difficult it is to explain something clearly than to simply build it yourself. I had to develop skills in technical communication, learning to use analogies, visual examples, and step-by-step breakdowns that made sense to developers at different experience levels. This experience fundamentally changed how I approach documentation and knowledge sharing."
                value="This guide has helped developers streamline their workflows while demonstrating my ability to transform complex technical concepts into accessible, actionable resources. The project showcases not only my capacity to build useful tools but also my effectiveness in teaching others to construct them independently. From a professional development perspective, it has opened doors for technical writing opportunities and established my reputation as someone who understands developer productivity. Most importantly, it highlights my ability to communicate complex ideas clearly, a skill that proves valuable in technical leadership roles."
                sourceUrl="https://github.com/sethdavis512/custom-file-generator-guide"
                techStack={
                    <TechStackLogos
                        logos={['typescript', 'react', 'docusaurus', 'github']}
                    />
                }
            />
        </>
    );
}
