import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

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
                        Seth is turning {age}
                    </h1>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">Details</h2>
                        <h3 className="text-xl">{`🔥 We're having a bonfire hangout 🍻`}</h3>
                        <p>
                            <strong>Date:</strong> Friday, October 11
                        </p>
                        <p>
                            <strong>Time:</strong> 6–9p
                        </p>
                        <p>
                            <strong>Where:</strong>{' '}
                            <a
                                className="text-green-500 underline"
                                href="https://maps.app.goo.gl/WaqhCa2LSKL6geaa9"
                            >
                                1109 Oakwood Drive Leander TX 78641
                            </a>
                        </p>
                        <p>
                            <details className="inline-block rounded-lg border-2 border-zinc-300 px-4 py-2">
                                <summary>Show me a map</summary>
                                <iframe
                                    title="Davis Home"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.128247280264!2d-97.85885052364611!3d30.545680474675088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b2c1673c26ad9%3A0x4fe6f37e64efdc1e!2s1109%20Oakwood%20Dr%2C%20Leander%2C%20TX%2078641!5e0!3m2!1sen!2sus!4v1727112145060!5m2!1sen!2sus"
                                    width="600"
                                    height="450"
                                    className="border-none"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </details>
                        </p>
                        <p>
                            <strong>Who:</strong> You. Significant others and
                            kids are welcome.
                        </p>
                        <p>
                            <strong>What:</strong> Come hangout & enjoy some
                            smores. Eat before you show up. Bring your own beer.
                        </p>
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
