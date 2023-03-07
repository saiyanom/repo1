import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import CountUp from "react-countup";
import Counter from './style'
import LazyLoad from "react-lazyload";
import { SuperTag } from "~components";

export default function CounterSection() {
  return (
      <Counter>
        <Container className="sec-Gegstarted">
         <h2 className="get-started-heading typ2">How to get started</h2>

            <Row className="row justify-content-center text-center">
              <Col xs="6" className="col-6 col-lg-3 col-md-4 col-xs-6">
                <LazyLoad>
                  <Counter.Single>
                  <Counter.Text className="d-flex get-started-sec">
                    <img className="counter-icons" src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-services/count.png" alt="content" />
                    <p className="counter-para">Sign up for free as<br /> a business</p>
                    </Counter.Text>
                 
                  </Counter.Single>
                </LazyLoad>
              </Col>
              <Col xs="6" className="col-6 col-lg-3 col-md-4 col-xs-6">
                <LazyLoad>
                  <Counter.Single>
                    <Counter.Text className="d-flex get-started-sec">
                    <img className="counter-icons" src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-services/count2.png" alt="content" />
                    <p className="counter-para">Create one internship<br /> or many</p>
                    </Counter.Text>
                  </Counter.Single>
                </LazyLoad>
              </Col>
              <Col xs="6" className="col-6 col-lg-3 col-md-4 col-xs-6">
                <LazyLoad>
                  <Counter.Single>
                  <Counter.Text className="d-flex get-started-sec">
                  <img className="counter-icons" src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-services/count3.png" alt="content" />
                    <p className="counter-para">Match with skilled<br />interns</p>
                    </Counter.Text>
                  </Counter.Single>
                </LazyLoad>
              </Col>
              <Col xs="6" className="col-6 col-lg-3 col-md-4 col-xs-6">
                <LazyLoad>
                  <Counter.Single>
                  <Counter.Text className="d-flex get-started-sec">
                  <img className="counter-icons" src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-services/count4.png" alt="content" />
                    <p className="counter-para">
                    Choose the intern that<br />are right for you
                    </p>
                    </Counter.Text>
                  </Counter.Single>
                </LazyLoad>
              </Col>
            </Row>
        </Container>
      </Counter>
  )
}
