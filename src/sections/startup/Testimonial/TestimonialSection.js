import React, { useRef } from 'react'
import Slider from "react-slick"
import TestiomialCard from './Component/Card'
import Testimonial from './style'
import TestimonialData from '~data/startup/testimonial'
import { Container, Row, Col } from 'react-bootstrap'
export default function   TestimonialSection(){
return(
<Testimonial backgroundColor="#fff">
  <Container>
    <Row className="align-items-center justify-content-center ">
      <Col xs="12" className="col-lg-12 col-xl-12 col-xxl-12 text-center">
        <Testimonial.Box >
          <Testimonial.Title fontColor="#262729" as="h2">Why should you become a MRKT365 Affiliate partner?</Testimonial.Title>
          <Testimonial.Content>
        <p className="affiliate-para">The MRKT365 Partners program is an easy way to increase your earnings while helping your network discover meaningful jobs or introducing them to great talent. Discover multiple new sources of affiliate revenue.</p>
        </Testimonial.Content>
        </Testimonial.Box> 
      </Col>
    </Row>
  </Container>
</Testimonial>

)
}