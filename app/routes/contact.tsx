import { Mail } from 'lucide-react';

import { Heading } from '~/components/Heading';
import { Linky } from '~/components/Linky';
import { CodepenLogo } from '~/components/logos/CodepenLogo';
import { GitHubLogo } from '~/components/logos/GitHubLogo';
import { LinkedInLogo } from '~/components/logos/LinkedInLogo';
import { XLogo } from '~/components/logos/XLogo';
import { CONTACT_EMAIL } from '~/constants';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Contact',
        descriptionContent:
            'Get in touch with Seth Davis. Email directly about a role or a collaboration.',
        ogUrl: 'https://sethdavis.tech/contact'
    });
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
    return (
        <article className="max-w-3xl mx-auto space-y-12">
            <section>
                <Heading as="h1" className="mb-4">
                    Get in touch
                </Heading>
                <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8">
                    Hiring, or just want to compare notes? Email is the
                    fastest way to reach me, or find me on any of the
                    socials below.
                </p>
                <div>
                    <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-primary-400 hover:bg-primary-300 text-black px-4 py-3 text-sm font-medium shadow-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ring-offset-white dark:focus-visible:ring-primary-400 dark:ring-offset-zinc-950"
                    >
                        <Mail className="size-5" />
                        {CONTACT_EMAIL}
                    </a>
                </div>
                <div className="mt-8 flex items-center gap-6">
                    {socials.map(({ href, label, Logo }) => (
                        <Linky key={href} href={href} aria-label={label}>
                            <Logo className="w-7 h-7" />
                        </Linky>
                    ))}
                </div>
            </section>
        </article>
    );
}
