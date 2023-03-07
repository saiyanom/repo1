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
          <Testimonial.Title fontColor="#262729" as="h2">MRKT365 <b>Reloadable Virtual Prepaid Cards </b><br /> for your online spends</Testimonial.Title>
          <Testimonial.Content>
        <p className="affiliate-para">As a part of our mission, we are making online marketing accessible to all businesses in developing and developed countries. In many countries, the credit card decline rate is between 25-75% according to Google. These credit card fraud rates have prevented millions of legitimate businesses and freelancers from growing their businesses online. To assist legitimate businesses, MRKT365 has partnered with Visa and Amex to provide prepaid virtual cards. We are opening the market to many new advertisers and agencies that currently can’t advertise due to the restrictive billing policies of their countries.z</p>
        </Testimonial.Content>
        </Testimonial.Box> 
      </Col>
    </Row>
  </Container>
</Testimonial>

)
}