import Link from "next/link";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./Components/SectionTitle";
import About from "./style";

export default function AboutusSection() {
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
    <About className="resp-affiliate hireIntens-sec">

      <Container>
        <Row className="align-items-center justify-content-center justify-content-lg-start section-affiliate-alt">
          <Col xs="12" className="col-xl-6 col-lg-6 col-md-5 col-xs-12">
            <About.Box className="second-sec">

                  <h1><b>Hire Interns</b> to fill in {width >= 768 ? (<br />) : null}the gaps</h1>
                  <div className="resp-imagegroup1 agencies-image1">
                  <div className="tilt-image-sec ">
               <div className="ImageOne">
                   <div className="ImageOneInner ag-img1">
                     <img
                       src="https://dzekq3sbbgf19.cloudfront.net/public/image/marketplace/image1.png"
                       alt="content"
                     />
                   </div>

               </div>
            
               <div className="ImageOne image-one-down">
                   <div className="ImageOneInner ag-img1">
                     <img
                       src="https://dzekq3sbbgf19.cloudfront.net/public/image/marketplace/image2.png"
                       alt="content"
                     />
                   </div>
                   
               </div>
            </div>
            </div>

                  <p>Hire diverse talent from around the world with virtual internships. Our marketplace enables organizations to work with remote interns from top global universities. Collaborate with learners to tackle your short-term projects and discover better ways to boost your business practices. Solve your staffing shortages with eager virtual interns.</p>
                 <div className="learn-more-sec"><a href="/hire-interns" className='learn-btn-Center'><Button className="blue-button-affi" textTransform="capitalized">Learn More</Button></a></div>

              {/* <About.Title as="h2"> <SuperTag value=""/> </About.Title> */}

              {/* <About.Text> <SuperTag value=""/> </About.Text> */}
            </About.Box>
          </Col>
          <Col className="col-xl-6 col-lg-6 col-md-7 col-xs-12 desk-imageGroup">
            <div className="tilt-image-sec">
               <div className="ImageOne">
                   <div className="ImageOneInner">
                     <img
                       src="https://dzekq3sbbgf19.cloudfront.net/public/image/marketplace/image1.png"
                       alt="content"
                     />
                   </div>

               </div>
            
               <div className="ImageOne image-one-down">
                   <div className="ImageOneInner">
                     <img
                       src="https://dzekq3sbbgf19.cloudfront.net/public/image/marketplace/image2.png"
                       alt="content"
                     />
                   </div>
                   
               </div>
            </div>
          </Col>
   
     
        </Row>
      </Container>
      
    </About>
  );
}
