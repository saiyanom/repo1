import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button } from "~styled";
import ImageGroup from './Components/ImageGroup'
import Content from "./style"

export default function ContentSectionOne({heading,content},{...rest}){
 
  
return(
<>
<Content backgroundColor="#fff" {...rest}>
  <Container>
  <Row className="align-items-center justify-content-left">
            <Col xs="10" className="col-xl-12 col-lg-5 col-md-6 col-xs-8">
                <Content.TitleTwo as="h2" mb="0">
                {heading}
                </Content.TitleTwo>
            </Col>
    </Row>
   { content.map(row =>{

    return(
    <Row className={`align-items-center justify-content-center ${(row.imagePosition == 'right') ? 'row d-flex flex-row-reverse' : ''} `}>
      <Col xs="10" className="col-xl-5 col-lg-5 col-md-6 col-xs-8">
        <ImageGroup imageSrc={row.src} imageAlt={row.alt} mb="60px" mbLG="0"/>
      </Col>
      {/* Content Widgets */}
      <Col xs="auto" className="col-xxl-4 col-xl-5 offset-xl-1 col-lg-6 offset-lg-1 col-md-8 col-xs-9">
        <Content.Title as="h2">{row.title}</Content.Title>
        <Content.Text>{row.text}</Content.Text>
        <Button className="btn-light-blue text-white ContentOne-btn" textTransform="capitalized">Learn More</Button>
        {/* <Content.Button></Content.Button> */}
      </Col>
      
    </Row>
    )
   })
   
   
   }
    

  </Container>
</Content>

</>
)
}