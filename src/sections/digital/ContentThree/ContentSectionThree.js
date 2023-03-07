import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Content from "./style";
import handleViewport from 'react-in-viewport';

const Block = (props) => {
  const { inViewport, forwardedRef } = props;
  console.log(inViewport, "ivp")
  const video = inViewport ?
    <video controlsList='nodownload nofullscreen noremoteplayback' loop autoPlay preload="false" playsInline tabindex="0" className='cc-video' muted>
      <source src="video/Brain.mp4" type="video/mp4"></source>
    </video> : <></>
  return <div ref={forwardedRef} style={{ minHeight: "370px" }}>{video}</div>
};

const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);
export default function ContentSectionThree({ ...rest }) {

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = React.useState(getWindowSize());

  React.useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Content {...rest}>
      <Container className="smart-repo-sec">
        <Row className="back">
          <Col
            xs="12"
            className="col-xl-12 col-lg-12 col-md-12 col-xs-12 order-lg-1  text-center"
          >
            <div className="ai-head-section">
              <Content.Title as="h1">
                Find <b>clarity</b> when you need it most
              </Content.Title>
            </div>
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-1 secfull767 smartpt-10"
          >
            {/* Section Title */}
            <Content.Box className="ai-left-para-sec">

              <Content.Title as="h2">
                <b>Smart</b> reporting
              </Content.Title>
              <div className="resp-imagegroup1">
                <ViewportBlock />
              </div>

              <Content.Text>
                Find proven opportunities to boost website traffic used by thousands of businesses on search engines like Google and Bing. Scan your website for free to find technical SEO, social media, & PPC marketing opportunities with our AI auditor. Then turn opportunities into actionable results.
              </Content.Text>

            </Content.Box>
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-sm-6 col-xs-6 order-1 order-lg-2 desk-imageGroup"
          >
            {windowSize.innerWidth > 768 ? <video loop autoPlay className='cc-video'>
              <source
                src="video/Brain.mp4"
                type="video/mp4"
              />
            </video> : null}
          </Col>
        </Row>
      </Container>

      <Container className="smart-repo-sec use-Smarter">
        <Row className=" justify-content-center main-section2">
          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-sm-6 col-xs-6 order-1 order-lg-1 desk-imageGroup"
          >
            <Content.Images className="ai-image2">
              <img
                src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/stats-screen.png"
                alt="content"
                className="screen1 w-100"
              />
            </Content.Images>
          </Col>
          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-2 ai-para-sec2 secfull767"
          >
            {/* Section Title */}
            <Content.Box className=" colored-bg ai-right-para">
              <Content.Title as="h2" className="ai-head2 smartpb-10">
                Use <b>smarter tools</b> for <br /> stonger <b>results</b>
              </Content.Title>

              <div className="resp-imagegroup1">
                <img
                  src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/stats-screen.png"
                  alt="content"
                  className="screen1 w-100"
                />
              </div>
              <Content.Text>
                Get an overview of your business’s marketing strategy with our easy-to-understand dashboards. Let us translate your data into smart recommendations to help you drive more sales using SEO marketing.

              </Content.Text>

            </Content.Box>
          </Col>

        </Row>
      </Container>

      <div className="cyan-background">
        <Container className="smart-repo-sec get-match">
          <Row className=" justify-content-center">

            <Col
              xs="12"
              className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-1 main-para-sec2 secfull767"
            >
              {/* Section Title */}
              <Content.Box className="right-side-para">
                <Content.Title as="h2" className="tilt-head">
                  Get <b>matched</b> with<br /> verified <b>experts</b>
                </Content.Title>

                <div className="resp-imagegroup1 agencies-image1">
                  <Content.Images>
                    <Content.ImageOne className="agency-mb">
                      <Content.ImageOneInner className="ai-skew-image1 ag-img1">
                        <img
                          src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/expert-1.png"
                          alt="content"
                        />
                      </Content.ImageOneInner>

                    </Content.ImageOne>
                    <Content.ImageTwo className="agency-mb">
                      <Content.ImageTwoInner className="ai-skew-image2 ag-img1">
                        <img
                          src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/expert-2.png"
                          alt="content"
                        />
                      </Content.ImageTwoInner>
                    </Content.ImageTwo>
                  </Content.Images>
                </div>

                <Content.Text className="ai-para3">
                  Based on your requirements, our platform generates a short list of candidates based on AI recommendations. All experts are screened through an advanced KYC & AML screening and verification before our vendors are shown.

                </Content.Text>

              </Content.Box>
            </Col>
            <Col
              xs="12"
              className="col-xl-6 col-lg-6 col-sm-6 col-xs-6 order-2 order-lg-2 desk-imageGroup right-getMatch type02"
            >
              <Content.Images>
                <Content.ImageOne className="imgGetMat1">
                  <Content.ImageOneInner className="ai-skew-image1">
                    <img
                      src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/expert-1.png"
                      alt="content"
                    />
                  </Content.ImageOneInner>

                </Content.ImageOne>
                <Content.ImageTwo className="imgGetMat2">
                  <Content.ImageTwoInner className="ai-skew-image2">
                    <img
                      src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/expert-2.png"
                      alt="content"
                    />
                  </Content.ImageTwoInner>
                </Content.ImageTwo>
              </Content.Images>
            </Col>

          </Row>
        </Container>
      </div>

      <Container className="smart-repo-sec">
        <Row className="align-items-center justify-content-center ">

          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-2 secfull767"
          >
            {/* Section Title */}
            <Content.Box className="right-side-para ai-last-para-colored">
              <Content.Title as="h2">
                <b>Visualize</b> data <br />track performance
              </Content.Title>

              <div className="resp-imagegroup1">
                <Content.Images className="ai-main-last-image">
                  <img
                    className="ai-last-sec-image w-100"
                    src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/track-marketing-campaigns.jpg"
                    alt="content"
                  />
                </Content.Images>
              </div>

              <Content.Text >
                Get an instant overview of results and who to attribute them to in your team. Increase team productivity when hiring freelancers or assigning tasks to employees.

              </Content.Text>

            </Content.Box>
          </Col>

          <Col
            xs="12"
            className="col-xl-6 col-lg-6 col-sm-6 col-xs-6 order-1 order-lg-1 desk-imageGroup"
          >
            <Content.Images className="ai-main-last-image">
              <img
                className="ai-last-sec-image w-100"
                src="https://dzekq3sbbgf19.cloudfront.net/public/image/home-digital-agency/track-marketing-campaigns.jpg"
                alt="content"
              />
            </Content.Images>
          </Col>

        </Row>
      </Container>



    </Content>
  );
}
