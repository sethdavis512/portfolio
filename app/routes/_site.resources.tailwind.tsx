import { PlaneIcon } from 'lucide-react';
import ExternalLink from '~/components/ExternalLink';
import Heading from '~/components/Heading';
import Panel from '~/components/Panel';
import { BORDER_TOP } from '~/constants';

export default function TailwindResourcesRoute() {
    return (
        <Panel icon={<PlaneIcon />} heading="Tailwind" className={BORDER_TOP}>
            <div className="gap-4 md:grid md:grid-cols-12">
                <div className="col-span-6">
                    <Heading as="h3" size="4" className="mb-4">
                        UI Libraries
                    </Heading>
                    <ul className="mb-4 space-y-4">
                        <li>
                            <ExternalLink to="https://ui.shadcn.com/">
                                shadcn/ui
                            </ExternalLink>
                        </li>
                        <li>
                            <ExternalLink to="https://draft-ui.com/">
                                Draft UI
                            </ExternalLink>
                        </li>
                        <li>
                            <ExternalLink to="https://tailwindcomponents.com/">
                                Tailwind Components
                            </ExternalLink>
                        </li>
                        <li>
                            <ExternalLink to="https://flowbite.com/">
                                Flowbite
                            </ExternalLink>
                        </li>
                        <li>
                            <ExternalLink to="https://tw-elements.com/">
                                TW Elements
                            </ExternalLink>
                        </li>
                        <li>
                            <ExternalLink to="https://preline.co/">
                                Preline
                            </ExternalLink>
                        </li>
                        <li>
                            <ExternalLink to="https://www.ripple-ui.com/">
                                Ripple UI
                            </ExternalLink>
                        </li>
                        <li>
                            <ExternalLink to="https://sailboatui.com/docs/getting-started/quick-start/">
                                Sailboat UI
                            </ExternalLink>
                        </li>
                    </ul>
                </div>
                <div className="col-span-6">
                    <Heading as="h3" size="4" className="mb-4">
                        Aggregators
                    </Heading>
                    <ul className="space-y-4">
                        <li>
                            <ExternalLink to="https://www.tailwindawesome.com/">
                                Tailwind Awesome
                            </ExternalLink>
                        </li>
                    </ul>
                </div>
            </div>
        </Panel>
    );
}
