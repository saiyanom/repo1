import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button } from "~styled";
import ImageGroup from './Components/ImageGroup'
import Content from "./style"

import handleViewport from 'react-in-viewport';

const Block = (props) => {
  const { inViewport, forwardedRef } = props;
  console.log(inViewport, "ivp")
  const video = inViewport ?
    <video controlsList='nodownload nofullscreen noremoteplayback' id="mobileVideo" loop autoPlay preload="false" disablePictureInPicture playsInline tabindex="0" className='cc-video' muted>
      <source src="video/Brain.mp4" type="video/mp4"></source>
    </video> : <></>
  return <div ref={forwardedRef} style={{ minHeight: "370px" }}>{video}</div>
};

const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

export default function ContentSectionOne({ heading }, { ...rest }) {

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


  return (
    <>
      <Content backgroundColor="#fff" className='business-sec-altcards'>
        <h2 className='top-head text-center business-content-sec'>{heading}</h2>
        <div>
          <Container>
            <Row className="align-items-center justify-content-center white-image first-business-sec">
              <Col xs="10" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 sec767none">
                <div className='desk-imageGroup'>
                  <ImageGroup imageclass="w-100" imageSrc="https://dzekq3sbbgf19.cloudfront.net/public/image/marketing/screen1.png" imageAlt="" mb="60px" mbLG="0" />
                </div>
              </Col>
              {/* <Col className="col-md-1"></Col> */}
              {/* Content Widgets */}
              <Col xs="auto" className="col-xxl-6 col-xl-6  col-lg-6  col-md-6 col-xs-6 secfull767 business-altcard">
                <div className='business-text-sec'>
                  <Content.Title as="h2">Hire <b>world-class </b>talent</Content.Title>
                  <div className='resp-imagegroup1'><ImageGroup imageclass="w-100" imageSrc="https://dzekq3sbbgf19.cloudfront.net/public/image/marketing/screen1.png" imageAlt="" mb="60px" mbLG="0" /></div>
                  <Content.Text>We ensure that the talent you hire are the ones doing the project and not subcontractors, using extensive profile and task verification. Our talent marketplace is populated by top freelancers, agencies, and interns at all price points. Receive AI recommendations when hiring. Our network offers flexible engagements like hourly, fixed price, to full-time work.</Content.Text>
                  <a className='learn-btn-Center' href="/talent-marketplace"><Button className="blue-close" textTransform="capitalized">Learn More</Button></a>
                  {/* <Content.Button></Content.Button> */}
                </div>
              </Col>
            </Row>
          </Container>

          <div className='video-sec business-video type02'>
            <Container>
              <Row className="align-items-center justify-content-center white-image">

                {/* Content Widgets */}
                <Col xs="auto" className="col-xxl-6 col-xl-6  col-lg-6  col-md-6 col-xs-6 order-2 order-lg-1 secfull767 business-altcard video-card-text">
                  <Content.Title as="h2"><b>Get</b> one or more<br /><b>Virtual Prepaid Cards</b></Content.Title>
                  <div className='resp-imagegroup1'>
                    <ImageGroup imageclass="vpc-image" imageSrc="https://dzekq3sbbgf19.cloudfront.net/public/image/businesses/virtual-card.png" imageAlt="" mb="60px" mbLG="0" />
                  </div>
                  <Content.Text>Take control of your budget and use it more efficiently. Receive a cashback when using our virtual prepaid cards. We have partnered with US Bank and Visa to provide our clients with prepaid virtual cards for their online marketing needs instead of using their personal credit cards. Hand out virtual prepaid cards to your managers & decision makers while controlling their spending.</Content.Text>
                  <a className='learn-btn-Center' href="/prepaid-virtual-cards" ><Button className="blue-close blueclose-btn" textTransform="capitalized">Learn More</Button></a >
                  {/* <Content.Button></Content.Button> */}
                </Col>
                {/* <Col className="col-md-2"></Col> */}

                <Col xs="10" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-2 sec767none">
                  {/* <video loop autoPlay className='cc-video'>
        <source
          src="video/mrkt-cc.mp4"
          type="video/mp4"
        />
      </video> */}
                  <div className='desk-imageGroup vpcImageSec1'>
                    <ImageGroup imageclass="vpc-image" imageSrc="https://dzekq3sbbgf19.cloudfront.net/public/image/businesses/virtual-card.png" imageAlt="" mb="60px" mbLG="0" />
                  </div>

                </Col>
              </Row>
            </Container>
          </div>

          <Container>
            <Row className="align-items-center justify-content-center white-image first-business-sec">
              <Col xs="10" className="col-xl-5 col-lg-5 col-md-5 col-xs-5 sec767none">
                <div className='desk-imageGroup'>
                  {windowSize.innerWidth > 768 ? <video loop autoPlay className='cc-video'>
                    <source
                      src="video/Brain.mp4"
                      type="video/mp4"
                    />
                  </video> : null}
                </div>
              </Col>
              <Col className="col-md-1 sec767none"></Col>
              {/* Content Widgets */}
              <Col xs="auto" className="col-xxl-6 col-xl-6  col-lg-6  col-md-6 col-xs-6 secfull767 business-altcard">
                <div className='business-text-sec'>
                  <Content.Title as="h2">Get <b>faster, smarter</b><br /><b> AI marketing </b>solutions</Content.Title>
                  <div className='resp-imagegroup1'>
                    <ViewportBlock />
                  </div>
                  <Content.Text>Our AI Auditor delivers objective insights into your business's marketing campaigns. Use AI to quickly identify on-site SEO, technical SEO, SEM, and social media marketing issues holding you back. Get connected to freelancers and agencies based on your unique needs. Take your business to the next level.</Content.Text>
                  <a className='learn-btn-Center' href="/seo-auditor" ><Button className="blue-close blueclose-btn" textTransform="capitalized">Learn More</Button></a>
                  {/* <Content.Button></Content.Button> */}
                </div>
              </Col>
            </Row>
          </Container>

        </div>

      </Content>

    </>
  )
}
