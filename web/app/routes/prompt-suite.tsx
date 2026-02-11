import { Images, ShoppingCart } from 'lucide-react';
import { Button } from '~/components/Button';
import { Card } from '~/components/Card';
import { Heading } from '~/components/Heading';
import { ImageGalleryModal } from '~/components/ImageGalleryModal';
import { Linky } from '~/components/Linky';
import { TechStackLogos } from '~/components/TechStackLogos';
import { useImageGallery } from '~/hooks/useImageGallery';
import { PRODUCT_LINKS } from '~/constants';
import { generateRouteMeta } from '~/utils/seo';
import { HeroImage } from '~/components/HeroImage';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Prompt Suite',
        descriptionContent:
            'A native desktop tray app for quick AI prompt generation and management. Lives in your system tray for instant prompt interactions across 8+ categories.',
        ogUrl: 'https://sethdavis.tech/prompt-suite'
    });
}

const screenshots = [
    { src: '/prompt-suite-hero.webp', alt: 'Prompt Suite' },
    { src: '/prompt-suite-tray-app-1.png', alt: 'Dev tab with Build output' },
    {
        src: '/prompt-suite-tray-app-2.png',
        alt: 'Email tab with Cold outreach'
    },
    { src: '/prompt-suite-tray-app-3.png', alt: 'Comms tab with Feedback' },
    { src: '/prompt-suite-tray-app-4.png', alt: 'Theme selector modal' },
    { src: '/prompt-suite-tray-app-5.png', alt: 'History modal' },
    { src: '/prompt-suite-tray-app-6.png', alt: 'Usage and Credits modal' }
];

export default function PromptSuiteRoute() {
    const { isOpen, selectedIndex, openGallery, closeGallery } =
        useImageGallery();

    return (
        <>
            <HeroImage
                src="/prompt-suite-hero.webp"
                alt="Prompt Suite"
                clickable
                onClick={function () {
                    openGallery(0);
                }}
                imageCount={screenshots.length}
                responsive
            />
            <div className="space-y-6 mb-8">
                <Heading as="h1" size="1">
                    Prompt Suite
                </Heading>
                <p className="text-xl text-zinc-600 dark:text-zinc-300">
                    A native desktop tray app for instant AI prompt generation.
                    Lives in your system tray so you can generate polished
                    prompts across 8+ categories without leaving your workflow.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6 min-w-0">
                    <Heading as="h2" size="3">
                        What It Does
                    </Heading>
                    <Card className="p-6">
                        <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>
                                    AI-powered prompt generation across 8+
                                    categories
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>
                                    Specialized templates for Dev, Email,
                                    Social, Copy, Comms, PRD, Image, and more
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>
                                    One-click generation with copy and save to
                                    markdown
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>
                                    Built-in prompt history with timestamps
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>6 customizable color themes</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>Credit-based usage system</span>
                            </li>
                        </ul>
                    </Card>

                    <Heading as="h2" size="3" className="pt-4">
                        Who It's For
                    </Heading>
                    <Card className="p-6">
                        <p className="text-zinc-700 dark:text-zinc-300">
                            Prompt Suite is built for developers, marketers,
                            team leads, and anyone who needs quick, AI-assisted
                            writing without context-switching. Whether you're
                            drafting a cold email, writing a commit message, or
                            generating social copy, Prompt Suite keeps
                            everything one click away in your system tray.
                        </p>
                    </Card>

                    <div className="pt-4">
                        <div className="flex items-center gap-2 mb-4">
                            <Images className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
                            <Heading as="h2" size="3">
                                Screenshots
                            </Heading>
                            <span className="text-sm text-zinc-500 dark:text-zinc-400">
                                Click to view full size
                            </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {screenshots
                                .slice(1)
                                .map(function (screenshot, index) {
                                    return (
                                        <button
                                            key={screenshot.src}
                                            onClick={function () {
                                                openGallery(index + 1);
                                            }}
                                            type="button"
                                            className="group relative rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 cursor-pointer transition-all hover:opacity-80 hover:border-zinc-400 dark:hover:border-zinc-600"
                                        >
                                            <img
                                                className="w-full h-auto object-cover"
                                                src={screenshot.src}
                                                alt={screenshot.alt}
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="p-2.5 rounded-full bg-black/80 backdrop-blur-sm">
                                                    <Images className="w-5 h-5 text-white" />
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                        </div>
                    </div>

                    <Card className="mt-8 p-6 bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="flex-1">
                                <Heading as="h3" size="4" className="mb-2">
                                    Want to build your own tray app?
                                </Heading>
                                <p className="text-zinc-700 dark:text-zinc-300">
                                    Learn the exact patterns used in Prompt
                                    Suite. Get a beginner-friendly guide to
                                    building Electron tray apps from scratch.
                                </p>
                            </div>
                            <Linky to="/tray-app-guide" className="shrink-0">
                                <Button color="primary">
                                    View the Guide →
                                </Button>
                            </Linky>
                        </div>
                    </Card>
                </div>

                <div className="md:col-span-1 space-y-4 min-w-0">
                    <section className="rounded-lg bg-zinc-800 p-6 space-y-4 sticky top-4">
                        <Heading as="h2" size="4" className="text-white">
                            Get Prompt Suite
                        </Heading>

                        <div className="space-y-3 text-zinc-300">
                            <div className="flex items-start gap-2">
                                <span className="text-primary">✓</span>
                                <span>System tray app</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-primary">✓</span>
                                <span>8+ prompt categories</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-primary">✓</span>
                                <span>6 color themes</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-primary">✓</span>
                                <span>Prompt history</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-primary">✓</span>
                                <span>Cross-platform</span>
                            </div>
                        </div>

                        <Linky
                            external
                            to={PRODUCT_LINKS.PROMPT_SUITE}
                            className="w-full block"
                        >
                            <Button
                                color="primary"
                                iconBefore={<ShoppingCart />}
                                className="w-full justify-center"
                            >
                                Purchase App
                            </Button>
                        </Linky>

                        <div className="pt-4">
                            <p className="text-sm text-zinc-400 mb-3">
                                Powered by
                            </p>
                            <TechStackLogos logos={['electron', 'polar']} />
                        </div>
                    </section>
                </div>
            </div>

            <ImageGalleryModal
                images={screenshots}
                isOpen={isOpen}
                onClose={closeGallery}
                initialIndex={selectedIndex}
            />
        </>
    );
}
