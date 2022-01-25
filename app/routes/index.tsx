import parse from "html-react-parser";

type AboutItemType = { text: string; isLink?: boolean };

export default function Index() {
    const mappedAboutItems = [
        { text: "Native Austinite" },
        { text: "TXST Alumni" },
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
                className={item.isLink ? "about-item-link" : "about-item-text"}
            >
                {parse(item.text)}
            </span>
        </li>
    ));

    return (
        <div className="portfolio text-center sm:w-1/2 m-auto sm:mt-12">
            <div className="border-b-2 border-green-900 pb-8">
                <h1 className="text-4xl mb-4">Howdy y'all 🤠</h1>
                <h2 className="text-2xl">Welcome to Seth Davis' Portfolio</h2>
            </div>
            <div className="flex flex-col sm:flex-row justify-around border-b-2 border-green-900 py-8">
                <div className="mr-4">
                    <h3 className="text-2xl mb-4">A little about me</h3>
                    <ul className="border-b-2 border-green-900 pb-4 mb-4">
                        {mappedAboutItems}
                    </ul>
                    <h3 className="text-2xl mb-4">Links</h3>
                    <div className="flex flex-col sm:flex-row justify-center border-b-2 md:border-none border-green-900 pb-4 mb-4">
                        <a
                            className="card text-green-500 w-full sm:w-auto mb-3 sm:mb-0 mr-2"
                            href="https://github.com/sethdavis512"
                        >
                            GitHub
                        </a>
                        <a
                            className="card text-green-500 w-full sm:w-auto"
                            href="https://codepen.io/sethdavis512"
                        >
                            Codepen
                        </a>
                    </div>
                </div>
                <div>
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
