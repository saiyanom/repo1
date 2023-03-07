import React from "react";
import { PageWrapper } from "~components/Core";
import HeroEmployeeMonitoring from "~sections/digital/Hero-employee-monitoring";
import ServicesSectionOne from "~sections/intern/ServicesOne";
import ServicesSectionTwo from "~sections/digital/ServicesTwo";
import ContentSectionTwo from '~sections/EmployeeServicesOne/ContentTwo/ContentSectionTwo'
import ContentSectionFour from "~sections/digital/ContentFour";
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
    // icon:"fas fa-layer-group",
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/employee/pad.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/employee/pad-white.svg",
    title: "$10 ",
    title2:"per hour",
    linkPage:"ai-auditor",
    whiteImageClass:"business-ai",
    cardbg:'purple',
  },
  {
    id:"ss2",
    // icon:"fas fa-bell",
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/employee/dollar.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/employee/dollar-white.svg",
    title: "Billing:  ",
    title2:"hourly ",
    whiteImageClass:"business-online",
    linkPage:"marketplace",
    cardbg:'pink',
    
  },
  {
    id:"ss3",
    // icon:"fas fa-envelope",
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/employee/clock.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/employee/clock-white.svg",
    title: "Duration: ",
    title2:"ongoing",
    linkPage:"ai-auditor",
    cardbg:"mustard",
    whiteImageClass:"business-ai",

    
  },
  {
    id:"ss4",
    // icon:"fas fa-chart-pie",
    image:"https://dzekq3sbbgf19.cloudfront.net/public/image/employee/double-tick.svg",
    whiteImage:"https://dzekq3sbbgf19.cloudfront.net/public/image/employee/double-tick-white.svg",
    title: "30-day payment",
    title2:"schedule",
    cardbg:"cyan",
    whiteImageClass:"business-online",
    linkPage:"marketplace",

    
  }
]

  var reverserow = [
    {
     "title":"Vendor ",
     "title2":"matching",
     "text":"Healthy Pass was matched to multiple developers when posting their project publicly. They chose Arun S. due to his expertise and experience in developing mobile apps.",
      "imagePosition":"right",
      "src":"https://dzekq3sbbgf19.cloudfront.net/public/image/employee/screen2.png",
      "alt":"",
      "lineClass":"blue-line",
    },
     {

      "title":"Project monitoring",
      "text":"Healthy Pass was able to witness periodic screenshots from the monitor of the remote freelancer they hired. They also started using our tracker with their remote employees as they worked at home due to the pandemic. Our app also confirms the identity of the person doing the work, allowing you to avoid middlemen with freelancer contracts.",
       "imagePosition":"left",
       "src":"https://dzekq3sbbgf19.cloudfront.net/public/image/employee/screen3.png",
       "alt":"",
      "lineClass":"blue-line",

     },
     {
      "title":"Detailed reporting",
      "text":"Stop overpaying, make time tracking easy. Receive time tracking reports with productivity-boosting insights. Start paying your teams faster and with greater accuracy.",
       "imagePosition":"right",
       "src":"https://dzekq3sbbgf19.cloudfront.net/public/image/employee/screen4.png",
       "alt":"",
      "lineClass":"blue-line",

  
     },
     {
      "title":"Plan projects in advance",
      "text":"Healthy Pass was able to better organize its team by monitoring the work patterns of its freelancers and employees. Management was able to use this data to better delegate tasks and meet development milestones on time.",
       "imagePosition":"left",
       "src":"https://dzekq3sbbgf19.cloudfront.net/public/image/employee/screen5.png",
       "alt":"",
       "lineClass":"blue-line",

     },
     {
        "title":"Constant",
        "title2":" communication",
        "text":"Healthy Pass and Arun were able to stay in contact with instant messaging when plans met reality. Freelancers receive project notifications to eliminate downtime. Draft deliverables were able to be exchanged between Arun and Healthy Pass employees using our project dropbox.",
         "imagePosition":"right",
         "src":"https://dzekq3sbbgf19.cloudfront.net/public/image/employee/screen6.png",
         "alt":"",
        "lineClass":"blue-line",

       }
  ];

export default function Digital() {
  return (
    <PageWrapper headerConfig={header}>
      <Helmet>
      <title>Easy-to-Use Employee Monitoring Software | MRKT365</title>
      <meta name="description" content="Seamlessly Monitor Your Remote Employees. Feel confident knowing that employees are working on the right tasks with our employee monitoring software." />
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Vaughan" />
      <meta name="geo.position" content="43.815431;-79.526403" />
      <meta name="ICBM" content="43.815431, -79.526403" />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Easy-to-Use Employee Monitoring Software | MRKT365" />
      <meta property="og:description" content="Seamlessly Monitor Your Remote Employees. Feel confident knowing that employees are working on the right tasks with our employee monitoring software." />
      <meta property="og:url" content="https://mrkt365.com/employee-monitoring" />
      <meta property="og:site_name" content="MRKT365" />
      <meta property="og:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Easy-to-Use Employee Monitoring Software | MRKT365" />
      <meta name="twitter:description" content="Seamlessly Monitor Your Remote Employees. Feel confident knowing that employees are working on the right tasks with our employee monitoring software." />
      <meta name="twitter:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
      <meta name="twitter:url" content="https://mrkt365.com/employee-monitoring" />

      </Helmet>
      <HeroEmployeeMonitoring />
      <ServicesSectionTwo />
      <ContentSectionFour />
      <ServicesSectionOne ClassName="intern-features" title="Project requirements for health pass" content={ServiceData}/>
      <ContentSectionTwo content={reverserow}/>
      <CtaSection />
      <FooterOne/>
    </PageWrapper>
  );
}
