import { useState, useEffect } from 'react';

interface ImageWithBottomBorderProps {
    src: string;
    alt: string;
    aspectRatio?: string;
}

export function ImageWithBottomBorder({
    src,
    alt,
    aspectRatio = 'aspect-video'
}: ImageWithBottomBorderProps) {
    return (
        <figure
            className={`relative border-b mb-8 border-b-zinc-300 dark:border-b-zinc-700 overflow-hidden ${aspectRatio}`}
        >
            <img className={`w-full animate-slide-up`} src={src} alt={alt} />
        </figure>
    );
}
