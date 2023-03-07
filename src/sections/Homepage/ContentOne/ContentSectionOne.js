import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button } from "~styled";
import ImageGroup from './Components/ImageGroup'
import Content from "./style"
// import Image from "next/image"

export default function ContentSectionOne({heading,content},{...rest}){
 
  
  return(
<>
<Content backgroundColor="#fff" className='business-sec-altcards home-p1'>
  <Container>
  <h2 className='top-head  business-content-sec'>One platform for <br/>everyone & everything</h2>
  </Container>

   {content.map(row =>{
     
     return(
       <div className={`${row.bgclass}`}>
    <Container>
    <Row className={`${row.newclass} justify-content-center white-image ${(row.imagePosition == 'right') ? 'row d-flex flex-row-reverse'  : ''} `}>
      <Col xs="10" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 sec767none">
        <div className="gif-ImageGroup">
        <ImageGroup imageclass={row.imageclass} imageSrc={row.src} imageAlt={row.alt} mb="60px" mbLG="0" />
        <ImageGroup gifimageclass={row.gifimageclass} gifimageSrc={row.gifsrc} gifimageAlt={row.gifalt} mb="60px" mbLG="0" />
        </div>
      </Col>
      <Col className="col-xl-1 col-lg-1 col-md-1 col-xs-1 sec767none"></Col>
      {/* Content Widgets */}
      <Col xs="auto" className="col-xxl-5 col-xl-5  col-lg-5  col-md-5 col-xs-5 secfull767 business-altcard">
        <Content.Title as="h2">{row.title}</Content.Title>

        <div className="resp-imagegroup">
        <ImageGroup imageclass={row.imageclass} imageSrc={row.src} imageAlt={row.alt} mb="60px" mbLG="0" />
        <ImageGroup gifimageclass={row.gifimageclass} gifimageSrc={row.gifsrc} gifimageAlt={row.gifalt} mb="60px" mbLG="0" />
        </div>


        <div className='d-flex alignItem-center'><span className='orange-tick'><img src="https://dzekq3sbbgf19.cloudfront.net/public/image/homepage/Done.svg" /></span><Content.Text>{row.text1}</Content.Text></div>
        <div className='d-flex alignItem-center'><span className='orange-tick'><img src="https://dzekq3sbbgf19.cloudfront.net/public/image/homepage/Done.svg" /></span><Content.Text>{row.text2}</Content.Text></div>
        <div className='d-flex alignItem-center'><span className='orange-tick'><img src="https://dzekq3sbbgf19.cloudfront.net/public/image/homepage/Done.svg" /></span><Content.Text>{row.text3}</Content.Text></div>
        <a className='learn-btn-Center' href={`${row.link}`}><Button className="blue-close" textTransform="capitalized">Learn More</Button></a>

        {/* <Content.Button></Content.Button> */}
      </Col>
      
    </Row>
    </Container>
    </div>
    )
   })
   
   
   }
    

  
</Content>

</>
  )
  }




