import { redirect } from 'react-router';
import { SlideshowStage } from '~/components/SlideshowStage';
import { decks } from '~/content';
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
    const lookup = decks.bySlug(params.deckId!);
    if (lookup.kind !== 'found') {
        throw new Response('Not Found', { status: 404 });
    }
    const deck = lookup.item.body;

    const navigation = decks.navigation(deck, params.slideId!);
    if (!navigation) {
        throw redirect(`/slides/${deck.slug}/${decks.firstSlideId(deck)}`);
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
    const lookup = decks.bySlug(loaderData.deckSlug);
    if (lookup.kind !== 'found') return null;
    const deck = lookup.item.body;

    return (
        <SlideshowStage
            deck={deck}
            slideId={loaderData.slideId}
            navigation={loaderData.navigation}
            basePath={`/slides/${loaderData.deckSlug}`}
            backHref={`/slides/${loaderData.deckSlug}`}
            backLabel="Back to overview"
        />
    );
}
