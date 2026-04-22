import { useEffect, type ComponentType, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router';
import type { Deck, SlideNavigation } from '~/content/slides';
import { SlideCode } from './SlideCode';

function getCodeProps(
    children: ReactNode
): { code: string; className: string } | null {
    if (
        children !== null &&
        typeof children === 'object' &&
        'props' in (children as { props?: unknown })
    ) {
        const props = (children as { props?: { children?: unknown; className?: string } }).props;
        if (typeof props?.children === 'string') {
            return {
                code: props.children.replace(/\n$/, ''),
                className: props.className ?? ''
            };
        }
    }
    return null;
}

const slideMdxComponents: Record<string, ComponentType<{ children?: ReactNode; className?: string }>> = {
    pre({ children }) {
        const codeProps = getCodeProps(children);
        if (codeProps) {
            const language =
                codeProps.className.replace('language-', '') || 'typescript';
            return <SlideCode code={codeProps.code} language={language} />;
        }
        return <pre className="font-mono text-zinc-100">{children}</pre>;
    },
    code({ children, className }) {
        if (className?.startsWith('language-')) {
            return <code className={className}>{children}</code>;
        }
        return (
            <code className="px-2 py-0.5 rounded bg-zinc-800/80 border border-zinc-700 text-primary-300 font-mono text-[0.9em]">
                {children}
            </code>
        );
    }
};

type Props = {
    deck: Deck;
    slideId: string;
    navigation: SlideNavigation;
    basePath: string;
    backHref?: string;
    backLabel?: string;
};

function setNavAttrs(
    targetSlideId: string,
    direction: 'forward' | 'back',
    transitionMap: SlideNavigation['transitionMap']
) {
    const el = document.documentElement;
    el.dataset.nav = direction;
    el.dataset.transition = transitionMap[targetSlideId] ?? 'depth';
}

export function SlideshowStage({
    deck,
    slideId,
    navigation,
    basePath,
    backHref = '/',
    backLabel = 'Back to portfolio'
}: Props) {
    const navigate = useNavigate();
    const {
        currentIndex,
        totalSlides,
        nextSlideId,
        prevSlideId,
        allSlideIds,
        transitionMap
    } = navigation;

    const slide = deck.slides.find((s) => s.id === slideId);

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'ArrowLeft' && prevSlideId) {
                setNavAttrs(prevSlideId, 'back', transitionMap);
                navigate(`${basePath}/${prevSlideId}`, { viewTransition: true });
            } else if (event.key === 'ArrowRight' && nextSlideId) {
                setNavAttrs(nextSlideId, 'forward', transitionMap);
                navigate(`${basePath}/${nextSlideId}`, { viewTransition: true });
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [navigate, nextSlideId, prevSlideId, basePath, transitionMap]);

    if (!slide) {
        return (
            <div className="w-screen h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center">
                Slide not found
            </div>
        );
    }

    const SlideComponent = slide.Component;

    return (
        <div className="w-screen h-screen relative bg-zinc-950 text-zinc-100 overflow-hidden font-sans">
            <title>{`${slide.title} — ${deck.meta.title}`}</title>

            <div className="slide-container absolute inset-0 px-5 pt-14 pb-20 sm:px-10 sm:pt-16 sm:pb-24 md:px-16 lg:px-24 lg:py-16 lg:pb-28 flex items-center justify-center overflow-y-auto">
                <div className="max-w-6xl w-full h-full">
                    <SlideComponent components={slideMdxComponents} />
                </div>
            </div>

            {prevSlideId && (
                <Link
                    to={`${basePath}/${prevSlideId}`}
                    className="hidden sm:block absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 text-zinc-500 hover:text-white transition-colors"
                    aria-label="Previous slide"
                    prefetch="intent"
                    viewTransition
                    onClick={() => setNavAttrs(prevSlideId, 'back', transitionMap)}
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </Link>
            )}

            {nextSlideId && (
                <Link
                    to={`${basePath}/${nextSlideId}`}
                    className="hidden sm:block absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 text-zinc-500 hover:text-white transition-colors"
                    aria-label="Next slide"
                    prefetch="intent"
                    viewTransition
                    onClick={() =>
                        setNavAttrs(nextSlideId, 'forward', transitionMap)
                    }
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </Link>
            )}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {allSlideIds.map((targetId, index) => (
                    <Link
                        key={targetId}
                        to={`${basePath}/${targetId}`}
                        className={
                            index === currentIndex
                                ? 'w-8 h-1.5 rounded-full bg-primary-400 transition-all'
                                : 'w-1.5 h-1.5 rounded-full bg-zinc-700 hover:bg-zinc-500 transition-colors'
                        }
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={index === currentIndex ? 'true' : undefined}
                        prefetch="intent"
                        viewTransition
                        onClick={() =>
                            setNavAttrs(
                                targetId,
                                index > currentIndex ? 'forward' : 'back',
                                transitionMap
                            )
                        }
                    />
                ))}
            </div>

            <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs text-zinc-500 uppercase tracking-[0.2em]">
                <Link
                    to={backHref}
                    className="flex items-center gap-2 hover:text-white transition-colors"
                >
                    <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    <span>{backLabel}</span>
                </Link>
                <span className="font-mono tabular-nums normal-case tracking-normal">
                    {String(currentIndex + 1).padStart(2, '0')} /{' '}
                    {String(totalSlides).padStart(2, '0')}
                </span>
            </div>
        </div>
    );
}
