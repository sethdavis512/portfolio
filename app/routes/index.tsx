import { useEffect } from 'react';
import InterestItem from '~/components/InterestItem';
import SocialButton from '~/components/SocialButton';
import interests from '../data/interests';
import portfolioStyles from '../portfolio.css';

export type AboutItemType = { text: string; isLink?: boolean };

export function links() {
    return [{ rel: 'stylesheet', href: portfolioStyles }];
}

export default function IndexRoute() {
    const mappedAboutItems = interests.map((item: AboutItemType) => (
        <InterestItem item={item} key={item.text} />
    ));

    return (
        <div className="portfolio text-center max-w-3xl m-auto sm:mt-12">
            <div className="w-full border-b-2 border-green-900 pb-8">
                <h1 className="text-4xl mb-4">Howdy y'all 🤠</h1>
                <h2 className="text-2xl">Welcome to Seth Davis' Portfolio</h2>
            </div>
            <div className="flex flex-col sm:flex-row justify-evenly border-b-2 border-green-900 py-8">
                <div className="mr-4 flex-grow-0 flex-shrink-0">
                    <h3 className="text-2xl mb-4">A little about me</h3>
                    <ul className="border-b-2 border-green-900 pb-4 mb-4">
                        {mappedAboutItems}
                    </ul>
                    <h3 className="text-2xl mb-4">Links</h3>
                    <div className="flex flex-col justify-center border-b-2 sm:border-none border-green-900 pb-4 mb-4">
                        <SocialButton
                            className="mr-2"
                            href="https://github.com/sethdavis512"
                        >
                            GitHub
                        </SocialButton>
                        <SocialButton
                            className="mr-2"
                            href="https://codepen.io/sethdavis512"
                        >
                            Codepen
                        </SocialButton>
                        <SocialButton href="https://www.linkedin.com/in/sethdavis512/">
                            LinkedIn
                        </SocialButton>
                    </div>
                </div>
                <div className="flex-grow-1 sm:flex-grow-0 flex-shrink-0">
                    <h3 className="text-2xl mb-4">Tweets</h3>
                    <div>
                        <a
                            className="twitter-timeline"
                            data-width="300"
                            data-height="550"
                            data-theme="dark"
                            href="https://twitter.com/sethdavis512?ref_src=twsrc%5Etfw"
                        >
                            Tweets by sethdavis512
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
