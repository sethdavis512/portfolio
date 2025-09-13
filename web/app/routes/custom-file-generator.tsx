import { HeroImage } from '~/components/HeroImage';
import { TechShowcase } from '~/components/TechShowcase';
import { TechStackLogos } from '~/components/TechStackLogos';

export function meta() {
    return [
        { title: `Setup | Seth Davis' Portfolio` },
        {
            name: 'description',
            content: `Explore the setup of Seth Davis, a skilled frontend engineer with expertise in React, web development, and more.`
        }
    ];
}

export default function GenerativeUIRoute() {
    return (
        <>
            <HeroImage
                src="/custom-file-generator-hero.png"
                alt="Custom File Generator"
            />
            <TechShowcase
                title="Custom File Generator"
                about="Custom File Generator is a CLI tool for creating and managing file templates using Plop.js. It streamlines the process of generating boilerplate code and promotes best practices in project structure."
                learned="Gained expertise in building CLI tools with Node.js and TypeScript. Learned how to integrate Plop.js for file generation and templating."
                value="Simplifies the development workflow by automating repetitive tasks and ensuring consistency across projects."
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
