import Layout from '../components/Layout';
import ContentContainer from '../components/ContentContainer';
import ExternalLink from '~/components/ExternalLink';
import { BookOpen } from 'lucide-react';

export default function TailwindResourcesRoute() {
    return (
        <Layout>
            <ContentContainer>
                <h1 className="flex gap-2 items-center text-2xl font-bold mb-4">
                    <BookOpen className="w-5 h-5" />
                    Tailwind Resources
                </h1>
                <div className="md:grid md:grid-cols-12">
                    <div className="col-span-6">
                        <h2 className="flex gap-2 items-center text-xl font-bold mb-4">
                            UI Libraries
                        </h2>
                        <ul className="space-y-4 mb-4">
                            <li>
                                <ExternalLink href="https://ui.shadcn.com/">
                                    shadcn/ui
                                </ExternalLink>
                            </li>
                            <li>
                                <ExternalLink href="https://draft-ui.com/">
                                    Draft UI
                                </ExternalLink>
                            </li>
                            <li>
                                <ExternalLink href="https://tailwindcomponents.com/">
                                    Tailwind Components
                                </ExternalLink>
                            </li>
                            <li>
                                <ExternalLink href="https://flowbite.com/">
                                    Flowbite
                                </ExternalLink>
                            </li>
                            <li>
                                <ExternalLink href="https://tw-elements.com/">
                                    TW Elements
                                </ExternalLink>
                            </li>
                            <li>
                                <ExternalLink href="https://preline.co/">
                                    Preline
                                </ExternalLink>
                            </li>
                            <li>
                                <ExternalLink href="https://www.ripple-ui.com/">
                                    Ripple UI
                                </ExternalLink>
                            </li>
                            <li>
                                <ExternalLink href="https://sailboatui.com/docs/getting-started/quick-start/">
                                    Sailboat UI
                                </ExternalLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-6">
                        <h2 className="flex gap-2 items-center text-xl font-bold mb-4">
                            Aggregators
                        </h2>
                        <ul className="space-y-4">
                            <li>
                                <ExternalLink href="https://www.tailwindawesome.com/">
                                    Tailwind Awesome
                                </ExternalLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </ContentContainer>
        </Layout>
    );
}
