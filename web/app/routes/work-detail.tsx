import {
    DocumentRenderer,
    type DocumentRendererProps
} from '@keystone-6/document-renderer';
import { Images, LoaderIcon, ShoppingCart, TriangleAlert } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { data, useFetcher } from 'react-router';
import { getPortfolioBase } from '~/airtable';
import { Banner } from '~/components/Banner';
import { renderers } from '~/components/BlogArticle';
import { Button } from '~/components/Button';
import { Card } from '~/components/Card';
import { FreelanceCallToAction } from '~/components/FreelanceCallToAction';
import { Heading } from '~/components/Heading';
import { HeroImage } from '~/components/HeroImage';
import { ImageGalleryModal } from '~/components/ImageGalleryModal';
import { ImageThumbnails } from '~/components/ImageThumbnails';
import { Linky } from '~/components/Linky';
import { TechStackLogos, type LogoName } from '~/components/TechStackLogos';
import {
    GetWorkDetailDocument,
    type GetWorkDetailQuery
} from '~/generated/graphql';
import { useImageGallery } from '~/hooks/useImageGallery';
import { client } from '~/utils/graphql.server';
import { generateRouteMeta } from '~/utils/seo';
import type { Route } from './+types/work-detail';

export function meta({ data }: Route.MetaArgs) {
    const work = data?.work;
    return generateRouteMeta({
        pageTitle: work?.title || 'Work Not Found',
        descriptionContent: work?.description || 'Project by Seth Davis.',
        ogUrl: `https://sethdavis.tech/work/${work?.slug || ''}`
    });
}

export async function loader({ params }: Route.LoaderArgs) {
    const { work } = await client.request<GetWorkDetailQuery>(
        GetWorkDetailDocument,
        { slug: params.slug }
    );

    if (!work) {
        throw new Response('Not Found', { status: 404 });
    }

    return { work };
}

export async function action({ request, params }: Route.ActionArgs) {
    const formData = await request.formData();
    const firstName = String(formData.get('firstName'));
    const lastName = String(formData.get('lastName'));
    const email = String(formData.get('email'));
    const note = String(formData.get('note'));

    try {
        const response = await getPortfolioBase()('Iridium Interest').create([
            {
                fields: {
                    'First name': firstName,
                    'Last name': lastName,
                    Email: email,
                    Note: note
                }
            }
        ]);

        if (!response || response.length === 0) {
            throw new Error('No record created in Airtable');
        }

        return data({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Error saving interested person:', error);
        return data(
            {
                error: 'There was an error sending your request. Please try again later.'
            },
            { status: 500 }
        );
    }
}

// Build gallery images array from CMS data
function buildGalleryImages(work: NonNullable<GetWorkDetailQuery['work']>) {
    const images: { src: string; alt: string }[] = [];

    if (work.heroImage?.publicUrlTransformed) {
        images.push({
            src: work.heroImage.publicUrlTransformed,
            alt: work.title || 'Hero image'
        });
    }

    if (work.galleryImages) {
        for (const gi of work.galleryImages) {
            if (gi.image?.publicUrlTransformed) {
                images.push({
                    src: gi.image.publicUrlTransformed,
                    alt: gi.alt || work.title || 'Gallery image'
                });
            }
        }
    }

    return images;
}

function parseStringArray(value: unknown): string[] {
    if (Array.isArray(value)) {
        return value.filter(function (item): item is string {
            return typeof item === 'string';
        });
    }

    if (typeof value === 'string') {
        try {
            const parsed = JSON.parse(value);
            if (Array.isArray(parsed)) {
                return parsed.filter(function (item): item is string {
                    return typeof item === 'string';
                });
            }
        } catch {
            return [];
        }
    }

    return [];
}

function InterestFormSidebar() {
    const fetcher = useFetcher();
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (fetcher.data && fetcher.data.success && formRef.current) {
            formRef.current.reset();
        }
    }, [fetcher.data]);

    return (
        <section className="rounded-lg bg-zinc-800 p-8 space-y-4">
            <Heading as="h2" size="4">
                Interested?
            </Heading>
            <fetcher.Form method="POST" className="space-y-4" ref={formRef}>
                {fetcher.data?.success ? (
                    <Banner>Request sent successfully!</Banner>
                ) : fetcher.data?.error ? (
                    <div className="bg-amber-500 p-4 rounded">
                        <div className="mb-2">
                            <TriangleAlert />
                        </div>
                        <p>
                            There was an error sending your request.
                            <br />
                            Please try again later.
                        </p>
                    </div>
                ) : null}
                <div>
                    <label
                        htmlFor="firstName"
                        className="block mb-2 font-medium"
                    >
                        First name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="p-2 border border-zinc-500 rounded w-full"
                        placeholder="Your first name"
                    />
                </div>
                <div>
                    <label
                        htmlFor="lastName"
                        className="block mb-2 font-medium"
                    >
                        Last name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="p-2 border border-zinc-500 rounded w-full"
                        placeholder="Your last name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="p-2 border border-zinc-500 rounded w-full"
                        placeholder="you@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="note" className="block mb-2 font-medium">
                        Note
                    </label>
                    <textarea
                        id="note"
                        name="note"
                        rows={4}
                        className="p-2 border border-zinc-500 rounded w-full"
                        placeholder="Tell me a bit about your project..."
                    ></textarea>
                </div>
                <Button
                    type="submit"
                    iconBefore={
                        fetcher.state !== 'idle' ? (
                            <LoaderIcon className="animate-spin" />
                        ) : undefined
                    }
                >
                    {fetcher.state !== 'idle' ? '' : 'Send request'}
                </Button>
            </fetcher.Form>
        </section>
    );
}

interface PurchaseSidebarProps {
    purchaseUrl: string;
    purchaseButtonText?: string | null;
    sidebarTitle?: string | null;
    features?: string[];
    techStack?: LogoName[];
}

function PurchaseSidebar({
    purchaseUrl,
    purchaseButtonText,
    sidebarTitle,
    features,
    techStack
}: PurchaseSidebarProps) {
    return (
        <section className="rounded-lg bg-zinc-800 p-6 space-y-4 sticky top-4">
            <Heading as="h2" size="4" className="text-white">
                {sidebarTitle || 'Get It Now'}
            </Heading>

            {features && features.length > 0 && (
                <div className="space-y-3 text-zinc-300">
                    {features.map(function (feature) {
                        return (
                            <div
                                key={feature}
                                className="flex items-start gap-2"
                            >
                                <span className="text-primary">✓</span>
                                <span>{feature}</span>
                            </div>
                        );
                    })}
                </div>
            )}

            <Linky external to={purchaseUrl} className="w-full block">
                <Button
                    color="primary"
                    iconBefore={<ShoppingCart />}
                    className="w-full justify-center"
                >
                    {purchaseButtonText || 'Purchase'}
                </Button>
            </Linky>

            {techStack && techStack.length > 0 && (
                <div className="pt-4 flex gap-2 items-center">
                    <p className="text-sm text-zinc-400">Powered by</p>
                    <TechStackLogos logos={techStack} />
                </div>
            )}
        </section>
    );
}

// Unified Work Layout - sidebarType drives structure
function WorkLayout({
    work
}: {
    work: NonNullable<GetWorkDetailQuery['work']>;
}) {
    const galleryImages = buildGalleryImages(work);
    const hasGallery = galleryImages.length > 1;
    const { isOpen, selectedIndex, openGallery, closeGallery } =
        useImageGallery();
    const techStack = parseStringArray(work.techStack) as LogoName[];
    const features = parseStringArray(work.features);

    // Check if content.document has meaningful content
    const hasContent =
        work.content?.document &&
        Array.isArray(work.content.document) &&
        work.content.document.length > 1;

    // Determine if we need a sidebar
    const hasPurchase = work.sidebarType === 'purchase' && work.purchaseUrl;
    const hasInterestForm = work.sidebarType === 'interest-form';
    const hasLinks = work.sourceUrl || work.demoUrl;
    const hasTechStack = techStack.length > 0;
    const hasSidebar =
        hasPurchase || hasInterestForm || hasLinks || hasTechStack;

    // Render main content area
    function renderContent() {
        if (hasContent) {
            return (
                <div className="prose prose-lg max-w-none dark:prose-invert prose-code:before:content-[''] prose-code:after:content-[''] prose-headings:my-4 prose-pre:p-0 prose-pre:bg-none prose-p:text-white">
                    <DocumentRenderer
                        document={work.content!.document}
                        renderers={renderers}
                    />
                </div>
            );
        }

        // Fall back to about/learned/impact fields
        return (
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
        );
    }

    // Render sidebar content
    function renderSidebar() {
        return (
            <div className="md:col-span-1 space-y-4 min-w-0">
                {hasPurchase && (
                    <PurchaseSidebar
                        purchaseUrl={work.purchaseUrl!}
                        purchaseButtonText={work.purchaseButtonText}
                        sidebarTitle={work.sidebarTitle}
                        features={features}
                        techStack={techStack}
                    />
                )}

                {!hasPurchase && hasTechStack && (
                    <>
                        <Heading as="h4" size="5" className="font-bold">
                            Tech Stack
                        </Heading>
                        <Card className="flex flex-wrap gap-3">
                            <TechStackLogos logos={techStack} />
                        </Card>
                    </>
                )}

                {!hasPurchase && hasLinks && (
                    <>
                        <Heading as="h4" size="5" className="font-bold">
                            Links
                        </Heading>
                        <Card className="flex flex-col gap-4">
                            {work.sourceUrl && (
                                <Linky
                                    external
                                    to={work.sourceUrl}
                                    className="break-words"
                                >
                                    View source code
                                </Linky>
                            )}
                            {work.demoUrl && (
                                <Linky
                                    to={work.demoUrl}
                                    className="break-words"
                                >
                                    {work.demoUrlText || 'See the demo'}
                                </Linky>
                            )}
                        </Card>
                    </>
                )}

                {hasInterestForm && <InterestFormSidebar />}
            </div>
        );
    }

    return (
        <>
            {work.heroImage?.publicUrlTransformed && (
                <HeroImage
                    src={work.heroImage.publicUrlTransformed}
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
            </div>

            {hasSidebar ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-6 min-w-0">
                        {renderContent()}
                        <FreelanceCallToAction className="mt-10" />
                    </div>
                    {renderSidebar()}
                </div>
            ) : (
                <>
                    {renderContent()}
                    <FreelanceCallToAction className="mt-10" />
                </>
            )}

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
