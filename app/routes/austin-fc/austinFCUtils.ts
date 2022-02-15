import isBefore from 'date-fns/isBefore';
import kebabCase from 'lodash/kebabCase';

import { ScheduledGameType } from '../austin-fc/index';

export const getDistributedGames = (scheduleJson: ScheduledGameType[]) => {
    const today = new Date();

    return scheduleJson.reduce(
        (
            distributed: {
                previousGames: ScheduledGameType[];
                futureGames: ScheduledGameType[];
            },
            currentGame: ScheduledGameType
        ) => {
            if (isBefore(new Date(currentGame.formattedDate), today)) {
                distributed.previousGames.push(currentGame);
            } else {
                distributed.futureGames.push(currentGame);
            }

            return distributed;
        },
        { previousGames: [], futureGames: [] }
    );
};

export const getGameId = (game: ScheduledGameType): string =>
    kebabCase(`${game.gameNumber}-${game.homeTeam}-${game.awayTeam}`);
