import { getGameId, ScheduledGameType } from '~/routes/austin-fc/austinFCUtils';
import Details from '../Details';
import List from '../List';
import PreviousGameDetails from '../PreviousGameDetails';
import Summary from '../Summary';

const PreviousGames = ({ games }: { games: ScheduledGameType[] }) => {
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

export default PreviousGames;
