import isBefore from 'date-fns/isBefore';
import isToday from 'date-fns/isToday';
import isAfter from 'date-fns/isAfter';
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
            if (
                isToday(new Date(currentGame.formattedDate)) ||
                isAfter(new Date(currentGame.formattedDate), today)
            ) {
                distributed.futureGames.push(currentGame);
            } else if (isBefore(new Date(currentGame.formattedDate), today)) {
                distributed.previousGames.push(currentGame);
            }

            return distributed;
        },
        { previousGames: [], futureGames: [] }
    );
};

export const getGameId = (game: ScheduledGameType): string =>
    kebabCase(`${game.gameNumber}-${game.homeTeam}-${game.awayTeam}`);
