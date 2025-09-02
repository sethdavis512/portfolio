import { HeroImage } from '~/components/HeroImage';
import Linky from '~/components/Linky';

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
            <h1 className="text-4xl font-bold mb-4">RR7 Slides</h1>
            <p></p>
        </>
    );
}
