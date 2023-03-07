import React from "react";
import { Error } from "~sections/utility";
import { PageWrapper } from "~components/Core";
import FooterOne from "~sections/marketing/FooterOne";
import CtaSection from "~sections/marketing/Cta";
import HeaderButton from "~sections/marketing/Header";


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

export default function errorPage() {
  return (
    <PageWrapper headerConfig={header}>
        <Error/>
        <CtaSection />
        <FooterOne />
    </PageWrapper>
  )
}

