import React from 'react'
import Content from './style'
import SectionTitle from './Components/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
export default function   ContentSectionOne(){
return(
<Content className='paySecur-sec'>
  <Container>
    <Row className="align-items-center justify-content-center" >
      <div className='d-flex section1'>
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-1 secfull767">
        <Content.Box className="txt-card1">
       
        <h2>Pay <b>securely &</b> <br />discreetly</h2>
        <div className='resp-imagegroup1'>
        <Content.Image className="image-card1">
          <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/VPC/secure-card.png"  alt="content" className="w-100  resp-image"/>
        </Content.Image>
        </div>

        <p>Virtual cards are a secure way to pay online without using your personal credit card. Create cards easily on our platform for yourself, employees, agencies, and freelancers you would like to work with.</p>

        </Content.Box>
        
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-2 desk-imageGroup">
        <Content.Image className="image-card1">
          <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/VPC/secure-card.png"  alt="content" className="w-100  resp-image"/>
        </Content.Image>
        
      </Col>
      </div>
    </Row>

    <Row className="align-items-center justify-content-center freelancer-alt-card">
      <div className=" d-flex main-container">
      <Col  className="col-xl-6 col-lg-6 col-md-6 col-xs-7 order-1 order-lg-1 desk-imageGroup">
        <Content.Image className="image-card2">
          <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/VPC/pie-screen.png"  alt="content" className="resp-image main-img1 w-100"/>
        </Content.Image>
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-5 order-2 order-lg-2 secfull767">
        <Content.Box className="text-card2">
        <h2>Budget <b>effectively</b></h2>
        <div className='resp-imagegroup1'>
        <Content.Image className="image-card2">
          <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/VPC/pie-screen.png"  alt="content" className="resp-image main-img1 w-100"/>
        </Content.Image>
        </div>

        <p>Easily deposit your marketing budget across multiple cards and stop overpaying for subscription services. Take control of your finances and start investing your money into smarter marketing that drives more sales.</p>
        </Content.Box>
        
      </Col>
      </div>
    </Row>

    <Row className="align-items-center justify-content-center">
    <div className=" d-flex alt-card2 main-container">
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-1 secfull767">
        <Content.Box className="txt-card3">
       <h2><b>Earn cashback</b><br/>on marketing</h2>
        <div className='resp-imagegroup1'>
       <Content.Image className="image-card3">
          <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/VPC/cashback.png"  alt="content" className="resp-image main-img2 w-100"/>
        </Content.Image>
        </div>

       <p>Start earning instant ROI on your online marketing campaigns. Earn up to 1.5% on Google, Facebook, and Microsoft advertising services. Use our cards to pay for hundreds of other online marketing services.</p>
        </Content.Box>
        
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-2 desk-imageGroup">
        <Content.Image className="image-card3">
          <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/VPC/cashback.png"  alt="content" className="resp-image main-img2 w-100"/>
        </Content.Image>
      </Col>
    </div>
    </Row>

    <Row className="align-items-center justify-content-center freelancer-alt-card">
    <div className=" d-flex main-container fourth-sec">
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-1 desk-imageGroup">
        <Content.Image className="image-card4">
          <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/VPC/two-card.png"  alt="content" className="resp-image main-img4 w-100"/>
          {/* <div className='cellphone-video'>
          <video loop autoPlay>
            <source
              src="video/Payoneer.mp4"
              type="video/mp4"
            />
          </video>
        </div> */}
        </Content.Image>
      </Col>
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-2 secfull767">
        <Content.Box className="txt-card4">
        <h2><b>Assign Virtual Cards</b><br /> to  clients</h2>
        <div className='resp-imagegroup1'>
        <Content.Image className="image-card4">
          <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/VPC/two-card.png"  alt="content" className="resp-image main-img4 w-100"/>
        </Content.Image>
        </div>

        <p>Grow your agency by creating reloadable virtual prepaid cards for your clients. Earn cashback on your collective agency ad spend. Our cards work on both existing and new Google Ads, Bing Ads, and Facebook marketing accounts.</p>
        </Content.Box>
      </Col>
    </div>
    </Row>

    <Row className="align-items-center justify-content-center">
    <div className=" d-flex main-section3" >
      <Col className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-2 order-lg-1 secfull767">
        <Content.Box className="txt-card5">
        <h2><span className='blue-h3'>Reloadable </span> Virtual Cards</h2>

        <div className='resp-imagegroup1'>
        <Content.Image className="image-card5">
          <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/VPC/visa-card.png"  alt="content" className="resp-image main-img5 w-100"/>
        </Content.Image>
        </div>


        <p>Virtual cards can be refilled and re-used until they expire. Our platform makes it easy to request new cards or refill existing cards. Monitor card balances and reload multiple cards. Reach out to our virtual card customer support team when you have questions or concerns.</p>
        </Content.Box>
        
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-6 col-xs-6 order-1 order-lg-2 desk-imageGroup">
        <Content.Image className="image-card5">
          <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/VPC/visa-card.png"  alt="content" className="resp-image main-img5 w-100"/>
        </Content.Image>
      </Col>
    </div>
    </Row>

  </Container>
</Content>
)
}