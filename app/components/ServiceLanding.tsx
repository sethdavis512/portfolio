import { ArrowRight, CheckCircle2, LoaderIcon, Tag } from 'lucide-react';
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

    return (
        <article className="space-y-16">
            <section className="pt-4">
                <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-primary-400 mb-6"
                >
                    <ArrowRight className="size-4 rotate-180" />
                    All services
                </Link>
                <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-500/15 text-primary-300 px-3 py-1 text-sm font-medium">
                        <Tag className="size-3.5" />
                        Starting at {offer.startingPrice}
                    </span>
                </div>
                <Heading as="h1" className="text-4xl md:text-6xl font-black mb-6">
                    {offer.title}
                </Heading>
                <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mb-8">
                    {offer.tagline}
                </p>
                <div className="flex flex-wrap gap-3">
                    <Button
                        to={`#start`}
                        size="lg"
                        iconAfter={<ArrowRight className="size-4" />}
                    >
                        Start a project
                    </Button>
                    <Button
                        href="https://tidycal.com/sethdavis512/meet-and-greet"
                        size="lg"
                        variant="outline"
                    >
                        Book a scope call
                    </Button>
                </div>
                {offer.proofLine && (
                    <p className="mt-6 text-sm text-zinc-500">{offer.proofLine}</p>
                )}
            </section>

            <section>
                <Heading as="h2" size="3" className="mb-6">
                    Ideal for
                </Heading>
                <ul className="grid gap-3 md:grid-cols-2">
                    {offer.idealFor.map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-3 rounded-lg bg-zinc-900 border border-zinc-800 p-4"
                        >
                            <CheckCircle2 className="size-5 text-primary-400 mt-0.5 shrink-0" />
                            <span className="text-zinc-200">{item}</span>
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
                            className="flex items-start gap-3 rounded-lg bg-zinc-900/60 border border-zinc-800 p-4"
                        >
                            <span className="size-1.5 rounded-full bg-tertiary-400 mt-2.5 shrink-0" />
                            <span className="text-zinc-200">{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <Heading as="h2" size="3" className="mb-6">
                    What an engagement looks like
                </Heading>
                <div className="grid gap-4 md:grid-cols-3">
                    {offer.scopeExamples.map((example) => (
                        <div
                            key={example.name}
                            className="rounded-lg bg-zinc-900 border border-zinc-800 p-6"
                        >
                            <Heading as="h3" size="5" className="mb-2 text-primary-300">
                                {example.name}
                            </Heading>
                            <p className="text-zinc-300 text-sm leading-relaxed">
                                {example.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <Heading as="h2" size="3" className="mb-6">
                    How it works
                </Heading>
                <ol className="space-y-4">
                    {offer.process.map((step, index) => (
                        <li
                            key={step.step}
                            className="flex gap-5 rounded-lg bg-zinc-900/60 border border-zinc-800 p-5"
                        >
                            <span className="font-black text-3xl text-primary-500/60 leading-none shrink-0 w-10">
                                0{index + 1}
                            </span>
                            <div>
                                <Heading as="h3" size="5" className="mb-1">
                                    {step.step}
                                </Heading>
                                <p className="text-zinc-300">{step.description}</p>
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
                                className="group rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-primary-500/40 transition-colors duration-200 flex flex-col"
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
                                    <p className="text-sm text-zinc-400 line-clamp-3 mb-3">
                                        {work.description}
                                    </p>
                                    <span className="text-sm text-primary-400 mt-auto inline-flex items-center gap-1">
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
                            className="group rounded-lg bg-zinc-900/60 border border-zinc-800 p-5 open:border-primary-500/40"
                        >
                            <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                                <span className="font-semibold text-zinc-100">
                                    {item.question}
                                </span>
                                <ArrowRight className="size-4 shrink-0 mt-1 text-zinc-500 transition-transform duration-200 group-open:rotate-90" />
                            </summary>
                            <p className="mt-3 text-zinc-300 leading-relaxed">
                                {item.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </section>

            <section
                id="start"
                className="rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-primary-950/40 border border-zinc-800 p-8 md:p-10"
            >
                <div className="max-w-xl">
                    <Heading as="h2" size="3" className="mb-3">
                        Start a project
                    </Heading>
                    <p className="text-zinc-300 mb-6">
                        Tell me about what you're building. I'll reply within
                        one business day with questions and whether this is a
                        good fit. Prefer to talk?{' '}
                        <Linky href="https://tidycal.com/sethdavis512/meet-and-greet">
                            Book a 30-minute scope call
                        </Linky>
                        .
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
                            Thanks. Your request is in. I'll be in touch within one business day.
                        </FormAlert>
                    ) : fetcher.data?.error ? (
                        <FormAlert variant="error">
                            There was an error sending your request.
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
                        label={`Tell me about your ${offer.shortTitle.toLowerCase()} project`}
                        name="note"
                        as="textarea"
                        rows={5}
                        placeholder="What are you trying to build? What's the context?"
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
                        {fetcher.state !== 'idle' ? 'Sending...' : 'Send request'}
                    </Button>
                </fetcher.Form>
            </section>
        </article>
    );
}
