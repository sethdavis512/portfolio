import type { ReactNode } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link, redirect } from 'react-router';
import { MdxContent } from '~/components/MdxContent';
import { ShowcaseHeroVideo } from '~/components/ShowcaseVideo';
import { HiringCallToAction } from '~/components/HiringCallToAction';
import { HeroImage } from '~/components/HeroImage';
import { ImageGalleryModal } from '~/components/ImageGalleryModal';
import { TechStackLogos, type LogoName } from '~/components/TechStackLogos';
import { Testimonial } from '~/components/Testimonial';
import { getTestimonialsByWorkSlug } from '~/content/data/testimonials';
import { getPublishedWorks, getWorkBySlug } from '~/content';
import type { WorkExample, WorkFrontmatter } from '~/content/types';
import { cx } from '~/cva.config';
import { useImageGallery } from '~/hooks/useImageGallery';
import { generateRouteMeta } from '~/utils/seo';
import type { Route } from './+types/work-detail';

/** Slugs that moved, so links already shared keep working. */
const MOVED_SLUGS: Record<string, string> = {
    freshvisit: 'fresh-visit'
};

export function meta({ loaderData }: Route.MetaArgs) {
    const work = loaderData?.work;
    return generateRouteMeta({
        pageTitle: work?.title || 'Work Not Found',
        descriptionContent: work?.description || 'Project by Seth Davis.',
        ogUrl: `https://sethdavis.tech/work/${work?.slug || ''}`,
        ogImage: work?.thumbnailImage || work?.heroImage || undefined
    });
}

export function loader({ params }: Route.LoaderArgs) {
    const moved = MOVED_SLUGS[params.slug!];
    if (moved) {
        throw redirect(`/work/${moved}`, 301);
    }

    const result = getWorkBySlug(params.slug!);

    if (!result) {
        throw new Response('Not Found', { status: 404 });
    }

    const published = getPublishedWorks();
    const index = published.findIndex(function (w) {
        return w.frontmatter.slug === result.frontmatter.slug;
    });
    const next =
        index >= 0 && published.length > 1
            ? published[(index + 1) % published.length].frontmatter
            : null;

    return {
        work: result.frontmatter,
        position: index >= 0 ? { index: index + 1, total: published.length } : null,
        next: next ? { slug: next.slug, title: next.title, description: next.description } : null
    };
}

/** The asset path without Cloudinary size transforms, so w_1920 and w_1280 copies match. */
function assetPath(src: string) {
    return src.replace(/\/upload\/[^/]*\/v\d+\//, '/upload/');
}

function buildGalleryImages(work: WorkFrontmatter) {
    const images: { src: string; alt: string }[] = [];

    if (work.heroImage) {
        images.push({
            src: work.heroImage,
            alt: work.title || 'Hero image'
        });
    }

    for (const gi of work.galleryImages ?? []) {
        if (gi.src && assetPath(gi.src) !== assetPath(work.heroImage)) {
            images.push({ src: gi.src, alt: gi.alt || work.title || 'Gallery image' });
        }
    }

    return images;
}

function pad(n: number) {
    return String(n).padStart(2, '0');
}

/** Small uppercase label used for eyebrows and fact-sheet terms. */
function Kicker({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <span
            className={cx(
                'text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400',
                className
            )}
        >
            {children}
        </span>
    );
}

function FactRow({ term, children }: { term: string; children: ReactNode }) {
    return (
        <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-t border-zinc-200 py-4 dark:border-zinc-800">
            <dt>
                <Kicker>{term}</Kicker>
            </dt>
            <dd className="min-w-0 text-sm text-zinc-800 dark:text-zinc-200">{children}</dd>
        </div>
    );
}

function OutLink({ href, children }: { href: string; children: ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 font-medium text-zinc-900 underline decoration-primary-500/50 decoration-1 underline-offset-4 transition-colors hover:decoration-primary-500 dark:text-zinc-50 dark:decoration-primary-400/50 dark:hover:decoration-primary-400"
        >
            {children}
            <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 text-primary-600 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-primary-400"
            />
        </a>
    );
}

function Masthead({
    work,
    position
}: {
    work: WorkFrontmatter;
    position: { index: number; total: number } | null;
}) {
    const techStack = work.techStack as LogoName[];
    const year = new Date(work.createdAt).getUTCFullYear();

    return (
        <header className="mb-12 md:mb-16">
            <div className="flex items-center gap-4 border-b border-zinc-200 pb-4 motion-safe:opacity-0 motion-safe:animate-fade-up dark:border-zinc-800">
                <Kicker className="text-primary-700 dark:text-primary-400">Case study</Kicker>
                <span aria-hidden="true" className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
                {position && (
                    <Kicker>
                        <span className="text-zinc-900 dark:text-zinc-100">{pad(position.index)}</span>
                        {' / '}
                        {pad(position.total)}
                    </Kicker>
                )}
            </div>

            <h1 className="font-display mt-8 text-[clamp(3.25rem,9vw,8.5rem)] leading-[0.88] font-bold text-zinc-900 motion-safe:opacity-0 motion-safe:animate-fade-up-1 dark:text-zinc-50">
                {work.title}
            </h1>

            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
                <p className="text-[clamp(1.2rem,1.1vw+0.85rem,1.6rem)] leading-snug text-zinc-700 motion-safe:opacity-0 motion-safe:animate-fade-up-2 lg:col-span-7 dark:text-zinc-300">
                    {work.description}
                </p>

                <dl className="border-b border-zinc-200 motion-safe:opacity-0 motion-safe:animate-fade-up-3 lg:col-span-4 lg:col-start-9 dark:border-zinc-800">
                    <FactRow term="Year">{year}</FactRow>
                    {work.role && <FactRow term="Role">{work.role}</FactRow>}
                    {techStack.length > 0 && (
                        <FactRow term="Built with">
                            <span className="flex flex-wrap items-center gap-x-3 gap-y-2.5 text-zinc-700 dark:text-zinc-300">
                                <TechStackLogos logos={techStack} />
                            </span>
                        </FactRow>
                    )}
                    {(work.demoUrl || work.sourceUrl) && (
                        <FactRow term="Links">
                            <span className="flex flex-col items-start gap-2">
                                {work.demoUrl && (
                                    <OutLink href={work.demoUrl}>
                                        {work.demoUrlText || 'Visit site'}
                                    </OutLink>
                                )}
                                {work.sourceUrl && (
                                    <OutLink href={work.sourceUrl}>Source code</OutLink>
                                )}
                            </span>
                        </FactRow>
                    )}
                </dl>
            </div>
        </header>
    );
}

function Chapter({
    number,
    title,
    lead = false,
    children
}: {
    number: number;
    title: string;
    lead?: boolean;
    children: ReactNode;
}) {
    return (
        <section className="grid gap-4 border-t border-zinc-200 py-12 md:py-16 lg:grid-cols-12 lg:gap-8 dark:border-zinc-800">
            <div className="lg:col-span-3">
                <div className="flex items-baseline gap-4 lg:sticky lg:top-24 lg:flex-col lg:gap-2">
                    <span
                        aria-hidden="true"
                        className="font-display text-5xl leading-none font-light italic text-primary-600 lg:text-7xl dark:text-primary-400"
                    >
                        {pad(number)}
                    </span>
                    <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-zinc-900 dark:text-zinc-100">
                        {title}
                    </h2>
                </div>
            </div>
            <div
                className={cx(
                    'max-w-[65ch] leading-relaxed break-words text-zinc-700 lg:col-span-8 lg:col-start-5 dark:text-zinc-300',
                    lead
                        ? 'text-[clamp(1.1rem,0.6vw+0.95rem,1.35rem)] text-zinc-800 dark:text-zinc-200'
                        : 'text-base md:text-lg'
                )}
            >
                {children}
            </div>
        </section>
    );
}

function PullQuote({ children }: { children: ReactNode }) {
    return (
        <figure className="border-t border-zinc-200 py-14 md:py-20 dark:border-zinc-800">
            <blockquote className="font-display relative max-w-4xl text-[clamp(1.9rem,3.6vw,3.5rem)] leading-[1.08] font-normal italic text-zinc-900 lg:ml-[25%] dark:text-zinc-50">
                <span
                    aria-hidden="true"
                    className="mr-1 not-italic text-primary-600 lg:absolute lg:-top-2 lg:-left-3 lg:mr-0 lg:-translate-x-full lg:pr-2 dark:text-primary-400"
                >
                    &ldquo;
                </span>
                {children}
            </blockquote>
        </figure>
    );
}

function InAction({ examples }: { examples: WorkExample[] }) {
    return (
        <section className="border-t border-zinc-200 py-12 md:py-16 dark:border-zinc-800">
            <div className="mb-10 flex items-end justify-between gap-6">
                <div>
                    <Kicker className="text-primary-700 dark:text-primary-400">In action</Kicker>
                    <h2 className="font-display mt-3 text-[clamp(2rem,3.5vw,3rem)] leading-none font-bold text-zinc-900 dark:text-zinc-50">
                        Straight from the product
                    </h2>
                </div>
                <Kicker className="hidden sm:inline">{pad(examples.length)} recordings</Kicker>
            </div>
            <div className="grid gap-12 md:grid-cols-12 md:gap-8">
                {examples.map(function (example, index) {
                    const wide = index % 2 === 0;
                    return (
                        <figure
                            key={example.video}
                            className={cx(
                                wide ? 'md:col-span-7' : 'md:col-span-5 md:mt-24'
                            )}
                        >
                            <ShowcaseHeroVideo
                                publicId={example.video}
                                title={example.title}
                                aspectRatio={example.aspect}
                                width={1280}
                            />
                            <figcaption className="mt-4 grid grid-cols-[auto_1fr] gap-x-4">
                                <span
                                    aria-hidden="true"
                                    className="font-display text-2xl leading-none italic text-primary-600 dark:text-primary-400"
                                >
                                    {pad(index + 1)}
                                </span>
                                <span>
                                    <span className="block font-semibold text-zinc-900 dark:text-zinc-100">
                                        {example.title}
                                    </span>
                                    <span className="mt-1 block text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                        {example.caption}
                                    </span>
                                </span>
                            </figcaption>
                        </figure>
                    );
                })}
            </div>
        </section>
    );
}

function Filmstrip({
    images,
    onOpen
}: {
    images: { src: string; alt: string }[];
    onOpen: (index: number) => void;
}) {
    return (
        <section className="border-t border-zinc-200 py-12 md:py-16 dark:border-zinc-800">
            <div className="mb-6 flex items-baseline justify-between gap-6">
                <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-zinc-900 dark:text-zinc-100">
                    Screens
                </h2>
                <Kicker>{pad(images.length)} images, select to enlarge</Kicker>
            </div>
            <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:thin]">
                {images.map(function (image, index) {
                    return (
                        <li key={image.src} className="shrink-0 snap-start">
                            <button
                                type="button"
                                onClick={function () {
                                    onOpen(index);
                                }}
                                className="group block text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500"
                            >
                                <span className="block overflow-hidden border border-zinc-200 bg-zinc-100 transition-colors group-hover:border-primary-500 dark:border-zinc-800 dark:bg-zinc-900 dark:group-hover:border-primary-400">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        loading="lazy"
                                        className="h-44 w-auto max-w-none object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] sm:h-56"
                                    />
                                </span>
                                <span className="mt-2 flex max-w-72 gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                                    <span className="font-semibold text-zinc-900 tabular-nums dark:text-zinc-200">
                                        {pad(index + 1)}
                                    </span>
                                    <span className="line-clamp-2">{image.alt}</span>
                                </span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

function NextProject({
    next
}: {
    next: { slug: string; title: string; description: string };
}) {
    return (
        <Link
            to={`/work/${next.slug}`}
            className="group mt-4 block border-y border-zinc-200 py-10 md:py-14 dark:border-zinc-800"
        >
            <Kicker>Next project</Kicker>
            <span className="mt-4 flex items-end justify-between gap-6">
                <span className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] font-bold text-zinc-900 transition-colors duration-300 group-hover:text-primary-700 dark:text-zinc-50 dark:group-hover:text-primary-400">
                    {next.title}
                </span>
                <ArrowRight
                    aria-hidden="true"
                    className="mb-2 size-10 shrink-0 text-primary-600 transition-transform duration-300 ease-out group-hover:translate-x-2 md:size-14 dark:text-primary-400"
                />
            </span>
            <span className="mt-4 block max-w-2xl text-zinc-600 dark:text-zinc-400">
                {next.description}
            </span>
        </Link>
    );
}

function WorkLayout({
    work,
    position,
    next
}: {
    work: WorkFrontmatter;
    position: { index: number; total: number } | null;
    next: { slug: string; title: string; description: string } | null;
}) {
    const galleryImages = buildGalleryImages(work);
    // With a video in the hero spot, every screenshot (hero image included) goes to the filmstrip.
    const filmOffset = work.showcaseVideo ? 0 : 1;
    const filmImages = galleryImages.slice(filmOffset);
    const { isOpen, selectedIndex, openGallery, closeGallery } = useImageGallery();

    const workModule = getWorkBySlug(work.slug);
    const hasContent = work.hasContent && workModule;
    const testimonials = getTestimonialsByWorkSlug(work.slug);

    const chapters = [
        { title: 'Overview', body: work.about },
        { title: 'What I learned', body: work.learned },
        { title: 'Why it matters', body: work.impact }
    ].filter(function (chapter) {
        return Boolean(chapter.body);
    });

    return (
        <>
            <Masthead work={work} position={position} />

            {work.showcaseVideo ? (
                <figure className="mb-4 motion-safe:opacity-0 motion-safe:animate-fade-slide">
                    <ShowcaseHeroVideo publicId={work.showcaseVideo} title={work.title} />
                    <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
                        <Kicker>Walkthrough of the live site</Kicker>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">
                            Recorded with an automated browser
                        </span>
                    </figcaption>
                </figure>
            ) : (
                work.heroImage && (
                    <HeroImage
                        src={work.heroImage}
                        alt={work.title || 'Project hero'}
                        clickable={galleryImages.length > 1}
                        onClick={function () {
                            openGallery(0);
                        }}
                        imageCount={galleryImages.length > 1 ? galleryImages.length : undefined}
                    />
                )
            )}

            <div className="mt-8 md:mt-12">
                {hasContent && workModule ? (
                    <section className="border-t border-zinc-200 py-12 dark:border-zinc-800">
                        <MdxContent Component={workModule.Component} />
                    </section>
                ) : (
                    chapters.map(function (chapter, index) {
                        return (
                            <div key={chapter.title}>
                                {work.pullQuote && index === chapters.length - 1 && (
                                    <PullQuote>{work.pullQuote}</PullQuote>
                                )}
                                <Chapter number={index + 1} title={chapter.title} lead={index === 0}>
                                    <p>{chapter.body}</p>
                                </Chapter>
                            </div>
                        );
                    })
                )}
            </div>

            {work.examples && work.examples.length > 0 && <InAction examples={work.examples} />}

            {filmImages.length > 0 && (
                <Filmstrip
                    images={filmImages}
                    onOpen={function (index) {
                        openGallery(index + filmOffset);
                    }}
                />
            )}

            {testimonials.length > 0 && (
                <section className="space-y-4 border-t border-zinc-200 py-12 dark:border-zinc-800">
                    {testimonials.map(function (testimonial) {
                        return <Testimonial key={testimonial.id} testimonial={testimonial} />;
                    })}
                </section>
            )}

            {next && <NextProject next={next} />}

            <HiringCallToAction className="mt-12" />

            <ImageGalleryModal
                images={galleryImages}
                isOpen={isOpen}
                onClose={closeGallery}
                initialIndex={selectedIndex}
            />
        </>
    );
}

export default function WorkDetailRoute({ loaderData }: Route.ComponentProps) {
    return (
        <WorkLayout
            work={loaderData.work}
            position={loaderData.position}
            next={loaderData.next}
        />
    );
}
