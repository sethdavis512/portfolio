import parse from "html-react-parser";

type AboutItemType = { text: string; isLink?: boolean };

export default function IndexRoute() {
    const mappedAboutItems = [
        { text: 'Native Austinite' },
        { text: 'TXST Alumni' },
        {
            text: `UX Developer @ <a href="https://www.indeed.com/" className="text-green-500">Indeed</a>`,
            isLink: true
        },
        {
            text: `Creator of <a href="https://www.pseudoreact.com/" className="text-green-500">PseudoReact</a> ⚛️`,
            isLink: true
        },
        { text: `Electric vehicle enthusiast ⚡️` },
        { text: `Austin FC fan ⚽️` },
        { text: `Onewheel rider 🏂` }
    ].map((item: AboutItemType) => (
        <li key={item.text} className="about-item">
            <span
                className={item.isLink ? 'about-item-link' : 'about-item-text'}
            >
                {parse(item.text)}
            </span>
        </li>
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
                    <div className="flex flex-col justify-center border-b-2 md:border-none border-green-900 pb-4 mb-4">
                        <a
                            className="card text-green-500 w-full mb-3 mr-2"
                            href="https://github.com/sethdavis512"
                        >
                            GitHub
                        </a>
                        <a
                            className="card text-green-500 w-full mb-3 mr-2"
                            href="https://codepen.io/sethdavis512"
                        >
                            Codepen
                        </a>
                        <a
                            className="card text-green-500 w-full"
                            href="https://www.linkedin.com/in/sethdavis512/"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
                <div className=" flex-grow-0 flex-shrink-0">
                    <h3 className="text-2xl mb-4">Tweets</h3>
                    <div>
                        <a
                            className="twitter-timeline"
                            data-height="500"
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
