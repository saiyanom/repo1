import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection from '~sections/project/Hero'
import FeatureSection from '~sections/project/Features'
import ContentOne from '~sections/project/ContentOne'
import ContentTwo from '~sections/project/ContentTwo'
// import IntegrationSection from '~sections/project/Integration'
import CtaSection from "~sections/marketing/Cta"
// import FooterTwo from '~sections/project/FooterTwo'
import FooterOne from "~sections/marketing/FooterOne"
import HeaderButton from "~sections/marketing/Header"
import ServicesSectionOne from "~sections/intern/ServicesOne";
import { Helmet } from "react-helmet";
import PromoSection from '~sections/intern/Promo';




const header = {
  headerClasses: "site-header site-header--menu-start light-header site-header--sticky",
  containerFluid:true,
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
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/intern/notepad.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/intern/notepad-white.svg",
    title: "Sign up for free",
    title2:"as an Intern",
    linkPage:"ai-auditor",
    cardbg:"purple",
    whiteImageClass:"business-ai",
  },
  {
    id:"ss2",
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/intern/person.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/intern/person-white.svg",
    title: "Create an ",
    title2:"amazing profile",
    cardbg:"pink",
    whiteImageClass:"business-online",
    linkPage:"marketplace",

  },
  {
    id:"ss1",
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/intern/search.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/intern/search-white.svg",
    title: "Browse our ",
    title2:"Marketplace",
    linkPage:"ai-auditor",
    cardbg:"mustard",
    whiteImageClass:"business-ai",
  },
  {
    id:"ss2",
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/intern/heart.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/intern/heart-white.svg",
    title: "Apply for your ",
    title2:"dream Internship",
    cardbg:"cyan",
    whiteImageClass:"business-online",
    linkPage:"marketplace",

  },

]


export default function Project() {
  return (
    <PageWrapper headerConfig={header}>
        <Helmet>
        <title>Kickstart your Career | Find a Virtual Internship Today</title>
        <meta name="description" content="Searching for a virtual internship? Find meaningful internships, connect with top global companies, and gain valuable skills while working from home." />

        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Vaughan" />
        <meta name="geo.position" content="43.815431;-79.526403" />
        <meta name="ICBM" content="43.815431, -79.526403" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kickstart your Career | Find a Virtual Internship Today" />
        <meta property="og:description" content="Searching for a virtual internship? Find meaningful internships, connect with top global companies, and gain valuable skills while working from home." />
        <meta property="og:url" content="https://mrkt365.com/internships" />
        <meta property="og:site_name" content="MRKT365" />
        <meta property="og:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Kickstart your Career | Find a Virtual Internship Today" />
        <meta name="twitter:description" content="Searching for a virtual internship? Find meaningful internships, connect with top global companies, and gain valuable skills while working from home." />
        <meta name="twitter:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
        <meta name="twitter:url" content="https://mrkt365.com/internships" />
        </Helmet>
        <HeroSection/>
        {/* <FeatureSection/> */}
        <PromoSection/>
        <ContentOne/>
        <ContentTwo/>
        <ServicesSectionOne  ClassName="intern-features align-left1" title="How to get started" content={ServiceData}/>
        <CtaSection/> 
        <FooterOne />
    </PageWrapper>
  )
}

