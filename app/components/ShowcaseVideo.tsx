import { useCallback, useRef, useState, type Ref } from 'react';
import { Pause, Play } from 'lucide-react';
import { cx } from '~/cva.config';

const CLOUDINARY_VIDEO = 'https://res.cloudinary.com/setholito/video/upload';

/** Video and poster URLs for a showcase video's Cloudinary public ID. */
export function showcaseVideoUrls(publicId: string, width: number) {
    return {
        src: `${CLOUDINARY_VIDEO}/f_auto,q_auto,c_scale,w_${width}/v1/${publicId}.mp4`,
        poster: `${CLOUDINARY_VIDEO}/so_1,f_auto,q_auto,c_scale,w_${width}/v1/${publicId}.jpg`
    };
}

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

type HeroProps = {
    publicId: string;
    title: string;
    className?: string;
    /** The video's shape, e.g. "1280 / 844", so the poster doesn't letterbox. */
    aspectRatio?: string;
    width?: number;
};

/**
 * A video that plays muted on a loop while it's on screen, with a pause
 * button. With reduced motion it waits on its poster until played.
 */
export function ShowcaseHeroVideo({
    publicId,
    title,
    className,
    aspectRatio = '16 / 9',
    width = 1920
}: HeroProps) {
    const { src, poster } = showcaseVideoUrls(publicId, width);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const pausedByUser = useRef(false);
    const [playing, setPlaying] = useState(false);

    const attach = useCallback(function (video: HTMLVideoElement | null) {
        videoRef.current = video;
        if (!video) return;
        video.muted = true;
        if (prefersReducedMotion()) {
            pausedByUser.current = true;
            return;
        }
        const observer = new IntersectionObserver(
            function ([entry]) {
                if (entry.isIntersecting && !pausedByUser.current) {
                    video.play().catch(function () {});
                } else {
                    video.pause();
                }
            },
            { threshold: 0.4 }
        );
        observer.observe(video);
        return function () {
            observer.disconnect();
        };
    }, []);

    function handleToggle() {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            pausedByUser.current = false;
            video.play().catch(function () {});
        } else {
            pausedByUser.current = true;
            video.pause();
        }
    }

    return (
        <div
            className={cx(
                'relative overflow-hidden border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900',
                className
            )}
            style={{ aspectRatio }}
        >
            <video
                ref={attach}
                className="w-full h-full object-cover"
                src={src}
                poster={poster}
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`${title} walkthrough video`}
                onPlay={function () {
                    setPlaying(true);
                }}
                onPause={function () {
                    setPlaying(false);
                }}
            />
            <button
                type="button"
                onClick={handleToggle}
                aria-label={playing ? 'Pause video' : 'Play video'}
                className="absolute top-2 right-2 inline-flex size-8 sm:top-3 sm:right-3 sm:size-10 items-center justify-center rounded-full bg-zinc-950/75 text-white backdrop-blur-sm transition-colors hover:bg-zinc-950/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 dark:bg-zinc-950/75 dark:hover:bg-zinc-950/90"
            >
                {playing ? (
                    <Pause className="size-4" aria-hidden="true" />
                ) : (
                    <Play className="size-4 translate-x-px" aria-hidden="true" />
                )}
            </button>
        </div>
    );
}

type CardProps = {
    publicId: string;
    title: string;
    className?: string;
    ref?: Ref<HTMLVideoElement>;
};

/** A card's video: shows its poster and plays only while the card is hovered or focused (see playCardVideo). */
export function ShowcaseCardVideo({ publicId, title, className, ref }: CardProps) {
    const { src, poster } = showcaseVideoUrls(publicId, 1280);
    return (
        <video
            ref={ref}
            className={cx('aspect-video object-cover', className)}
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            preload="none"
            aria-label={`${title} walkthrough video`}
        />
    );
}

/** Starts a card video on hover or focus, unless the viewer prefers reduced motion. */
export function playCardVideo(video: HTMLVideoElement | null) {
    if (!video || prefersReducedMotion()) return;
    video.muted = true;
    video.play().catch(function () {});
}

export function pauseCardVideo(video: HTMLVideoElement | null) {
    video?.pause();
}
