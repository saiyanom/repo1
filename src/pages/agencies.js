import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection from "~sections/digital/Hero";
import ContentSectionTwo from "~sections/digital/ContentTwo";
import CounterSection from "~sections/marketing/Counter";
import CtaSection from "~sections/marketing/Cta"
import FooterOne from "~sections/marketing/FooterOne";
import HeaderButton from "~sections/marketing/Header"
import { Helmet } from "react-helmet";
import ServicesSectionOne from "~sections/businesses/ServicesOne";

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
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/businesses/ai-auditor-white.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/businesses/ai-auditor-white.svg",
    bgImageClass:"blueBg",
    title: "AI SEO Auditor &",
    title2:"Freelancer Recommendation",
    linkPage:"seo-auditor",
    cardbg:"blue",
    whiteImageClass:"business-ai",
  },
  {
    id:"ss2",
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/businesses/online-marketing-white.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/businesses/online-marketing-white.svg",
    bgImageClass:"pinkBg",
    title: "Online Marketing",
    title2:"Budget Optimization",
    cardbg:"pink",
    whiteImageClass:"business-online",
    linkPage:"talent-marketplace",

  },
  {
    id:"ss3",
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/businesses/freelancer-employee-white.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/businesses/freelancer-employee-white.svg",
    bgImageClass:"mustardBg",
    title:"Freelancer & Employee",
    title2:"Monitoring",
    cardbg:"mustard",
    whiteImageClass:"business-freelancer",
    linkPage:"employee-monitoring",


  },
  {
    id:"ss4",
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/businesses/KYC.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/businesses/KYC.svg",
    bgImageClass:"orangeBg",
    title: "AML & KYC Verified",
    title2: "Freelancers",
    cardbg:"orange",
    whiteImageClass:"business-kyc",
    linkPage:"freelancers",

  },
  {
    id:"ss4",
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/businesses/payment-white.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/businesses/payment-white.svg",
    bgImageClass:"cyanBg",
    title: "Easy International",
    title2:"Payment Processing",
    cardbg:"cyan",
    whiteImageClass:"business-payment",
    linkPage:'prepaid-virtual-cards',
  },
  {
    id:"ss4",
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/businesses/add-college-white.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/businesses/add-college-white.svg",
    bgImageClass:"purpleBg",
    title: "Add College-Educated",
    title2: "interns to your Team",
    cardbg:"purple",
    whiteImageClass:"business-college",
    linkPage:"hire-interns",
  }

]

export default function Digital() {
  return (
    <PageWrapper headerConfig={header}>
      <Helmet>
      <title>All-in-One Agency Scaling Platform | MRKT365</title>
      <meta name="description" content="Sell your services online, manage your team, & hire talent from all over the globe. Our easy-to-use platform has everything your agency needs to thrive!" />
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Vaughan" />
      <meta name="geo.position" content="43.815431;-79.526403" />
      <meta name="ICBM" content="43.815431, -79.526403" />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="All-in-One Agency Scaling Platform | MRKT365" />
      <meta property="og:description" content="Sell your services online, manage your team, & hire talent from all over the globe. Our easy-to-use platform has everything your agency needs to thrive!" />
      <meta property="og:url" content="https://mrkt365.com/agencies" />
      <meta property="og:site_name" content="MRKT365" />
      <meta property="og:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="All-in-One Agency Scaling Platform | MRKT365" />
      <meta name="twitter:description" content="Sell your services online, manage your team, & hire talent from all over the globe. Our easy-to-use platform has everything your agency needs to thrive!" />
      <meta name="twitter:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
      <meta name="twitter:url" content="https://mrkt365.com/agencies" />
      </Helmet>
      <HeroSection />
      <ServicesSectionOne title="Everything You Need to Make Work Happen" content={ServiceData} />
      {/* <AboutSection /> */}
      {/* <ContentSectionOne /> */}
      <ContentSectionTwo />
      {/* <TeamSection /> */}
      {/* <PortfolioSection /> */}
      {/* <PromoSection /> */}
      <CounterSection/>
      <CtaSection />
      <FooterOne/>
    </PageWrapper>
  );
}
