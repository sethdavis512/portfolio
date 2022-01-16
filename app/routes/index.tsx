import portfolioStyles from "../portfolio.css";
import parse from "html-react-parser";

type AboutItemType = { text: string; isLink?: boolean };

export function links() {
    return [{ rel: "stylesheet", href: portfolioStyles }];
}

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
        <li key={item.text}>
            <span
                className={item.isLink ? "about-item-link" : "about-item-text"}
            >
                {parse(item.text)}
            </span>
        </li>
    ));

    return (
        <div className="portfolio text-center sm:w-96 m-auto">
            <div className="border-b-2 border-green-900 pb-4 mb-4">
                <h1 className="text-4xl mb-4">Howdy y'all 🤠</h1>
                <h2 className="text-2xl">Welcome to Seth Davis' Portfolio</h2>
            </div>
            <h3 className="text-2xl mb-4">A little about me</h3>
            <ul className="border-b-2 border-green-900 pb-4 mb-4">
                {mappedAboutItems}
            </ul>
            <h3 className="text-2xl mb-4">Links</h3>
            <div className="flex flex-col sm:flex-row justify-center">
                <a
                    className="card text-green-500 w-full sm:w-auto mb-2 sm:mr-2"
                    href="https://github.com/sethdavis512"
                >
                    GitHub
                </a>
                <a
                    className="card text-green-500 w-full sm:w-auto mb-2 sm:mr-2"
                    href="https://codepen.io/sethdavis512"
                >
                    Codepen
                </a>
                <a
                    className="card text-green-500 w-full sm:w-auto mb-2"
                    href="https://twitter.com/sethdavis512"
                >
                    Twitter
                </a>
            </div>
        </div>
    );
}
