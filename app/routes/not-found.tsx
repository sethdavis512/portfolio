import { Heading } from '~/components/Heading';
import { Button } from '~/components/Button';
import { generateRouteMeta } from '~/utils/seo';

export function meta() {
    return generateRouteMeta({
        pageTitle: 'Page Not Found',
        descriptionContent: 'The page you are looking for does not exist.',
        ogUrl: 'https://sethdavis.tech'
    });
}

export function loader() {
    throw new Response('Not Found', { status: 404 });
}

export default function NotFoundRoute() {
    return null;
}
