import getDay from 'date-fns/getDay';
import format from 'date-fns/format';
import { getGameId, ScheduledGameType } from '~/routes/austin-fc/austinFCUtils';
import twitterBird from '../../images/twitter-logo.svg';
import Details from '../Details';
import Summary from '../Summary';
import List from '../List';
import ListItem from '../ListItem';

const FutureGameDetails = ({
    game,
    className,
    isNext,
    isToday,
    daysUntil
}: {
    game: ScheduledGameType;
    className?: string;
    isNext: boolean;
    isToday: boolean;
    daysUntil: number;
}) => {
    const hashtags = '#Verde #Listos';
    const opponent = game.homeTeam === 'Austin' ? game.awayTeam : game.homeTeam;
    const isDayBefore = daysUntil === 1;
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
    const spelledOutDate = format(new Date(game.formattedDate), 'MMMM d, yyyy');

    const laterDateLabel = isDayBefore
        ? "TOMORROW'S GAME"
        : `${daysUntil} DAYS UNTIL NEXT GAME`;

    const scheduleUrl = 'https://www.techwithseth.com/austin-fc';
    const gameDayTweet = `⚽️ #AustinFC plays ${opponent} today! ${game.startTime} @ ${game.venue} ${hashtags}
${scheduleUrl}`;
    const futureGameTweet = `⚽️ ${daysUntil} more day${
        isDayBefore ? '' : 's'
    }! #AustinFC plays ${opponent} @ ${game.venue} ${game.startTime} ${
        dotwMap[dotw]
    } ${spelledOutDate} ${hashtags}
${scheduleUrl}`;

    const tweetText = isToday ? gameDayTweet : futureGameTweet;
    const tweetLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        tweetText
    )}`;

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
                        {game.startTime} {dotwMap[dotw]} • {spelledOutDate}
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

export default FutureGameDetails;
