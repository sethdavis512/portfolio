import { redirect } from 'react-router';
import { SlideshowStage } from '~/components/SlideshowStage';
import {
    getDeck,
    getFirstSlideId,
    getSlideNavigation
} from '~/content';
import { generateRouteMeta } from '~/utils/seo';
import type { Route } from './+types/slides-deck-stage';

export function meta({ loaderData }: Route.MetaArgs) {
    const title = loaderData
        ? `${loaderData.slideTitle} — ${loaderData.deckTitle}`
        : 'Slides';
    return generateRouteMeta({
        pageTitle: title,
        descriptionContent:
            loaderData?.deckDescription ??
            'A slideshow by Seth Davis.',
        ogUrl: loaderData
            ? `https://sethdavis.tech/slides/${loaderData.deckSlug}/${loaderData.slideId}`
            : 'https://sethdavis.tech/slides'
    });
}

export function loader({ params }: Route.LoaderArgs) {
    const deck = getDeck(params.deckId!);
    if (!deck) {
        throw new Response('Not Found', { status: 404 });
    }

    const navigation = getSlideNavigation(deck.slug, params.slideId!);
    if (!navigation) {
        const firstId = getFirstSlideId(deck.slug);
        throw redirect(`/slides/${deck.slug}/${firstId}`);
    }

    return {
        deckSlug: deck.slug,
        deckTitle: deck.meta.title,
        deckDescription: deck.meta.description ?? null,
        slideId: navigation.slideId,
        slideTitle: navigation.title,
        navigation
    };
}

export default function SlidesDeckStageRoute({
    loaderData
}: Route.ComponentProps) {
    const deck = getDeck(loaderData.deckSlug);
    if (!deck) return null;

    return (
        <SlideshowStage
            deck={deck}
            slideId={loaderData.slideId}
            navigation={loaderData.navigation}
            basePath={`/slides/${loaderData.deckSlug}`}
        />
    );
}
