import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import ServiceData  from "~data/startup/service"
import Service from './style'
import SectionTitle from './Components/SectionTitle'
import  ServicesCard from "./Components/Content"
export default function ContentSectionTwo({content, title,title2}){
return(
<Service className='Hire-Freelancers'>
  <Container >
    <Row >
      <Col className="col-xl-12">
        <SectionTitle 
        // subTitle="Our Services" 
        title={title}
        title2={title2}
        titleProps={{mb:"40px", mbLG:"75px"}}
        // subTitleProps={{mb:"10px", className:"subline"}}
        />
      </Col>
    </Row>
    <Row className="justify-content-center aos-init aos-animate talent-MarCard1" data-aos="fade-up" data-aos-duration={500} data-aos-delay={500} data-aos-once="true">
      {/* Single Services */}
      {content.map(({ title, image, id }) => {
              return (
              <Col xs="h2" className="col-xl-4 col-lg-4 col-sm-4 col-xs-8" key={id}>
                <ServicesCard
                  title={title}
                  image={image}
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