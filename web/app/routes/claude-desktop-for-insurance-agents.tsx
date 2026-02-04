import { ShoppingCart, FileText, Library, FileCheck } from 'lucide-react';
import { Button } from '~/components/Button';
import { Card } from '~/components/Card';
import { FreelanceCallToAction } from '~/components/FreelanceCallToAction';
import { Heading } from '~/components/Heading';
import { Linky } from '~/components/Linky';
import { ResponsiveImage } from '~/components/ResponsiveImage';
import { TechStackLogos } from '~/components/TechStackLogos';
import { PRODUCT_LINKS } from '~/constants';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Claude Desktop for Insurance Agents - Complete Bundle',
        descriptionContent:
            '56-page guide with 12+ insurance workflows, prompt framework, and advanced techniques. Save 5-10+ hours weekly on quotes, renewals, claims, and client communication.',
        ogUrl: 'https://sethdavis.tech/claude-desktop-for-insurance-agents'
    });
}

export default function ClaudeInsuranceRoute() {
    return (
        <>
            <div className="space-y-6 mb-8">
                <Heading as="h1" size="1">
                    Claude Desktop for Insurance Agents
                </Heading>
                <figure className="rounded-xl w-full max-h-105 overflow-hidden border border-zinc-200 dark:border-zinc-800">
                    <ResponsiveImage
                        className="w-full h-auto max-h-105 object-cover"
                        src="/cover-insurance-cropped-840x840.webp"
                        alt="Claude Desktop for Insurance Agents January 2026 edition cover"
                        responsive
                        loading="eager"
                    />
                </figure>
                <p className="text-xl text-zinc-600 dark:text-zinc-300">
                    Stop spending hours on routine tasks. Get the complete
                    bundle to transform how you work with AI.
                </p>
                <p className="text-lg text-zinc-500 dark:text-zinc-400">
                    January 2026 Edition
                </p>
            </div>
            <div>
                <Heading as="h2" size="3">
                    What You Get
                </Heading>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-6 min-w-0">
                        <div className="grid grid-cols-1 gap-4">
                            <Card className="p-6 space-y-3">
                                <div className="flex items-start gap-3">
                                    <FileText className="w-8 h-8 text-primary shrink-0 mt-1" />
                                    <div>
                                        <Heading
                                            as="h3"
                                            size="5"
                                            className="mb-2"
                                        >
                                            Complete Guide (56 pages)
                                        </Heading>
                                        <p className="text-zinc-700 dark:text-zinc-300">
                                            Master Claude Desktop with
                                            step-by-step walkthroughs. Interface
                                            navigation, Projects feature, file
                                            uploads, and 12+ insurance use cases
                                            with proven workflows.
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 space-y-3">
                                <div className="flex items-start gap-3">
                                    <Library className="w-8 h-8 text-primary shrink-0 mt-1" />
                                    <div>
                                        <Heading
                                            as="h3"
                                            size="5"
                                            className="mb-2"
                                        >
                                            Prompt Framework + Templates
                                        </Heading>
                                        <p className="text-zinc-700 dark:text-zinc-300">
                                            Learn a repeatable prompt framework
                                            plus ready-to-use templates for
                                            renewals, claims updates, quote
                                            comparisons, and cross-sell
                                            outreach.
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 space-y-3">
                                <div className="flex items-start gap-3">
                                    <FileCheck className="w-8 h-8 text-primary shrink-0 mt-1" />
                                    <div>
                                        <Heading
                                            as="h3"
                                            size="5"
                                            className="mb-2"
                                        >
                                            Advanced Techniques +
                                            Troubleshooting
                                        </Heading>
                                        <p className="text-zinc-700 dark:text-zinc-300">
                                            Time-saving workflows, common
                                            mistakes to avoid, advanced
                                            chaining, and practical fixes to
                                            improve output quality.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <Heading as="h2" size="3" className="pt-4">
                            Who This Is For
                        </Heading>
                        <Card className="p-6">
                            <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>
                                        Insurance agents already using Claude
                                        Desktop who want to work smarter
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>
                                        Agents and CSRs looking to save hours
                                        per week on client communication
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>
                                        Independent agencies wanting consistent,
                                        professional policyholder messaging
                                    </span>
                                </li>
                            </ul>
                        </Card>

                        <Heading as="h2" size="3" className="pt-4">
                            Key Topics Covered
                        </Heading>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card className="p-4">
                                <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                                    <li>
                                        • Coverage comparisons and quote
                                        summaries
                                    </li>
                                    <li>
                                        • Renewal and policy review outreach
                                    </li>
                                    <li>
                                        • Claims status updates and next steps
                                    </li>
                                    <li>• Client onboarding checklists</li>
                                </ul>
                            </Card>
                            <Card className="p-4">
                                <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                                    <li>• Lead follow-up sequences</li>
                                    <li>• Cross-sell and upsell messaging</li>
                                    <li>
                                        • Documentation and call note cleanup
                                    </li>
                                    <li>• Compliance-friendly email drafts</li>
                                </ul>
                            </Card>
                        </div>

                        <Heading as="h2" size="3" className="pt-4">
                            The Value
                        </Heading>
                        <Card className="p-6 bg-linear-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 border-primary/30">
                            <ul className="space-y-4 text-zinc-700 dark:text-zinc-300">
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-primary text-xl">
                                        →
                                    </span>
                                    <span>
                                        <strong>Save hours every week</strong>{' '}
                                        on quote comparisons, renewal emails,
                                        and claims updates
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-primary text-xl">
                                        →
                                    </span>
                                    <span>
                                        <strong>
                                            Professional quality outputs
                                        </strong>{' '}
                                        that match your agency voice and
                                        expertise
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-primary text-xl">
                                        →
                                    </span>
                                    <span>
                                        <strong>
                                            Proven workflows and prompts
                                        </strong>{' '}
                                        tested by insurance teams
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-primary text-xl">
                                        →
                                    </span>
                                    <span>
                                        <strong>
                                            Immediate implementation
                                        </strong>{' '}
                                        with copy-paste templates you can use
                                        today
                                    </span>
                                </li>
                            </ul>
                        </Card>
                        <FreelanceCallToAction className="mt-10" />
                    </div>

                    <div className="md:col-span-1 space-y-4 min-w-0">
                        <section className="rounded-lg bg-zinc-800 p-6 space-y-4 sticky top-4">
                            <Heading as="h2" size="4" className="text-white">
                                Get the Complete Bundle
                            </Heading>

                            <div className="space-y-3 text-zinc-300">
                                <div className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>56-page Complete Guide</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>12+ Insurance Workflows</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>
                                        Prompt Framework + Advanced Techniques
                                    </span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>January 2026 Edition</span>
                                </div>
                            </div>

                            <Linky
                                external
                                to={PRODUCT_LINKS.CLAUDE_INSURANCE_BUNDLE}
                                className="w-full block"
                            >
                                <Button
                                    color="primary"
                                    iconBefore={<ShoppingCart />}
                                    className="w-full justify-center"
                                >
                                    Purchase Bundle
                                </Button>
                            </Linky>

                            <div className="pt-4">
                                <p className="text-sm text-zinc-400 mb-3">
                                    Powered by
                                </p>
                                <TechStackLogos logos={['polar']} />
                            </div>
                            <p className="text-sm text-zinc-700 dark:text-zinc-300">
                                <strong>Note:</strong> You'll need an active
                                Claude Desktop subscription to use these
                                materials.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
