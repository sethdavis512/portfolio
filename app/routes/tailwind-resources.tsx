import Layout from '../components/Layout';
import ContentContainer from '../components/ContentContainer';
import ExternalLink from '~/components/ExternalLink';

export default function TailwindResourcesRoute() {
    return (
        <Layout>
            <ContentContainer>
                <h3 className="flex gap-2 items-center text-2xl font-bold mb-4">
                    Tailwind Resources
                </h3>
                <ul className="space-y-4">
                    <li>
                        <ExternalLink href="https://ui.shadcn.com/">
                            shadcn/ui
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
            </ContentContainer>
        </Layout>
    );
}
