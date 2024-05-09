import { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
    return [
        { title: `Rebekah's 35th birthday!` },
        { name: 'description', content: 'Come celebrate with us!' }
    ];
};

export default function RebekahBirthdayRoute() {
    return (
        <div
            className={`fixed top-0 left-0 right-0 bottom-0 overflow-y-auto pt-12 p-4 md:p-12 bg-emerald-100 text-emerald-800 text-xl`}
        >
            <div className="relative max-w-2xl mx-auto space-y-4">
                <div className="block w-16 h-16 text-[64px] md:text-[64px]">
                    🎉
                </div>
                <h1 className="font-bold text-4xl">{`Rebekah's 35th birthday`}</h1>
                <p>{`Come celebrate with us!`}</p>
                <h3>
                    📅 <strong>When:</strong> Saturday May 18th
                </h3>
                <h3>
                    ⏰ <strong>Time:</strong> 4-8p
                </h3>
                <h3>
                    📋 <strong>Food:</strong> TBD
                </h3>
                <h3>
                    👟 <strong>Activities:</strong> TBD
                </h3>
                <h3>
                    🏡 <strong>Where:</strong> 1109 Oakwood Drive, Leander,
                    Texas 78641
                </h3>
                <h3>🐣 Kids welcome</h3>
                <h3>🥳 Gifts not required</h3>
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
