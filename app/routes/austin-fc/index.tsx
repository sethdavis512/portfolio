import { LoaderFunction, useLoaderData } from 'remix';
import { getDistributedGames } from './austinFCUtils';
import scheduleJson from '../../data/2022-austin-fc-schedule.json';
import BackgroundInfo from '~/components/BackgroundInfo';
import Disclaimer from '~/components/Disclaimer';
import TwitterContact from '~/components/TwitterContact';
import PreviousGames from '~/components/PreviousGames';
import FutureGames from '~/components/FutureGames';

export const loader: LoaderFunction = async () => {
    return getDistributedGames(scheduleJson);
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
                <p className="mb-4">
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
