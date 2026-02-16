import { redirect } from 'react-router';
import type { Route } from './+types/work-redirects';

export function loader({ request }: Route.LoaderArgs) {
    const url = new URL(request.url);
    const slug = url.pathname.replace(/^\//, '');

    return redirect(`/work/${slug}`, 301);
}
