import { HeroImage } from '~/components/HeroImage';
import { TechShowcase } from '~/components/TechShowcase';
import { TechStackLogos } from '~/components/TechStackLogos';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: '{{PROJECT_TITLE}}',
        descriptionContent:
            '{{META_DESCRIPTION}}',
        ogUrl: 'https://sethdavis.tech/{{SLUG}}'
    });
}

export default function {{COMPONENT_NAME}}Route() {
    return (
        <>
            <HeroImage
                src="/{{SLUG}}-hero.webp"
                alt="{{PROJECT_TITLE}}"
                responsive
            />
            <TechShowcase
                title="{{PROJECT_TITLE}}"
                about="{{ABOUT_PARAGRAPH}}"
                learned="{{LEARNED_PARAGRAPH}}"
                value="{{VALUE_PARAGRAPH}}"
                techStack={
                    <TechStackLogos
                        logos={[{{TECH_LOGOS}}]}
                    />
                }
            />
        </>
    );
}
