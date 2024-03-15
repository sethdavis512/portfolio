import Layout from '../components/Layout';
import ContentContainer from '../components/ContentContainer';
import ExternalLink from '~/components/ExternalLink';
import BrysonCollage from '../images/bachelor-collage.png';

export default function BachelorPartyRoute() {
    return (
        <Layout>
            <ContentContainer>
                <article className="prose prose-invert">
                    <h1>🥳 Bryson's Bachelor Party</h1>
                    <p>Kickoff: 3/23/24 ~10am</p>
                    <p>End: 3/24/24 ~4pm</p>
                    <h2>🔫 The Porch</h2>
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
                            💸 Fee: $1200 / 5 = ~$240 (pre-tax)
                            <ul>
                                <li>100 clays per person</li>
                                <li>Shotgun provided</li>
                                <li>100 Shells provided</li>
                                <li>Ear/eye protection provided</li>
                                <li>Safety Captain on site</li>
                                <li>Complimentary snacks</li>
                            </ul>
                        </li>
                    </ul>
                    <h2>🛏️ AirBnb</h2>
                    <ul>
                        <li>
                            <ExternalLink
                                className="m-0"
                                href="https://www.airbnb.com/rooms/1031215802724612092?adults=6&check_in=2024-03-23&check_out=2024-03-24"
                            >
                                Rental listing (Dallas, Texas)
                            </ExternalLink>
                        </li>
                        <li>
                            💸 Fee: $325 / 5 = ~$65 (pre-tax)
                            <ul>
                                <li>16+ guests</li>
                                <li>3 bedrooms</li>
                                <li>8 beds</li>
                                <li>1 bath</li>
                                <li>Pool</li>
                                <li>1 free parking spot</li>
                                <li>Wifi</li>
                            </ul>
                        </li>
                    </ul>
                    <hr className="my-8" />
                    <h2>🎈 Let's celebrate Bryson!</h2>

                    <img src={BrysonCollage} alt="Bryson collage" />
                </article>
            </ContentContainer>
        </Layout>
    );
}
