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
          <div className='desk-imageGroup'>
            <About.Image className="affi-image">
              <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-startup/affiliates-1.png" alt="content" className="w-100"/>
            </About.Image>
            </div>
          </Col>
          <Col className="col-xxl-6 col-lg-6 col-md-6 col-xs-12">
              {/* Section Title */}

              <About.Box className="third-sec earnBusiness-sec">
                  <h1>Earn with<br /><b>Businesses</b></h1>
                  <div className='resp-imagegroup1'>
                  <About.Image className="affi-image">
                    <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-startup/affiliates-1.png" alt="content" className="w-100"/>
                  </About.Image>
                  </div>
                  <p>Drive businesses to our platform and earn when they hire freelancers or sell their services online. Reward business owners while rewarding yourself by introducing them to MRKT365.</p>
                  
                  <div className="learn-more-sec"><a className='learn-btn-Center' href="/businesses"><Button className="blue-button-affi" textTransform="capitalized">Learn More</Button></a></div>

               </About.Box>
              {/*/ .Section Title */}
          </Col>
        </Row>
      </Container>
      <div className="section-affiliate2 type02">

      <Container>
        <Row className="align-items-center justify-content-center justify-content-lg-start section-affiliate-alt">
          <Col xs="12" className="col-xl-6 col-lg-6 col-md-5 col-xs-12">
            <About.Box className="second-sec">
                  <h1>Become a<br /><b>21st-century Recruiter</b></h1>
                  <div className='resp-imagegroup1 agencies-image1'>
            <div className="tilt-image-sec">
               <div className="ImageOne">
                   <div className="ImageOneInner ag-img1">
                     <img
                       src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/cheerful-young-affiliate.png"
                       alt="content"
                     />
                   </div>
               </div>
            
               <div className="ImageOne image-one-down">
                   <div className="ImageOneInner ag-img1">
                     <img
                       src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/expert-1.png"
                       alt="content"
                     />
                   </div>
                   
               </div>
            </div>
            </div>
                  <p>Earn more doing what you have already been doing but in a more innovative way. Send ready-made promotional material and links to your network and start earning money. Stop struggling to collect your commissions, let us handle transactions while you watch your income grow through our affiliate dashboard.</p>
                 <div className="learn-more-sec "> <a className='learn-btn-Center' href="/recruiters"><Button className="blue-button-affi" textTransform="capitalized">Learn More</Button></a></div>

              {/* <About.Title as="h2"> <SuperTag value=""/> </About.Title> */}

              {/* <About.Text> <SuperTag value=""/> </About.Text> */}
            </About.Box>
          </Col>
          <Col className="col-xl-6 col-lg-6 col-md-7 col-xs-12">
          <div className='desk-imageGroup Imgbecome-sec'>
            <div className="tilt-image-sec">
               <div className="ImageOne">
                   <div className="ImageOneInner">
                     <img
                       src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/cheerful-young-affiliate.png"
                       alt="content"
                     />
                   </div>
               </div>
            
               <div className="ImageOne image-one-down">
                   <div className="ImageOneInner">
                     <img
                       src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/expert-1.png"
                       alt="content"
                     />
                   </div>
                   
               </div>
            </div>
            </div>
          </Col>
   
     
        </Row>
      </Container>
      </div> 
      <Container>
        <Row className="align-items-center justify-content-center g-0 section-affiliate">
        <Col xs="12" className="col-xxl-6 col-lg-6 col-md-6">
        <div className='desk-imageGroup'>
            <About.Image className="affi-image type02">
              <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/VCC.png" alt="content" className=" affi-image2"/>
            </About.Image>
            </div>
          </Col>
          <Col className="col-xxl-6 col-lg-6 col-md-6">
            <About.Box className="third-sec earnBusiness-sec">
              {/* Section Title */}
              {/* <About.Content className="para-background-color2"> */}
                
                  <h1>Earn from<b> Virtual Card transactions</b></h1>
                  <div className='resp-imagegroup1'>
            <About.Image className="affi-image ">
              <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/VCC.png" alt="content" className=" affi-image2"/>
            </About.Image>
            </div>
                  <p>Earn a percentage of all transactions when you refer a new cardholder to our virtual prepaid card program. We offer Virtual Prepaid Cards to clients to help them regain control of their marketing budgets. Our cards provide a cashback and are used like regular credit cards.</p>
                 
                  <div className="learn-more-sec"><a className='learn-btn-Center' href="/prepaid-virtual-cards"><Button className="blue-button-affi" textTransform="capitalized">Learn More</Button></a></div>

              {/* </About.Content> */}
              {/*/ .Section Title */}
            </About.Box>
          </Col>
        
        </Row>
      </Container>
      
    </About>
  );
}
