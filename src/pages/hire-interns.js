import React from "react"
import { PageWrapper } from "~components/Core"
import HeroHireInterns from '~sections/services/HeroHireInterns'
import ContentSectionTwo from '~sections/services/ContentTwo/ContentSectionTwo'
import PromoSection from '~sections/services/Promo'
import CounterSection from "~sections/services/Counter"
import CtaSection from "~sections/marketing/Cta"
import FooterOne from "~sections/marketing/FooterOne"
import HeaderButton from "~sections/marketing/Header"
import ServicesSectionOne from "~sections/HireIntern/ServicesOne";

import { Helmet } from "react-helmet"


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

var reverserow = [
  {
   "title":"Convenience",
   "text":"We make it easy to create unpaid or paid internships that reach hundreds of students ready to apply. We recruit, pre-screen, and interview, remote interns for you.",
   "text2":"Offer flexible internships to suit your company's unique needs. Simply select the duration of your remote internship and find we will match ambitious interns from across the globe with your company.",
   "imagePosition":"left",
    "src":"https://dzekq3sbbgf19.cloudfront.net/public/image/marketing/Convenience.jpg",
    "alt":"",
  },
   {
    "title":"International reach",
    "text":"Gain access to diverse talent and pick from the brightest young minds.",
    "text2":"Future-proof your workforce by hiring engaged candidates that are skilled and ready to complete projects.",
    "text3":"Break into new global markets with remote interns who speak multiple languages and understand domestic markets.",
    "imagePosition":"right",
     "src":"https://dzekq3sbbgf19.cloudfront.net/public/image/marketing/international.jpg",
     "alt":"",
   },
   {
    "title":"Hire skilled Interns",
    "text":"Chose from the top students, graduates, and career-changers when creating a remote internship with MRKT365.",
    "text2":"Our vetting process utilizes comprehensive online applications, online interviews, skills assessments, university checks, and background checks.",
    "imagePosition":"left",
     "src":"https://dzekq3sbbgf19.cloudfront.net/public/image/hire-interns/image3.png",
     "alt":"",

   },
   {
    "title":"No obligations",
    "text":"Add interns on a month-to-month basis and pay as you go. Pick the work hours that work for you.",
    "text2":"Unlike traditional internships, virtual internships don’t involve limitations of proximity and visas. Simplify the legalities across borders when hiring interns remotely.", 
    "imagePosition":"right",
     "src":"https://dzekq3sbbgf19.cloudfront.net/public/image/marketing/no-obligations.jpg",
     "alt":"",
   }
];

const ServiceData =[
  {
    id:"ss1",
    // icon:"fas fa-layer-group",
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/hire-interns/hands.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/hire-interns/hands-white.svg",
    title: "Empower emerging",
    title2:"talent",
    text:"Assist talented students in mastering their skills, adding to their resumé, and lifting their confidence.",
    // linkPage:"ai-auditor",
    whiteImageClass:"business-ai",
    cardbg:'purple',
  },
  {
    id:"ss2",
    // icon:"fas fa-bell",
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/hire-interns/tick-person.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/hire-interns/tick-person-white.svg",
    title: "Freshen-up your",
    title2:"team",
    text:"Grow your team without breaking the bank. Finish your projects faster with unpaid interns.",
    whiteImageClass:"business-online",
    // linkPage:"marketplace",
    cardbg:'pink',
    
  },
  {
    id:"ss3",
    // icon:"fas fa-envelope",
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/hire-interns/medal.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/hire-interns/medal-white.svg",
    title: "Internship certificate",
    text:"We will generate a certificate for interns upon program completion based on the skills they enhanced.",
    // title3:"businesses",
    // linkPage:"ai-auditor",
    cardbg:"cyan",
    whiteImageClass:"business-ai",

    
  },

]


export default function HireInterns() {
  return (
    <PageWrapper headerConfig={header}>
      <Helmet>
      <title>Find Skilled Interns Globally | Hire an Intern Today</title>
      <meta name="description" content="Hire the best interns from all over the world. Post jobs & find qualified candidates fast. Hire skilled interns with virtual internships on MRKT365 today!" />
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Vaughan" />
      <meta name="geo.position" content="43.815431;-79.526403" />
      <meta name="ICBM" content="43.815431, -79.526403" />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Find Skilled Interns Globally | Hire an Intern Today" />
      <meta property="og:description" content="Hire the best interns from all over the world. Post jobs & find qualified candidates fast. Hire skilled interns with virtual internships on MRKT365 today!" />
      <meta property="og:url" content="https://mrkt365.com/hire-interns" />
      <meta property="og:site_name" content="MRKT365" />
      <meta property="og:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Find Skilled Interns Globally | Hire an Intern Today" />
      <meta name="twitter:description" content="Hire the best interns from all over the world. Post jobs & find qualified candidates fast. Hire skilled interns with virtual internships on MRKT365 today!" />
      <meta name="twitter:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
      <meta name="twitter:url" content="https://mrkt365.com/hire-interns" />
    
      </Helmet>
      <HeroHireInterns/>
      <PromoSection/>
      <ContentSectionTwo content={reverserow}/>
      <ServicesSectionOne ClassName="intern-features" title="Trade <b>mentorship</b> for accelerated <b>deadlines</b>" content={ServiceData}/>
      <CounterSection/>
      <CtaSection />
      <FooterOne/>
    </PageWrapper>
  )
}
