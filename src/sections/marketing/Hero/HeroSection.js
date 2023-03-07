import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactTypingEffect from 'react-typing-effect';
import { Link } from "~components";
import { Button } from "~styled";
import ImageGroup from "./Components/ImageGroup";
import Hero from "./style";

export default function HeroSection() {
  return (
      <Hero className="position-relative bg-default hero-height">
        <Container>
          <Row>
            {/* Welcome content Area */}
            <Col
              className="col-xl-6 col-lg-7 col-md-8 col-xs-12 order-2 order-lg-1 homepage-hero"
              xs="12"
            >
              <Hero.Content>
                <Hero.Title as="h1" className="hero-main-title">
                  Get connected with the best
                  <br />
                  <ReactTypingEffect
                    text={["freelancers.","businesses." ,"agencies.","interns."]}
                    className="highlight-text d-inline-block text-primary"
                    speed="150"
                    eraseSpeed="100"
                    typingDelay="400"
                    eraseDelay="800"
                    cursorClassName="typed-cursor"
                  />
                </Hero.Title>
                <Hero.Text>
                Join the Fast-Growing, AI-Powered 
                  <br className="d-none d-xs-block" /> Marketing platform and Talent marketplace
                </Hero.Text>
                {/* Newsletter */}
                <Row>
                  <Col xs="12" className="col-xxl-10">
                    <Hero.Newsletter>
                    <form className="hero-form d-flex  flex-row justify-content-start">
                      {/* <input type={"email"} name={"email"} placeholder="Enter your email" className="form-control"/> */}
                      <Button className="close" textTransform="capitalized" target="_blank" as={Link} to="https://platform.mrkt365.com/register">Start Now</Button>
                      {/* <Button className="close2" textTransform="capitalized">Book a Demo</Button> */}
                    </form>
                  </Hero.Newsletter>
                  {/* <Hero.NewsletterText>
                    By clicking the button, you are agreeing with our <Link to="/innerpage/terms">Terms & Conditions.</Link>
                  </Hero.NewsletterText> */}
                  </Col>
                </Row>
              </Hero.Content>
            </Col>
            {/*/ .Welcome Content Area */}
            {/*Welcome Image Area */}
            <Col xs={12} className="col-xl-6 col-lg-5 col-md-10 order-1 order-lg-2 position-static hero-imagegroup-sec">
              <ImageGroup/>
            </Col>
            {/*/ .Welcome Image Area */}
          </Row>
        </Container>
      </Hero>
  )
}
