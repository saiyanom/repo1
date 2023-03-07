import React, { useState, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import dynamic from 'next/dynamic';
import Hero from "./style";
import { Box} from '@material-ui/core';
import { Link } from "~components";

const Modal = dynamic(
  () => import('react-modal'),
  { ssr: false }
)

export default function HeroSection({headerimage,headerimage2,herotitle,herotitle2,imageClass},{ ...rest }) {
  const [isMicrosoftPopup, setIsMicrosoftPopup] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: "50px",
      borderRadius: "50px",
      border: "5px solid blue",
    },
  };

  const openPopup = () => {
setIsMicrosoftPopup(true); 
  }

  const closePopup = () => {
    setIsMicrosoftPopup(false);
  }

  console.log(isMicrosoftPopup)
  return (
    <Hero {...rest}>
          <Fragment>
      <Modal isOpen={isMicrosoftPopup}
        shouldCloseOnOverlayClick={true}
        onRequestClose={closePopup}
        style={customStyles}
        contentLabel="Example Modal" >
          <Hero.XButton onClick={closePopup}>
                  <span style={{position: "relative",
    top: "-1px"}}>x</span>
          </Hero.XButton>
              <Hero.PopupText > <p>Do you have an existing  <br/>Microsoft Account?</p></Hero.PopupText >
              <Hero.PopupButtons>
              <Hero.PopupButton className="popup-btn1" target="_blank" as={Link} to="https://docs.google.com/forms/d/e/1FAIpQLScdqWlrW7-MCvnsTvxMSEG1aCbNWY1c1f1CXWEN4Z0tAOdBjw/viewform"
                >
                  Use Existing Account
                </Hero.PopupButton >
                <Hero.PopupButton className="popup-btn2" target="_blank" as={Link} to="https://docs.google.com/forms/d/e/1FAIpQLScdqWlrW7-MCvnsTvxMSEG1aCbNWY1c1f1CXWEN4Z0tAOdBjw/viewform"
                >
                  Create New Account
                </Hero.PopupButton>
                </Hero.PopupButtons>
                </Modal>
                
    </Fragment>

      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="col-xxl-5 col-xl-6 col-lg-7 col-md-9 col-xs-11 order-2 order-lg-1">
            <Hero.Content className="center-sec2">
             
              <Hero.Title as="h2">
              {herotitle}
              <span>{herotitle2}</span>
              </Hero.Title>
              <Hero.Text>
              <p>Receive a free <b>$250 ad credit</b> on us & reach new audiences on the <b>fastest-growing</b> search network</p>
              
             
              </Hero.Text>
              <Hero.Buttons mt="30px" mtLG="50px">
                <Hero.Button
                  className="btn-hero-affiliate btn-affi-hero1"
                  onClick={openPopup}
                >
                  Claim your $250 credit now!
                </Hero.Button>
                {/* <Hero.Button className="btn-hero-affiliate btn-affi-hero2" to="/" as={Link}>
                  Book a Demo
                </Hero.Button> */}
              </Hero.Buttons>
            </Hero.Content>
          </Col>
          <Col
            xs="12"
            className="col-xxl-7 col-xl-6 col-lg-5 col-md-9 col-xs-11 order-1 order-lg-2"
          >
            <Hero.Video
              className={`welcome-img welcome-img--l9 video-box ${imageClass} d-flex`}
              mb="30px"
              mbLG="0"
            >
              <img
                src={headerimage}
                // src="image/home-startup/header-image.jpg"
                alt="content"
                className="w-100 hero-img1"
              />
               <img
                src={headerimage2}
                // src="image/home-startup/header-image.jpg"
                alt="content"
                className="w-100 hero-img2"
              />
              {/* Video Button */}
              {/* <Video id="LWZ7iytIA6k" className="video-btn">
                <i className="fa fa-play" />
              </Video> */}
            </Hero.Video>
          </Col>
        </Row>
      </Container>
      {/* <Modal
        isOpen={isMicrosoftPopup}
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      ><p>Modal text!</p></Modal> */}
    </Hero>
  );
}
