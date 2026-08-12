import { ArrowRight, CheckCircle2, LoaderIcon } from 'lucide-react';
import { Link, useFetcher } from 'react-router';
import { useEffect, useRef } from 'react';

import { Button } from './Button';
import { FormAlert } from './FormAlert';
import { FormField } from './FormField';
import { Heading } from './Heading';
import { Linky } from './Linky';
import type { ContactFieldErrors } from '~/schemas/contact';
import type { ServiceOffer } from '~/content/data/service-offers';
import type { WorkFrontmatter } from '~/content/types';
import { cx } from '~/cva.config';

const SCOPE_CALL_URL = 'https://tidycal.com/sethdavis512/meet-and-greet';

const BUDGET_OPTIONS = [
    { value: 'Under $5k', label: 'Under $5k' },
    { value: '$5k to $15k', label: '$5k to $15k' },
    { value: '$15k to $50k', label: '$15k to $50k' },
    { value: '$50k+', label: '$50k+' },
    { value: 'Not sure yet', label: 'Not sure yet' }
];

const TIMELINE_OPTIONS = [
    { value: 'As soon as possible', label: 'As soon as possible' },
    { value: 'Within a month', label: 'Within a month' },
    { value: 'This quarter', label: 'This quarter' },
    { value: 'Exploring', label: 'Just exploring' }
];

interface ServiceLandingProps {
    offer: ServiceOffer;
    caseStudies: Array<Pick<WorkFrontmatter, 'slug' | 'title' | 'description' | 'thumbnailImage'>>;
}

interface ServiceActionData {
    success?: boolean;
    error?: string;
    fieldErrors?: ContactFieldErrors;
}

export function ServiceLanding({ offer, caseStudies }: ServiceLandingProps) {
    const fetcher = useFetcher<ServiceActionData>();
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (fetcher.data?.success && formRef.current) {
            formRef.current.reset();
        }
    }, [fetcher.data]);

    const kindLabel =
        offer.kind === 'retainer' ? 'Ongoing retainer' : 'Project engagement';

    return (
        <article className="space-y-16">
            <section className="pt-4">
                <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400 hover:text-primary-700 dark:hover:text-primary-300 px-2 py-1 mb-6"
                >
                    <ArrowRight className="size-4 rotate-180" />
                    All services
                </Link>
                <p className="text-xs font-medium tracking-wide text-primary-700 dark:text-primary-300 mb-4">
                    {kindLabel}
                </p>
                <Heading as="h1" className="text-4xl md:text-6xl mb-6">
                    {offer.title}
                </Heading>
                <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-3xl mb-4">
                    {offer.tagline}
                </p>
                {offer.proofLine && (
                    <p className="text-sm text-zinc-500 mb-8 max-w-3xl">
                        {offer.proofLine}
                    </p>
                )}
                <div className="flex flex-wrap gap-3">
                    <Button
                        href={SCOPE_CALL_URL}
                        size="lg"
                        iconAfter={<ArrowRight className="size-4" />}
                    >
                        Book a scope call
                    </Button>
                    <Button to="#inquiry" size="lg" variant="outline">
                        Send an inquiry
                    </Button>
                </div>
            </section>

            <section>
                <Heading as="h2" size="3" className="mb-6">
                    Who this is for
                </Heading>
                <ul className="grid gap-3 md:grid-cols-2">
                    {offer.idealFor.map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4"
                        >
                            <CheckCircle2 className="size-5 text-primary-600 dark:text-primary-400 mt-0.5 shrink-0" />
                            <span className="text-zinc-700 dark:text-zinc-300">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <Heading as="h2" size="3" className="mb-6">
                    What you get
                </Heading>
                <ul className="grid gap-3 md:grid-cols-2">
                    {offer.deliverables.map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4"
                        >
                            <span className="size-1.5 rounded-full bg-tertiary-500 dark:bg-tertiary-400 mt-2.5 shrink-0" />
                            <span className="text-zinc-700 dark:text-zinc-300">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <Heading as="h2" size="3" className="mb-6">
                    {offer.scopeHeading ?? 'What an engagement looks like'}
                </Heading>
                <div className="grid gap-4 md:grid-cols-3">
                    {offer.scopeExamples.map((example) => (
                        <div
                            key={example.name}
                            className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6"
                        >
                            <Heading
                                as="h3"
                                size="5"
                                className="mb-2 text-primary-700 dark:text-primary-300"
                            >
                                {example.name}
                            </Heading>
                            <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                                {example.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <Heading as="h2" size="3" className="mb-6">
                    {offer.processHeading ?? 'How it works'}
                </Heading>
                <ol className="space-y-4">
                    {offer.process.map((step, index) => (
                        <li
                            key={step.step}
                            className="flex gap-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5"
                        >
                            <span className="font-display font-bold text-3xl text-primary-500/70 leading-none shrink-0 w-10">
                                0{index + 1}
                            </span>
                            <div>
                                <Heading as="h3" size="5" className="mb-1">
                                    {step.step}
                                </Heading>
                                <p className="text-zinc-600 dark:text-zinc-300">
                                    {step.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>

            {caseStudies.length > 0 && (
                <section>
                    <Heading as="h2" size="3" className="mb-6">
                        Proof
                    </Heading>
                    <div
                        className={cx(
                            'grid gap-5',
                            caseStudies.length === 1
                                ? 'md:grid-cols-1'
                                : 'md:grid-cols-2'
                        )}
                    >
                        {caseStudies.map((work) => (
                            <Link
                                key={work.slug}
                                to={`/work/${work.slug}`}
                                className="group overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-colors duration-200 hover:border-primary-500/60 flex flex-col"
                            >
                                {work.thumbnailImage && (
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            className="w-full h-full object-cover group-hover:scale-[103%] transition-transform duration-300"
                                            src={work.thumbnailImage}
                                            alt={work.title}
                                        />
                                    </div>
                                )}
                                <div className="p-5 flex flex-col flex-1">
                                    <Heading as="h3" size="4" className="mb-2">
                                        {work.title}
                                    </Heading>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-3">
                                        {work.description}
                                    </p>
                                    <span className="text-sm text-primary-700 dark:text-primary-300 mt-auto inline-flex items-center gap-1">
                                        Read the case study
                                        <ArrowRight className="size-3.5" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            <section>
                <Heading as="h2" size="3" className="mb-6">
                    Common questions
                </Heading>
                <div className="space-y-3">
                    {offer.faq.map((item) => (
                        <details
                            key={item.question}
                            className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 open:border-primary-500/60"
                        >
                            <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                                    {item.question}
                                </span>
                                <ArrowRight className="size-4 shrink-0 mt-1 text-zinc-500 transition-transform duration-200 group-open:rotate-90" />
                            </summary>
                            <p className="mt-3 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                {item.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </section>

            <section
                id="inquiry"
                className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 p-8 md:p-10"
            >
                <div className="max-w-xl">
                    <Heading as="h2" size="3" className="mb-3">
                        Start the conversation
                    </Heading>
                    <p className="text-zinc-600 dark:text-zinc-300 mb-6">
                        The fastest path is a{' '}
                        <Linky href={SCOPE_CALL_URL}>
                            free 30-minute scope call
                        </Linky>
                        . Prefer to write it out? Use the form and I'll reply
                        within one business day.
                    </p>
                </div>
                <fetcher.Form
                    method="POST"
                    className="space-y-4 max-w-xl"
                    ref={formRef}
                >
                    <input type="hidden" name="offer" value={offer.slug} />
                    {fetcher.data?.success ? (
                        <FormAlert variant="success">
                            Thanks. Your inquiry is in. I'll be in touch within
                            one business day.
                        </FormAlert>
                    ) : fetcher.data?.error ? (
                        <FormAlert variant="error">
                            There was an error sending your inquiry.
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
                        label="Company (optional)"
                        name="company"
                        placeholder="Where you work"
                        error={fetcher.data?.fieldErrors?.company}
                    />
                    <div className="grid gap-4 md:grid-cols-2">
                        <FormField
                            label="Budget range"
                            name="budget"
                            as="select"
                            placeholder="Select a range"
                            options={BUDGET_OPTIONS}
                            error={fetcher.data?.fieldErrors?.budget}
                        />
                        <FormField
                            label="Timeline"
                            name="timeline"
                            as="select"
                            placeholder="Select a timeline"
                            options={TIMELINE_OPTIONS}
                            error={fetcher.data?.fieldErrors?.timeline}
                        />
                    </div>
                    <FormField
                        label="What are you looking to build?"
                        name="note"
                        as="textarea"
                        rows={5}
                        placeholder="The project, the team, the context. A few sentences is plenty."
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
                    >
                        {fetcher.state !== 'idle' ? 'Sending...' : 'Send inquiry'}
                    </Button>
                </fetcher.Form>
            </section>
        </article>
    );
}
