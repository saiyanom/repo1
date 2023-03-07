import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Content from "./style";

export default function ContentSectionOne() {
  return (
    <Content>
      <Container>
        <Content.InnerBlock>
          <Row className="justify-content-center">
            {/* about-us Content */}
            <Col xs="12" className="col-lg-7 col-md-6 col-xs-10">
              <Content.Box>
                {/* <Content.Subtitle as="h6" mb="40px" fontColor="#fd346e">
                  About us
                </Content.Subtitle> */}
                <Content.Title as="h2" mb="30px" mbXL="50px">
                We <span className="blue-txt">pay</span> Affiliates <span className="blue-txt">more</span>
                </Content.Title>
                <Content.ImageOne mb="40px">
                  <img
                    src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/young-business.png"
                    alt="content"
                    className="w-100 image-one bdr-17"
                  />
                  <div class="glow-wrap">
                      <i class="glow"></i>
                  </div>
                </Content.ImageOne>
              </Content.Box>
            </Col>
            {/*/ .about-us Content */}
            <Col xs="12" className="col-lg-4 offset-xl-1 col-md-6 col-xs-10">
              {/* <Content.Subtitle as="h6" mb="30px" fontColor="#fd346e">
                Our customer
              </Content.Subtitle> */}
              {/* <Content.Text mb="40px" mbXL="60px">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy
              </Content.Text> */}
              <Content.ImageTwo mb="40px">
                <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/recruitment-agency/hand-shaking.png" alt="content" className="w-100"/>
              </Content.ImageTwo>
              <Content.Title mb="30px" ptXL="30px">
                <b>Easy</b> as 1-2-3:
              </Content.Title>
              <div className="d-flex justify-content-between steps-sec1">
              <div className="steps">
              <img className="counter-icons" src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-services/count.png" alt="content" />
              <h5>Sign up </h5>
              </div>
              <div className="steps">
              <img className="counter-icons2" src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-services/count2.png" alt="content" />
              <h5>Invite your<br />contacts</h5>
              </div>
              <div className="steps">
              <img className="counter-icons3" src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-services/count3.png" alt="content" />
              <h5>Earn money<br />when they<br />earn</h5>
              </div>
              </div>
            </Col>
          </Row>
        </Content.InnerBlock>
      </Container>
    </Content>
  );
}
