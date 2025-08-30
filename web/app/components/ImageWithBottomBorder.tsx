interface ImageWithBottomBorderProps {
    src: string;
    alt: string;
}

export function ImageWithBottomBorder({
    src,
    alt
}: ImageWithBottomBorderProps) {
    return (
        <img
            className="w-full mb-8 border-b border-b-zinc-300 dark:border-b-zinc-700"
            src={src}
            alt={alt}
        />
    );
}
