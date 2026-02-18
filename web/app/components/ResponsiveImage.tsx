import { cx } from 'cva.config';

interface ResponsiveImageProps {
    src: string;
    alt: string;
    className?: string;
    /** Enable responsive image variants (expects optimized/image-640w.webp) */
    responsive?: boolean;
    /** Include 1024w variant in srcset (only if the optimized version exists) */
    include1024?: boolean;
    sizes?: string;
    loading?: 'lazy' | 'eager';
    style?: React.CSSProperties;
}

export function ResponsiveImage({
    src,
    alt,
    className,
    responsive = true,
    include1024 = false,
    sizes = '100vw',
    loading = 'lazy',
    style
}: ResponsiveImageProps) {
    // Generate responsive image sources if enabled
    const getResponsiveSrc = () => {
        if (!responsive) return { src };

        // If src is already a full URL (e.g. Cloudinary), use it directly
        if (src.startsWith('http://') || src.startsWith('https://')) {
            return { src };
        }

        const baseName = src.replace(/\.[^.]+$/, ''); // Remove extension
        const srcSetParts = [`/optimized${baseName}-640w.webp 640w`];

        // Only include 1024w if explicitly enabled (means the file exists)
        if (include1024) {
            srcSetParts.push(`/optimized${baseName}-1024w.webp 1024w`);
        }

        return {
            src: `/optimized${baseName}-640w.webp`,
            srcSet: srcSetParts.join(', ')
        };
    };

    const imageSources = getResponsiveSrc();

    return (
        <img
            className={cx(className)}
            src={imageSources.src}
            srcSet={imageSources.srcSet}
            sizes={sizes}
            alt={alt}
            loading={loading}
            style={style}
        />
    );
}
