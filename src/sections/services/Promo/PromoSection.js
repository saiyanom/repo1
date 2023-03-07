import React from 'react'
import Promo from './style'
import { Col, Container, Row } from 'react-bootstrap'
 
export default function PromoSection({...rest}){
return(
<Promo className='why-create-sec' overlay="https://dzekq3sbbgf19.cloudfront.net/public/image/hire-interns/Ellipse.png">
    <Row className="justify-content-center">
      <Col className="col-xl-12 text-center why-Intership">
        <Promo.InnerWrapper  style={{backgroundImage: `url("https://dzekq3sbbgf19.cloudfront.net/public/image/hire-interns/hire-intern-promo.png")`}}>
         <Container>
            {/* <Promo.Subtitle fontColor="#ffce3e">Booking</Promo.Subtitle> */}
           <Col className="col-md-12 intern-promo-sec">
           <Promo.Title as="h2">Why <b>create</b> an <br /><b>Internship</b> with us?</Promo.Title>
            <Promo.Text fontColor="#262729">We are world leaders in providing virtual internships with startups and agencies.<br className="d-none d-sm-block" /> We partner with leading international universities to source the best interns to hire.<br className="d-none d-sm-block" />
             
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