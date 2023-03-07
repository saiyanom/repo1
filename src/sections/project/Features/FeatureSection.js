
import React from 'react'
import { Tab, Nav, Container, Col, Row} from "react-bootstrap";
import FeatureTabPenLayout from './Components/FeatureTabPenLayout'
import FeatureImage from './Components/FeatureImages'
import Feature from './style'
import featureSectionData from '~data/project/features'
import FeatureWidgetsBlock from './Components/FeatureWidgetsBlock'
export default function FeatureSection(){
return(
<Feature background="#6a26da">
  <Container className="container">
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
        >
    <Feature.Tab>
    <Feature.Title as="h2" fontColor="#fff">Discover Internship Opportunites</Feature.Title>
      <Row className="justify-content-center">
        {/* <img src="image/home-startup/interns-frame-2.png" /> */}
        <p>With the help of the MRKT365 internship program, students can gain valuable experience. They'll be working on a variety of projects that accelerate their career growth and prepare them for what's ahead.</p>
        {/* <img src="image/home-startup/interns-frame-1.png" /> */}
      </Row>
    </Feature.Tab>
      </Tab.Container>
  </Container>
</Feature>
)
}