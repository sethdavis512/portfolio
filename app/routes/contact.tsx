import { ArrowRight, LoaderIcon, Mail } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { data, useFetcher } from 'react-router';

import { Button } from '~/components/Button';
import { FormAlert } from '~/components/FormAlert';
import { FormField } from '~/components/FormField';
import { Heading } from '~/components/Heading';
import { Linky } from '~/components/Linky';
import { CodepenLogo } from '~/components/logos/CodepenLogo';
import { GitHubLogo } from '~/components/logos/GitHubLogo';
import { LinkedInLogo } from '~/components/logos/LinkedInLogo';
import { XLogo } from '~/components/logos/XLogo';
import { CONTACT_EMAIL } from '~/constants';
import { getPortfolioBase } from '~/airtable';
import { validateContactForm } from '~/schemas/contact';
import { generateRouteMeta } from '~/utils/seo';
import type { ContactFieldErrors } from '~/schemas/contact';
import type { Route } from './+types/contact';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Contact',
        descriptionContent:
            'Get in touch with Seth Davis. Email directly, book a call, or send a message about a role, project, or collaboration.',
        ogUrl: 'https://sethdavis.tech/contact'
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
                    Note: validation.data.note || '',
                    Offer: validation.data.offer || 'general-contact'
                }
            }
        ]);

        if (!response || response.length === 0) {
            throw new Error('No record created in Airtable');
        }

        return data({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Error saving contact message:', error);

        return data(
            {
                error: 'There was an error sending your message. Please try again later.'
            },
            { status: 500 }
        );
    }
}

interface ContactActionData {
    success?: boolean;
    error?: string;
    fieldErrors?: ContactFieldErrors;
}

const socials = [
    { href: 'https://github.com/sethdavis512', label: 'GitHub', Logo: GitHubLogo },
    {
        href: 'https://www.linkedin.com/in/sethdavis512/',
        label: 'LinkedIn',
        Logo: LinkedInLogo
    },
    { href: 'https://www.x.com/sethdavis512/', label: 'X (Twitter)', Logo: XLogo },
    {
        href: 'https://www.codepen.io/sethdavis512/',
        label: 'CodePen',
        Logo: CodepenLogo
    }
];

export default function ContactRoute() {
    const fetcher = useFetcher<ContactActionData>();
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (fetcher.data?.success && formRef.current) {
            formRef.current.reset();
        }
    }, [fetcher.data]);

    return (
        <article className="max-w-3xl mx-auto space-y-12">
            <section>
                <Heading as="h1" className="mb-4">
                    Get in touch
                </Heading>
                <p className="text-lg text-zinc-300 mb-8">
                    Hiring, a project, or just want to compare notes? The fastest
                    way to reach me is email. Prefer a form? There's one below and
                    it lands straight in my inbox.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-primary-500/15 hover:bg-primary-500/25 text-primary-300 hover:text-primary-200 transition-colors duration-200 px-4 py-3 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                    >
                        <Mail className="size-5" />
                        {CONTACT_EMAIL}
                    </a>
                    <Linky href="https://tidycal.com/sethdavis512/meet-and-greet">
                        Or book a 30-minute call
                    </Linky>
                </div>
                <div className="mt-8 flex items-center gap-6">
                    {socials.map(({ href, label, Logo }) => (
                        <Linky key={href} href={href} aria-label={label}>
                            <Logo className="w-7 h-7" />
                        </Linky>
                    ))}
                </div>
            </section>

            <section
                id="message"
                className="rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-primary-950/40 border border-zinc-800 p-8 md:p-10"
            >
                <div className="max-w-xl mb-6">
                    <Heading as="h2" size="3" className="mb-3">
                        Send a message
                    </Heading>
                    <p className="text-zinc-300">
                        Tell me a bit about what you have in mind. I read every
                        message and reply within one business day.
                    </p>
                </div>
                <fetcher.Form
                    method="POST"
                    className="space-y-4 max-w-xl"
                    ref={formRef}
                >
                    <input
                        type="hidden"
                        name="offer"
                        value="general-contact"
                    />
                    {fetcher.data?.success ? (
                        <FormAlert variant="success">
                            Thanks for reaching out. Your message is in. I'll be
                            in touch within one business day.
                        </FormAlert>
                    ) : fetcher.data?.error ? (
                        <FormAlert variant="error">
                            There was an error sending your message.
                            <br />
                            Please try again later.
                        </FormAlert>
                    ) : null}
                    <div className="grid gap-4 md:grid-cols-2">
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
                    </div>
                    <FormField
                        label="Email address"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        error={fetcher.data?.fieldErrors?.email}
                    />
                    <FormField
                        label="What's on your mind?"
                        name="note"
                        as="textarea"
                        required
                        rows={5}
                        placeholder="A role, a project, an idea, a question..."
                        error={fetcher.data?.fieldErrors?.note}
                    />
                    <Button
                        type="submit"
                        size="lg"
                        disabled={fetcher.state !== 'idle'}
                        iconBefore={
                            fetcher.state !== 'idle' ? (
                                <LoaderIcon className="animate-spin size-4" />
                            ) : undefined
                        }
                        iconAfter={
                            fetcher.state === 'idle' ? (
                                <ArrowRight className="size-4" />
                            ) : undefined
                        }
                    >
                        {fetcher.state !== 'idle' ? 'Sending...' : 'Send message'}
                    </Button>
                </fetcher.Form>
            </section>
        </article>
    );
}
