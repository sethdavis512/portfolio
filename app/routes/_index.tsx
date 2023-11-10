import type { MetaFunction } from '@vercel/remix';

export const meta: MetaFunction = () => {
    return [
        { title: 'Seth Davis Portfolio' },
        { name: 'description', content: "Welcome to Seth Davis' portfolio" }
    ];
};

export default function Index() {
    return (
        <div className="space-y-8">
            <h1 className="text-5xl font-bold">
                Hello 👋🏻 <br />
                Welcome to
                <br />
                Seth Davis' portfolio.
            </h1>
            <h3 className="text-4xl">Who am I?</h3>
            <ul className="space-y-4">
                <li>✌🏻 Native Austinite</li>
                <li>
                    🧑🏻‍💻 Senior User Experience Developer at{' '}
                    <a
                        className="text-green-500 hover:text-green-300"
                        href="https://www.indeed.com/"
                    >
                        Indeed
                    </a>
                </li>
                <li>
                    <a
                        className="text-green-500 hover:text-green-300"
                        href="https://remix.run/"
                    >
                        💿 Remix
                    </a>{' '}
                    fanatic
                </li>
                <li>⚡️ EV enthusiast</li>
            </ul>

            <h3 className="text-4xl mb-4">Portfolio</h3>
            <div className="flex gap-4">
                <a
                    href="https://dev.to/sethdavis512"
                    className="text-green-500 hover:text-green-300 underline"
                >
                    Blog
                </a>
                <a
                    href="https://github.com/sethdavis512"
                    className="text-green-500 hover:text-green-300 underline"
                >
                    Code
                </a>
            </div>

            <h3 className="text-4xl mb-4">Guides</h3>
            <div>
                <a
                    href="https://sethdavis512.github.io/custom-file-generator-guide/"
                    className="text-green-500 hover:text-green-300 underline"
                >
                    Custom file generator
                </a>
            </div>

            <h3 className="text-4xl mb-4">Connect</h3>
            <div className="flex gap-4">
                <a
                    href="https://github.com/sethdavis512"
                    className="text-green-500 hover:text-green-300 underline"
                >
                    GitHub
                </a>
                <a
                    href="https://twitter.com/sethdavis512"
                    className="text-green-500 hover:text-green-300 underline"
                >
                    Twitter
                </a>
                <a
                    href="https://www.linkedin.com/in/sethdavis512/"
                    className="text-green-500 hover:text-green-300 underline"
                >
                    LinkedIn
                </a>
            </div>

            <h3 className="text-4xl mb-4">Coming soon</h3>
            <div>
                <a
                    href="https://www.youtube.com/@techwithseth"
                    className="text-green-500 hover:text-green-300 underline"
                >
                    YouTube
                </a>
            </div>
        </div>
    );
}
