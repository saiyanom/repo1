import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from '~components';
import About from './style'
import SectionTitle from './Components/SectionTitle'
import Video from '~components/VideoModal';
export default function AboutSection(){
return(
<About>
  <Container>
    <Row className="align-items-center justify-content-center section-cards ">
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-8 col-xs-10">
        <About.Image>
          <img className="w-100" src="image/microsoft-ads/boy-with-mac.png" alt="about"/>
          {/* <Video id="LWZ7iytIA6k" className="video-btn sonar-emitter"> <i className="fa fa-play" /> </Video> */}
        </About.Image>
      </Col>
      <Col col="12" className="col-xxl-5 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 about-text-card">
        <About.Content mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
          <SectionTitle 
            // subTitle="Watch video" 
            title="Find Microsoft Ads specialists in our marketplace"
            text="Start your journey with Microsoft Advertising the right way. Find many Microsoft-certified experts at various price points in our marketplace that can help your business grow. Receive AI recommendations of vendors we find fitting your specific needs. Track their work through our monitoring tools and be assured that the vendors you hire are the ones doing the work."
            titleProps={{mb:"30px"}}
            subTitleProps={{mb:"25px"}}
            />
        </About.Content>
      </Col>
    </Row>

    <Row className="align-items-center justify-content-center section-cards">
      
      <Col col="12" className="col-xxl-5 offset-xxl-1 col-lg-5 col-md-8 col-xs-10">
        <About.Content mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px" className="about-text-card2">
          <SectionTitle 
            // subTitle="Watch video" 
            title="Scan your account & get AI recommendations"
            text="Make sure your Microsoft Advertising platform is optimized for all your marketing campaigns and needs through our AI scans. Receive AI recommendations for changes and a short list of candidates to choose from based on your needs. Let us break it down for you to clearly show where opportunities are hidden."
            titleProps={{mb:"30px"}}
            subTitleProps={{mb:"25px"}}
            />
        </About.Content>
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-8 col-xs-10">
        <About.Image>
          <img className="w-100" src="image/microsoft-ads/stats.png" alt="about"/>
          {/* <Video id="LWZ7iytIA6k" className="video-btn sonar-emitter"> <i className="fa fa-play" /> </Video> */}
        </About.Image>
      </Col>
    </Row>

    <Row className="align-items-center justify-content-center section-cards">
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-8 col-xs-10">
        <About.Image className="image-about-1">
          <img className="w-100" src="image/microsoft-ads/smiling-girl.png" alt="about"/>
          {/* <Video id="LWZ7iytIA6k" className="video-btn sonar-emitter"> <i className="fa fa-play" /> </Video> */}
        </About.Image>
      </Col>
      <Col col="12" className="col-xxl-5 offset-xxl-1 col-lg-5 col-md-8 col-xs-10">
        <About.Content mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px" className="about-text-card3">
          <SectionTitle 
            // subTitle="Watch video" 
            title="Get VPC with cashback on your
            Microsoft Account expenses"
            text="Earn from our VPC by adding your Microsoft Account to the list of platforms you can receive cashback from. Easily manage your marketing expenses and budget effectively to stop overpaying for unwanted services. Be assured that all payments made through our VPC are securely and discreetly done, without the need for any of your personal information."
            titleProps={{mb:"30px"}}
            subTitleProps={{mb:"25px"}}
            />
        </About.Content>
      </Col>
    </Row>

    <Row className="align-items-center justify-content-center section-cards">
      
      <Col col="12" className="col-xxl-5 offset-xxl-1 col-lg-5 col-md-8 col-xs-10">
        <About.Content mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px" className="about-text-card4">
          <SectionTitle 
            // subTitle="Watch video" 
            title="Free monthly recommendation reports"
            text="Receive monthly recommendation reports to further optimize your marketing campaigns. Know exactly where and what is hindering your marketing efforts. Or find which campaigns are performing exceptionally well to replicate it to underperforming or future campaigns. Alongside recommendations, use the reports to effectively create better and more effective marketing strategies."
            titleProps={{mb:"30px"}}
            subTitleProps={{mb:"25px"}}
            />
        </About.Content>
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-8 col-xs-10">
        <About.Image>
          <img className="w-100" src="image/microsoft-ads/laptop-stats-screen.png" alt="about"/>
          {/* <Video id="LWZ7iytIA6k" className="video-btn sonar-emitter"> <i className="fa fa-play" /> </Video> */}
        </About.Image>
      </Col>
    </Row>

    <Row className="align-items-center justify-content-center section-cards">
      <Col xs="12" className="col-xl-6 col-lg-6 col-md-8 col-xs-10">
        <About.Image className="image-about-1">
          <img className="w-100" src="image/home-agency/recruitment-agencies-5.jpg" alt="about"/>
          {/* <Video id="LWZ7iytIA6k" className="video-btn sonar-emitter"> <i className="fa fa-play" /> </Video> */}
        </About.Image>
      </Col>
      <Col col="12" className="col-xxl-5 offset-xxl-1 col-lg-5 col-md-8 col-xs-10">
        <About.Content mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px" className="about-text-card5">
          <SectionTitle 
            // subTitle="Watch video" 
            title="Easy to connect to your Google and Facebook accounts"
            text="Have all your marketing platforms integrated into one place. Easily connect and manage marketing campaigns from your Google and Facebook accounts through the Microsoft platform. Get an overall better view and understanding of your campaigns to know what is and is not working."
            titleProps={{mb:"30px"}}
            subTitleProps={{mb:"25px"}}
            />
        </About.Content>
      </Col>
    </Row>
    {/*/ .about-us Content */}
  </Container>
</About>

)
}
