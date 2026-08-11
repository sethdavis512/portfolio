import { Images } from 'lucide-react';
import { cx } from '~/cva.config';

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

        // If src is already a full URL (e.g. Cloudinary), use it directly
        if (src.startsWith('http://') || src.startsWith('https://')) {
            return { src };
        }

        const baseName = src.replace(/\.[^.]+$/, ''); // Remove extension

        // Use only optimized images for best performance
        // Browser will select the best option based on screen size and pixel density
        // Note: Most images only have 640w and 1024w versions, not 1920w
        const srcSetParts = [
            `/optimized${baseName}-640w.webp 640w`,
            `/optimized${baseName}-1024w.webp 1024w`
        ];

        return {
            src: `/optimized${baseName}-1024w.webp`, // Use 1024w as fallback since 1920w doesn't exist
            srcSet: srcSetParts.join(', ')
        };
    };

    const imageSources = getResponsiveSrc();

    return (
        <figure
            className={cx(
                'opacity-0 animate-fade-slide relative border-2 border-black dark:border-zinc-200 mb-8 overflow-hidden group',
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
                <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-2 bg-black text-white border-2 border-white font-mono text-xs uppercase tracking-[0.15em]">
                    <Images className="w-4 h-4" />
                    <span>{imageCount} images</span>
                </div>
            )}

            {clickable && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 pointer-events-none">
                    <div className="px-4 py-2.5 bg-black text-white border-2 border-white font-mono text-xs uppercase tracking-[0.15em]">
                        View gallery
                    </div>
                </div>
            )}
        </figure>
    );
}
