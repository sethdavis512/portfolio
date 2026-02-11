import { Images } from 'lucide-react';
import { Card } from '~/components/Card';
import { Heading } from '~/components/Heading';
import { HeroImage } from '~/components/HeroImage';
import { ImageGalleryModal } from '~/components/ImageGalleryModal';
import { Linky } from '~/components/Linky';
import { TechStackLogos } from '~/components/TechStackLogos';
import { useImageGallery } from '~/hooks/useImageGallery';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'AWS Flashcards',
        descriptionContent:
            'An AWS Cloud Practitioner (CLF-C02) certification study app built as an Electron tray application with 130+ flashcards across 4 exam domains.',
        ogUrl: 'https://sethdavis.tech/aws-flashcards'
    });
}

// AWS Flashcards screenshots
const screenshots = [
    {
        src: '/aws-flashcards-1.png',
        alt: 'AWS Flashcards - Cloud Concepts card with Well-Architected Framework pillars'
    },
    {
        src: '/aws-flashcards-2.png',
        alt: 'AWS Flashcards - Flashcard interface'
    },
    {
        src: '/aws-flashcards-3.png',
        alt: 'AWS Flashcards - Settings and progress view'
    }
];

export default function AWSFlashcardsRoute() {
    const { isOpen, selectedIndex, openGallery, closeGallery } =
        useImageGallery();

    return (
        <>
            <HeroImage
                src="/aws-flashcards-hero.webp"
                alt="AWS Flashcards"
                clickable
                onClick={function () {
                    openGallery(0);
                }}
                imageCount={screenshots.length}
                responsive
            />
            <Heading as="h1">AWS Flashcards</Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4 min-w-0">
                    <Heading as="h2" size="5">
                        Project Overview
                    </Heading>
                    <p className="break-words">
                        AWS Flashcards is an Electron-based system tray
                        application designed for AWS Cloud Practitioner
                        (CLF-C02) certification preparation. The app lives in
                        your system tray for quick access during study sessions,
                        featuring 130+ flashcards across all 4 exam domains:
                        Cloud Concepts (24%), Security & Compliance (30%),
                        Technology & Services (34%), and Billing & Support
                        (12%). Interactive flashcards flip with a click or
                        spacebar, and the app includes progress tracking to mark
                        cards as "Know It" or "Review", domain filtering for
                        targeted study, shuffle mode, and efficient keyboard
                        shortcuts.
                    </p>
                    <p className="break-words text-sm text-zinc-500 dark:text-zinc-400 italic">
                        Note: This is a personal prototype project, not an
                        official AWS study guide. The flashcard content is based
                        on publicly available exam topics and should be used as
                        a supplementary study aid alongside official AWS
                        training resources.
                    </p>
                    <Heading as="h2" size="5">
                        Knowledge Gained
                    </Heading>
                    <p className="break-words">
                        Building this project deepened my understanding of
                        Electron's tray application architecture and how to
                        create unobtrusive desktop utilities that integrate
                        seamlessly with the operating system. I gained hands-on
                        experience with Embla Carousel for smooth card
                        navigation and swiping gestures. The project also
                        reinforced my knowledge of localStorage for persistent
                        state management and taught me effective patterns for
                        keyboard-driven interfaces. Most importantly, I learned
                        how to structure educational content for spaced
                        repetition learning.
                    </p>
                    <Heading as="h2" size="5">
                        The Impact
                    </Heading>
                    <p className="break-words">
                        AWS Flashcards addresses the challenge of finding study
                        time in a busy schedule by making certification prep
                        accessible during micro-breaks throughout the workday.
                        The system tray approach means users can study during
                        build times, between meetings, or whenever they have a
                        few spare minutes—without context-switching away from
                        their primary workflow. As an open-source project, it
                        serves as both a practical study tool and a reference
                        implementation for building Electron tray applications
                        with interactive content.
                    </p>

                    <div className="pt-4">
                        <div className="flex items-center gap-2 mb-4">
                            <Images className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
                            <Heading as="h2" size="5">
                                Screenshots
                            </Heading>
                            <span className="text-sm text-zinc-500 dark:text-zinc-400">
                                Click to view full size
                            </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {screenshots.map(function (screenshot, index) {
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
                </div>
                <div className="md:col-span-1 space-y-4 min-w-0">
                    <Heading as="h4" size="5" className="font-bold">
                        Tech Stack
                    </Heading>
                    <Card className="flex flex-wrap gap-3">
                        <TechStackLogos
                            logos={['electron', 'javascript', 'css']}
                        />
                    </Card>
                    <Heading as="h4" size="5" className="font-bold">
                        Looking for more?
                    </Heading>
                    <Card className="flex flex-col gap-4">
                        <Linky
                            external
                            to="https://github.com/tech-with-seth/aws-flashcards"
                            className="break-words"
                        >
                            View source code
                        </Linky>
                    </Card>
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
