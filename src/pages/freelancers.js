import React from "react";
import { PageWrapper } from "~components/Core"
import HeaderButton from "~sections/marketing/Header"
import HeroSection from '~sections/it/Hero'
import FeatureSection from '~sections/it/Feature'
import ContentSectionOne from '~sections/it/ContentOne'
import CtaSection from "~sections/marketing/Cta"
import FooterOne from "~sections/marketing/FooterOne"
import ServicesSectionOne from "~sections/freelancers/ServicesOne";
import { Helmet } from "react-helmet";

const header = {
  headerClasses: "site-header site-header--menu-start light-header site-header--sticky",
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
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/freelancers/globe.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/freelancers/globe-white.svg",
    title: "Reach",
    title2:"awesome clients",
    title3:"globally",
    cardbg:"cyan",
    whiteImageClass:"business-ai",
  },
  {
    id:"ss2",
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/freelancers/heart.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/freelancers/heart-white.svg",
    title: "Work on projects",
    title2:"that you are",
    title3:"passionate about",
    cardbg:"red",
    whiteImageClass:"business-online",

  },
  {
    id:"ss1",
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/freelancers/foldar.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/freelancers/foldar-white.svg",
    title: "Receive payments",
    title2:"quickly & securely",
    cardbg:"blue",
    whiteImageClass:"business-ai",
  },
  {
    id:"ss2",
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/freelancers/clock.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/freelancers/clock-white.svg",
    title: "Choose when, where",
    title2:"& how you want to",
    title3:"work",
    cardbg:"purple",
    whiteImageClass:"business-online",

  },

]



export default function HomeIt() {
  return (
    <PageWrapper  headerConfig={header}>
        <Helmet>
        <title>Find Freelance Projects Today | Join MRKT365</title>
        <meta name="description" content="Find the best freelancing jobs from around the world & connect with top companies. All you need is a laptop & an internet connection. Become a freelancer!" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Vaughan" />
        <meta name="geo.position" content="43.815431;-79.526403" />
        <meta name="ICBM" content="43.815431, -79.526403" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Find Freelance Projects Today | Join MRKT365" />
        <meta property="og:description" content="Find the best freelancing jobs from around the world & connect with top companies. All you need is a laptop & an internet connection. Become a freelancer!" />
        <meta property="og:url" content="https://mrkt365.com/freelancers" />
        <meta property="og:site_name" content="MRKT365" />
        <meta property="og:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Find Freelance Projects Today | Join MRKT365" />
        <meta name="twitter:description" content="Find the best freelancing jobs from around the world & connect with top companies. All you need is a laptop & an internet connection. Become a freelancer!" />
        <meta name="twitter:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
        <meta name="twitter:url" content="https://mrkt365.com/freelancers" />
        </Helmet>
        <HeroSection/>
        <ServicesSectionOne title="Discover more Freelance jobs" content={ServiceData} />
        <FeatureSection/>
        <ContentSectionOne/>
        <CtaSection/>
        <FooterOne/> 
    </PageWrapper>
  )
 }