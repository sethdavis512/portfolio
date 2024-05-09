import Rebekah from '../images/rebekah.jpg';

export default function RebekahBirthdayRoute() {
    return (
        <div
            className={`fixed top-0 left-0 right-0 bottom-0 overflow-y-auto p-12 bg-emerald-100 text-emerald-800 text-xl`}
        >
            <div className="relative max-w-2xl mx-auto space-y-8">
                <div className="flex items-center justify-around">
                    <div>
                        <span className="block text-[75px] md:text-[125px] scale-x-[-1]">
                            🎉
                        </span>
                    </div>
                    <div>
                        <figure className="flex justify-center">
                            <img
                                src={Rebekah}
                                alt="Beautiful Rebekah Davis"
                                className="border-4 border-spacing-4 border-emerald-800 rounded-full max-w-60"
                            />
                        </figure>
                    </div>
                    <div>
                        <span className="text-[75px] md:text-[125px]">🎉</span>
                    </div>
                </div>
                <h1 className="font-bold text-4xl text-center">{`Let's celebrate Rebekah!`}</h1>
                <p>
                    {`Come join the festivities as we celebrate the wonderful
                    Rebekah on her special day! With her warmth, laughter, and
                    boundless love, she has enriched our lives in countless
                    ways. Let's gather to honor her remarkable spirit and create
                    new memories together. Join us for a backyard birthday
                    celebration dedicated to Rebekah!`}
                </p>
                <h2>
                    📅 <strong>When:</strong> Saturday May 18th
                </h2>
                <h2>
                    ⏰ <strong>Time:</strong> 2-4p
                </h2>
                <h2>
                    📋 <strong>Food:</strong> TBD
                </h2>
                <h2>
                    👟 <strong>Activities:</strong> TBD
                </h2>
                <h2>
                    🏡 <strong>Where:</strong> 1109 Oakwood Drive, Leander,
                    Texas 78641
                </h2>
                <details className="border-4 border-emerald-800 rounded-lg p-4">
                    <summary>🗺️ Need a map?</summary>
                    <iframe
                        title="Davis Home"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13744.513042897179!2d-97.86657532878647!3d30.545680094798215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b2c1673c26ad9%3A0x4fe6f37e64efdc1e!2s1109%20Oakwood%20Dr%2C%20Leander%2C%20TX%2078641!5e0!3m2!1sen!2sus!4v1715277692168!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </details>
            </div>
        </div>
    );
}
