import { HeroImage } from '~/components/HeroImage';
import Linky from '~/components/Linky';
import { TechShowcase } from '~/components/TechShowcase';
import { TechStackLogos } from '~/components/TechStackLogos';

export function meta() {
    return [
        { title: `RR7 Slides | Seth Davis' Portfolio` },
        {
            name: 'description',
            content: `Explore the RR7 Slides repo of Seth Davis, a skilled frontend engineer with expertise in React, web development, and more.`
        }
    ];
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
