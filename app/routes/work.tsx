import { cx } from '~/cva.config';
import { Link } from 'react-router';
import { buttonVariants } from '~/components/Button';
import { ContentSection } from '~/components/ContentSection';
import { Heading } from '~/components/Heading';
import { getPublishedWorks } from '~/content';
import { generateRouteMeta } from '~/utils/seo';
import type { Route } from './+types/work';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Work',
        descriptionContent: 'Projects and applications built by Seth Davis',
        ogUrl: 'https://sethdavis.tech/work'
    });
}

export function loader() {
    const works = getPublishedWorks().map((w) => ({
        id: w.slug,
        title: w.frontmatter.title,
        slug: w.frontmatter.slug,
        description: w.frontmatter.description,
        cta: w.frontmatter.cta,
        sortOrder: w.frontmatter.sortOrder,
        thumbnailImage: w.frontmatter.thumbnailImage
    }));
    return { works };
}

interface WorkDisplayProps {
    cta: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    url: string;
    reverse?: boolean;
}

function FeaturedWorkDisplay({
    cta,
    title,
    description,
    url,
    imageSrc,
    imageAlt,
    reverse
}: WorkDisplayProps) {
    return (
        <Link to={url} className="group block h-full">
            <div className="border-2 border-black dark:border-zinc-200 h-full transition-shadow duration-150 group-hover:shadow-[8px_8px_0_0_var(--color-black)] dark:group-hover:shadow-[8px_8px_0_0_var(--color-zinc-200)]">
                <div
                    className={cx(
                        `flex flex-col lg:flex-row items-center gap-8 p-6`,
                        reverse && 'lg:flex-row-reverse'
                    )}
                >
                    <img
                        className="w-125 border-2 border-black dark:border-zinc-200"
                        src={imageSrc}
                        alt={imageAlt}
                    />
                    <div className={cx(`text-center lg:text-left flex-1`)}>
                        <Heading as="h2" className="text-3xl md:text-4xl">
                            {title}
                        </Heading>
                        <p className="mb-8 text-zinc-700 dark:text-zinc-300">
                            {description}
                        </p>
                        <span className={buttonVariants({ variant: 'outline' })}>
                            {cta}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

function CompactWorkCard({
    title,
    description,
    url,
    imageSrc,
    imageAlt
}: Omit<WorkDisplayProps, 'cta' | 'reverse'>) {
    return (
        <Link to={url} className="group">
            <div className="overflow-hidden border-2 border-black dark:border-zinc-200 transition-shadow duration-150 group-hover:shadow-[6px_6px_0_0_var(--color-black)] dark:group-hover:shadow-[6px_6px_0_0_var(--color-zinc-200)] h-full flex flex-col">
                {imageSrc && (
                    <div className="aspect-video overflow-hidden border-b-2 border-black dark:border-zinc-200">
                        <img
                            className="w-full h-full object-cover"
                            src={imageSrc}
                            alt={imageAlt}
                        />
                    </div>
                )}
                <div className="p-5 flex flex-col flex-1">
                    <Heading as="h3" size="4" className="mb-2">
                        {title}
                    </Heading>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    );
}

const FEATURED_COUNT = 3;

export default function WorkRoute({ loaderData }: Route.ComponentProps) {
    const featured = loaderData.works.slice(0, FEATURED_COUNT);
    const rest = loaderData.works.slice(FEATURED_COUNT);

    return (
        <>
            <div className="flex items-baseline justify-between border-b-2 border-black dark:border-zinc-200 pb-3 mb-10">
                <Heading as="h1" className="mb-0">
                    Work
                </Heading>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-600 dark:text-zinc-400">
                    Selected projects
                </span>
            </div>
            <div className="grid grid-cols-1 gap-8 items-stretch mb-12">
                {featured.map(function (item, index) {
                    return (
                        <ContentSection key={item.id}>
                            <FeaturedWorkDisplay
                                title={item.title || ''}
                                description={item.description || ''}
                                cta={item.cta || 'View project'}
                                imageSrc={item.thumbnailImage || ''}
                                imageAlt={item.title || 'Project thumbnail'}
                                url={`/work/${item.slug}`}
                                reverse={index % 2 !== 0}
                            />
                        </ContentSection>
                    );
                })}
            </div>
            {rest.length > 0 && (
                <>
                    <div className="border-b-2 border-black dark:border-zinc-200 pb-3 mb-8">
                        <Heading as="h2" size="3" className="mb-0">
                            More projects
                        </Heading>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {rest.map(function (item) {
                            return (
                                <CompactWorkCard
                                    key={item.id}
                                    title={item.title || ''}
                                    description={item.description || ''}
                                    imageSrc={item.thumbnailImage || ''}
                                    imageAlt={
                                        item.title || 'Project thumbnail'
                                    }
                                    url={`/work/${item.slug}`}
                                />
                            );
                        })}
                    </div>
                </>
            )}
        </>
    );
}
