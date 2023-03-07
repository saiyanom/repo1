import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSectionMarketplace from "~sections/digital/Hero-marketplace";
import ServicesSection from "~sections/agency/Services";
import ServicesSectionTwo from "~sections/marketplace/ServicesTwo";
import AboutSection from "~sections/marketplace/About";
import ContentSectionTwo from "~sections/agency/ContentTwo";
import CounterSection from "~sections/agency/Counter";
import CtaSection from "~sections/marketing/Cta"
import FooterOne from "~sections/marketing/FooterOne";
import HeaderButton from "~sections/marketing/Header"
import { Helmet } from "react-helmet";

const header = {
  headerClasses: "site-header site-header--menu-start light-header site-header--sticky ",
  containerFluid:true,
  // customLogo: Images.HeaderLogo,
  buttonBlock: (
    <HeaderButton
      className="ms-auto d-none d-xs-inline-flex"
      btnOneText="Login"
      btnTwoText="Sign Up"
      mr="15px"
      mrLG="0"
    />
  ),
}

const ServiceData =[
    {
      id:"ss1",
      image:"https://dzekq3sbbgf19.cloudfront.net/public/image/home-agency/hire-freelancer-1.png",
      title: "Development & IT",
    },
    {
      id:"ss2",
      image:"https://dzekq3sbbgf19.cloudfront.net/public/image/home-agency/hire-freelancer-2.png",
      title: "Administrative support",
    },
    {
      id:"ss3",
      image:"https://dzekq3sbbgf19.cloudfront.net/public/image/home-agency/hire-freelancer-3.png",
      title:"Creative designers",
    },
    {
      id:"ss4",
      image:"https://dzekq3sbbgf19.cloudfront.net/public/image/home-agency/hire-freelancer-4.png",
      title: "Writing & translation",
    },
    {
        id:"ss5",
        image:"https://dzekq3sbbgf19.cloudfront.net/public/image/home-agency/hire-freelancer-5.png",
        title: "Marketing & sales",
        
      },
      {
        id:"ss6",
        image:"https://dzekq3sbbgf19.cloudfront.net/public/image/home-agency/hire-freelancer-6.png",
        title: "Accounting & finance",
       
      }
  ]

export default function Marketplace() {
  return (
    <PageWrapper headerConfig={header}>
      <Helmet>
      <title>Global Talent Marketplace | Only Settle for the Best Hires</title>
      <meta name="description" content="Accelerate your hiring process with our talent marketplace. We find will help you hire outgoing and professional freelancers, agencies, and interns." />
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Vaughan" />
      <meta name="geo.position" content="43.815431;-79.526403" />
      <meta name="ICBM" content="43.815431, -79.526403" />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Global Talent Marketplace | Only Settle for the Best Hires" />
      <meta property="og:description" content="Accelerate your hiring process with our talent marketplace. We find will help you hire outgoing and professional freelancers, agencies, and interns." />
      <meta property="og:url" content="https://mrkt365.com/talent-marketplace" />
      <meta property="og:site_name" content="MRKT365" />
      <meta property="og:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Global Talent Marketplace | Only Settle for the Best Hires" />
      <meta name="twitter:description" content="Accelerate your hiring process with our talent marketplace. We find will help you hire outgoing and professional freelancers, agencies, and interns." />
      <meta name="twitter:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
      <meta name="twitter:url" content="https://mrkt365.com/talent-marketplace" />

      </Helmet>
      <HeroSectionMarketplace />
      <ServicesSection />
      <ContentSectionTwo title="<b>Hire Freelancers</b> & Agencies for any job" content={ServiceData}/>
      <ServicesSectionTwo />
      <CounterSection/>
      <AboutSection />
      <CtaSection />
      <FooterOne/>
    </PageWrapper>
  );
}
