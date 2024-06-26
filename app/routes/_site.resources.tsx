import { Outlet } from '@remix-run/react';
import { BookOpen, GithubIcon, PlaneIcon } from 'lucide-react';
import HoverPanel from '~/components/HoverPanel';
import Panel from '~/components/Panel';

export default function ResourcesRoute() {
    return (
        <>
            <div className="mb-8">
                <Panel heading="Resources" icon={<BookOpen />}>
                    <HoverPanel
                        icon={<PlaneIcon className="stroke-green-500" />}
                        to="tailwind"
                        text="Tailwind"
                    />
                    <HoverPanel
                        external
                        icon={<GithubIcon className="stroke-sky-500" />}
                        to="https://gist.github.com/sethdavis512"
                        text="Gists"
                    />
                </Panel>
            </div>
            <Outlet />
        </>
    );
}
