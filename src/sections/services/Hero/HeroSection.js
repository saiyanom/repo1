import React from 'react'
// import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap'
import { Form, Link } from '~components'
import { Button } from "~styled";
import Hero from './style'

export default function HeroSection(){
return(
<Hero className='hero-height' style={{backgroundImage: ``}}>
  <Container>
    <Row className="align-items-center justify-content-center justify-content-md-start">
      {/* Welcome content Area */}
      <Col className="col-xxl-7 col-xl-7 col-lg-9 col-md-10">
        <Hero.Content className="business-hero">
          <Hero.Title as="h2" fontColor="#ff5722">All-in-one <br className="d-none d-sm-block" /><span className="black-text" > business solution </span></Hero.Title>
          <Hero.Text fontColor="#fff"> Find Great <b>talent.</b> Automate your <b>marketing.</b> <br className="d-none d-sm-block" />Take your Business to the <b>next level.</b></Hero.Text>
          {/* Newsletter */}
          <Hero.Newsletter mt="40px">
            <Form className="hero-form d-flex justify-content-center flex-row">
              <Hero.Box className="d-flex">
                      {/* <input type={"email"} name={"email"} placeholder="Enter your email" className="form-control"/> */}
                     <a href="https://platform.mrkt365.com/register" target="_blank" className="close-btn close" textTransform="capitalized">Start Now</a>
                      <a href="https://calendly.com/mrkt365-onboarding-team/book-a-platform-demo" target="_blank" className="close2 close2-btn" textTransform="capitalized">Book a Demo</a>
                    
              </Hero.Box>
              {/* <Hero.NewsletterButton className="btn-torch-red" as={Link} to="/">Start for free</Hero.NewsletterButton> */}
            </Form>
            {/* <Hero.NewsletterText>Get latest templates right at your inbox</Hero.NewsletterText> */}
          </Hero.Newsletter>
          {/*/ .Newsletter */}
        </Hero.Content>
      </Col>
      {/*/ .Welcome Content Area */}
    </Row>
  </Container>
</Hero>

)
}