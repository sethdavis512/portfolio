import isBefore from 'date-fns/isBefore';
import isToday from 'date-fns/isToday';
import isAfter from 'date-fns/isAfter';
import kebabCase from 'lodash/kebabCase';

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

export const getDistributedGames = (scheduleJson: ScheduledGameType[]) => {
    const today = new Date();

    return scheduleJson.reduce(
        (
            distributed: {
                wins: number;
                losses: number;
                ties: number;
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

            const hasGameScore = !!currentGame.score;
            const homeTeamIsAustin = currentGame.homeTeam === 'Austin';

            if (hasGameScore) {
                const score = currentGame.score?.split(':');

                if (score?.length) {
                    const homeTeamScore = parseFloat(score[0]);
                    const awayTeamScore = parseFloat(score[1]);

                    if (homeTeamScore === awayTeamScore) {
                        distributed.ties = distributed.ties + 1;
                    } else if (
                        homeTeamIsAustin &&
                        homeTeamScore > awayTeamScore
                    ) {
                        distributed.wins = distributed.wins + 1;
                    } else {
                        distributed.losses = distributed.losses + 1;
                    }
                }
            }

            return distributed;
        },
        { wins: 0, losses: 0, ties: 0, previousGames: [], futureGames: [] }
    );
};

export const getGameId = (game: ScheduledGameType): string =>
    kebabCase(`${game.gameNumber}-${game.homeTeam}-${game.awayTeam}`);
