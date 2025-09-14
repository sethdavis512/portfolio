import { HeroImage } from '~/components/HeroImage';
import { TechShowcase } from '~/components/TechShowcase';
import { TechStackLogos } from '~/components/TechStackLogos';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'RR7 Slides',
        descriptionContent:
            'A presentation tool designed to help users create stunning slide decks with ease. Leverages advanced design principles and user-friendly interfaces to streamline the presentation creation process.'
    });
}

export default function RR7SlidesRoute() {
    return (
        <>
            <HeroImage src="/rr7-slides-hero.png" alt="RR7 Slides" />
            <TechShowcase
                title="RR7 Slides"
                about="RR7 Slides is a presentation tool designed to help users create stunning slide decks with ease. It leverages advanced design principles and user-friendly interfaces to streamline the presentation creation process."
                learned="Gained experience in building intuitive user interfaces and implementing responsive design techniques. Developed a deeper understanding of user needs and how to address them through effective design."
                value="Demonstrates the potential of modern web technologies in creating powerful, user-friendly applications."
                sourceUrl="https://github.com/sethdavis512/rr7-slides"
                demoUrl="https://slides.sethdavis.tech/"
                techStack={
                    <TechStackLogos
                        logos={[
                            'typescript',
                            'react',
                            'react-router',
                            'tailwind'
                        ]}
                    />
                }
            />
        </>
    );
}
