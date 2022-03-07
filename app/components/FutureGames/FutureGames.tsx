import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import isToday from 'date-fns/isToday';
import { getGameId, ScheduledGameType } from '~/routes/austin-fc/austinFCUtils';
import FutureGameDetails from '../FutureGameDetails';

const FutureGames = ({ games }: { games: ScheduledGameType[] }) => {
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

export default FutureGames;
