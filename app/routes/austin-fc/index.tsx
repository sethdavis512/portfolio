import { LoaderFunction, useLoaderData } from 'remix';

import { getDistributedGames, getGameId } from './austinFCUtils';
import scheduleJson from '../../data/2022-austin-fc-schedule.json';
import { FunctionComponent } from 'react';

export interface ScheduledGameType {
    formattedDate: string;
    gameNumber: number;
    homeTeam: string;
    awayTeam: string;
    venue: string;
    broadcasters: string[];
    startTime: string;
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
            <strong>Game {game.gameNumber}</strong>: {game.homeTeam} vs{' '}
            {game.awayTeam} @ {game.venue} ({game.formattedDate})
        </ListItem>
    );
};

const PreviousGames: FunctionComponent<{
    games: ScheduledGameType[];
}> = ({ games }) => {
    return (
        <Details>
            <Summary>Previous games</Summary>
            <List className="py-4">
                {games.map((game: ScheduledGameType) => (
                    <PreviousGameDetails game={game} />
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
            return (
                <FutureGameDetails
                    game={game}
                    className={gameIndex === 0 ? 'verde-border-color' : ''}
                    isNext={gameIndex === 0}
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
}> = ({ game, className, isNext }) => {
    return (
        <div key={getGameId(game)} className="relative mb-4">
            <div
                className={`px-3 py-4 ${
                    isNext
                        ? 'rounded-bl-md rounded-tr-md rounded-br-md'
                        : 'rounded-md'
                } dark-grey border-2 border-transparent ${className}`}
            >
                <h3 id={getGameId(game)} className={`text-2xl mb-3`}>
                    <a href={`#${getGameId(game)}`} className="mr-3">
                        {game.venue === 'Q2 Stadium' ? '🏠' : '✈️'}
                    </a>
                    {game.formattedDate} | {game.startTime}
                </h3>
                <p>
                    <strong>Game {game.gameNumber}</strong>: {game.homeTeam} vs{' '}
                    {game.awayTeam} @ {game.venue}
                </p>
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
                    <strong>NEXT GAME</strong>
                </div>
            )}
        </div>
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
    const { previousGames, futureGames } = useLoaderData();

    return (
        <div>
            <Disclaimer />
            <TwitterContact />
            <BackgroundInfo />
            <div>
                <h3 className="text-4xl mb-12">2022 Schedule</h3>
                {previousGames.length > 0 && (
                    <PreviousGames games={previousGames} />
                )}
                {futureGames.length > 0 ? (
                    <FutureGames games={futureGames} />
                ) : (
                    <p className="text-2xl">Season is over. No more games 😑</p>
                )}
            </div>
        </div>
    );
}
