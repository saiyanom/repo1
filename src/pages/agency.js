import React from "react"
import { PageWrapper } from "~components/Core"
import HeroSection from "~sections/marketing/Hero"
import ServiceSection from "~sections/marketing/Service"
import FeatureSection from "~sections/marketing/Features"
import ContentSectionOne from "~sections/marketing/ContentOne"
import ContentSectionTwo from "~sections/marketing/ContentTwo"
import TestimonialSection from "~sections/marketing/Testimonial"
import CounterSection from "~sections/marketing/Counter"
import CtaSection from "~sections/marketing/Cta"
import FooterOne from "~sections/marketing/FooterOne"
import HeaderButton from "~sections/marketing/Header"
import serviceData from "../data/marketing/Service"

const header = {
  headerClasses: "site-header site-header--menu-start light-header site-header--sticky",
  containerFluid:true,
  // customLogo: Images.HeaderLogo,
  buttonBlock: (
    <HeaderButton
      className="ms-auto d-none d-xs-inline-flex"
      btnOneText="Login"
      btnTwoText="Sign Up Now"
      mr="15px"
      mrLG="0"
    />
  ),
}

const serviceDataAgency = {
  services: [
      {
        id:"ms1",
        icon: "image/marketing/agency-icon-1.svg",
        text:"AI SEO Auditor & Freelancer Recommendation",
      },
      {
        id:"ms2",
        icon: "image/marketing/agency-icon-2.svg",
        text:"Online Marketing Budget Optimization",
      },
      {
        id:"ms3",
        icon: "image/marketing/agency-icon-3.svg",
        text:"Freelancer & Employee Monitoring",
      },
      {
        id:"ms4",
        icon: "image/marketing/agency-icon-4.svg",
        text:"Freelancer Fraud Detection",
      },
      {
        id:"ms5",
        icon: "image/marketing/agency-icon-5.svg",
        text:"Easy International Payment Processing",
      },
      {
        id:"ms6",
        icon: "image/marketing/agency-icon-6.svg",
        text:"Add College-Educated interns to your Team",
      },
    ]
}

var reverserowagency = [
  {
   "title":"Sell your services in our marketplace",
   "text":"MRKT365 is the only resource you need to find the right company, freelancer or intern. With Reviews, Ratings and Verification, MRKT365 gives you the tools zyou need to hire with confidence. Get matched with our users directly or research yourself from a list of verified and reviewed options.",
    "imagePosition":"right",
    "src":"image/marketing/agency-image-1.png",
    "alt":"",
  },
   {
    "title":"Manage your Team with our Employee Monitoring App",
    "text":"Measure the productivity of freelancers you hire and your existing employees. Our services include an easy to install tracking program. All activities completed by your team can be monitored and documented through our employee tracker.",
     "imagePosition":"left",
     "src":"image/marketing/agency-image-2.png",
     "alt":"",
   },
   {
    "title":"Take advantage of our Virtual Prepaid Card",
    "text":"We have partnered with Visa and Amex to provide pre-paid virtual cards which you can use for online marketing, features and its services without submitting your debit or credit card details. Spend only the money you’ve uploaded to your card and monitor how much you’re spending online.",
     "imagePosition":"right",
     "src":"image/marketing/agency-image-3.png",
     "alt":"",

   },
   {
    "title":"Hire Interns from all over the globe",
    "text":"Gain industry experience and work for top companies from across the globe \n Choose how many weekly hours you can allocate towards the internship \n Work at the comfort of your home making it easier to continue your studies with an internship",
     "imagePosition":"left ",
     "src":"image/marketing/agency-image-4.png",
     "alt":"",
   },
   
];



export default function Agency() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection />
      <ServiceSection content={serviceDataAgency}/>
      {/* <AboutSection /> */}
      <ContentSectionOne  heading="Why Work With Us?" content={reverserowagency}/>
   
      {/* <PricingSection /> */}
      {/* <TestimonialSection /> */}
      {/* <CtaSection /> */}
      <CounterSection/>
      <FooterOne/>
    </PageWrapper>
  );
}
