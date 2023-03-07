import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Hero from "./style";
import Video from "~components/VideoModal";
import { Link } from "~components";

export default function HeroSection({headerimage,herotextBold,herotextBold2,herotextBold3, herotitle,herotitle2,herotext1, herotext2, herotext3, imageClass},{ ...rest }) {
  return (
    <Hero className="hero-height virtualPrep-sec" {...rest}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-xs-12 order-2 order-lg-1">
            <Hero.Content className="PVC-hero-sec">
             
              <Hero.Title as="h2">
              {herotitle}<br />
              <span className="orange-text">{herotitle2}</span>
              </Hero.Title>
              <Hero.Text>
              {herotext1}
              <b>{herotextBold}</b>
                <br className="d-none d-xs-block" />{herotext2}
              <b>{herotextBold2}</b>
                <br className="d-none d-xs-block" />{herotext3}
              <b>{herotextBold3}</b>
              
             
              </Hero.Text>
              <Hero.Buttons mt="30px" mtLG="50px" >
                <Hero.Button
                  className="btn-hero-affiliate btn-affi-hero1"
                  to="https://nut.sh/ell/forms/336538/dM4Eal"
                  as={Link}
                  target="_blank"
                >
                  Apply Now
                </Hero.Button>
                <Hero.Button className="btn-hero-affiliate btn-affi-hero2" target="_blank" to="https://calendly.com/mrkt365-onboarding-team/book-a-platform-demo" as={Link}>
                Schedule a Call
                </Hero.Button>
              </Hero.Buttons>
            </Hero.Content>
          </Col>
          <Col
            xs="12"
            className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-xs-12 order-1 order-lg-2"
          >
            <Hero.Video
              className={`welcome-img welcome-img--l9 video-box ${imageClass}`}
              mb="30px"
              mbLG="0"
            >
              <img
                src={headerimage}
                // src="image/home-startup/header-image.jpg"
                alt="content"
                className="w-100"
              />
              {/* Video Button */}
              {/* <Video id="LWZ7iytIA6k" className="video-btn">
                <i className="fa fa-play" />
              </Video> */}
            </Hero.Video>
          </Col>
        </Row>
      </Container>
    </Hero>
  );
}
