import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import * as Dialog from '@radix-ui/react-dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Image {
    src: string;
    alt: string;
}

interface ImageGalleryModalProps {
    images: Image[];
    isOpen: boolean;
    onClose: () => void;
    initialIndex?: number;
}

export function ImageGalleryModal({
    images,
    isOpen,
    onClose,
    initialIndex = 0
}: ImageGalleryModalProps) {
    const [selectedIndex, setSelectedIndex] = useState(initialIndex);
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel();
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true
    });

    const onThumbClick = useCallback(
        (index: number) => {
            if (!emblaMainApi || !emblaThumbsApi) return;
            emblaMainApi.scrollTo(index);
        },
        [emblaMainApi, emblaThumbsApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return;
        setSelectedIndex(emblaMainApi.selectedScrollSnap());
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
    }, [emblaMainApi, emblaThumbsApi]);

    const scrollPrev = useCallback(() => {
        if (emblaMainApi) emblaMainApi.scrollPrev();
    }, [emblaMainApi]);

    const scrollNext = useCallback(() => {
        if (emblaMainApi) emblaMainApi.scrollNext();
    }, [emblaMainApi]);

    useEffect(() => {
        if (!emblaMainApi) return;
        onSelect();
        emblaMainApi.on('select', onSelect);
        emblaMainApi.on('reInit', onSelect);
    }, [emblaMainApi, onSelect]);

    useEffect(() => {
        if (emblaMainApi && isOpen) {
            emblaMainApi.scrollTo(initialIndex, true);
        }
    }, [emblaMainApi, initialIndex, isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                scrollPrev();
            } else if (event.key === 'ArrowRight') {
                event.preventDefault();
                scrollNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, scrollPrev, scrollNext]);

    return (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-6xl translate-x-[-50%] translate-y-[-50%] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
                    <div className="bg-zinc-900 rounded-lg shadow-2xl border border-zinc-800 overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
                            <div className="text-zinc-400 text-sm">
                                {selectedIndex + 1} / {images.length}
                            </div>
                            <Dialog.Close asChild>
                                <button
                                    className="rounded-full p-2 hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-zinc-100"
                                    aria-label="Close"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </Dialog.Close>
                        </div>

                        {/* Main Carousel */}
                        <div className="relative">
                            <div
                                className="embla overflow-hidden"
                                ref={emblaMainRef}
                            >
                                <div className="embla__container flex">
                                    {images.map((image, index) => (
                                        <div
                                            key={index}
                                            className="embla__slide flex-[0_0_100%] min-w-0"
                                        >
                                            <div className="flex items-center justify-center p-8">
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className="max-h-[70vh] w-auto object-contain rounded-lg"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={scrollPrev}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={scrollNext}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                                        aria-label="Next image"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Thumbnail Carousel */}
                        {images.length > 1 && (
                            <div className="px-6 py-4 border-t border-zinc-800">
                                <div
                                    className="embla-thumbs overflow-hidden"
                                    ref={emblaThumbsRef}
                                >
                                    <div className="embla-thumbs__container flex gap-2">
                                        {images.map((image, index) => (
                                            <button
                                                key={index}
                                                onClick={() =>
                                                    onThumbClick(index)
                                                }
                                                className={`embla-thumbs__slide flex-[0_0_20%] min-w-0 relative cursor-pointer transition-all rounded-lg overflow-hidden border-2 ${
                                                    index === selectedIndex
                                                        ? 'border-zinc-400 opacity-100'
                                                        : 'border-zinc-700 opacity-50 hover:opacity-75'
                                                }`}
                                                type="button"
                                            >
                                                <div className="aspect-video">
                                                    <img
                                                        src={image.src}
                                                        alt={image.alt}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
