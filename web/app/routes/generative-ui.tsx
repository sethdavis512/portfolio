// import Linky from '~/components/Linky';

export function meta() {
    return [
        { title: `Setup | Seth Davis' Portfolio` },
        {
            name: 'description',
            content: `Explore the setup of Seth Davis, a skilled frontend engineer with expertise in React, web development, and more.`
        }
    ];
}

export default function GenerativeUIRoute() {
    return (
        <>
            <img
                className="w-full mb-8 border-b border-b-zinc-300 dark:border-b-zinc-700"
                src="/generative-ui-hero.png"
                alt="Generative UI"
            />
            <h1 className="text-4xl font-bold mb-4">Generative UI</h1>
            <p></p>
        </>
    );
}
