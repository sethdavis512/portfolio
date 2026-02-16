import { cx } from 'cva.config';

interface ResponsiveImageProps {
    src: string;
    alt: string;
    className?: string;
    /** Enable responsive image variants (expects optimized/image-640w.webp, -1024w.webp, -1920w.webp) */
    responsive?: boolean;
    sizes?: string;
    loading?: 'lazy' | 'eager';
    style?: React.CSSProperties;
}

export function ResponsiveImage({
    src,
    alt,
    className,
    responsive = true,
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
        // Note: Most images only have 640w and 1024w versions, not 1920w
        return {
            src: `/optimized${baseName}-1024w.webp`, // Use 1024w as fallback
            srcSet: [
                `/optimized${baseName}-640w.webp 640w`,
                `/optimized${baseName}-1024w.webp 1024w`
            ].join(', ')
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
