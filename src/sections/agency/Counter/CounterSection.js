import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import CountUp from "react-countup";
import Counter from './style'
import LazyLoad from "react-lazyload";
import { SuperTag } from "~components";

export default function CounterSection() {
  return (
      <Counter className="d-flex flex-column align-items-center stop-subcon">
         <h2 className="get-started-heading col-md-6 col-lg-8">Stop unknowingly hiring subcontractors.</h2>
        <Container>
            <Row className="row justify-content-center text-center">
              <Col xs="6" className="col-6 col-lg-3 col-md-4 col-xs-6">
                <LazyLoad>
                  {/* <Counter.Single>s */}
                  <Counter.Text className="d-flex flex-column counter-card align-items-center">
                    <img className="counter-icons" src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-services/count.png" alt="content" />
                    <h5>Verified users</h5>
                    <p>Users must be <br />verified to work<br />with us</p>
                    </Counter.Text>
                 
                  {/* </Counter.Single> */}
                </LazyLoad>
              </Col>
              <Col xs="6" className="col-6 col-lg-3 col-md-4 col-xs-6">
                <LazyLoad>
                    <Counter.Text className="d-flex flex-column counter-card align-items-center">
                    <img className="counter-icons" src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-services/count2.png" alt="content" />
                    <h5>Browse profiles</h5>
                    <p>View past work<br /> & other stats on <br />their profile</p>
                    </Counter.Text>
                </LazyLoad>
              </Col>
              <Col xs="6" className="col-6 col-lg-3 col-md-4 col-xs-6">
                <LazyLoad>
                  <Counter.Text className="d-flex flex-column counter-card align-items-center">
                  <img className="counter-icons" src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-services/count3.png" alt="content" />
                  <h5>View video interviews</h5>
                    <p>E-meet each vendor <br />with pre-recorded <br />interviews</p>
                    </Counter.Text>
                </LazyLoad>
              </Col>
              <Col xs="6" className="col-6 col-lg-3 col-md-4 col-xs-6">
                <LazyLoad>
                  <Counter.Text className="d-flex flex-column counter-card align-items-center">
                  <img className="counter-icons" src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-services/count4.png" alt="content" />
                  <h5>Check-ins</h5>
                    <p>
                    Vendors confirm their <br />identity before starting<br /> each task
                    </p>
                    </Counter.Text>
                </LazyLoad>
              </Col>
            </Row>
        </Container>
      </Counter>
  )
}
