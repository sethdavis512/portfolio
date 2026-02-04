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

        const baseName = src.replace(/\.[^.]+$/, ''); // Remove extension
        return {
            src: `/optimized${baseName}-1920w.webp`,
            srcSet: [
                `/optimized${baseName}-640w.webp 640w`,
                `/optimized${baseName}-1024w.webp 1024w`,
                `/optimized${baseName}-1920w.webp 1920w`
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
