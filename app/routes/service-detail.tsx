import { data, redirect } from 'react-router';
import type { Route } from './+types/service-detail';

import { ServiceLanding } from '~/components/ServiceLanding';
import { getPortfolioBase } from '~/airtable';
import {
    getServiceOfferBySlug,
    LEGACY_SERVICE_REDIRECTS
} from '~/content/data/service-offers';
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

    return [
        ...generateRouteMeta({
            pageTitle: loaderData.offer.shortTitle,
            descriptionContent: loaderData.offer.seoDescription,
            ogUrl: `https://sethdavis.tech/services/${loaderData.offer.slug}`
        }),
        {
            'script:ld+json': {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: loaderData.offer.faq.map((item) => ({
                    '@type': 'Question',
                    name: item.question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: item.answer
                    }
                }))
            }
        }
    ];
}

export function loader({ params }: Route.LoaderArgs) {
    const legacyTarget = LEGACY_SERVICE_REDIRECTS[params.slug!];
    if (legacyTarget) {
        throw redirect(legacyTarget, 301);
    }

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

    // The Airtable "Customers" table only has First name/Last name/Email/Note,
    // so the qualifying fields are folded into Note as labeled lines.
    const { offer, company, budget, timeline, note: message } = validation.data;
    const noteLines = [
        offer && `Service: ${offer}`,
        company && `Company: ${company}`,
        budget && `Budget: ${budget}`,
        timeline && `Timeline: ${timeline}`
    ].filter(Boolean);
    const note =
        [noteLines.join('\n'), message?.trim()].filter(Boolean).join('\n\n') ||
        '[Service inquiry]';

    try {
        const response = await getPortfolioBase()('Customers').create([
            {
                fields: {
                    'First name': validation.data.firstName,
                    'Last name': validation.data.lastName,
                    Email: validation.data.email,
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
