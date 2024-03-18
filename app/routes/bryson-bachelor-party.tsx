import Layout from '../components/Layout';
import ContentContainer from '../components/ContentContainer';
import ExternalLink from '~/components/ExternalLink';
import BrysonCollage from '../images/bachelor-collage.png';
import waiverQRCode from '../images/the-porch-qr-code-waiver.png';

export default function BachelorPartyRoute() {
    return (
        <Layout>
            <ContentContainer>
                <article className="prose prose-invert">
                    <h1>🥳 Bryson's Bachelor Party</h1>
                    <h2>👟 Meetup</h2>
                    <p>Saturday, March 23 - 10am</p>
                    <p>Location: TBD</p>
                    <h2>🔫 The Porch</h2>
                    <h3>Scan QR code</h3>
                    <img
                        src={waiverQRCode}
                        alt="Waiver QR Code"
                        className="max-w-xs"
                    />
                    <p>—— OR ——</p>
                    <h3>
                        <a
                            href="https://theporchvenue.com/pages/waiver"
                            className="font-bold no-underline py-3 px-5 bg-green-500 rounded-md inline-block mb-4"
                        >
                            Click here
                        </a>
                    </h3>
                    <ul>
                        <li>
                            <ExternalLink
                                className="m-0"
                                href="https://theporchvenue.com/"
                            >
                                Website
                            </ExternalLink>
                        </li>
                        <li>
                            <ExternalLink
                                className="m-0"
                                href="https://www.google.com/maps/place/The+Porch+Venue/@32.3565973,-96.9100192,15z/data=!4m6!3m5!1s0x864eefddaae64fa1:0xb12a62bdd5ec931d!8m2!3d32.3565973!4d-96.9100192!16s%2Fg%2F11l2hrpbmt?entry=ttu"
                            >
                                1045 Tumbleweed Rd, Waxahachie, TX 75167
                            </ExternalLink>
                        </li>
                        <li>
                            💸 Fee: $900 / 5 = ~$180 (pre-tax)
                            <ul>
                                <li>50 clays per person</li>
                                <li>Shotgun provided</li>
                                <li>50 Shells provided</li>
                                <li>Ear/eye protection provided</li>
                                <li>Safety Captain on site</li>
                                <li>Unlimited axe throwing</li>
                                <li>Outdoor games</li>
                                <li>Complimentary snacks</li>
                                <li>$150 per person</li>
                            </ul>
                        </li>
                    </ul>
                    <h2>🛏️ AirBnb</h2>
                    <ul>
                        <li>
                            <ExternalLink
                                className="m-0"
                                href="https://www.airbnb.com/rooms/790409421506981579"
                            >
                                Rental listing (Grand Prairie, Texas)
                            </ExternalLink>
                        </li>
                        <li>💸 Fee: $325 / 5 = ~$65 (pre-tax)</li>
                        <li>
                            Activities
                            <ul>
                                <li>Drinks</li>
                                <li>Cigars</li>
                                <li>Swimming</li>
                                <li>Xbox</li>
                                <li>Hot sauce challenge</li>
                            </ul>
                        </li>
                    </ul>
                    <h2>🏁 Finish</h2>
                    <p>End: 3/24/24 ~4pm</p>
                    <hr className="my-8" />
                    <h2>🎈 Let's celebrate Bryson!</h2>
                    <img src={BrysonCollage} alt="Bryson collage" />
                </article>
            </ContentContainer>
        </Layout>
    );
}
