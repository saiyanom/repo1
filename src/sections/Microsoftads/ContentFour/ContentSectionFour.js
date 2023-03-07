import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Content from "./style";

export default function ContentSectionFour () {
  return (
    <Content>
        <Content.InnerBlock>
        <Row className="justify-content-center tracker-sec" >
            {/* about-us Content */}
            <Col xs="12" className="col-lg-6 col-md-6 col-xs-10 main-box">
              <Content.Box>
                
                <Content.Title as="h2" mb="30px" mbXL="50px">
                Make Connections with MRKT365’s Platform
                </Content.Title>
                <div className="pink-line"></div>

                <Content.Subtitle as="h6" mb="72px" className="subtitle-sec">
                Make use of MICROSOFT ADVERTISING by complementing it with MRKT365’S PLATFORM and bring your marketing to the next level. INCREASE YOUR REACH towards audiences that are relevant to your business. LINK YOUR MICROSOFT ACCOUNT NOW WITH MRTK365 FOR FREE. To help you get started, RECEIVE A $250 USD FREE AD CREDIT when you create a new account.
                </Content.Subtitle>



                {/* <Content.List></Content.List> */}
               
              </Content.Box>
            </Col>
            {/*/ .about-us Content */}
            <Col xs="12" className="col-lg-6 col-md-6 col-xs-10">
              <Content.ImageTwo mb="40px" className="img-sec" >
                <img src="image/microsoft-ads/typing-hands.png" alt="content" className="w-100 image2"/>
              </Content.ImageTwo>
             
            </Col>
          </Row>
        
        </Content.InnerBlock>
    </Content>
  );
}
