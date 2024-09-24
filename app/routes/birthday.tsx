import { json } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';

export async function loader() {
    return json({ age: 36 });
}

export default function BirthdayRoute() {
    const { age } = useLoaderData<typeof loader>();

    return (
        <div className="container mx-auto">
            <div className="flex flex-col-reverse gap-4 px-2 py-4 md:flex-row md:pt-12">
                <div className="flex-1">
                    <h1 className="mb-8 text-4xl font-bold">
                        Seth is turning {age} 🥳
                    </h1>
                    <div className="space-y-4">
                        <h3 className="text-xl">{`🔥 We're celebrating with a bonfire hangout 🍻`}</h3>
                        <p>
                            <strong>Date:</strong> Friday, October 11
                        </p>
                        <p>
                            <strong>Time:</strong> 6–9p
                        </p>
                        <p>
                            <strong>Where:</strong>{' '}
                            <a
                                className="text-green-600 underline hover:text-green-500"
                                href="https://maps.app.goo.gl/WaqhCa2LSKL6geaa9"
                            >
                                1109 Oakwood Drive Leander, TX 78641
                            </a>
                        </p>
                        <p>
                            <strong>Who:</strong> You. Significant others and
                            kids are welcome.
                        </p>
                        <p>
                            <strong>What:</strong> Come hangout, sit by the fire
                            & enjoy some tasty food and smores. Beer will be
                            provided.
                        </p>
                        <Form method="POST" action="/api/ics" reloadDocument>
                            <input
                                type="hidden"
                                name="title"
                                value="Seth's 36th birthday"
                            />
                            <button
                                type="submit"
                                className="rounded-lg border-2 border-green-900 bg-green-700 px-4 py-2 text-white hover:bg-green-600"
                            >
                                📅 Add to Calendar (.ics)
                            </button>
                        </Form>
                    </div>
                </div>
                <div className="flex-1">
                    <img
                        className="mb-4 w-full rounded-lg"
                        alt="Bonfire"
                        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnE1ZWg2bzUxcTQ0cnJldWJuY3htZHEwYzh1eHd2eWJ4amJsbWY1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H9eAzNVsc9HLmMs7Qe/giphy.gif"
                    />
                </div>
            </div>
        </div>
    );
}
