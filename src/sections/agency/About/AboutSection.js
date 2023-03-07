import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from '~components';
import About from './style'
import SectionTitle from './Components/SectionTitle'
import Video from '~components/VideoModal';
export default function AboutSection(){
return(
<About className='recruiters-sec'>
  <Container>
    <Row className="align-items-center section-cards ">
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
        <div className='desk-imageGroup'>
        <About.Image className="recruitment-image1">
          <img className="w-100" src="https://dzekq3sbbgf19.cloudfront.net/public/image/recruitment-agency/graph.png" alt="about"/>
          {/* <Video id="LWZ7iytIA6k" className="video-btn sonar-emitter"> <i className="fa fa-play" /> </Video> */}
        </About.Image>
        </div>
      </Col>
      <Col col="12" className="col-xxl-6 col-lg-6 col-md-6 col-xs-12">
        <About.Content  mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px" className="para1 recruit1">
          <h1> <b>High commissions</b> <br /> with no deadlines</h1>
          <div className='resp-imagegroup1'>
          <About.Image className="recruitment-image1">
            <img className="w-100" src="https://dzekq3sbbgf19.cloudfront.net/public/image/recruitment-agency/graph.png" alt="about"/>
            {/* <Video id="LWZ7iytIA6k" className="video-btn sonar-emitter"> <i className="fa fa-play" /> </Video> */}
          </About.Image>
          </div>
          <p>Earn affiliate income from both ends of any deal. Bring new freelancers or clients. Affiliate contracts have no time deadlines and are eligible for up to $1,000 per referred user. The more talented each referred user is, the faster you earn!</p>
        </About.Content>
      </Col>
    </Row>

    <Row className="align-items-center section-cards section2">
      
      <Col col="12" className="col-xxl-6 col-lg-6 col-md-6 col-xs-12">
        <About.Content mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px" className="about-text-card2 recruit1">
          <h1>Receive marketing <br /><b>material templates</b></h1>
          <div className='resp-imagegroup1'>
        <About.Image >
          <img className="w-100" src="https://dzekq3sbbgf19.cloudfront.net/public/image/recruitment-agency/social-cubes.jpg" alt="about"/>
          {/* <Video id="LWZ7iytIA6k" className="video-btn sonar-emitter"> <i className="fa fa-play" /> </Video> */}
        </About.Image>
        </div>
          <p>Get access to a complete marketing kit to help you promote MRKT365 and explain to your contacts the benefits of our platform. Receives ready-made email, banner ads, SMS messages, and more with your own personalized signup link.</p>
        </About.Content>    
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
      <div className='desk-imageGroup'>
        <About.Image >
          <img className="w-100" src="https://dzekq3sbbgf19.cloudfront.net/public/image/recruitment-agency/social-cubes.jpg" alt="about"/>
          {/* <Video id="LWZ7iytIA6k" className="video-btn sonar-emitter"> <i className="fa fa-play" /> </Video> */}
        </About.Image>
        </div>
      </Col>
    </Row>

    <Row className="align-items-center section-cards">
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
      <div className='desk-imageGroup'>
        <About.Image className="image-about-1">
          <img className="w-100" src="https://dzekq3sbbgf19.cloudfront.net/public/image/recruitment-agency/screen1.png" alt="about"/>
          {/* <Video id="LWZ7iytIA6k" className="video-btn sonar-emitter"> <i className="fa fa-play" /> </Video> */}
        </About.Image>
        </div>
      </Col>
      <Col col="12" className="col-xxl-6 col-lg-6 col-md-6 col-xs-12">
        <About.Content mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px" className="about-text-card3 recruit1">
        <h1><b>Monitor & manage</b><br />your workforce<br /></h1>
        <div className='resp-imagegroup1'>
        <About.Image className="image-about-1">
          <img className="w-100" src="https://dzekq3sbbgf19.cloudfront.net/public/image/recruitment-agency/screen1.png" alt="about"/>
          {/* <Video id="LWZ7iytIA6k" className="video-btn sonar-emitter"> <i className="fa fa-play" /> </Video> */}
        </About.Image>
        </div>
          <p>All vendors hired on our platform can be monitored with our easy-to-use tracking app. Automate project management so your staff and clients can measure productivity and simplify the billing process when hiring contractors.</p>
        </About.Content>
      </Col>
    </Row>

    <Row className="align-items-center section-cards section2 last">
      
      <Col col="12" className="col-xxl-6 col-lg-6 col-md-6 col-xs-12">
        <About.Content mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px" className="about-text-card2 recruit1">
          <h1>Track results with our <br /><b>Affiliate dashboard</b></h1>
          <div className='resp-imagegroup1'>
        <About.Image className="image2 ">
          <img className="w-100" src="https://dzekq3sbbgf19.cloudfront.net/public/image/recruitment-agency/screen4.png" alt="about"/>
          {/* <Video id="LWZ7iytIA6k" className="video-btn sonar-emitter"> <i className="fa fa-play" /> </Video> */}
        </About.Image>
        </div>
          <p>Save time by logging into one easy-to-use affiliate dashboard. Affiliates can track their network's progress in real-time. Accurately monitor your prospective referrals by viewing their current clicks, leads, and sales.</p>
        </About.Content>    
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
      <div className='desk-imageGroup'>
        <About.Image className="image2 ">
          <img className="w-100" src="https://dzekq3sbbgf19.cloudfront.net/public/image/recruitment-agency/screen4.png" alt="about"/>
          {/* <Video id="LWZ7iytIA6k" className="video-btn sonar-emitter"> <i className="fa fa-play" /> </Video> */}
        </About.Image>
        </div>
      </Col>
    </Row>
    {/*/ .about-us Content */}
  </Container>
</About>

)
}
