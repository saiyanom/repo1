import React from "react";
import SectionTitle from "./Components/SectionTitle";
import { Col, Container, Row } from "react-bootstrap";
import Service from "./style";

export default function ServicesSectionTwo() {
  return (
    <Service className="Hire-Agencies">
        <Container>
        <Row>
          <Col className="col-lg-6 col-md-6 col-12 desk-imageGroup">
          <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/marketplace/group-image.png" alt="" className="right-image w-100" />
          </Col>
          <Col className="col-lg-6 col-md-6 col-12">
          <div className="text-field">
          <h2><b>Hire Agencies </b> for <br />larger projects</h2>
          <div className='resp-imagegroup1'>
          <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/marketplace/group-image.png" alt="" className="right-image w-100" />
          </div>
          <p>Enlist a small army to tackle larger projects using our talent marketplace. Get matched to agencies with a proven track record and a large body of work. Work with trusted partners. Like our freelancers, all agencies on our platform must pass an AML and KYC background check before being listed on our talent marketplace.</p>
          </div>
          </Col>
        </Row>
        </Container>
    </Service>
  );
}

