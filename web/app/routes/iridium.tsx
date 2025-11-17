import {
    ArrowRight,
    LoaderIcon,
    LoaderPinwheelIcon,
    TriangleAlert
} from 'lucide-react';
import { useEffect, useRef } from 'react';
import { data, useFetcher } from 'react-router';
import { getPortfolioBase } from '~/airtable';
import { Banner } from '~/components/Banner';
import { Button } from '~/components/Button';
import { HeroImage } from '~/components/HeroImage';
import { TechStackLogos } from '~/components/TechStackLogos';
import { generateRouteMeta } from '~/utils/seo';
import type { Route } from './+types/iridium';
import { Heading } from '~/components/Heading';
import { Card } from '~/components/Card';
import { Linky } from '~/components/Linky';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Iridium',
        descriptionContent:
            'Iridium is a production-ready SaaS boilerplate built with React Router 7, TypeScript, BetterAuth, Polar.sh, and PostgreSQL',
        ogUrl: 'https://sethdavis.tech/iridium'
    });
}

export async function action({ request }: Route.ActionArgs) {
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

export default function IridiumRoute() {
    const fetcher = useFetcher();
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (fetcher.data && fetcher.data.success && formRef.current) {
            // Adjust 'success' based on your action's return value
            formRef.current.reset();
        }
    }, [fetcher.data]);

    return (
        <>
            <HeroImage src="/iridium-hero.png" alt="Iridium" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4 min-w-0">
                    <Heading as="h1">Iridium</Heading>

                    <Heading as="h2" size="5">
                        Project Overview
                    </Heading>
                    <p className="break-words">
                        Iridium is a production-ready SaaS boilerplate that gets
                        you from idea to launch faster. Built on modern React
                        Router 7 with TypeScript, it includes authentication via
                        BetterAuth, subscription billing through Polar.sh, and
                        PostgreSQL. Prisma for your database, Vercel AI SDK for
                        integration with OpenAI (or LLM of your choice),
                        analytics with PostHog, and a beautiful DaisyUI
                        component library mean you can focus on building your
                        unique features instead of reinventing the wheel.
                        Whether you're a solo founder or a development team,
                        Iridium provides the solid foundation you need to ship
                        faster.
                    </p>
                    <Heading as="h2" size="5">
                        Knowledge Gained
                    </Heading>
                    <p className="break-words">
                        Gained deep expertise in integrating modern
                        authentication systems, implementing subscription-based
                        billing models, and structuring a production-grade SaaS
                        application. Learned best practices for combining
                        multiple third-party services into a cohesive stack,
                        managing environment configurations securely, and
                        creating reusable boilerplate architecture that
                        accelerates future projects.
                    </p>
                    <Heading as="h2" size="5">
                        The Impact
                    </Heading>
                    <p className="break-words">
                        Enables developers to launch SaaS products weeks faster
                        by eliminating the need to build and integrate
                        foundational features from scratch. Reduces
                        time-to-market significantly, allowing teams to focus on
                        unique product features and business value rather than
                        authentication flows, payment integration, and database
                        setup. Provides a solid foundation that minimizes
                        technical debt and security vulnerabilities.
                    </p>
                </div>
                <div className="md:col-span-1 space-y-4 min-w-0">
                    <Linky
                        external
                        to="https://iridium.sethdavis.tech/"
                        className="w-full"
                    >
                        <Banner className="flex items-center mb-4 w-full bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                            <LoaderPinwheelIcon className="inline-block mr-2 text-white" />
                            <span className="text-white">See the progress</span>
                            <ArrowRight className="inline-block ml-1 text-white" />
                        </Banner>
                    </Linky>
                    <Heading as="h4" size="5" className="font-bold">
                        Tech Stack
                    </Heading>
                    <Card className="flex flex-wrap gap-3">
                        <TechStackLogos
                            logos={[
                                'typescript',
                                'react',
                                'react-router',
                                'tailwind',
                                'daisy',
                                'postgres',
                                'better-auth',
                                'polar',
                                'prisma',
                                'railway',
                                'cloudinary',
                                'vibe'
                            ]}
                        />
                    </Card>
                    <section className="rounded-lg bg-zinc-800 p-8 space-y-4">
                        <Heading as="h2" size="4">
                            Hear more about the project
                        </Heading>
                        <fetcher.Form
                            method="POST"
                            className="space-y-4"
                            ref={formRef}
                        >
                            {fetcher.data?.success ? (
                                <Banner>Request sent successfully!</Banner>
                            ) : fetcher.data?.error ? (
                                <div className="bg-amber-500 p-4 rounded">
                                    <div className="mb-2">
                                        <TriangleAlert />
                                    </div>
                                    <p>
                                        There was an error sending your request.{' '}
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
                                <label
                                    htmlFor="email"
                                    className="block mb-2 font-medium"
                                >
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
                                <label
                                    htmlFor="note"
                                    className="block mb-2 font-medium"
                                >
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
                </div>
            </div>
        </>
    );
}
