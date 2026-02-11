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
import { redirect } from 'react-router';
import type { Route } from './+types/prompt-suite';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Prompt Suite',
        descriptionContent:
            'Generate polished prompts, PRDs, emails, and marketing copy from your system tray. 8 categories, 33 specialized modes, 6 themes. Mac, Windows, and Linux.',
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
                    Generate better prompts without leaving your workflow
                </Heading>
                <p className="text-xl text-zinc-600 dark:text-zinc-300">
                    Prompt Suite lives in your system tray so polished prompts,
                    PRDs, cold emails, and marketing copy are one click away.
                    Pick a category, choose a mode, type your context, and hit
                    generate. Done.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6 min-w-0">
                    <Heading as="h2" size="3">
                        8 categories. 33 modes. One tray icon.
                    </Heading>
                    <Card className="p-6">
                        <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
                            <li className="flex items-start gap-2">
                                <span className="text-primary">⚡</span>
                                <span>
                                    <strong>Amp</strong> — Turn a rough prompt
                                    into a precise, comprehensive, or creative
                                    one
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">🖼️</span>
                                <span>
                                    <strong>Image</strong> — Write
                                    photorealistic, artistic, or product prompts
                                    for AI image generators
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">💻</span>
                                <span>
                                    <strong>Dev</strong> — Build, debug,
                                    architect, review, and generate test plans
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">📄</span>
                                <span>
                                    <strong>PRD</strong> — Generate lean,
                                    enterprise, technical, or executive product
                                    docs
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">✉️</span>
                                <span>
                                    <strong>Email</strong> — Draft greetings,
                                    follow-ups, good-news messages, and cold
                                    outreach
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">📣</span>
                                <span>
                                    <strong>Social</strong> — LinkedIn posts,
                                    Twitter/X threads, and engagement replies
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">✏️</span>
                                <span>
                                    <strong>Copy</strong> — Headlines, CTAs,
                                    landing page sections, and ad copy
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">💬</span>
                                <span>
                                    <strong>Comms</strong> — Navigate feedback,
                                    difficult conversations, and negotiations
                                </span>
                            </li>
                        </ul>
                    </Card>

                    <Heading as="h2" size="3" className="pt-4">
                        How It Works
                    </Heading>
                    <Card className="p-6">
                        <ol className="space-y-3 text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
                            <li>
                                <strong>Click the tray icon</strong> — a compact
                                window appears above your taskbar
                            </li>
                            <li>
                                <strong>Pick a category and mode</strong> —
                                choose from 33 specialized prompt templates
                            </li>
                            <li>
                                <strong>Add your context</strong> — describe
                                what you need in the text field
                            </li>
                            <li>
                                <strong>Generate and go</strong> — copy the
                                result to your clipboard or save it as Markdown
                            </li>
                        </ol>
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
                                    Build your own tray app
                                </Heading>
                                <p className="text-zinc-700 dark:text-zinc-300">
                                    Curious how Prompt Suite was built? Follow
                                    the step-by-step guide to creating Electron
                                    tray apps from scratch.
                                </p>
                            </div>
                            <Linky to="/tray-app-guide" className="shrink-0">
                                <Button color="primary">
                                    Read the Guide →
                                </Button>
                            </Linky>
                        </div>
                    </Card>
                </div>

                <div className="md:col-span-1 space-y-4 min-w-0">
                    <section className="rounded-lg bg-zinc-800 p-6 space-y-4 sticky top-4">
                        <Heading as="h2" size="4" className="text-white">
                            What you get
                        </Heading>

                        <div className="space-y-3 text-zinc-300">
                            <div className="flex items-start gap-2">
                                <span className="text-primary">✓</span>
                                <span>33 prompt modes across 8 categories</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-primary">✓</span>
                                <span>One-click copy or save to Markdown</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-primary">✓</span>
                                <span>6 color themes (3 light, 3 dark)</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-primary">✓</span>
                                <span>Prompt history with restore</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-primary">✓</span>
                                <span>Mac only</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-primary">✓</span>
                                <span>Credits never expire</span>
                            </div>
                        </div>

                        <Card className="p-4 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                            <div className="flex items-start gap-2">
                                <span className="text-xl">🚧</span>
                                <div>
                                    <p className="font-semibold text-amber-900 dark:text-amber-100">
                                        Under Construction
                                    </p>
                                    <p className="text-sm text-amber-800 dark:text-amber-200 mt-1">
                                        Prompt Suite is coming soon. Check back
                                        later for updates.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        {/* <Linky
                            external
                            to={PRODUCT_LINKS.PROMPT_SUITE}
                            className="w-full block"
                        >
                            <Button
                                color="primary"
                                iconBefore={<ShoppingCart />}
                                className="w-full justify-center"
                            >
                                Get Prompt Suite
                            </Button>
                        </Linky> */}

                        <div className="pt-4 flex gap-2 items-center">
                            <p className="text-sm text-zinc-400">Powered by</p>
                            <TechStackLogos logos={['polar']} />
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
