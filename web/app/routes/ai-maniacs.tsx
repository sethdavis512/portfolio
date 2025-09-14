import { HeroImage } from '~/components/HeroImage';
import { TechShowcase } from '~/components/TechShowcase';
import { TechStackLogos } from '~/components/TechStackLogos';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'AI Maniacs',
        descriptionContent:
            'A learning resource website dedicated to providing comprehensive tutorials, articles, and guides on artificial intelligence. Makes AI concepts accessible to beginners while offering advanced insights for experienced practitioners.',
        ogUrl: 'https://sethdavis.tech/ai-maniacs'
    });
}

export default function AIManiacsRoute() {
    return (
        <>
            <HeroImage src="/ai-maniacs-hero.png" alt="AI Maniacs" />
            <TechShowcase
                title="AI Maniacs"
                about="AI Maniacs is a comprehensive educational platform that transforms complex AI concepts into accessible, practical learning experiences. Built with Docusaurus, this project serves as a complete guide for users ranging from complete AI beginners to advanced practitioners. The platform covers everything from AI fundamentals and company landscapes to advanced automation strategies and the Model Context Protocol (MCP). What sets AI Maniacs apart is its structured, progressive learning approach with hands-on modules designed for real-world application across multiple industries including healthcare, finance, education, and creative fields."
                learned="This project deepened my understanding of educational content architecture and how to structure complex technical concepts for diverse learning styles. I gained significant experience with Docusaurus as a documentation platform, learning to create engaging, navigable content that scales from beginner to expert level. The project taught me about content strategy for technical education, including how to balance theoretical foundations with practical applications. I also learned about the challenges of keeping AI-related content current in a rapidly evolving field, which led me to implement modular content structures that allow for easy updates. Most importantly, I discovered how to bridge the gap between cutting-edge AI technology and practical business implementation."
                value="AI Maniacs addresses a gap in the market where AI education is often either too technical for beginners or too superficial for practical implementation. By creating this comprehensive resource, I'm democratizing AI education and making advanced concepts accessible to professionals across industries. The platform's structured approach helps users build genuine competency rather than just surface-level familiarity. From a personal perspective, this project established me as a thought leader in AI education and has opened doors for consulting opportunities. The project also serves as a living portfolio piece that demonstrates my ability to tackle complex educational challenges while showcasing my understanding of AI technologies and their practical applications."
                sourceUrl="https://github.com/sethdavis512/ai-maniacs"
                demoUrl="https://ai-maniacs.com/"
                techStack={
                    <TechStackLogos
                        logos={[
                            'typescript',
                            'react',
                            'docusaurus',
                            'github',
                            'vibe'
                        ]}
                    />
                }
            />
        </>
    );
}
