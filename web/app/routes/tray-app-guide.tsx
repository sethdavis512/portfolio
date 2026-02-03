import { ShoppingCart } from 'lucide-react';
import { Button } from '~/components/Button';
import { Card } from '~/components/Card';
import { FreelanceCallToAction } from '~/components/FreelanceCallToAction';
import { Heading } from '~/components/Heading';
import { Linky } from '~/components/Linky';
import { TechStackLogos } from '~/components/TechStackLogos';
import { PRODUCT_LINKS } from '~/constants';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Tray App Guide - Getting Started',
        descriptionContent:
            'An introductory guide to building Tray apps. Learn the basics and get started quickly.',
        ogUrl: 'https://sethdavis.tech/tray-app-guide'
    });
}

export default function TrayAppGuideRoute() {
    return (
        <>
            <div className="space-y-6 mb-8">
                <figure className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 w-full">
                    <img
                        className="w-full h-auto object-cover"
                        src="/tray-app-guide-featured.webp"
                        alt="Tray App Guide cover"
                    />
                </figure>
                <Heading as="h1" size="1">
                    Tray App Guide
                </Heading>
                <p className="text-xl text-zinc-600 dark:text-zinc-300">
                    An introductory guide to building Electron based tray apps.
                    Learn the basics and get started quickly.
                </p>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-6 min-w-0">
                        <Heading as="h2" size="3">
                            What You'll Learn
                        </Heading>
                        <Card className="p-6">
                            <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary">•</span>
                                    <span>Setting up your first Tray app</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary">•</span>
                                    <span>
                                        Understanding core concepts and patterns
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary">•</span>
                                    <span>
                                        Building basic workflows and
                                        integrations
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary">•</span>
                                    <span>
                                        Practical examples to get you started
                                    </span>
                                </li>
                            </ul>
                        </Card>

                        <Heading as="h2" size="3" className="pt-4">
                            Who This Is For
                        </Heading>
                        <Card className="p-6">
                            <p className="text-zinc-700 dark:text-zinc-300">
                                This guide is for developers new to tray app
                                building who want a straightforward introduction
                                to building apps. No prior experience required.
                            </p>
                        </Card>

                        <Heading as="h2" size="3" className="pt-4">
                            See What's Possible
                        </Heading>
                        <Card className="p-6 bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800">
                            <div className="flex items-start gap-4">
                                <div className="flex-1">
                                    <Heading as="h3" size="5" className="mb-2">
                                        Built with the patterns in this guide
                                    </Heading>
                                    <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                                        <strong>Prompt Suite</strong> is a tray
                                        app I built using Electron. It lives in
                                        your system tray for instant AI prompt
                                        access—the same architecture patterns
                                        you'll learn in this guide.
                                    </p>
                                    <Linky to="/prompt-suite">
                                        <Button variant="outline" size="sm">
                                            View the project →
                                        </Button>
                                    </Linky>
                                </div>
                            </div>
                        </Card>

                        <FreelanceCallToAction className="mt-10" />
                    </div>

                    <div className="md:col-span-1 space-y-4 min-w-0">
                        <section className="rounded-lg bg-zinc-800 p-6 space-y-4 sticky top-4">
                            <Heading as="h2" size="4" className="text-white">
                                Get the Guide
                            </Heading>

                            <div className="space-y-3 text-zinc-300">
                                <div className="flex items-start gap-2">
                                    <span className="text-primary">✓</span>
                                    <span>Beginner-friendly introduction</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-primary">✓</span>
                                    <span>Practical examples</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-primary">✓</span>
                                    <span>Quick start guide</span>
                                </div>
                            </div>

                            <Linky
                                external
                                to={PRODUCT_LINKS.TRAY_APP_GUIDE}
                                className="w-full block"
                            >
                                <Button
                                    color="primary"
                                    iconBefore={<ShoppingCart />}
                                    className="w-full justify-center"
                                >
                                    Purchase Guide
                                </Button>
                            </Linky>

                            <div className="pt-4">
                                <p className="text-sm text-zinc-400 mb-3">
                                    Powered by
                                </p>
                                <TechStackLogos logos={['polar']} />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
