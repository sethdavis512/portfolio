// import Linky from '~/components/Linky';

import Card from '~/components/Card';
import { HeroImage } from '~/components/HeroImage';
import Linky from '~/components/Linky';

export function meta() {
    return [
        { title: `Setup | Seth Davis' Portfolio` },
        {
            name: 'description',
            content: `Explore the setup of Seth Davis, a skilled frontend engineer with expertise in React, web development, and more.`
        }
    ];
}

export default function RapidalleRoute() {
    return (
        <>
            <HeroImage src="/rapidalle-hero.png" alt="Rapidall•E" />
            <div className="flex gap-4">
                <div className="basis-2/3 space-y-4">
                    <h1 className="text-4xl font-bold mb-4">Rapidall•E</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laudantium at corrupti atque adipisci facilis minus in
                        omnis quod optio a! Atque, voluptate! Hic vel et at
                        velit maxime expedita eum.
                    </p>
                    <h2 className="text-2xl font-bold mb-2">What I Learned</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laudantium at corrupti atque adipisci facilis minus in
                        omnis quod optio a! Atque, voluptate! Hic vel et at
                        velit maxime expedita eum.
                    </p>
                    <h2 className="text-2xl font-bold mb-2">Value</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laudantium at corrupti atque adipisci facilis minus in
                        omnis quod optio a! Atque, voluptate! Hic vel et at
                        velit maxime expedita eum.
                    </p>
                </div>
                <div className="basis-1/3">
                    <Card className="flex flex-col gap-4">
                        <h4 className="font-bold">Looking for more?</h4>
                        <Linky
                            external
                            to=""
                        >
                            View source code
                        </Linky>
                        <Linky
                            external
                            to=""
                        >
                            Launch live demo
                        </Linky>
                    </Card>
                </div>
            </div>
        </>
    );
}
