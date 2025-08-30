// import Linky from '~/components/Linky';

export function meta() {
    return [
        { title: `AI Maniacs | Seth Davis' Portfolio` },
        {
            name: 'description',
            content: `Explore the AI Maniacs project of Seth Davis, a skilled frontend engineer with expertise in React, web development, and more.`
        }
    ];
}

export default function AIManiacsRoute() {
    return (
        <>
            <img
                className="w-full mb-8 border-b border-b-zinc-300 dark:border-b-zinc-700"
                src="/ai-maniacs-hero.png"
                alt="AI Maniacs"
            />
            <h1 className="text-4xl font-bold mb-4">AI Maniacs</h1>
            <p></p>
        </>
    );
}
