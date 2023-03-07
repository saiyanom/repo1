import React from 'react'
import Content from './style'
import SectionTitle from './Components/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
import handleViewport from 'react-in-viewport';

const Block = (props) => {
  const { inViewport, forwardedRef } = props;
  console.log(inViewport, "ivp")
  const video = inViewport ?
    <video controlsList='nodownload nofullscreen noremoteplayback' loop autoPlay preload="false" playsInline tabindex="0" className='cc-video' muted>
      <source src="video/Payoneer.mp4" type="video/mp4"></source>
    </video> : <></>
  return <div ref={forwardedRef} style={{ minHeight: "350px" }}>{video}</div>
};

const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

export default function   ContentSectionOne(){

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = React.useState(getWindowSize());

  React.useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

return(
<Content>
  <Container className='get-paid-securly'>
    <Row className="align-items-center justify-content-center " >
      <div className='d-flex section1'>
      <Col className="col-xl-7 col-lg-7 col-md-7 col-xs-7 order-2 order-lg-1 secfull767">
        <Content.Box className="txt-card1">
        <SectionTitle title="Stand" respImg="https://dzekq3sbbgf19.cloudfront.net/public/image/it-services/mrkt-phone.png" title2="out" text="Create a professional landing page to manage and show off your skills, share your past work, and let potential clients know a little more about yourself. Enrich your profile by sharing your education, adding packages you offer, and creating a video interview about yourself to help you stand out."
        titleProps={{mb:"10px",as:"h2"}}
        mb="69px" />
        </Content.Box>
        
      </Col>
      <Col xs="12" className="col-xl-5 col-lg-5 col-md-5 col-xs-5 order-1 order-lg-2 sec767none">
      <div className='desk-imageGroup'>
        <Content.Image className="image-card1 mrkt-phone1">
          <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/it-services/mrkt-phone.png"  alt="content" className="w-100  resp-image"/>
        </Content.Image>
      </div>        
      </Col>
      </div>
    </Row>

    <Row className="align-items-center justify-content-center freelancer-alt-card">
      <div className=" d-flex main-container">
      <Col  className="col-xl-6 col-lg-6 col-md-6 col-xs-7 order-1 order-lg-1 sec767none">
        <div className='desk-imageGroup'>
          <Content.Image className="image-card2">
            <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/it-services/screen1.png"   alt="content" className="resp-image main-img1 w-100"/>
          </Content.Image>
        </div>
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-5 order-2 order-lg-2 secfull767">
        <Content.Box className="text-card2">
        <SectionTitle title="Build" title2="relationships" respImg="https://dzekq3sbbgf19.cloudfront.net/public/image/it-services/screen1.png" text="Collaborate with clients on our messenger. Our platform provides fast, simple, and secure messaging and file sharing for free. Receive notifications for project invites, payments, and more. Join MRKT365 and connect with the best entrepreneurs around the world!"
        titleProps={{mb:"10px",as:"h2"}}
        mb="69px" />
        </Content.Box>
        
      </Col>
      </div>
    </Row>

    <Row className="align-items-center justify-content-center messaging-sys">
    <div className=" d-flex main-section3" >
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-1 secfull767">
        <Content.Box className="txt-card5">
        <h3><span className='blue-h3'>Messaging</span> system</h3>
        <div className='rsp-image'>
           <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/it-services/screen7.png"  alt="content" className="resp-image main-img5 w-100"/>
        </div>
        <p>Immediately be notified about any job opportunities from clients eager to work with you. Easily view the terms and conditions of every project to make sure both parties' expectations are aligned and met. Have the freedom to choose which projects to work on, on your terms.</p>
        </Content.Box>
        
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-2 sec767none">
        <div className='desk-imageGroup'>
          <Content.Image className="image-card5">
            <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/it-services/screen7.png"  alt="content" className="resp-image main-img5 w-100"/>
          </Content.Image>
        </div>
      </Col>
    </div>
    </Row>

    <Row className="align-items-center justify-content-center proof-work">
    <div className=" d-flex main-section3" >
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-2 secfull767">
      <Content.Box className="txt-card4">
        <h3><span className='blue-h3'>Proof</span> of work</h3>
        <div className='rsp-image'>
          <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/it-services/screen6.png"  alt="content" className="resp-image main-img5 w-100"/>
        </div>
        <p>Use our Time Tracking App to log your work hours automatically. Keep clients updated with a work journal associated with your daily tasks. Stop being underpaid and start receiving compensation for your hard hourly work!</p>
        </Content.Box>
        
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-1 sec767none">
        <div className='desk-imageGroup'>
          <Content.Image className="image-card5">
            <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/it-services/screen6.png"  alt="content" className="resp-image main-img5 w-100"/>
          </Content.Image>
        </div>
      </Col>
    </div>
    </Row>

    <Row className="align-items-center justify-content-center freelancer-alt-card">
    <div className=" d-flex main-section3 main-container2 ">
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-2 sec767none">
        <div className='desk-imageGroup'>

          <Content.Image className="image-card4">
            {/* <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/it-services/blank.png"  alt="content" className="resp-image main-img4 w-100"/> */}
            <div className='cellphone-video'>
            {windowSize.innerWidth > 768 ? <video loop autoPlay>
              <source
                src="video/Payoneer.mp4"
                type="video/mp4"
              />
            </video>: null}
          </div>
          </Content.Image>
        </div>
      </Col>
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-1 secfull767 get-paid-sec">
        <Content.Box className="txt-card6">
        <div className='rsp-image'>
          <h3>Get paid <b>securely</b></h3>
          <div className='cellphone-video'>
            <ViewportBlock/>
          </div>
          <p>Accept payments quickly, easily, and securely with Payoneer. Our partnership with Payoneer gives us the ability to make funds promptly available to you when earned. We handle the billing and invoicing with clients, so you can focus on more important tasks. Get paid on time, every time with MRKT365!</p>
        </div>
        
        <div className='resp-sec'>
          <SectionTitle title="Get paid" title2="securely" text="Accept payments quickly, easily, and securely with Payoneer. Our partnership with Payoneer gives us the ability to make funds promptly available to you when earned. We handle the billing and invoicing with clients, so you can focus on more important tasks. Get paid on time, every time with MRKT365!"
        titleProps={{mb:"10px",as:"h2"}}
        mb="69px" />
       </div>
        </Content.Box>
      </Col>
    </div>
    </Row>

   

  </Container>
</Content>
)
}