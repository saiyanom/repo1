import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Content from "./style";

export default function ContentSectionFour () {
  return (
    <Content>
        <Content.InnerBlock>
        <div class="main-box seeHow-sec">
          <Container>
            <Row className="justify-content-center tracker-sec" >
              {/* about-us Content */}
              <Col className="col-12">
              <div className="top-head"><h1>Read about how our <b>tracker helps <br />Businesses stay ahead</b></h1></div>
              
              </Col>
              <Col xs="12" className="col-lg-6 col-md-6 col-xs-12 secfull767">
                <Content.Box className="EM-content-sec2">
                  
                  <Content.Title as="h2" mb="30px" mbXL="50px">
                  <b>Case study: </b>How healthy pass improved efficiency and customer service with MRKT365
                  </Content.Title>
                  <div className="pink-line"></div>
                  <div className="resp-imagegroup1">
                  <Content.ImageTwo mb="40px" className="img-sec" >
                  <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/employee/screen1.png" alt="content" className="w-100 image2"/>
                  </Content.ImageTwo>
                  </div>

                  <Content.Subtitle as="h3" mb="72px" className="subtitle-sec">
                  The outcome<br />
                  </Content.Subtitle>



                  {/* <Content.List></Content.List> */}
                  <div className="list" >
                    <div className="listitem1">
                      <div><img src="https://dzekq3sbbgf19.cloudfront.net/public/image/employee/growth.svg"></img></div>
                      <p>Increased Daily<br /> Users by 310%</p>
                    </div>
                    <div className="listitem2" >
                      <div><img src="https://dzekq3sbbgf19.cloudfront.net/public/image/employee/calender.svg"></img></div>
                      <p>Platform went<br />into Production<br /> 3 Months Earlier</p>
                    </div>
                    <div className="listitem3" >
                      <div><img src="https://dzekq3sbbgf19.cloudfront.net/public/image/employee/dollar-sym.svg"></img></div>
                      <p>Reduced<br />Project Cost<br />by 27%</p>
                    </div>
                    <div className="listitem4">
                      <div><img src="https://dzekq3sbbgf19.cloudfront.net/public/image/employee/supervision.svg"></img></div>
                      <p>Cut Admin<br />Supervision<br />Time in Half</p>
                    </div>
                  </div>
                </Content.Box>
              </Col>
              {/*/ .about-us Content */}
              <Col xs="12" className="col-lg-6 col-md-6 col-xs-12 desk-imageGroup">
                <Content.ImageTwo mb="40px" className="img-sec" >
                  <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/employee/screen1.png" alt="content" className="w-100 image2"/>
                </Content.ImageTwo>
              
              </Col>
            </Row>
          </Container>
        </div>
        <Container className="backgr-sec">
          <Row className="justify-content-center background-sec">
            <Col xs="12" className="col-lg-6 col-md-6 col-xs-12 secfull767">
              <div className="background-right-sub-sec">
              <Content.Title as="h2" mb="30px" mbXL="50px" className="background-title">
              Project background
                </Content.Title>               
                <hr className="blue-line"></hr>
                <div className="resp-imagegroup1">
                 <img
                    src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-agency/background-image-1.png"
                    alt="content"
                    className="w-100 image-left"
                  />
                </div>


              <Content.Text mb="30px" ptXL="32px">
              Healthy Pass is a screening tool used to maintain live records & analytics of visitors and employees. The company signed up for MRKT365 in December 2020 searching for a web developer. Their project goal was to create a mobile web app that would connect to an existing encrypted database. They also required an image reader feature that could scan QR codes. As an early-stage startup, they were looking to not break the bank on development costs.
              </Content.Text>
              </div> 
            </Col>

            <Col xs="12" className="col-lg-6 col-md-6 col-xs-12 desk-imageGroup">
              <Content.Box className="EM-box-sec">
                <Content.ImageOne mb="40px">
                  <img
                    src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-agency/background-image-1.png"
                    alt="content"
                    className="w-100 image-left"
                  />
                </Content.ImageOne>
              </Content.Box>
            </Col>
          </Row>

          
        </Container>
        </Content.InnerBlock>
    </Content>
  );
}
