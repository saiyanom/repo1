import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./Components/Card";
import Service from "./style";

export default function ServicesSectionTwo() {
  return (
    <Service className="feelConfi-sec">
      <Container>
        <Row>
          <Col xs="12" className="col-xl-6 col-lg-6 col-md-9 col-xs-12  main-employee-monitiring" >
            <Service.Title as="h2" mb="40px" className="employe-monitoring-sec">
            <b>Feel confident knowing</b><br /> that everyone is working<br /> on
            the right tasks
            </Service.Title>

            <Service.Box mlXL="35px" mb="20px" mbLG="0px" className='service-card-left-section-inner resp-imagegroup1 emp-sec5'>
              <ServiceCard
                title="Computer activity tracking"
                image="image/home-digital-agency/employee-monitoring-1.svg"                
                text="Monitor how employees & Freelancers spend their time while on the clock."
                mb="25px"
              />
              <ServiceCard
                title="Verify your experts"
                image="image/home-digital-agency/employee-monitoring-2.svg"                
                text="Stop paying extra for subcontractors. Verify that the person doing the work is the one you hired."
                mb="25px"
              />
              <ServiceCard
                title="Budget with confidence"
                image="image/home-digital-agency/employee-monitoring-3.svg"                
                text="Know exactly how much you are being billed by freelancers."
                mb="25px"
              />
            </Service.Box>

           <Service.Text>
           Our employee monitoring software is included with all business accounts to manage freelancers and employees.
           </Service.Text>
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-md-11  service-card-left-section desk-imageGroup"
          >
            <Service.Box mlXL="35px" mb="20px" mbLG="0px" className='service-card-left-section-inner '>
              <ServiceCard
                image="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/employee-monitoring-1.svg"
                title="Computer activity tracking"
                text="Monitor how employees & Freelancers spend their time while on the clock."
                mb="25px"
              />
              <ServiceCard
                image="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/employee-monitoring-2.svg"
                title="Verify your experts"
                text="Stop paying extra for subcontractors. Verify that the person doing the work is the one you hired."
                mb="25px"
              />
              <ServiceCard
                image="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/employee-monitoring-3.svg"
                title="Budget with confidence"
                text="Know exactly how much you are being billed by freelancers."
                mb="25px"
              />
            </Service.Box>
          </Col>
        </Row>
      </Container>
    </Service>
  );
}
