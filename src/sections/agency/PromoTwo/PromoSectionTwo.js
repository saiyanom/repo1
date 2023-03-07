import React from 'react'
import Promo from './style'
import { Col, Container, Row } from 'react-bootstrap'
 
export default function PromoSection({...rest}){
return(
<Promo>
 
    <Row className="justify-content-center pt-0 pb-0">
      <Col className="col-xl-12 text-center">
        <Promo.InnerWrapper className="background-image-opac" style={{backgroundImage: `url("image/home-agency/hire-interns-bgimage.jpg")`}}>
            {/* <Promo.Subtitle fontColor="#ffce3e">Booking</Promo.Subtitle> */}
            <Container>
                <Col className="col-md-8 col-lg-12 inner-promo-sec">
                <Promo.Title as="h2" fontColor="#000" class="head-promo">Hire Interns to fill in<br /> the gaps</Promo.Title>
                 <Promo.Text fontColor="#000">Hire diverse early-career talent with MRKT365 from around the world with virtual internships. Our marketplace enables organizations to work with remote interns from global universities Want to focus your time on quality, and not quantity? Use our video interview features to digitally screen interns before the actual interview. Find the most engaged interns with MRKT365!
                  
                 </Promo.Text>
                </Col>
           </Container>
            {/* <Promo.Button className="btn-torch-red"  as="a"  href="#"  sizeX="180px" sizeY="56px" mt="20px">Booking</Promo.Button> */}
        </Promo.InnerWrapper>
      </Col>
    </Row>
  
</Promo>

)
}