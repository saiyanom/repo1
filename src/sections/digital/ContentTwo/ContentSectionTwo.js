import React, { useState } from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "~styled";
import Content from "./style";
export default function ContentSectionTwo({ ...rest }) {
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
    <Content className="agencies-layoutSec" {...rest}>
      <Container className="sec1">
        <Row className="align-items-center justify-content-center back background2">
          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-md-8 col-xs-9 order-2 order-lg-1 agencies-content-sec2"
          >
            {/* Section Title */}
            <Content.Box>
            <Content.Title as="h1">
                Why work with us?
              </Content.Title>
              <Content.Title as="h2">
              <span className="blue-text">Expand</span> your client base with {width >= 522 && width < 1170 ? (<br />) : null} our <span className="blue-text">Marketplace</span>
              </Content.Title>
              <div className='resp-imagegroup1'>
            <Content.Images>
              <Content.Imagedown className="agency-exHight sec1">
                
                  <img
                    src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/service1.png"
                    alt="content"
                    className="image1 w-100"
                  />
                
               
              </Content.Imagedown> 
               <Content.Imageup className="agency-exHight sec2">
                  <img
                    src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/service2.png"
                    alt="content"
                    className="image2 w-100"
                  />
              </Content.Imageup>
            </Content.Images>
            </div>

              <Content.Text>
              Create a free business listing on our platform and start selling your services online to a whole new audience. Add multiple service packages and get paid in US dollars. Get matched to projects or browse our job board. Easily connect with new customers and reach your next revenue goal with MRKT365.
                 
              </Content.Text>
              <div className="learn-more-sec">
              <a
               
               className='learn-btn-Center'
                href="/talent-marketplace"
               
              >
                <Button className="btn blue-close" textTransform="capitalized">Learn More</Button>
              </a>
              </div>

            </Content.Box>
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-sm-8 col-xs-10 order-1 order-lg-2"
          >
            <div className='desk-imageGroup'>
            <Content.Images>
              <Content.Imagedown>
                
                  <img
                    src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/service1.png"
                    alt="content"
                    className="image1 w-100"
                  />
                
               
              </Content.Imagedown> 
               <Content.Imageup>
                  <img
                    src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/service2.png"
                    alt="content"
                    className="image2 w-100"
                  />
              </Content.Imageup>
            </Content.Images>
            </div>
          </Col>
        </Row>
      </Container>
    
      <Container className="sec2">
        <Row className="align-items-center justify-content-center background1">
        <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-sm-8 col-xs-10 order-1 order-lg-1"
          >
            <div className='desk-imageGroup'>
            <Content.Images>
               <Content.ImageOne>
                <Content.ImageOneInner>
                  <img
                    src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/1.jpg"
                    alt="content"
                    className="image3"
                  />
                </Content.ImageOneInner>
               
              </Content.ImageOne>
              <Content.ImageTwo>
                <Content.ImageTwoInner>
                  <img
                    src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/2.jpg"
                    alt="content"
                    className="image4"

                  />
                </Content.ImageTwoInner>
              </Content.ImageTwo>
            </Content.Images>
            </div>
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-md-8 col-xs-9 order-2 order-lg-2"
          >
            {/* Section Title */}
            <Content.Box className="right-side-para">
            <Content.Title as="h2">
            <b className="blue-text">Manage</b> your remote team {width >= 359 && width < 1170 ? (<br />) : null} with <b className="blue-text">confidence<br /></b>
              </Content.Title>
              <div className='resp-imagegroup1 agencies-image1'>
            <Content.Images>
               <Content.ImageOne>
                <Content.ImageOneInner className="ag-img1">
                  <img
                    src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/1.jpg"
                    alt="content"
                    className="image3"
                  />
                </Content.ImageOneInner>
               
              </Content.ImageOne>
              <Content.ImageTwo>
                <Content.ImageTwoInner className="ag-img1">
                  <img
                    src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/2.jpg"
                    alt="content"
                    className="image4"

                  />
                </Content.ImageTwoInner>
              </Content.ImageTwo>
            </Content.Images>
            </div>
              <Content.Text>
              Increase the productivity of the freelancers you hire and your existing employees with our task monitoring app. Our easy-to-use monitoring app tracks time spent on tasks and automatically adds a work journal for each worker for your future approval.
                 
              </Content.Text>
              <div className="learn-more-sec ">
              <a
               
                className="btn blue-close"
                href="/employee-monitoring"
              >
                Learn More
              </a>
              </div>
            </Content.Box>
          </Col>
         
        </Row>
      </Container>
      
        <Container className="sec3">
        <Row className="align-items-center justify-content-center background2">
          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-md-8 col-xs-9 order-2 order-lg-1"
          >
            {/* Section Title */}
            <Content.Box className="left-para2">
           
              <Content.Title as="h2">
              <span className="blue-text">Earn instant ROI</span> on <br /> marketing campaigns
              </Content.Title>
              <div className='resp-imagegroup1'>
          <div className="virtual-card">
              <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/businesses/virtual-card.png" alt="virtual-card" className="w-100" />
          </div>
          </div>
              <Content.Text>
              We have partnered with Visa, Amex, & US Bank to provide reloadable prepaid virtual credit cards to businesses, managers, marketing agencies & their clients. Earn up to 1.5% cashback on ad spend from all cards under your account. Regain control of your marketing budget or the marketing accounts you manage.
                 
              </Content.Text>
              <div className="learn-more-sec">
              <a
               
                className="btn blue-close"
                href="/prepaid-virtual-cards"
              >
                Learn More
              </a>
              </div>
            </Content.Box>
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-sm-8 col-xs-10 order-1 order-lg-2"
          >    
          <div className='desk-imageGroup'>
          <div className="virtual-card">
              <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/businesses/virtual-card.png" alt="virtual-card" className="w-100" />
          </div>
          </div>
            <Content.Images>
              {/* <Content.Imagedown>
                
                  <img
                    src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/typing-hand.png"
                    alt="content"
                  />
                
               
              </Content.Imagedown> 
               <Content.Imageup>
                  <img
                    src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/mobile-screen.png"
                    alt="content"
                  /> */}
              {/* </Content.Imageup> */}
            </Content.Images>
          </Col>
        </Row>
        </Container>

        <div className="agenManage-sec sec4">
        <Container>
        <Row className="align-items-center justify-content-center background1">
        <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-sm-8 col-xs-10 order-1 order-lg-1"
          >
            <div className='desk-imageGroup'>
            <Content.Images>
               <Content.ImageOne>
                <Content.ImageOneInner>
                  <img
                    src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/22.png"
                    alt="content"
                    className="image5"

                  />
                </Content.ImageOneInner>
               
              </Content.ImageOne>
              <Content.ImageTwo className="imgtwodown">
                <Content.ImageTwoInner>
                  <img
                    src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/33.png"
                    alt="content"
                    className="image6"

                  />
                </Content.ImageTwoInner>
              </Content.ImageTwo>
            </Content.Images>
            </div>
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-md-8 col-xs-9 order-2 order-lg-2"
          >
            {/* Section Title */}
            <Content.Box className="right-side-para agencies-image1">
            <Content.Title as="h2">
            <span className="blue-text">Hire Virtual Interns</span> to<br /> fill in the gaps
              </Content.Title>
              <div className='resp-imagegroup1'>
            <Content.Images>
               <Content.ImageOne>
                <Content.ImageOneInner className="ag-img1">
                  <img
                    src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/22.png"
                    alt="content"
                    className="image5"

                  />
                </Content.ImageOneInner>
               
              </Content.ImageOne>
              <Content.ImageTwo className="imgtwodown">
                <Content.ImageTwoInner className="ag-img1">
                  <img
                    src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/33.png"
                    alt="content"
                    className="image6"

                  />
                </Content.ImageTwoInner>
              </Content.ImageTwo>
            </Content.Images>
            </div>
              <Content.Text>
              Add young talent to your team to accelerate your projects. Find university-educated interns to work with your team remotely. Discover interns that are ready to trade hard work for experience. Interns can be students, recent graduates, or professionals who want to kick-start their careers.
                 
              </Content.Text>
              <div className="learn-more-sec">
              <a
               
                className="btn blue-close"
                href="/hire-interns"
              >
                Learn More
              </a>
              </div>
            </Content.Box>
          </Col>
         
        </Row>
        </Container>
        </div>
    </Content>
  );
}
