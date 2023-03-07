import React from "react";
import SectionTitle from "./Components/SectionTitle";
import { Col, Container, Row } from "react-bootstrap";
import Service from "./style";

export default function ServicesSectionThree() {
  return (
    <Service>
      <Container>
        <Row className="">
          <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-12 order-lg-1" >
            <Service.Box>
                  <Service.Image>
                    <img src="image/home-startup/global-payment.jpg" alt="content" className="w-100 global-payment"/>
                  </Service.Image>
            </Service.Box>
          </Col>
          <Col xs="12" className="col-xl-1 col-lg-1 col-md-1 order-lg-2" ></Col>
          <Col className="col-xl-5 col-lg-5 col-md-5 col-xs-12 order-2 order-lg-3">
            <Service.Box>
              {/* Section Title */}
              <SectionTitle className="PVC-section-title"
                // subTitle="Services"
                title="Global payment solution tailored for businesses & freelancers."
                text="As a part of our mission, we are making online marketing accessible to all businesses in developing and developed countries. In many countries, the credit card decline rate is between 25-75% according to Google. These credit card fraud rates have prevented millions of legitimate businesses and freelancers from growing their businesses online. To assist legitimate businesses, MRKT365 has partnered with Visa and Amex to provide prepaid virtual cards. We are opening the market to many new advertisers and agencies that currently can’t advertise due to the restrictive billing policies of their countries."
                // titleProps={{ mb: "20px" }}
                // subTitleProps={{
                //   mb: "10px",
                //   className: "subline",
                //   fontColor: "#5034fc",
                // }}
              />
               
            </Service.Box>
          </Col>
          
        </Row>
      </Container>
    </Service>
  );
}
