import React from 'react'
import Services from './style'
import SectionTitle from './Components/SectionTitle'
import { Col, Container, Row } from "react-bootstrap"
import ServicesCard from "./Components/Card"
import ServicesCardTwo from "./Components/CardTwo"
import { ServiceDataIt } from "~data"
export default function ServicesSection({ServiceDataIt}){
return(
<Services backgroundColor="#F6FBFF">
  <Container>
    <Row className="justify-content-center">
      <Col className="col-xxl-12 col-xl-12 col-md-12 col-sm-12 text-center">
      <SectionTitle
        // subTitle="Our Services" 
        title="Discover Freelance Opportunities"
        // subTitleProps={{mb:"27px"}}
        titleProps={{mb:"10px",as:"h2"}}
        mb="69px" />
      </Col>
    </Row>
    <Row className="justify-content-center">

    {ServiceDataIt.map(({ title, image, icon, id }) => {
          return (
            <Services.Box mb="25px"
              xs="12"
              className="col-xl-3 col-lg-6 col-md-6 col-sm-9 col-xs-10"
              key={id}
            >
            <ServicesCard
              title={title}
              image={image}
              icon={icon}
              to="/"
            />
          </Services.Box>
          )
        })}
      <Services.Box mb="25px" xs="12" className="col-xl-3 col-lg-4 col-md-6 col-sm-9 col-xs-10">
        {/* <ServicesCardTwo/> */}
      </Services.Box>
    </Row>
  </Container>
</Services>

)
}