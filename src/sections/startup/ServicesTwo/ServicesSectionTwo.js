import React from "react";
import SectionTitle from "./Components/SectionTitle";
import { Button } from "~styled";
import { Col, Container, Row } from "react-bootstrap";
import Service from "./style";

export default function ServicesSectionTwo() {
  const useWidth = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        const onResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);
    return width;
};

const width = useWidth();
  return (
    <Service className="main-affili-sec1">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="col-xl-5 col-lg-5 col-md-5 col-xs-12  Aff-earnSec">
            <Service.Box className='earn-from-section' >
              <h1>Earn with <br /> <b>Freelancers</b></h1>
              <div className='resp-imagegroup1'>
              <Row>
                {width >= 768 ? 
                <Col xs="12" className="col-lg-6 pt-lg-7 mb-5 mb-lg-0 col-md-6">
                  <Service.Image>
                    <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-startup/affiliate-image2.png" alt="content" className="w-100 "/>
                  </Service.Image>
                </Col> : null}
                <Col xs="12" className="col-lg-6 mb-5 mb-lg-0 col-md-6">
                  <Service.Image className="test">
                    <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-startup/cheerful-young-women.png" alt="content" />
                  </Service.Image>
                </Col>
              </Row>
              </div>
              <p>Share our marketplace to contacts in your network looking for part-time or full-time freelance work. Earn commissions each time your referral gets paid for a job, it’s a win-win. Introduce your contacts to a job marketplace with freelance jobs of all sizes across multiple industries.</p>
              <div className="learn-more-sec"><a className='learn-btn-Center' href="/freelancers"><Button className="blue-button-affi" textTransform="capitalized">Learn More</Button></a></div>
            </Service.Box>
          </Col>
          <Col xs="12" className="col-xl-7 col-lg-7 col-md-7 col-xs-12 Aff-earnSec2" >
          <div className='desk-imageGroup'>
            <Service.Box className="sec1">
            <div className='desk-imageGroup'>
              <Row>
                <Col  className="col-lg-6 pt-lg-7 mb-5 mb-lg-0 col-md-6 wrapsec1a">
                  <Service.Image className="sec1a">
                    <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-startup/affiliate-image2.png" alt="content" className="w-100 "/>
                  </Service.Image>
                </Col>
                <Col  className="col-lg-6 mb-5 mb-lg-0  col-md-6 wrapsec1b">
                  <Service.Image className="sec1b">
                    <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-startup/cheerful-young-women.png" alt="content" className="w-100 "/>
                  </Service.Image>
                </Col>
              </Row>
              </div>
            </Service.Box>
            </div>
          </Col>
        </Row>
      </Container>
    </Service>
  );
}
