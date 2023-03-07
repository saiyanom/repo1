import React from "react";
import { PageWrapper } from "~components/Core";
import FaqSection from "~sections/pricing-2/Faq";
import PricingSection from "~sections/pricing-2/Pricing";
import FooterSection from "~sections/pricing-2/Footer";
import FooterOne from "~sections/marketing/FooterOne"
import CtaSection from "~sections/marketing/Cta"
import HeaderButton from "~sections/marketing/Header"


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


export default function PricingTwo() {
  return (
    <PageWrapper headerConfig={header}>
        <PricingSection/>
        <CtaSection />
        <FooterOne/>
    </PageWrapper>
  )
}
