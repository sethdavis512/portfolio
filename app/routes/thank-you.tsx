import { Card } from '~/components/Card';
import { Heading } from '~/components/Heading';
import { ButtonLink } from '~/components/ButtonLink';
import { Linky } from '~/components/Linky';
import { generateRouteMeta } from '~/utils/seo';
import { CheckCircle2, Mail, MessageCircle } from 'lucide-react';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Thank You',
        descriptionContent:
            'Thank you for your purchase! Your support means the world.',
        ogUrl: 'https://sethdavis.tech/thank-you'
    });
}

export default function ThankYouRoute() {
    return (
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <Heading as="h1" className="mb-4">
                    Thank You for Your Purchase!
                </Heading>
                <p className="text-xl text-zinc-600 dark:text-zinc-400">
                    Your support means everything
                </p>
            </div>

            <div className="space-y-6">
                <Card className="space-y-4">
                    <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mt-0.5 shrink-0" />
                        <div>
                            <Heading as="h2" size="4" className="mb-2">
                                Check Your Email
                            </Heading>
                            <p className="text-zinc-700 dark:text-zinc-300">
                                You should receive a confirmation email from
                                Polar within the next few minutes. This email
                                will contain your purchase details and download
                                links (if applicable).
                            </p>
                        </div>
                    </div>
                </Card>

                <Card className="space-y-4">
                    <div className="flex items-start gap-3">
                        <MessageCircle className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mt-0.5 shrink-0" />
                        <div>
                            <Heading as="h2" size="4" className="mb-2">
                                Need Help?
                            </Heading>
                            <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                                If you have any questions, run into issues, or
                                need assistance getting started, I'm here to
                                help.
                            </p>
                            <div className="space-y-2">
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                    Reach out via:{' '}
                                    <Linky
                                        external
                                        to="https://x.com/sethdavis512"
                                    >
                                        X (@sethdavis512)
                                    </Linky>
                                    {' or '}
                                    <Linky
                                        external
                                        to="https://www.linkedin.com/in/sethdavis512/"
                                    >
                                        LinkedIn
                                    </Linky>
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card className="bg-zinc-800 border border-zinc-700">
                    <div className="space-y-3">
                        <Heading as="h2" size="4">
                            What's Next?
                        </Heading>
                        <p className="text-zinc-300">
                            Explore more of my work, check out other projects,
                            or get in touch if you'd like to collaborate on
                            something new.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-2">
                            <ButtonLink to="/">Return Home</ButtonLink>
                            <ButtonLink to="/work">View My Work</ButtonLink>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="mt-12 text-center">
                <p className="text-sm text-zinc-600 dark:text-zinc-500">
                    Thanks again for your support. It helps me create more
                    resources and tools for the community. 🙏
                </p>
            </div>
        </div>
    );
}
