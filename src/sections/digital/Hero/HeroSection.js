import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "~components";
import Hero from "./style";

export default function HeroSection() {
  const useWidth = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        const onResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);
    return width;
};

const width = useWidth();
  return (
    <Hero className='hero-height'>
      <Container>
        <Row className="align-items-center justify-content-center justify-content-md-start row">
          <Col className="col-xxl-8 col-xl-8 col-lg-9 col-md-10 col">
            <Hero.Content>
              <Hero.Title as="h1" fontColor="#FC6536">
              Optimize and scale <br /><span className="black-text"> your agency</span>
              </Hero.Title>
              <Hero.Text fontColor="#000">
              Sell your <b className="opac-word">services </b>online | Hire specialized <b className="opac-word">freelancers</b> |
              

                <br className="d-none d-xs-block" /> Monitor your <b className="opac-word">employees</b> | Let us become <b className="opac-word">your new favorite site</b>

              </Hero.Text>
              <Hero.Buttons className="agencies-btn">
                {width < 390 ? 
                <>
              <Hero.ButtonBox className="agencies-btn1">
              <Hero.Button className="agency-btn1" as={Link} to="https://platform.mrkt365.com/register">
              Join as an Agency
              </Hero.Button>
              </Hero.ButtonBox>
              <Hero.ButtonBox>
              <Hero.Button className="agency-btn2" as={Link} to="https://calendly.com/mrkt365-onboarding-team/book-a-platform-demo">
                Book a Demo
              </Hero.Button>
              </Hero.ButtonBox>
              </> : 
              <>             
              <Hero.Button className="agency-btn1" as={Link} target="_blank" to="https://platform.mrkt365.com/register">
              Join as an Agency
              </Hero.Button>
              <Hero.Button className="agency-btn2" as={Link} target="_blank" to="https://calendly.com/mrkt365-onboarding-team/book-a-platform-demo">
                Book a Demo
              </Hero.Button>
              </>}
              </Hero.Buttons>
            </Hero.Content>
          </Col>
        </Row>
      </Container>
    </Hero>
  );
}
