import { cx } from 'cva.config';

interface HeroImageProps {
    src: string;
    alt: string;
    aspectRatio?: string;
}

export function HeroImage({ alt, aspectRatio, src }: HeroImageProps) {
    return (
        <figure
            className={cx(
                'opacity-0 animate-fade-slide relative border-b mb-8 border-b-zinc-300 dark:border-b-zinc-700 overflow-hidden',
                aspectRatio
            )}
        >
            <img className="w-full" src={src} alt={alt} />
        </figure>
    );
}
