import { HeroImage } from '~/components/HeroImage';
import { TechShowcase } from '~/components/TechShowcase';
import { TechStackLogos } from '~/components/TechStackLogos';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Rapidall•E',
        descriptionContent:
            'A cutting-edge AI model designed to generate high-quality images from text prompts. Leverages advanced machine learning techniques to understand and interpret user inputs, producing stunning visuals.'
    });
}

export default function RapidalleRoute() {
    return (
        <>
            <HeroImage src="/rapidalle-hero.png" alt="Rapidall•E" />
            <TechShowcase
                title="Rapidall•E"
                about="Rapidall•E is a cutting-edge AI model designed to generate high-quality images from text prompts. It leverages advanced machine learning techniques to understand and interpret user inputs, producing stunning visuals that match the given descriptions."
                learned="Gained hands-on experience with state-of-the-art AI models and their applications in creative fields. Developed a deeper understanding of prompt engineering and its impact on output quality."
                value="Demonstrates the potential of AI-driven creativity tools in enhancing artistic workflows and enabling new forms of expression."
                sourceUrl="https://github.com/sethdavis512/rapidalle"
                techStack={
                    <TechStackLogos
                        logos={[
                            'typescript',
                            'react',
                            'react-router',
                            'trigger'
                        ]}
                    />
                }
            />
        </>
    );
}
