import type { MetaFunction } from 'remix';
import noraStyles from '../nora.css';

export function links() {
    return [{ rel: 'stylesheet', href: noraStyles }];
}

export const meta: MetaFunction = () => ({
    title: `Nora | Tech with Seth`
});

export default function NoraRoute() {
    return (
        <div className="nora sm:w-3/4 m-auto max-w-4xl">
            <div className="mb-4">
                <h1 className="text-4xl mb-4">Nora</h1>
                <figure
                    style={{
                        float: 'left',
                        width: '220px',
                        marginLeft: 0,
                        marginRight: '1rem',
                        marginBottom: '0.5rem'
                    }}
                >
                    <img
                        className="rounded-full"
                        src="https://res.cloudinary.com/setholito/image/upload/v1623960093/nora/nora-sunflower-800x800.jpg"
                        alt="Nora June Davis"
                    />
                </figure>
                <p className="mb-2">
                    On May 31, 2020, Nora had troubles breathing. We rushed her
                    to the hospital to find that she had a collapsed lung. A
                    cyst in Nora's lung had burst and air was leaking into her
                    chest cavity. After emergency surgery, we were informed that
                    Nora was born with a rare form of cancer called{' '}
                    <a
                        className="text-purple-700"
                        href="https://rarediseases.org/rare-diseases/pleuropulmonary-blastoma/"
                    >
                        Pleuropulmonary Blastoma
                    </a>
                    . Doctors removed additional cysts in hopes that the cancer
                    would not return. One year and several CT scans later,
                    doctors spotted new cancerous developments. On June 17,
                    2021, Nora had surgery to remove a cyst. Our team of
                    oncologists has scheduled Nora to undergo 9 months of
                    chemotherapy. Her first treatment was on July 6th.
                </p>
                <p className="mb-2">
                    Childhood cancer is a heartbreaking diagnosis, affecting the
                    day to day normalcy of children and their families. Our next
                    few months will be full of fear, doubt, anxiety, and
                    isolation. As childhood cancer parents, we do our best to
                    give our sweet girl any semblance of fun and laughter and
                    normalcy as we face incoming months of tests and treatments,
                    but there are some things we cannot change. We cannot change
                    that going to school or visiting fun places is no longer an
                    option. We cannot change the pain and physical toll of
                    cancer and chemotherapy. We cannot change that our world
                    gets smaller, and we have to keep family and friends away
                    for safety. We cannot change that we cant fix this or handle
                    it all on our own. Families affected by childhood cancer
                    need support networks who are willing to help us carry the
                    emotional, physical, spiritual, and financial toll.
                </p>
                <p className="mb-2">
                    There will never be enough words to articulate our gratitude
                    to those of you who choose to be a part of our support
                    network over the next year, who choose to give when all we
                    can give in return is our most heartfelt thanks. If you are
                    willing to walk this journey with us, love us from afar, and
                    help us provide moments of normalcy and joy to our daughter,
                    here is what we need most.
                </p>
            </div>
            <div className="mb-4">
                <h2 className="text-2xl mb-4">Updates</h2>
                <p className="mb-4">
                    <strong>1/15/22</strong> - Nora had an infusion this past
                    Monday. It was difficult for her while in the hospital. She
                    struggled with eating and some nausea. Thankfully when she
                    returned home, she bounced back pretty well. We now have 3
                    chemo treatments left — Wooohoo!
                </p>
                <p>
                    <strong>4/15/22</strong> - DONE! Hey-o, no more chemo! Her
                    last treatment was on 4/4 and she handled it like a champ.
                    She is such a strong little girl and we are so proud of
                    her...Next steps are figuring out what this next season of
                    life looks like. Probably will try to see more friends and
                    family. Lastly, the Make-A-Wish foundation reached out to us
                    and inquired about what Nora would wish for. We told them
                    Nora would like a splashpad, they have granted our wish and
                    now we're waiting to hear back about specifics. Hoping it
                    will be completed before the summer heat gets here!
                </p>
            </div>
            <h2 className="text-2xl mb-4">Donations</h2>
            <p className="mb-4">
                It is always so awkward to ask for cash. We simply included this
                option for those of you who find it easier to give this way.
            </p>
            <div className="card mb-4">
                <strong>PayPal:</strong>{' '}
                <a
                    className="text-purple-700"
                    href="https://paypal.me/sethdavis512/"
                    target="_blank"
                >
                    sethdavis512
                </a>
            </div>
            <div className="card mb-4">
                <strong>Venmo:</strong> @sethdavis512
            </div>
            <div className="card mb-4">
                <strong>Cash App:</strong>{' '}
                <a
                    className="text-purple-700"
                    href="https://cash.app/$sethdavis512"
                    target="_blank"
                >
                    $sethdavis512
                </a>
            </div>

            <h2 className="text-2xl mb-4">Contact Info</h2>
            <div className="card mb-4">
                <p className="mb-2">Seth</p>
                <p>
                    <strong>Email:</strong>{' '}
                    <a
                        className="text-purple-700"
                        href="mailto:sethdavis512@gmail.com"
                    >
                        sethdavis512@gmail.com
                    </a>
                </p>
            </div>
            <div className="card mb-4">
                <p className="mb-2">Rebekah</p>
                <p>
                    <strong>Email:</strong>{' '}
                    <a
                        className="text-purple-700"
                        href="mailto:rebekahdavis0309@gmail.com"
                    >
                        rebekahdavis0309@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
}
