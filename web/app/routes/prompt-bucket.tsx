// import Linky from '~/components/Linky';

export function meta() {
    return [
        { title: `Prompt Bucket | Seth Davis' Portfolio` },
        {
            name: 'description',
            content: `Explore the portfolio of Seth Davis, a skilled frontend engineer with expertise in React, web development, and more.`
        }
    ];
}

export default function PromptBucketRoute() {
    return (
        <>
            <img
                className="w-full mb-8 border-b border-b-zinc-300 dark:border-b-zinc-700"
                src="/generative-ui-hero.png"
                alt="Prompt Bucket displayed in a web browser"
            />
            <h1 className="text-4xl font-bold mb-4">Prompt Bucket</h1>
            <p></p>
        </>
    );
}
