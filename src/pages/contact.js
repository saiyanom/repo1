import React from "react";
import ContactSection from "~sections/contact/ContactOne/ContactSection";
import FooterSection from "~sections/contact/ContactOne/Footer";
import { PageWrapper } from "~components/Core";
import HeaderButton from "~sections/marketing/Header"
import FooterOne from "~sections/marketing/FooterOne"
import CtaSection from "~sections/marketing/Cta"
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

export default function contactOne() {
  return (
    <PageWrapper headerConfig={header}>
        <Helmet>
        <title>Contact | MRKT365</title>
        <meta name="description" content="Ask a question or report a problem. Our support team will answer you shortly." />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Vaughan" />
        <meta name="geo.position" content="43.815431;-79.526403" />
        <meta name="ICBM" content="43.815431, -79.526403" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact | MRKT365" />
        <meta property="og:description" content="Ask a question or report a problem. Our support team will answer you shortly." />
        <meta property="og:url" content="https://mrkt365.com/contact" />
        <meta property="og:site_name" content="MRKT365" />
        <meta property="og:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact | MRKT365" />
        <meta name="twitter:description" content="Ask a question or report a problem. Our support team will answer you shortly." />
        <meta name="twitter:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
        <meta name="twitter:url" content="https://mrkt365.com/contact" />
        </Helmet>
        <ContactSection/>
        <CtaSection />
        <FooterOne/>
    </PageWrapper>
  )
}
