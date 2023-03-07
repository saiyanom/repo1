import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSectionAuditor from "~sections/digital/Hero-auditor";
import ContentSectionThree from "~sections/digital/ContentThree";
import CtaSection from "~sections/marketing/Cta"
import FooterOne from "~sections/marketing/FooterOne";
import HeaderButton from "~sections/marketing/Header";
import AboutSection  from "~sections/Aiauditor/About";
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

export default function Auditor() {
  return (
    <PageWrapper headerConfig={header}>
      <Helmet>
      <title>Automate your Marketing with Our AI SEO Auditor</title>
      <meta name="description" content="Powerful SEO audit tool for agencies. Automatically check for marketing opportunities and get freelancer recommendations who can fix them within your budget." />
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Vaughan" />
      <meta name="geo.position" content="43.815431;-79.526403" />
      <meta name="ICBM" content="43.815431, -79.526403" />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Automate your Marketing with Our AI SEO Auditor" />
      <meta property="og:description" content="Powerful SEO audit tool for agencies. Automatically check for marketing opportunities and get freelancer recommendations who can fix them within your budget." />
      <meta property="og:url" content="https://mrkt365.com/seo-auditor" />
      <meta property="og:site_name" content="MRKT365" />
      <meta property="og:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Automate your Marketing with Our AI SEO Auditor" />
      <meta name="twitter:description" content="Powerful SEO audit tool for agencies. Automatically check for marketing opportunities and get freelancer recommendations who can fix them within your budget." />
      <meta name="twitter:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
      <meta name="twitter:url" content="https://mrkt365.com/seo-auditor" />

      </Helmet>
      <HeroSectionAuditor />
      <ContentSectionThree />
      <CtaSection />
      <FooterOne/>
    </PageWrapper>
  );
}
