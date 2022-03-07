import { ScheduledGameType } from '~/routes/austin-fc/austinFCUtils';
import ListItem from '../ListItem';

const PreviousGameDetails = ({ game }: { game: ScheduledGameType }) => {
    return (
        <ListItem>
            <strong>Game {game.gameNumber}</strong>:
            {game.score ? ` [${game.score.replace(':', '-')}]` : null}{' '}
            {game.homeTeam} vs {game.awayTeam} @ {game.venue} (
            {game.formattedDate})
        </ListItem>
    );
};

export default PreviousGameDetails;
