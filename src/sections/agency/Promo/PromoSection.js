import React from 'react'
import Promo from './style'
import { Col, Container, Row } from 'react-bootstrap'
 
export default function PromoSection({...rest}){
return(
<Promo>
  
    <Row className="justify-content-center">
      <Col className="col-xl-12 text-center">
        <Promo.InnerWrapper className="main-box-counter" style={{backgroundImage: `url("image/home-agency/Hire-agencies-bgimage.jpg")`}}>
            {/* <Promo.Subtitle fontColor="#ffce3e">Booking</Promo.Subtitle> */}
          <Container>

           <Col className="col-md-8 col-lg-12 main-promo-sec">
           <Promo.Title as="h2" fontColor="#fff">Hire Agencies <br />for large projects</Promo.Title>
            <Promo.Text fontColor="#fff">MRKT365 is the only resource you need to find the right company. With Reviews, Ratings and Verification, MRKT365 gives you the tools you need to hire agencies with confidence. Get matched with agencies directly or research yourself from a list of verified and reviewed agencies. Read reviews and browse project photos submitted by previous customers. See their whole team online before receiving an offer.
             
            </Promo.Text>
           </Col>
            {/* <Promo.Button className="btn-torch-red"  as="a"  href="#"  sizeX="180px" sizeY="56px" mt="20px">Booking</Promo.Button> */}
          </Container>
        </Promo.InnerWrapper>
      </Col>
    </Row>
  
</Promo>

)
}