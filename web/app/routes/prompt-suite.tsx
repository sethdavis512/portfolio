import { HeroImage } from '~/components/HeroImage';
import { TechShowcase } from '~/components/TechShowcase';
import { TechStackLogos } from '~/components/TechStackLogos';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Prompt Suite',
        descriptionContent:
            'A native desktop tray app for quick AI prompt access and management. Lives in your system tray for instant prompt interactions.',
        ogUrl: 'https://sethdavis.tech/prompt-suite'
    });
}

export default function PromptSuiteRoute() {
    return (
        <>
            <HeroImage src="/prompt-suite-hero.webp" alt="Prompt Suite" />
            <TechShowcase
                title="Prompt Suite"
                about="Native desktop application that lives in your system tray for instant AI prompt access. Built with Electron, the app provides a frameless, always-on-top popup window for quick prompt interactions without disrupting your workflow. Features include OpenAI integration, prompt saving to markdown files, and auto-hide functionality when clicking elsewhere. Designed for creative professionals who need rapid access to AI assistance while working in design tools or IDEs."
                learned="Building native desktop applications with Electron for seamless OS integration. System tray architecture patterns including dock hiding, window positioning relative to tray bounds, and proper lifecycle management. IPC communication patterns between main and renderer processes. Creating utility apps that augment existing workflows without demanding attention."
                value="Demonstrates ability to build native tooling that integrates with creative workflows at the OS level. The tray-based architecture represents a different approach to AI tooling—always available but never intrusive. Showcases understanding of how designers and developers actually work, building tools that fit into existing patterns rather than demanding new behaviors."
                sourceUrl=""
                techStack={
                    <TechStackLogos
                        logos={['javascript', 'vuejs', 'tailwind']}
                    />
                }
            />
        </>
    );
}
