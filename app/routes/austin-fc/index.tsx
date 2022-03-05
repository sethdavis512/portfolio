import { LoaderFunction, useLoaderData } from 'remix';

import { getDistributedGames, getGameId } from './austinFCUtils';
import scheduleJson from '../../data/2022-austin-fc-schedule.json';
import { FunctionComponent } from 'react';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import isToday from 'date-fns/isToday';
import getDay from 'date-fns/getDay';
import twitterBird from '../../images/twitter-logo.svg';

export interface ScheduledGameType {
    formattedDate: string;
    gameNumber: number;
    homeTeam: string;
    awayTeam: string;
    venue: string;
    broadcasters: string[];
    startTime: string | null;
    score: string | null;
}

export const loader: LoaderFunction = async () => {
    return getDistributedGames(scheduleJson);
};

const Details: FunctionComponent<{ className?: string }> = ({
    children,
    className
}) => <details className={`mb-4 ${className}`}>{children}</details>;

const Summary: FunctionComponent<{ className?: string }> = ({
    children,
    className
}) => <summary className={`cursor-pointer ${className}`}>{children}</summary>;

const List: FunctionComponent<{ className?: string }> = ({
    children,
    className
}) => <ul className={`list-disc list-inside pl-3 ${className}`}>{children}</ul>;

const ListItem: FunctionComponent<{ className?: string }> = ({
    children,
    className
}) => <li className={`mb-1 ${className}`}>{children}</li>;

const Disclaimer = () => {
    return (
        <p className="my-4">
            ⚽️ <strong>DISCLAIMER</strong> ⚽️
            <br />
            <em>This site is not an official Austin FC site.</em>
            <br />
            For the real stuff,{' '}
            <a href="https://www.austinfc.com/schedule">
                head over to AustinFC.com
            </a>
            .
        </p>
    );
};

const TwitterContact = () => {
    return (
        <p className="mb-4">
            If you see any incorrect info,{' '}
            <a href="https://twitter.com/sethdavis512">reach out on Twitter</a>.
        </p>
    );
};

const PreviousGameDetails: FunctionComponent<{ game: ScheduledGameType }> = ({
    game
}) => {
    return (
        <ListItem>
            <strong>Game {game.gameNumber}</strong>:
            {game.score ? ` [${game.score.replace(':', '-')}]` : null}{' '}
            {game.homeTeam} vs {game.awayTeam} @ {game.venue} (
            {game.formattedDate})
        </ListItem>
    );
};

const PreviousGames: FunctionComponent<{
    games: ScheduledGameType[];
}> = ({ games }) => {
    return (
        <Details className="mb-14">
            <Summary>Previous games</Summary>
            <List className="pt-4">
                {games.map((game: ScheduledGameType) => (
                    <PreviousGameDetails key={getGameId(game)} game={game} />
                ))}
            </List>
        </Details>
    );
};

const FutureGames: FunctionComponent<{ games: ScheduledGameType[] }> = ({
    games
}) => {
    const mappedGames = games.map(
        (game: ScheduledGameType, gameIndex: number) => {
            const gameIsToday = isToday(new Date(game.formattedDate));
            const daysUntil = differenceInCalendarDays(
                new Date(game.formattedDate),
                new Date()
            );

            return (
                <FutureGameDetails
                    key={getGameId(game)}
                    game={game}
                    className={gameIndex === 0 ? 'verde-border-color' : ''}
                    isNext={gameIndex === 0}
                    isToday={gameIsToday}
                    daysUntil={daysUntil}
                />
            );
        }
    );

    return <>{mappedGames}</>;
};

const FutureGameDetails: FunctionComponent<{
    game: ScheduledGameType;
    className?: string;
    isNext: boolean;
    isToday: boolean;
    daysUntil: number;
}> = ({ game, className, isNext, isToday, daysUntil }) => {
    const hashtags = '#Verde #Listos';
    const opponent = game.homeTeam === 'Austin' ? game.awayTeam : game.homeTeam;
    const laterDateLabel =
        daysUntil === 1
            ? "TOMORROW'S GAME"
            : `${daysUntil} DAYS UNTIL NEXT GAME`;

    const scheduleUrl = 'https://www.techwithseth.com/austin-fc';
    const gameDayTweet = `⚽️ #AustinFC plays ${opponent} today! ${game.startTime} @ ${game.venue} ${hashtags}
${scheduleUrl}`;
    const futureGameTweet = `⚽️ ${daysUntil} more days until #AustinFC plays ${opponent} — ${game.startTime} @ ${game.venue} ${hashtags}
${scheduleUrl}`;

    const tweetText = isToday ? gameDayTweet : futureGameTweet;
    const tweetLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        tweetText
    )}`;

    const dotwMap = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
    };

    const dotw = getDay(new Date(game.formattedDate));

    return (
        <article key={getGameId(game)} className="relative mb-4">
            <div
                className={`px-3 py-4 ${
                    isNext
                        ? 'rounded-bl-md rounded-tr-md rounded-br-md'
                        : 'rounded-md'
                } dark-grey border-2 border-transparent ${className}`}
            >
                <div
                    id={getGameId(game)}
                    className="flex items-center justify-between mb-3"
                >
                    <div className="block darker-grey hover:bg-green-900 rounded-md px-2 py-1">
                        <a
                            href={`#${getGameId(game)}`}
                            className="text-white hover:text-white inline-block"
                        >
                            {game.venue === 'Q2 Stadium' ? '🏠' : '✈️'}
                            <span className="pl-2">Game {game.gameNumber}</span>
                        </a>
                    </div>
                    <a
                        className="inline-block hover:bg-green-900 darker-grey rounded-md p-2"
                        href={tweetLink}
                    >
                        <img src={twitterBird} width="20" />
                    </a>
                </div>
                <div className="mb-3">
                    <h2 className="text-2xl font-bold">
                        {game.homeTeam} vs {game.awayTeam} @ {game.venue}
                    </h2>
                    <h3 className="text-lg font-normal">
                        {dotwMap[dotw]} {game.formattedDate} {game.startTime}
                    </h3>
                </div>
                <Details className={`mt-2 mb-0`}>
                    <Summary>📺 Where to watch</Summary>
                    <List className="mt-2">
                        {game.broadcasters.map((b: any, idx: number) => (
                            <ListItem key={`${b}-${idx}`}>{b}</ListItem>
                        ))}
                    </List>
                </Details>
            </div>
            {isNext && (
                <div className="absolute verde px-3 py-1 -top-8 left-0 rounded-tl-md rounded-tr-md">
                    <strong>{isToday ? "TODAY'S GAME" : laterDateLabel}</strong>
                </div>
            )}
        </article>
    );
};

const BackgroundInfo: FunctionComponent = () => {
    return (
        <Details>
            <Summary>Why remake the schedule?</Summary>
            <p className="my-3">
                While the schedule page is nice, I'm not a fan of:
            </p>
            <List>
                <ListItem>All the scrolling</ListItem>
                <ListItem>Doesn't highlight the next game</ListItem>
                <ListItem>No dark mode</ListItem>
                <ListItem>Too much white space</ListItem>
                <ListItem>Advertisements</ListItem>
            </List>
        </Details>
    );
};

export default function AustinFCIndexRoute() {
    const { previousGames, futureGames, wins, losses, ties } = useLoaderData();
    const hasPreviousGames = previousGames.length > 0;
    const hasFutureGames = futureGames.length > 0;

    return (
        <div>
            <Disclaimer />
            <BackgroundInfo />
            <TwitterContact />
            <div>
                <h3
                    className={`text-4xl ${
                        hasPreviousGames ? 'mb-4' : 'mb-14'
                    }`}
                >
                    2022 Schedule
                </h3>
                <p className={`mb-4`}>
                    Record: {wins} - {ties} - {losses}
                </p>
                {hasPreviousGames && <PreviousGames games={previousGames} />}
                {hasFutureGames ? (
                    <FutureGames games={futureGames} />
                ) : (
                    <p className="text-2xl">Season is over. No more games 😑</p>
                )}
            </div>
        </div>
    );
}
