import React from "react"
import { PageWrapper } from "~components/Core"
import HeroSection from "~sections/marketing/Hero"
import ServiceSection from "~sections/marketing/Service"
import FeatureSection from "~sections/marketing/Features"
import ServicesSectionOne from "~sections/homepageServiceSection/ServicesOne";
import ContentSectionTwo from "~sections/marketing/ContentTwo"
import TestimonialSection from "~sections/marketing/Testimonial"
import CounterSection from "~sections/marketing/Counter"
import CtaSection from "~sections/marketing/Cta"
import FooterOne from "~sections/marketing/FooterOne"
import HeaderButton from "~sections/marketing/Header"
import { Helmet } from "react-helmet"
import ContentSectionOne from "~sections/Homepage/ContentOne"

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


var reverserow = [
  {
   "title":"Businesses",
   "text1":"Get connected with & hire top-quality freelancers, interns, and agencies.",
   "text2":"Transform your marketing decision-making process with our AI scans & dashboards.",
   "text3":"Seamlessly connect & monitor your existing team’s performance.",
   "imagePosition":"left",
   "src":"https://dzekq3sbbgf19.cloudfront.net/public/image/homepage/businesses.png",
   "imageclass":"bigImage",
   "gifsrc":"https://dzekq3sbbgf19.cloudfront.net/public/image/homepage/dot-animation.gif",
   "gifimageclass":"dotImage",
   "alt":"Businesses",
   "bgclass":"home-section-1",
   "link":" /businesses",
  },
   {
    "title":"Freelancers",
    "text1":"Get matched with the right clients & work with international companies.",
    "text2":"Work the way you like. Receive short-term, long-term, & continuous project offers.",
    "text3":"Collect payments securely and promptly using our proof-of-work app.",
    "imagePosition":"right",
    "src":"https://dzekq3sbbgf19.cloudfront.net/public/image/homepage/freelancers.png",
    "imageclass":"bigImage respimg",
    "gifsrc":"https://dzekq3sbbgf19.cloudfront.net/public/image/homepage/dot-animation.gif",
   "gifimageclass":"dotImage",
    "alt":"Freelancers",
    "bgclass":"home-section-2",
    "link":"/freelancers",
   },
   {
    "title":"Agencies",
    "text1":"Find your next opportunity and grow your client base on our global marketplace.",
    "text2":"Discover the right freelancers and run projects your way, let our AI system find your new rockstars.",
    "text3":"Measure the productivity of your employees and freelancers with our easy-to-use monitoring apps.",
    "imagePosition":"left",
    "src":"https://dzekq3sbbgf19.cloudfront.net/public/image/homepage/agencies.png",
    "imageclass":"bigImage",
    "gifsrc":"https://dzekq3sbbgf19.cloudfront.net/public/image/homepage/dot-animation.gif",
   "gifimageclass":"dotImage",
    "alt":"Agencies",
    "bgclass":"home-section-3",
    "link":"/agencies",
   },
   {
    "title":"Interns",
    "text1":"Work remotely with companies from different industries around the world.",
    "text2":"Build transferable skills on a flexible schedule.",
    "text3":"Get a head start by expanding your network globally.",
    "imagePosition":"right",
    "src":"https://dzekq3sbbgf19.cloudfront.net/public/image/homepage/interns.png",
    "imageclass":"bigImage respimg",
    "gifsrc":"https://dzekq3sbbgf19.cloudfront.net/public/image/homepage/dot-animation.gif",
   "gifimageclass":"dotImage",
    "alt":"Interns",
    "bgclass":"home-section-4",
    "link":" /internships",

   },
   {
    "title":'Recruiters',
    "text1":"Place your candidates on a global stage.",
    "text2":"Earn high commission rates on all transactions.",
    "text3":"Receive ready-made marketing materials.",
    "imagePosition":"left",
    "src":"https://dzekq3sbbgf19.cloudfront.net/public/image/homepage/recuritment-agencies.png",
    "imageclass":"bigImage",
    "gifsrc":"https://dzekq3sbbgf19.cloudfront.net/public/image/homepage/dot-animation.gif",
   "gifimageclass":"dotImage",
    "alt":"Recruitment Agencies",
    "bgclass":"home-section-5",
    "link":"/recruiters",
   },
   {
    "title":'Affiliates',
    "text1":"Earn affiliate income from buyers & sellers on our marketplace.",
    "text2":"We operate around the globe.",
    "text3":"Get a professional dashboard with pre-made marketing materials.",
    "imagePosition":"right",
    "src":"https://dzekq3sbbgf19.cloudfront.net/public/image/homepage/affiliate.png",
    "imageclass":"bigImage respimg",
    "gifsrc":"https://dzekq3sbbgf19.cloudfront.net/public/image/homepage/dot-animation.gif",
   "gifimageclass":"dotImage",
    "alt":"Affiliates",
    "bgclass":"home-section-6",
    "link":"/affiliates",
   }
];

const ServiceData =[
  {
    id:"ss1",
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/homepage/marketplace.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/homepage/marketplace-white.svg",
    title: "Talent Marketplace",
    text: "Connect with top",
    text2:"Freelancers, Agencies,",
    text3:" and Interns.",
    linkPage:"talent-marketplace",
    cardbg:"purple",
    whiteImageClass:"market",
  },
  {
    id:"ss2",
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/homepage/ai-auditor.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/homepage/ai-auditor-white.svg",
    title: "AI Auditor",
    text: "Discover your next",
    text2: 'great marketing',
    text3: "move or hire.",
    cardbg:"pink",
    whiteImageClass:"auditor",
    linkPage:"seo-auditor",

  },
  {
    id:"ss3",
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/homepage/pvc.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/homepage/pvc-white.svg",
    title:"Employee Monitoring",
    text:"Bring out the Best in",
    text2:"your Remote Team with ",
    text3:"our Productivity Tools",
    cardbg:"mustard",
    whiteImageClass:"pvc-cls",
    linkPage:"employee-monitoring",

  },
  {
    id:"ss4",
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/homepage/employee.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/homepage/employee-white.svg",
    title: "Prepaid Virtual Cards",
    text:"Earn up to 1.5%",
    text2:"Cashback on Online",
    text3:"marketing ad spend.",
    cardbg:"cyan",
    whiteImageClass:"employee-cls",
    linkPage:"prepaid-virtual-cards",


  }
]



export default function Marketing() {
  return (
      <PageWrapper headerConfig={header}>
        <Helmet>
        <title>MRKT365 | AI Marketing Platform & Talent Marketplace</title>
        <meta name="description" content="All-in-one platform for all businesses. Hire freelancers, agencies, & interns, automate your marketing, manage your team, & get virtual prepaid credit cards" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Vaughan" />
        <meta name="geo.position" content="43.815431;-79.526403" />
        <meta name="ICBM" content="43.815431, -79.526403" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MRKT365 | AI Marketing Platform & Talent Marketplace" />
        <meta property="og:description" content="All-in-one platform for all businesses. Hire freelancers, agencies, & interns, automate your marketing, manage your team, & get virtual prepaid credit cards" />
        <meta property="og:url" content="https://mrkt365.com" />
        <meta property="og:site_name" content="MRKT365" />
        <meta property="og:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="MRKT365 | AI Marketing Platform & Talent Marketplace" />
        <meta name="twitter:description" content="All-in-one platform for all businesses. Hire freelancers, agencies, & interns, automate your marketing, manage your team, & get virtual prepaid credit cards" />
        <meta name="twitter:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
        <meta name="twitter:url" content="https://mrkt365.com" />
        </Helmet>
        <HeroSection/>
        <ContentSectionOne heading="" content={reverserow}/>
        <FeatureSection/>
        <ServicesSectionOne title="Do it all with MRKT365" content={ServiceData}/>
        <CounterSection/>
        <CtaSection />
        <FooterOne/>
      </PageWrapper>
  )
}
