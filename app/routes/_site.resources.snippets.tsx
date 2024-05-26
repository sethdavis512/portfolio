import { Code2Icon } from 'lucide-react';
import Code from '~/components/Code';
import Heading from '~/components/Heading';
import Panel from '~/components/Panel';
import { BORDER_TOP, largeIconProps } from '~/constants';
import myVSCodeSnippets from '../assets/my-snippets.json';

export default function SnippetsRoute() {
    return (
        <Panel
            icon={<Code2Icon {...largeIconProps} />}
            heading="Snippets"
            className={BORDER_TOP}
        >
            <div>
                <Heading as="h3" size="3" className="mb-4">
                    VS Code
                </Heading>
                <p className="mb-4">Some of my most used VS Code snippets:</p>
                <Code heading="global.code-snippets">
                    {JSON.stringify(myVSCodeSnippets, null, 4)}
                </Code>
            </div>
        </Panel>
    );
}
