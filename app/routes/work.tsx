import { cx } from '~/cva.config';
import { Link } from 'react-router';
import { Button } from '~/components/Button';
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

function WorkDisplay({
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
            <div className="hover:scale-[102%] transition-all duration-200 hover:bg-zinc-100 hover:dark:bg-zinc-900 rounded-lg h-full">
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
                        <Button>{cta}</Button>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default function WorkRoute({ loaderData }: Route.ComponentProps) {
    return (
        <>
            <Heading as="h1">Work</Heading>
            <div className="grid grid-cols-1 gap-8 items-stretch">
                {loaderData.works.map(function (item, index) {
                    return (
                        <ContentSection key={item.id}>
                            <WorkDisplay
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
        </>
    );
}
