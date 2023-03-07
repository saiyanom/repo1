import React from 'react'
import { Col, Container, Row } from "react-bootstrap"
import Video from '~components/VideoModal'
import { Link } from '~components'
import ImageGroup from "./Components/ImageGroup";
import Hero from "./style"
export default function HeroSection(){
return(
<Hero className='hero-height'>
  
  <Container >
    <Row className="align-items-center justify-content-center justify-content-md-start">
      {/* Welcome content Area */}
      <Col xs="12" className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-xs-11">
        <div className="welcome-content welcome-content--l3">
        
          <Hero.Title>Find the <span className='orange-text'>perfect</span><br className="d-none d-xs-block" /> Freelance projects <br className="d-none d-xs-block" /><span  className='orange-text'>for you!</span></Hero.Title>
          <Hero.Text>Join the elite <b>network</b> where <b>great</b> <br className="d-none d-sm-block" />
          <b>freelancers</b> connect with <b>great companies</b></Hero.Text>
            
          <Hero.BtnGroup>
          <Hero.Button className="btn-primary btn-1 text-white" as={Link} target="_blank" to="https://platform.mrkt365.com/register">Join as a freelancer</Hero.Button>
            {/* <Hero.Button className="btn-electric-violet-2 btn-2" as={Link} to="/">Get Started</Hero.Button> */}
          </Hero.BtnGroup>
        </div>
      </Col>
      <Col xs="12" className="col-xxl-7 col-xl-6 col-lg-5 col-md-8 col-6 position-static d-none d-lg-block hero-img1">
          <ImageGroup/>
      </Col>
    </Row>
  </Container>
</Hero>

)
}