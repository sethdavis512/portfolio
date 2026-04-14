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
        sidebarType: w.frontmatter.sidebarType,
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
        <Link to={url}>
            <div className="hover:scale-[101%] transition-all duration-200 hover:bg-zinc-100 hover:dark:bg-zinc-900 rounded-lg h-full">
                <div
                    className={cx(
                        `flex flex-col lg:flex-row items-center gap-8 p-6`,
                        reverse && 'lg:flex-row-reverse'
                    )}
                >
                    <img className="w-125" src={imageSrc} alt={imageAlt} />
                    <div className={cx(`text-center lg:text-left flex-1`)}>
                        <Heading as="h2" className="text-3xl font-bold">
                            {title}
                        </Heading>
                        <p className="mb-8">{description}</p>
                        <span className={buttonVariants()}>{cta}</span>
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
            <div className="rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors duration-200 h-full flex flex-col">
                {imageSrc && (
                    <div className="aspect-video overflow-hidden">
                        <img
                            className="w-full h-full object-cover group-hover:scale-[103%] transition-transform duration-300"
                            src={imageSrc}
                            alt={imageAlt}
                        />
                    </div>
                )}
                <div className="p-5 flex flex-col flex-1">
                    <Heading as="h3" size="4" className="mb-2">
                        {title}
                    </Heading>
                    <p className="text-sm text-zinc-400 line-clamp-2">
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
            <Heading as="h1">Work</Heading>
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
                    <Heading as="h2" size="3" className="mb-6">
                        More projects
                    </Heading>
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
