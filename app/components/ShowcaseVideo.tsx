import { useCallback, useRef, useState, type Ref, type SyntheticEvent } from 'react';
import { Pause, Play } from 'lucide-react';
import { cx } from '~/cva.config';
import { track } from '~/utils/analytics';

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
    /** Where the video sits on the page, sent with its analytics events. */
    placement?: 'walkthrough' | 'example';
};

const PROGRESS_MILESTONES = [25, 50, 75, 100];

/**
 * A video that plays muted on a loop while it's on screen, with a pause
 * button. With reduced motion it waits on its poster until played.
 */
export function ShowcaseHeroVideo({
    publicId,
    title,
    className,
    aspectRatio = '16 / 9',
    width = 1920,
    placement = 'walkthrough'
}: HeroProps) {
    const { src, poster } = showcaseVideoUrls(publicId, width);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const pausedByUser = useRef(false);
    const [playing, setPlaying] = useState(false);
    const started = useRef(false);
    const userPlayed = useRef(false);
    const milestonesSent = useRef(new Set<number>());
    const lastTime = useRef(0);
    const eventProps = { video_id: publicId, video_title: title, placement };

    function percentWatched(video: HTMLVideoElement) {
        return video.duration ? Math.round((video.currentTime / video.duration) * 100) : 0;
    }

    function handlePlay() {
        setPlaying(true);
        if (started.current) return;
        started.current = true;
        track('showcase_video_started', {
            ...eventProps,
            trigger: userPlayed.current ? 'user' : 'autoplay'
        });
    }

    // The video only plays while on screen, so progress means it was actually seen.
    function handleTimeUpdate(event: SyntheticEvent<HTMLVideoElement>) {
        const video = event.currentTarget;
        const looped = video.currentTime < lastTime.current - 1;
        lastTime.current = video.currentTime;
        const percent = looped ? 100 : percentWatched(video);
        for (const milestone of PROGRESS_MILESTONES) {
            if (percent >= milestone && !milestonesSent.current.has(milestone)) {
                milestonesSent.current.add(milestone);
                track('showcase_video_progress', { ...eventProps, percent: milestone });
            }
        }
    }

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
        const action = video.paused ? 'play' : 'pause';
        track('showcase_video_toggled', {
            ...eventProps,
            action,
            percent: percentWatched(video)
        });
        if (action === 'play') {
            pausedByUser.current = false;
            userPlayed.current = true;
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
                onPlay={handlePlay}
                onTimeUpdate={handleTimeUpdate}
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
    const previewed = useRef(false);

    function handlePlay() {
        if (previewed.current) return;
        previewed.current = true;
        track('work_card_video_previewed', { video_id: publicId, work_title: title });
    }

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
            onPlay={handlePlay}
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
