import { Button } from '~/components/Button';
import { data, useFetcher } from 'react-router';
import { generateRouteMeta } from '~/utils/seo';
import { Heading } from '~/components/Heading';
import { getPortfolioBase } from '~/airtable';
import type { Route } from './+types/services';
import { Linky } from '~/components/Linky';
import { FormAlert } from '~/components/FormAlert';
import { FormField } from '~/components/FormField';
import { LoaderIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { validateContactForm } from '~/schemas/contact';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Services',
        descriptionContent:
            'Frontend development, AI-powered tools, and technical consulting. React and TypeScript expertise from prototype to production.',
        ogUrl: 'https://sethdavis.tech/services'
    });
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
                    Note: validation.data.note || ''
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

export default function ServicesRoute() {
    const fetcher = useFetcher();
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (fetcher.data && fetcher.data.success && formRef.current) {
            formRef.current.reset();
        }
    }, [fetcher.data]);

    return (
        <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
                <Heading as="h1" className="mb-8">
                    Services
                </Heading>

                <section className="mb-8 space-y-4">
                    <p className="text-xl text-zinc-300">
                        I help founders and teams ship polished web applications
                        and AI-powered tools. From hands-on building to
                        technical strategy, I bring 9+ years of production
                        experience to your project.
                    </p>
                </section>

                <section className="mb-8">
                    <Heading as="h2" size="4">
                        AI-Powered Tools
                    </Heading>
                    <p className="mt-4">
                        Building intelligent features and integrations using
                        Vercel AI SDK, OpenAI, and Claude API. From chatbots and
                        content generation to custom AI workflows that solve
                        real problems.
                    </p>
                </section>

                <section className="mb-8">
                    <Heading as="h2" size="4">
                        Web Application Development
                    </Heading>
                    <p className="mt-4">
                        Full-stack React and TypeScript applications built with
                        React Router 7, Prisma, and PostgreSQL. Responsive,
                        accessible, and ready for production.
                    </p>
                </section>

                <section className="mb-8">
                    <Heading as="h2" size="4">
                        Technical Consulting
                    </Heading>
                    <p className="mt-4">
                        Code audits, architecture reviews, and technical
                        strategy sessions. A fresh set of eyes on your codebase
                        with actionable recommendations.
                    </p>
                </section>

                <section className="mb-12">
                    <Heading as="h2" size="4">
                        Let's Work Together
                    </Heading>
                    <p className="mb-6 mt-4">
                        If you have a project in mind or just want to discuss
                        possibilities, I'd love to hear from you. No commitment
                        required.
                    </p>
                </section>
            </div>
            <div>
                <section className="rounded-lg bg-zinc-800 p-8 space-y-4">
                    <Heading as="h2" size="4">
                        Schedule a call
                    </Heading>
                    <p>
                        Rather have a video chat?{' '}
                        <Linky href="https://tidycal.com/sethdavis512/meet-and-greet">
                            See calendar availability
                        </Linky>
                    </p>
                    <hr className="my-6 border-zinc-500" />
                    <fetcher.Form
                        method="POST"
                        className="space-y-4"
                        ref={formRef}
                    >
                        {fetcher.data?.success ? (
                            <FormAlert variant="success">
                                Request sent successfully!
                            </FormAlert>
                        ) : fetcher.data?.error ? (
                            <FormAlert variant="error">
                                There was an error sending your request.
                                <br />
                                Please try again later.
                            </FormAlert>
                        ) : null}
                        <Heading as="h2" size="4">
                            Make a request
                        </Heading>
                        <FormField
                            label="First name"
                            name="firstName"
                            required
                            placeholder="Your first name"
                            error={fetcher.data?.fieldErrors?.firstName}
                        />
                        <FormField
                            label="Last name"
                            name="lastName"
                            required
                            placeholder="Your last name"
                            error={fetcher.data?.fieldErrors?.lastName}
                        />
                        <FormField
                            label="Email Address"
                            name="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            error={fetcher.data?.fieldErrors?.email}
                        />
                        <FormField
                            label="Note"
                            name="note"
                            as="textarea"
                            rows={4}
                            placeholder="Tell me a bit about your project..."
                            error={fetcher.data?.fieldErrors?.note}
                        />
                        <Button
                            type="submit"
                            disabled={fetcher.state !== 'idle'}
                            iconBefore={
                                fetcher.state !== 'idle' ? (
                                    <LoaderIcon className="animate-spin" />
                                ) : undefined
                            }
                        >
                            {fetcher.state !== 'idle'
                                ? 'Sending...'
                                : 'Send request'}
                        </Button>
                    </fetcher.Form>
                </section>
            </div>
        </div>
    );
}
