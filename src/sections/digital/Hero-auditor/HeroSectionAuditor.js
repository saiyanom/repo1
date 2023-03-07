import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "~components";
import Hero from "./style";

export default function HeroSectionAuditor() {
  return (
    <Hero className="hero-height seo-auditor" backgroundImage="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/ai-auditor-hero.png">
      <Container>
        <Row>
          <Col>
            <Hero.Content>
              <Hero.Title as="h1" fontColor="#000">
              <b>Increase site traffic</b><br /> with our SEO Auditor
              </Hero.Title>
              <Hero.Text>
              <b>Automate</b> your marketing with our <b>AI Auditor.</b><br /> Discover tailored <b>Solutions</b> & recommended<b> Problem Solvers.</b><br />
              </Hero.Text>
             
              <Hero.Button className="agency-btn1" target="_blank" as={Link} to="https://platform.mrkt365.com/register">
               Start Now
              </Hero.Button>
              <Hero.Button className="agency-btn2" target="_blank" as={Link} to="https://calendly.com/mrkt365-onboarding-team/book-a-platform-demo">
                Book a Demo
              </Hero.Button>
            </Hero.Content>
          </Col>
        </Row>
      </Container>
    </Hero>
  );
}
