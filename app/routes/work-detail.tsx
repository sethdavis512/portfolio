import { MdxContent } from '~/components/MdxContent';
import { Card } from '~/components/Card';
import { ServicesCallToAction } from '~/components/ServicesCallToAction';
import { Heading } from '~/components/Heading';
import { HeroImage } from '~/components/HeroImage';
import { ImageGalleryModal } from '~/components/ImageGalleryModal';
import { ImageThumbnails } from '~/components/ImageThumbnails';
import { Linky } from '~/components/Linky';
import { TechStackLogos, type LogoName } from '~/components/TechStackLogos';
import { getWorkBySlug } from '~/content';
import type { WorkFrontmatter } from '~/content/types';
import { useImageGallery } from '~/hooks/useImageGallery';
import { generateRouteMeta } from '~/utils/seo';
import type { Route } from './+types/work-detail';

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
    const result = getWorkBySlug(params.slug!);

    if (!result) {
        throw new Response('Not Found', { status: 404 });
    }

    return { work: result.frontmatter };
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
        if (gi.src) {
            images.push({ src: gi.src, alt: gi.alt || work.title || 'Gallery image' });
        }
    }

    return images;
}

function WorkLayout({ work }: { work: WorkFrontmatter }) {
    const galleryImages = buildGalleryImages(work);
    const hasGallery = galleryImages.length > 1;
    const { isOpen, selectedIndex, openGallery, closeGallery } =
        useImageGallery();
    const techStack = work.techStack as LogoName[];

    const workModule = getWorkBySlug(work.slug);
    const hasContent = work.hasContent && workModule;

    const hasLinks = work.sourceUrl || work.demoUrl;
    const hasTechStack = techStack.length > 0;

    return (
        <>
            {work.heroImage && (
                <HeroImage
                    src={work.heroImage}
                    alt={work.title || 'Project hero'}
                    clickable={hasGallery}
                    onClick={
                        hasGallery
                            ? function () {
                                  openGallery(0);
                              }
                            : undefined
                    }
                    imageCount={hasGallery ? galleryImages.length : undefined}
                />
            )}

            <div className="space-y-6 mb-8">
                <Heading as="h1" size="1">
                    {work.title}
                </Heading>
                {work.description && (
                    <p className="text-xl text-zinc-600 dark:text-zinc-300">
                        {work.description}
                    </p>
                )}
                {hasTechStack && (
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <TechStackLogos logos={techStack} />
                    </div>
                )}
            </div>

            <div className="space-y-6 min-w-0">
                {hasContent && workModule ? (
                    <MdxContent Component={workModule.Component} />
                ) : (
                    <>
                        {work.about && (
                            <>
                                <Heading as="h2" size="5">
                                    Project Overview
                                </Heading>
                                <p className="break-words">{work.about}</p>
                            </>
                        )}
                        {work.learned && (
                            <>
                                <Heading as="h2" size="5">
                                    Knowledge Gained
                                </Heading>
                                <p className="break-words">{work.learned}</p>
                            </>
                        )}
                        {work.impact && (
                            <>
                                <Heading as="h2" size="5">
                                    The Impact
                                </Heading>
                                <p className="break-words">{work.impact}</p>
                            </>
                        )}
                    </>
                )}

                {hasLinks && (
                    <>
                        <Heading as="h2" size="5">
                            Links
                        </Heading>
                        <Card className="flex flex-col gap-4">
                            {work.sourceUrl && (
                                <Linky
                                    href={work.sourceUrl}
                                    className="break-words"
                                >
                                    View source code
                                </Linky>
                            )}
                            {work.demoUrl && (
                                <Linky
                                    href={work.demoUrl}
                                    className="break-words"
                                >
                                    {work.demoUrlText || 'See the demo'}
                                </Linky>
                            )}
                        </Card>
                    </>
                )}

                <ServicesCallToAction className="mt-10" />
            </div>

            {hasGallery && (
                <ImageThumbnails
                    images={galleryImages.slice(1)}
                    onImageClick={function (index) {
                        openGallery(index + 1);
                    }}
                />
            )}

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
    return <WorkLayout work={loaderData.work} />;
}
