import { Button } from '~/components/Button';
import { ContentStyles } from '~/constants';
import { data, useFetcher } from 'react-router';
import { generateRouteMeta } from '~/utils/seo';
import { Heading } from '~/components/Heading';
import { getPortfolioBase } from '~/airtable';
import type { Route } from './+types/freelance';
import { Linky } from '~/components/Linky';
import { Banner } from '~/components/Banner';
import { LoaderIcon, TriangleAlert } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Freelance',
        descriptionContent:
            'Available for freelance frontend development work. Experienced React and TypeScript developer ready to help with your web project.',
        ogUrl: 'https://sethdavis.tech/freelance'
    });
}

export async function action({ request }: Route.ActionArgs) {
    const formData = await request.formData();
    const firstName = String(formData.get('firstName'));
    const lastName = String(formData.get('lastName'));
    const email = String(formData.get('email'));
    const note = String(formData.get('note'));

    try {
        const response = await getPortfolioBase()('Customers').create([
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

export default function FreelanceRoute() {
    const fetcher = useFetcher();
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (fetcher.data && fetcher.data.success && formRef.current) {
            // Adjust 'success' based on your action's return value
            formRef.current.reset();
        }
    }, [fetcher.data]);

    return (
        <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
                <Heading as="h1" className="mb-8">
                    Freelance Services
                </Heading>

                <section className="mb-8 space-y-4">
                    <p>
                        Hi there! I'm Seth, a{' '}
                        {ContentStyles.FRONTEND.toLowerCase()} developer with a
                        passion for building clean, accessible web experiences.
                        After 9+ years working with companies like Indeed and
                        Gartner, I'm now available to help bring your project to
                        life.
                    </p>
                    <p>
                        I specialize in React, TypeScript, and modern web
                        technologies, but what I really love is solving problems
                        and making things work smoothly for users. Whether you
                        need a new feature, some help debugging, or a fresh set
                        of eyes on your codebase, I'd be happy to chat.
                    </p>
                </section>

                <section className="mb-8">
                    <Heading as="h2" size="4">
                        What I Can Help With
                    </Heading>
                    <ul className="ml-4 mt-4 list-outside list-disc space-y-2 pl-4">
                        <li>
                            Building responsive, accessible user interfaces with
                            React and TypeScript
                        </li>
                        <li>
                            Setting up full-stack applications with React Router
                            7, Prisma, and PostgreSQL
                        </li>
                        <li>
                            Improving accessibility and implementing design
                            systems
                        </li>
                        <li>
                            Adding AI features using Vercel AI SDK or OpenAI API
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <Heading as="h2" size="4">
                        My Approach
                    </Heading>
                    <p className="mt-4">
                        I believe good development is about clear communication,
                        thoughtful solutions, and writing code that others can
                        understand and maintain. I'll work with you to
                        understand your needs, suggest practical solutions, and
                        deliver quality work on time.
                    </p>
                </section>

                <section className="mb-12">
                    <Heading as="h2" size="4">
                        Let's Work Together
                    </Heading>
                    <p className="mb-6 mt-4">
                        If you have a project in mind or just want to discuss
                        possibilities, I'd love to hear from you. No commitment
                        required—just drop me a line and we'll figure out if I'm
                        a good fit for what you need.
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
                        <Linky
                            external
                            to="https://tidycal.com/sethdavis512/meet-and-greet"
                        >
                            See calendar availability
                        </Linky>
                        <hr className="my-6 border-zinc-500" />
                    </p>
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
                        <Heading as="h2" size="4">
                            Make a request
                        </Heading>
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
    );
}
