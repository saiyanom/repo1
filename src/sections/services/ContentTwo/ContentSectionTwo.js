import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button } from "~styled";
import ImageGroup from './Components/ImageGroup'
import Content from "./style"

export default function ContentSectionTwo({content},{...rest}){
 
  
  return(
<>
<Content backgroundColor="#fff">

   {content.map(row =>{

    return(
    <Container className='Convenience-sect hire-interns-Sec'>
    <Row className={`align-items-center justify-content-space-between white-image ${(row.imagePosition == 'right') ? 'row d-flex flex-row-reverse' : ''} `}>
      <Col xs="10" className="col-xl-6 col-lg-6 col-md-6 col-12 ">
        <div className='image-group wrap-interns1'><ImageGroup imageSrc={row.src} imageAlt={row.alt} mb="60px" mbLG="0"/></div>
      </Col>
      {/* Content Widgets */}
      <Col xs="auto" className=" col-xl-6 col-lg-6 col-md-6 col-12">
        <div className='business-altcard hire-intern-card'>
        <div className='wrap-hire-intern-card'>
        <Content.Title as="h2">{row.title}<br /></Content.Title>
        <div className="resp-img-sec"><ImageGroup  imageSrc={row.src} imageAlt={row.alt} mb="60px" mbLG="0"/></div>
        <Content.Text>{row.text}<br /><br />{row.text2}<br /><br />{row.text3}</Content.Text>
        {/* <Content.Button></Content.Button> */}
        </div>
        </div>
      </Col>
      
    </Row>
    </Container>
    )
   })
   
   
   }
    

  
</Content>

</>
  )
  }




