import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "~components";
import Hero from "./style";

export default function HeroSectionMarketplace() {
    const goToMarketPlace = () => {
        var current_location = window.location;

        var final_url = "https://platform.mrkt365.com/marketplace/search";

        if (current_location.hostname.startsWith("localhost")) {
            final_url = "http://localhost:3000/marketplace/search";
        } else if (current_location.hostname.startsWith("qa")) {
            final_url = "https://qa.platform.mrkt365.com/marketplace/search";
        }

        window.open(final_url);
    };
    // just checking again

    return (
        <Hero className="hero-height">
            <Container>
                <Row>
                    <Col className="col-xl-7">
                        <Hero.Content>
                            <Hero.Title as="h1" fontColor="#000">
                                <b>AI powered </b> <br />Talent Marketplace
                            </Hero.Title>
                            <Hero.Text fontColor="#000">
                            Browse our<b> extensive talent pool</b> and get <b>personalized</b>
                                <br className="d-none d-xs-block" />recommendations for<b> freelancers, agencies, </b>and <b>interns.</b>
                            </Hero.Text>
                            <Hero.Box>
                            <Hero.Button className="agency-btn1" target="_blank" as={Link} to="https://platform.mrkt365.com/register">
                                Find Talent
                            </Hero.Button>
                            <Hero.Button className="agency-btn2 mrt" target="_blank" as={Link} to="https://calendly.com/mrkt365-onboarding-team/book-a-platform-demo">
                                Book a Demo
                            </Hero.Button>
                            </Hero.Box>
                        </Hero.Content>
                    </Col>
                    <Col className="col-xl-5 hero-right">
                        <div className="hero-image">
                        <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/ai-market/hero-image.png" alt="ai hero image" className="w-100"></img>
                        </div>
                    </Col>

                </Row>
            </Container>
        </Hero>
    );
}
