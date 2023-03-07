import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Feature from './style'
import SectionTitle from './Components/SectionTitle'
import CounterBlock from './Components/CounterBlock'
export default function FeatureSection(){
return(
<Feature backgroundColor="#fff">
  <Container>
    <Row>
      <Col className="col-xl-12 col-lg-12 text-center our-support-tl">
        <Feature.Box>
          <SectionTitle title="Our support" titleProps={{mb:"33px"}}/>
        </Feature.Box>
      </Col>
    </Row>
    
    <Row className="align-items-center justify-content-center">
      <Col xs="12" className="col-lg-6 col-md-6">
        <Feature.Image mb="30px">
          <img className="w-100" src="https://dzekq3sbbgf19.cloudfront.net/public/image/it-services/feature-l3-image.png" alt="it-service"/>
        </Feature.Image>
      </Col>
      <Col className="col-lg-6 col-md-6">
        <Feature.Box>
          <CounterBlock mt="50px"/>
        </Feature.Box>
      </Col>
    </Row>
  </Container>
</Feature>

)
}