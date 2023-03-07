import React from "react";
import TestiomialCard from "./Components/Card";
import SectionTitle from "./Components/SectionTitle";
import Testimonial from "./style";
import { Col, Container, Row } from "react-bootstrap";
export default function TestimonialSection() {
  return (
    <Testimonial backgroundColor="#F6FBFF">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-lg-10 col-xl-10 col-xxl-10 text-center">
            <SectionTitle
             
              title="What The People Thinks About Us"
             
              titleProps={{ mb: "10px", as: "h2" }}
             
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="col-xl-4 col-md-6">
            <TestiomialCard
              image="image/home-digital-agency/testimonial-1.png"
              text="OMG! I cannot believe that I have got a brand new landing page after getting @Fastland!"
              userName="Jonathon Tyler"
              userPosition="CEO at Creativex"
            />
          </Col>
          <Col className="col-xl-4 col-md-6">
            <TestiomialCard
              image="image/home-digital-agency/testimonial-2.png"
              text="@Fastland is great for creating landing pages within minutes! It actually takes less time."
              userName="Angela Park"
              userPosition="CEO at Orbital"
            />
          </Col>
          <Col className="col-xl-4 col-md-6">
            <TestiomialCard
              image="image/home-digital-agency/testimonial-3.png"
              text="Whenever I need to create a new landing page for clients, @Fastland is my solution...!"
              userName="Gavin Brendon"
              userPosition="Freelance Designer"
            />
          </Col>
        </Row>
      </Container>
    </Testimonial>
  );
}
