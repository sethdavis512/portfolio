import { Link } from 'remix';
import DefaultLayout from '~/components/DefaultLayout';
import { SocialLinks } from '~/constants';
import austinFCLogo from '../images/austin-fc-logo.svg';
import portfolioStyles from '../portfolio.css';

export type AboutItemType = { text: string; isLink?: boolean };

export function links() {
    return [{ rel: 'stylesheet', href: portfolioStyles }];
}

export default function IndexRoute() {
    const linkClassNames =
        'px-4 py-3 rounded-md bg-zinc-800 hover:bg-gradient-to-br from-lime-400 to-emerald-600';

    return (
        <DefaultLayout
            header={
                <>
                    <h1 className="text-5xl leading-normal font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-emerald-600 mb-8">
                        <span className="block sm:hidden">{'<TWS />'}</span>
                        <span className="hidden sm:block">
                            {'<TechWithSeth />'}
                        </span>
                    </h1>
                </>
            }
            main={
                <div className="flex flex-col max-w-xs mx-auto justify-center sm:flex-row text-center gap-6">
                    <a href={SocialLinks.GITHUB} className={linkClassNames}>
                        GitHub
                    </a>
                    <a href={SocialLinks.CODEPEN} className={linkClassNames}>
                        Codepen
                    </a>
                    <a href={SocialLinks.TWITTER} className={linkClassNames}>
                        Twitter
                    </a>
                    <a href={SocialLinks.LINKEDIN} className={linkClassNames}>
                        LinkedIn
                    </a>
                    <Link to="austin-fc" className={linkClassNames}>
                        ⚽️
                    </Link>
                </div>
            }
        />
    );
}
