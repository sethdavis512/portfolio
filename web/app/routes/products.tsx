import { ShoppingCart } from 'lucide-react';
import { Button } from '~/components/Button';
import { Card } from '~/components/Card';
import { FreelanceCallToAction } from '~/components/FreelanceCallToAction';
import { Heading } from '~/components/Heading';
import { Linky } from '~/components/Linky';
import { ResponsiveImage } from '~/components/ResponsiveImage';
import { PRODUCT_LINKS } from '~/constants';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Products',
        descriptionContent:
            'Digital products and resources by Seth Davis. Practical tools and guides for developers and professionals.',
        ogUrl: 'https://sethdavis.tech/products'
    });
}

export default function ProductsRoute() {
    return (
        <>
            <div className="space-y-6 mb-8">
                <Heading as="h1">Products</Heading>
                <p className="text-lg text-zinc-600 dark:text-zinc-300">
                    Digital products and resources to help professionals work
                    smarter with AI and modern tools.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tray App Guide */}
                <Card className="p-6 space-y-4 flex flex-col">
                    <Linky to="/tray-app-guide" className="block">
                        <figure className="rounded-lg h-87.5 overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src="/optimized/tray-app-guide-cover-web-640w.webp"
                                alt="Tray App Guide cover"
                            />
                        </figure>
                    </Linky>
                    <Heading as="h2" size="3">
                        Tray App Guide
                    </Heading>
                    <p className="text-zinc-700 dark:text-zinc-300 grow">
                        Learn to build Electron tray apps with the same patterns
                        used in Prompt Suite. Beginner-friendly guide with
                        practical, working examples.
                    </p>
                    <div className="space-y-3">
                        <div className="text-sm text-zinc-600 dark:text-zinc-400">
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
                        <div className="flex gap-3">
                            <Linky to="/tray-app-guide" className="flex-1">
                                <Button
                                    color="primary"
                                    variant="outline"
                                    className="w-full justify-center"
                                >
                                    Learn More
                                </Button>
                            </Linky>
                            <Linky
                                external
                                to={PRODUCT_LINKS.TRAY_APP_GUIDE}
                                className="flex-1"
                            >
                                <Button
                                    color="primary"
                                    iconBefore={
                                        <ShoppingCart className="w-4 h-4" />
                                    }
                                    className="w-full justify-center"
                                >
                                    Buy Now
                                </Button>
                            </Linky>
                        </div>
                    </div>
                </Card>
                {/* Claude Real Estate Bundle */}
                {/* <Card className="p-6 space-y-4 flex flex-col">
                    <Linky
                        to="/claude-desktop-for-real-estate-agents"
                        className="block"
                    >
                        <figure className="rounded-lg h-87.5 overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src="/claude-desktop-for-real-estate-agents-jan-2026-edition-cover.webp"
                                alt="Claude Desktop for Real Estate Agents January 2026 edition cover"
                            />
                        </figure>
                    </Linky>
                    <Heading as="h2" size="3">
                        Claude Desktop for Real Estate Agents
                    </Heading>
                    <p className="text-zinc-700 dark:text-zinc-300 grow">
                        Complete bundle with 51-page guide, 12+ real estate
                        workflows, and a prompt framework plus advanced
                        techniques. Save hours weekly with proven AI workflows
                        for listings, clients, and operations.
                    </p>
                    <div className="space-y-3">
                        <div className="text-sm text-zinc-600 dark:text-zinc-400">
                            <div className="flex items-start gap-2">
                                <span className="text-primary mt-0.5">✓</span>
                                <span>51-page Complete Guide</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-primary mt-0.5">✓</span>
                                <span>12+ Real Estate Workflows</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-primary mt-0.5">✓</span>
                                <span>
                                    Prompt Framework + Advanced Techniques
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Linky
                                to="/claude-desktop-for-real-estate-agents"
                                className="flex-1"
                            >
                                <Button
                                    color="primary"
                                    variant="outline"
                                    className="w-full justify-center"
                                >
                                    Learn More
                                </Button>
                            </Linky>
                            <Linky
                                external
                                to={PRODUCT_LINKS.CLAUDE_REAL_ESTATE_BUNDLE}
                                className="flex-1"
                            >
                                <Button
                                    color="primary"
                                    iconBefore={
                                        <ShoppingCart className="w-4 h-4" />
                                    }
                                    className="w-full justify-center"
                                >
                                    Buy Now
                                </Button>
                            </Linky>
                        </div>
                    </div>
                </Card>
                <Card className="p-6 space-y-4 flex flex-col">
                    <Linky
                        to="/claude-desktop-for-insurance-agents"
                        className="block"
                    >
                        <figure className="rounded-lg h-87.5 overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src="/claude-desktop-for-insurance-agents-jan-2026-edition-cover.webp"
                                alt="Claude Desktop for Insurance Agents January 2026 edition cover"
                            />
                        </figure>
                    </Linky>
                    <Heading as="h2" size="3">
                        Claude Desktop for Insurance Agents
                    </Heading>
                    <p className="text-zinc-700 dark:text-zinc-300 grow">
                        Complete bundle with 56-page guide, 12+ insurance
                        workflows, and a prompt framework plus advanced
                        techniques. Save 5-10+ hours weekly with proven AI
                        workflows for quotes, renewals, claims, and client
                        communication.
                    </p>
                    <div className="space-y-3">
                        <div className="text-sm text-zinc-600 dark:text-zinc-400">
                            <div className="flex items-start gap-2">
                                <span className="text-primary mt-0.5">✓</span>
                                <span>56-page Complete Guide</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-primary mt-0.5">✓</span>
                                <span>12+ Insurance Workflows</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-primary mt-0.5">✓</span>
                                <span>
                                    Prompt Framework + Advanced Techniques
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Linky
                                to="/claude-desktop-for-insurance-agents"
                                className="flex-1"
                            >
                                <Button
                                    color="primary"
                                    variant="outline"
                                    className="w-full justify-center"
                                >
                                    Learn More
                                </Button>
                            </Linky>
                            <Linky
                                external
                                to={PRODUCT_LINKS.CLAUDE_INSURANCE_BUNDLE}
                                className="flex-1"
                            >
                                <Button
                                    color="primary"
                                    iconBefore={
                                        <ShoppingCart className="w-4 h-4" />
                                    }
                                    className="w-full justify-center"
                                >
                                    Buy Now
                                </Button>
                            </Linky>
                        </div>
                    </div>
                </Card> */}

                {/* Placeholder for future products */}
                <Card className="p-6 space-y-4 flex flex-col">
                    <figure className="rounded-lg h-87.5 overflow-hidden bg-linear-to-br from-zinc-300 to-zinc-400 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center border-dashed border-2 border-zinc-400 dark:border-zinc-600">
                        <div className="text-zinc-600 dark:text-zinc-400 text-center p-8">
                            <div className="text-6xl font-bold mb-4">📦</div>
                            <div className="text-xl">Coming Soon</div>
                        </div>
                    </figure>
                    <Heading as="h2" size="3">
                        More Coming Soon
                    </Heading>
                    <p className="text-zinc-700 dark:text-zinc-300 grow">
                        Additional products and resources in development. Check
                        back soon for new tools, guides, and templates.
                    </p>
                    <div className="space-y-3">
                        <div className="text-sm text-zinc-600 dark:text-zinc-400">
                            <div className="flex items-start gap-2">
                                <span className="text-zinc-400">✓</span>
                                <span>New guides and resources</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-zinc-400">✓</span>
                                <span>Advanced techniques</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-zinc-400">✓</span>
                                <span>Practical templates</span>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <FreelanceCallToAction className="mt-10" />
        </>
    );

    // return (
    //     <>
    //         <div className="space-y-6 mb-8">
    //             <Heading as="h1">Products</Heading>
    //             <p className="text-lg text-zinc-600 dark:text-zinc-300">
    //                 Digital products and resources to help professionals work
    //                 smarter with AI and modern tools.
    //             </p>
    //         </div>

    //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //             {/* Claude Real Estate Bundle */}
    //             <Card className="p-6 space-y-4 flex flex-col">
    //                 <Linky
    //                     to="/claude-desktop-for-real-estate-agents"
    //                     className="block"
    //                 >
    //                     <figure className="rounded-lg h-[350px] overflow-hidden">
    //                         <img
    //                             className="w-full h-full object-cover"
    //                             src="/claude-desktop-for-real-estate-agents-jan-2026-edition-cover.webp"
    //                             alt="Claude Desktop for Real Estate Agents January 2026 edition cover"
    //                         />
    //                     </figure>
    //                 </Linky>
    //                 <Heading as="h2" size="3">
    //                     Claude Desktop for Real Estate Agents
    //                 </Heading>
    //                 <p className="text-zinc-700 dark:text-zinc-300 flex-grow">
    //                     Complete bundle with 51-page guide, 12+ real estate
    //                     workflows, and a prompt framework plus advanced
    //                     techniques. Save hours weekly with proven AI workflows
    //                     for listings, clients, and operations.
    //                 </p>
    //                 <div className="space-y-3">
    //                     <div className="text-sm text-zinc-600 dark:text-zinc-400">
    //                         <div className="flex items-start gap-2">
    //                             <span className="text-primary mt-0.5">✓</span>
    //                             <span>51-page Complete Guide</span>
    //                         </div>
    //                         <div className="flex items-start gap-2">
    //                             <span className="text-primary mt-0.5">✓</span>
    //                             <span>12+ Real Estate Workflows</span>
    //                         </div>
    //                         <div className="flex items-start gap-2">
    //                             <span className="text-primary mt-0.5">✓</span>
    //                             <span>
    //                                 Prompt Framework + Advanced Techniques
    //                             </span>
    //                         </div>
    //                     </div>
    //                     <div className="flex gap-3">
    //                         <Linky
    //                             to="/claude-desktop-for-real-estate-agents"
    //                             className="flex-1"
    //                         >
    //                             <Button
    //                                 color="primary"
    //                                 variant="outline"
    //                                 className="w-full justify-center"
    //                             >
    //                                 Learn More
    //                             </Button>
    //                         </Linky>
    //                         <Linky
    //                             external
    //                             to={PRODUCT_LINKS.CLAUDE_REAL_ESTATE_BUNDLE}
    //                             className="flex-1"
    //                         >
    //                             <Button
    //                                 color="primary"
    //                                 iconBefore={
    //                                     <ShoppingCart className="w-4 h-4" />
    //                                 }
    //                                 className="w-full justify-center"
    //                             >
    //                                 Buy Now
    //                             </Button>
    //                         </Linky>
    //                     </div>
    //                 </div>
    //             </Card>
    //             <Card className="p-6 space-y-4 flex flex-col">
    //                 <Linky
    //                     to="/claude-desktop-for-insurance-agents"
    //                     className="block"
    //                 >
    //                     <figure className="rounded-lg h-[350px] overflow-hidden">
    //                         <img
    //                             className="w-full h-full object-cover"
    //                             src="/claude-desktop-for-insurance-agents-jan-2026-edition-cover.webp"
    //                             alt="Claude Desktop for Insurance Agents January 2026 edition cover"
    //                         />
    //                     </figure>
    //                 </Linky>
    //                 <Heading as="h2" size="3">
    //                     Claude Desktop for Insurance Agents
    //                 </Heading>
    //                 <p className="text-zinc-700 dark:text-zinc-300 flex-grow">
    //                     Complete bundle with 56-page guide, 12+ insurance
    //                     workflows, and a prompt framework plus advanced
    //                     techniques. Save 5-10+ hours weekly with proven AI
    //                     workflows for quotes, renewals, claims, and client
    //                     communication.
    //                 </p>
    //                 <div className="space-y-3">
    //                     <div className="text-sm text-zinc-600 dark:text-zinc-400">
    //                         <div className="flex items-start gap-2">
    //                             <span className="text-primary mt-0.5">✓</span>
    //                             <span>56-page Complete Guide</span>
    //                         </div>
    //                         <div className="flex items-start gap-2">
    //                             <span className="text-primary mt-0.5">✓</span>
    //                             <span>12+ Insurance Workflows</span>
    //                         </div>
    //                         <div className="flex items-start gap-2">
    //                             <span className="text-primary mt-0.5">✓</span>
    //                             <span>
    //                                 Prompt Framework + Advanced Techniques
    //                             </span>
    //                         </div>
    //                     </div>
    //                     <div className="flex gap-3">
    //                         <Linky
    //                             to="/claude-desktop-for-insurance-agents"
    //                             className="flex-1"
    //                         >
    //                             <Button
    //                                 color="primary"
    //                                 variant="outline"
    //                                 className="w-full justify-center"
    //                             >
    //                                 Learn More
    //                             </Button>
    //                         </Linky>
    //                         <Linky
    //                             external
    //                             to={PRODUCT_LINKS.CLAUDE_INSURANCE_BUNDLE}
    //                             className="flex-1"
    //                         >
    //                             <Button
    //                                 color="primary"
    //                                 iconBefore={
    //                                     <ShoppingCart className="w-4 h-4" />
    //                                 }
    //                                 className="w-full justify-center"
    //                             >
    //                                 Buy Now
    //                             </Button>
    //                         </Linky>
    //                     </div>
    //                 </div>
    //             </Card>

    //             {/* Placeholder for future products */}
    //             <Card className="p-6 space-y-4 flex flex-col border-dashed border-2 border-zinc-300 dark:border-zinc-700 bg-transparent col-span-full">
    //                 <Heading
    //                     as="h2"
    //                     size="3"
    //                     className="text-zinc-500 dark:text-zinc-500"
    //                 >
    //                     More Coming Soon
    //                 </Heading>
    //                 <p className="text-zinc-500 dark:text-zinc-500 flex-grow">
    //                     Additional products and resources in development. Check
    //                     back soon for new tools, guides, and templates.
    //                 </p>
    //             </Card>
    //         </div>
    //         <FreelanceCallToAction className="mt-10" />
    //     </>
    // );
}
