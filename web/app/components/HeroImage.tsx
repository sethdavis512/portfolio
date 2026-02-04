import { Images } from 'lucide-react';
import { cx } from 'cva.config';

interface HeroImageProps {
    src: string;
    alt: string;
    aspectRatio?: string;
    clickable?: boolean;
    onClick?: () => void;
    imageCount?: number;
    /** Enable responsive image variants (expects optimized/image-640w.webp, -1024w.webp, -1920w.webp) */
    responsive?: boolean;
}

export function HeroImage({
    alt,
    aspectRatio = 'aspect-[16/9]',
    src,
    clickable = false,
    onClick,
    imageCount,
    responsive = false
}: HeroImageProps) {
    const showGalleryBadge = clickable && imageCount && imageCount > 1;

    // Generate responsive image sources if enabled
    const getResponsiveSrc = () => {
        if (!responsive) return { src };

        const baseName = src.replace(/\.[^.]+$/, ''); // Remove extension

        // Always include the original image for highest quality on retina displays
        // Browser will select the best option based on screen size and pixel density
        const srcSetParts = [
            `/optimized${baseName}-640w.webp 640w`,
            `/optimized${baseName}-1024w.webp 1024w`,
            `${src} 1600w` // Original as highest quality option for retina
        ];

        return {
            src: src, // Fallback to original
            srcSet: srcSetParts.join(', ')
        };
    };

    const imageSources = getResponsiveSrc();

    return (
        <figure
            className={cx(
                'opacity-0 animate-fade-slide relative border-b mb-8 border-b-zinc-300 dark:border-b-zinc-700 overflow-hidden group',
                aspectRatio,
                clickable &&
                    'cursor-pointer hover:opacity-90 transition-opacity'
            )}
            onClick={clickable ? onClick : undefined}
            role={clickable ? 'button' : undefined}
            tabIndex={clickable ? 0 : undefined}
            onKeyDown={
                clickable
                    ? (e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              onClick?.();
                          }
                      }
                    : undefined
            }
        >
            <img
                className="w-full"
                src={imageSources.src}
                srcSet={imageSources.srcSet}
                sizes="100vw"
                alt={alt}
                loading="eager"
            />

            {showGalleryBadge && (
                <div className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black/80 backdrop-blur-sm text-white text-base font-medium transition-all group-hover:bg-black/90 group-hover:scale-105 animate-pulse-subtle shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                    <Images className="w-5 h-5" />
                    <span>{imageCount} images</span>
                </div>
            )}

            {clickable && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 pointer-events-none">
                    <div className="px-5 py-3 rounded-lg bg-black/80 backdrop-blur-sm text-white font-medium">
                        Click to view gallery
                    </div>
                </div>
            )}
        </figure>
    );
}
