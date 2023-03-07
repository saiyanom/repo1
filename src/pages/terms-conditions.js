import React from "react"
import { PageWrapper } from "~components/Core"
import ServicesSectionTwo from "~sections/TermsCondition/ServicesTwo/"
import CtaSection from "~sections/marketing/Cta"
import FooterOne from "~sections/marketing/FooterOne"
import HeaderButton from "~sections/marketing/Header"
import { Helmet } from "react-helmet"


const header = {
  headerClasses: "site-header site-header--menu-start light-header site-header--sticky sticky-header ",
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




export default function TermsCondiSec() {
  return (
      <PageWrapper headerConfig={header}>
        <Helmet>
        <title>TERMS OF SERVICE | MRKT365 </title>
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
        <ServicesSectionTwo />
        <CtaSection />
        <FooterOne/>
      </PageWrapper>
  )
}
