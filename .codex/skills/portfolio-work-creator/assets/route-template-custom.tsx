import { HeroImage } from '~/components/HeroImage';
import { Card } from '~/components/Card';
import { Heading } from '~/components/Heading';
import { TechStackLogos } from '~/components/TechStackLogos';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: '{{PROJECT_TITLE}}',
        descriptionContent: '{{META_DESCRIPTION}}',
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4 min-w-0">
                    <Heading as="h1">{{PROJECT_TITLE}}</Heading>

                    <Heading as="h2" size="5">
                        Project Overview
                    </Heading>
                    <p className="break-words">
                        {{ABOUT_PARAGRAPH}}
                    </p>

                    <Heading as="h2" size="5">
                        Knowledge Gained
                    </Heading>
                    <p className="break-words">
                        {{LEARNED_PARAGRAPH}}
                    </p>

                    <Heading as="h2" size="5">
                        The Impact
                    </Heading>
                    <p className="break-words">
                        {{VALUE_PARAGRAPH}}
                    </p>
                </div>

                <div className="md:col-span-1 space-y-4 min-w-0">
                    <Heading as="h4" size="5" className="font-bold">
                        Tech Stack
                    </Heading>
                    <Card className="flex flex-wrap gap-3">
                        <TechStackLogos
                            logos={[{{TECH_LOGOS}}]}
                        />
                    </Card>

                    {/* Add custom sidebar content here */}
                </div>
            </div>
        </>
    );
}
