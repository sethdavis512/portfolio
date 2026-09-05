import { cx } from '~/cva.config';
import type { Testimonial as TestimonialData } from '~/content/types';

interface TestimonialProps {
    testimonial: TestimonialData;
    className?: string;
}

export function Testimonial({ testimonial, className }: TestimonialProps) {
    return (
        <figure
            className={cx(
                'rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8',
                'dark:border-zinc-800 dark:bg-zinc-900',
                className
            )}
        >
            <span
                aria-hidden="true"
                className="block select-none text-6xl leading-[0.7] font-black text-primary-500/25 sm:text-7xl dark:text-primary-400/25"
            >
                &ldquo;
            </span>
            <blockquote className="mt-3 text-lg leading-relaxed text-zinc-700 sm:text-xl dark:text-zinc-200">
                {testimonial.quote}
            </blockquote>
            <figcaption className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="h-px w-8 bg-primary-500 dark:bg-primary-400" />
                <span className="text-sm font-semibold tracking-wide text-zinc-900 uppercase dark:text-white">
                    {testimonial.author}
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {testimonial.role}
                </span>
            </figcaption>
        </figure>
    );
}
