import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "~components";
import Hero from "./style";

export default function HeroSectionMarketplace() {
  return (
    <Hero className="hero-height trackImprove-sec">
      <Container>
        <Row>
            <Hero.Content className="left">
              <Hero.Title as="h1" fontColor="#000">
              <b>Employee Monitoring</b><br /> software 
              </Hero.Title>
              <Hero.Text fontColor="#000">
              Improve remote team productivity with<br/> employee tracking software


              </Hero.Text>
              <Hero.Button className="agency-btn1" target="_blank" as={Link} to="https://platform.mrkt365.com/register">
                Start Now
              </Hero.Button>
              <Hero.Button className="agency-btn2" target="_blank" as={Link} to="https://calendly.com/mrkt365-onboarding-team/book-a-platform-demo">
                Book a Demo
              </Hero.Button>
            </Hero.Content>
        </Row>
      </Container>
    </Hero>
  );
}
