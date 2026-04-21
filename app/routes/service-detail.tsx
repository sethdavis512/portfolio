import { data } from 'react-router';
import type { Route } from './+types/service-detail';

import { ServiceLanding } from '~/components/ServiceLanding';
import { getPortfolioBase } from '~/airtable';
import { getServiceOfferBySlug } from '~/content/data/service-offers';
import { getWorkBySlug } from '~/content';
import { generateRouteMeta } from '~/utils/seo';
import { validateContactForm } from '~/schemas/contact';

export function meta({ data: loaderData }: Route.MetaArgs) {
    if (!loaderData) {
        return generateRouteMeta({
            pageTitle: 'Service',
            descriptionContent: 'Service offering by Seth Davis.',
            ogUrl: 'https://sethdavis.tech/services'
        });
    }

    return generateRouteMeta({
        pageTitle: loaderData.offer.shortTitle,
        descriptionContent: loaderData.offer.seoDescription,
        ogUrl: `https://sethdavis.tech/services/${loaderData.offer.slug}`
    });
}

export function loader({ params }: Route.LoaderArgs) {
    const offer = getServiceOfferBySlug(params.slug!);

    if (!offer) {
        throw new Response('Not Found', { status: 404 });
    }

    const caseStudies = offer.caseStudies
        .map((slug) => {
            const work = getWorkBySlug(slug);
            if (!work) return null;
            return {
                slug: work.frontmatter.slug,
                title: work.frontmatter.title,
                description: work.frontmatter.description,
                thumbnailImage: work.frontmatter.thumbnailImage
            };
        })
        .filter((item): item is NonNullable<typeof item> => item !== null);

    return { offer, caseStudies };
}

export async function action({ request }: Route.ActionArgs) {
    const formData = await request.formData();
    const validation = validateContactForm(formData);

    if (!validation.success) {
        return data({ fieldErrors: validation.fieldErrors }, { status: 400 });
    }

    try {
        const response = await getPortfolioBase()('Customers').create([
            {
                fields: {
                    'First name': validation.data.firstName,
                    'Last name': validation.data.lastName,
                    Email: validation.data.email,
                    Note: validation.data.note || '',
                    Offer: validation.data.offer || ''
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

export default function ServiceDetailRoute({
    loaderData
}: Route.ComponentProps) {
    return (
        <ServiceLanding
            offer={loaderData.offer}
            caseStudies={loaderData.caseStudies}
        />
    );
}
