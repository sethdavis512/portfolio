import { HeroImage } from '~/components/HeroImage';
import { TechShowcase } from '~/components/TechShowcase';
import { TechStackLogos } from '~/components/TechStackLogos';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'RR7 Slides',
        descriptionContent:
            'A presentation tool designed to help users create stunning slide decks with ease. Leverages advanced design principles and user-friendly interfaces to streamline the presentation creation process.',
        ogUrl: 'https://sethdavis.tech/rr7-slides'
    });
}

export default function RR7SlidesRoute() {
    return (
        <>
            <HeroImage src="/rr7-slides-hero.png" alt="RR7 Slides" responsive />
            <TechShowcase
                title="RR7 Slides"
                about="RR7 Slides represents my exploration into modernizing presentation software for developers. I wanted to try building a solution that would eliminate the friction of traditional presentation tools when all you really want is to write slides in Markdown. This React Router 7 application emerged from my experiments with MDX-based presentations and dynamic content discovery systems. I was particularly interested in exploring how file-based routing could create an automatic slide discovery system that finds .mdx files, orders them intelligently, and implements lazy loading for optimal performance. The result combines the polish of traditional presentation software with the flexibility developers expect - keyboard navigation, smooth transitions, and the ability to embed React components directly in Markdown."
                learned="This project became a dive into file-based routing patterns and scalable discovery systems. I wanted to experiment with Vite's import.meta.glob functionality, which led to fascinating insights about building systems that automatically adapt to content changes without manual configuration. The MDX integration pushed my understanding of seamlessly blending static content with dynamic React components. I also explored performance optimization techniques, particularly around lazy loading strategies and intelligent component caching. The most challenging aspect was architecting a presentation system that maintains professional smoothness while remaining completely code-driven."
                value="I wanted to create something that integrates well with developer workflows - supporting version control, Markdown authoring and component reusability. Beyond personal utility for conference talks and client presentations, this project demonstrates my approach to crafting solutions that feel intuitive. It serves as a compelling example of building developer-focused tools and showcases technical expertise in modern React patterns, performance optimization, and developer experience design. The project effectively communicates my ability to bridge technical implementation with practical developer needs."
                sourceUrl="https://github.com/sethdavis512/rr7-slides"
                demoUrl="https://slides.sethdavis.tech/"
                techStack={
                    <TechStackLogos
                        logos={[
                            'typescript',
                            'react',
                            'react-router',
                            'tailwind',
                            'vibe'
                        ]}
                    />
                }
            />
        </>
    );
}
