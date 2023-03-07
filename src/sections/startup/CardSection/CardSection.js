import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import ServiceData  from "~data/startup/service"
import Service from './style'
import SectionTitle from './Components/SectionTitle'
import  ServicesCard from "./Components/Card"
export default function CardSection({content, title}){
return(
<Service>
  <Container>
    {/* <Row className="justify-content-center">
      <Col className="col-xl-8 text-center">
        <SectionTitle 
        // subTitle="Our Services" 
        title={title}
        titleProps={{mb:"40px", mbLG:"75px"}}
        // subTitleProps={{mb:"10px", className:"subline"}}
        />
      </Col>
    </Row> */}
    <Row className="justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-duration={500} data-aos-delay={500} data-aos-once="true">
      {/* Single Services */}
      {content.map(({ title, icon, image, text, id, iconBackground }) => {
              return (
              <Col xs="h2" className="col-xl-4 col-lg-4 col-sm-4 col-xs-8" key={id}>
                <ServicesCard className="PVC-cardsection"
                  title={title}
                  text={text}
                  icon={icon}
                  image={image}
                  // iconBackground={iconBackground}
                />
              </Col>
              )
            })}
      {/*/ .Single Services */}
    </Row>
  </Container>
</Service>

)
}