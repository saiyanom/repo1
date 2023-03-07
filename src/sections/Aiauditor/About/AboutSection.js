import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./Components/SectionTitle";
import About from "./style";

export default function AboutusSection() {
  return (
    <About className="resp-affiliate">
      <Container>
        <Row className="align-items-center justify-content-center g-0 section-affiliate">
          <Col xs="12" className="col-xxl-6 col-lg-6 col-md-6 col-xs-12">
            <About.Image className="affi-image">
              <img src="image/home-startup/affiliates-1.jpg" alt="content" className="w-100"/>
            </About.Image>
          </Col>
          <Col className="col-xxl-6 col-lg-6 col-md-6 col-xs-12">
            <About.Box>
              {/* Section Title */}

              <About.Content className="para-background-color1">
                  <h1>Earn from<br /><b>Businesses</b></h1>
                  <p>Top of the list of dreams for many small firms and solo professionals is to win lucrative work with big corporate clients. A few decent projects can keep your business very healthy.</p>
                  <Button className="blue-button-affi"> Learn More</Button>

              </About.Content>
              {/*/ .Section Title */}
            </About.Box>
          </Col>
        </Row>
      </Container>
      <div className="section-affiliate2">
      <Container>
        <Row className="align-items-center justify-content-center justify-content-lg-start section-affiliate-alt">
          <Col xs="12" className="col-xl-6 col-lg-6 col-md-5 col-xs-12">
            <About.Box className="second-sec">
                  <h1>Earn from<br /><b>Recruitment Agencies</b></h1>
                  <p>Earn more doing what you have already been doing. All it takes is to send promotional material and links to your network of freelancers. Earn from each freelancer who signs up and successfully gets a job which is done easier with our marketplace automation and AI recommendations.</p>
                  <Button className="blue-button-affi"> Learn More</Button>

              {/* <About.Title as="h2"> <SuperTag value=""/> </About.Title> */}

              {/* <About.Text> <SuperTag value=""/> </About.Text> */}
            </About.Box>
          </Col>
          <Col className="col-xl-6 col-lg-6 col-md-7 col-xs-12">
            <div className="tilt-image-sec">
               <div className="ImageOne">
                   <div className="ImageOneInner">
                     <img
                       src="image/home-digital-agency/cheerful-young-affiliate.png"
                       alt="content"
                     />
                   </div>

               </div>
            
               <div className="ImageOne image-one-down">
                   <div className="ImageOneInner">
                     <img
                       src="image/home-digital-agency/expert-1.png"
                       alt="content"
                     />
                   </div>
                   
               </div>
            </div>
          </Col>
   
     
        </Row>
      </Container>
      </div> 
      
    </About>
  );
}
