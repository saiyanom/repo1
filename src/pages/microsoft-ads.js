import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection from "~sections/Microsoftads/Hero";
import ServicesSectionOne from "~sections/startup/ServicesOne";
import CardSection from "~sections/startup/CardSection";
import ContentSectionOne from '~sections/Microsoftads/ContentOne/ContentSectionOne'
import ContentSectionFour from "~sections/Microsoftads/ContentFour";
import AboutSection from "~sections/Microsoftads/About";
import PromoSection from '~sections/Microsoftads/Promo';
import FooterOne from "~sections/marketing/FooterOne";
import HeaderButton from "~sections/marketing/Header"
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




export default function Microsoft() {
    return (
        <PageWrapper headerConfig={header}>
            <Helmet>
            <title>Microsoft Ads | MRKT365</title>
            <meta name="description" content="Find the customers on the world's fastest-growing search engine! Signup for Microsoft Ads & earn a $250 free ad credit with MRKT365." />
            <meta name="geo.region" content="CA-ON" />
            <meta name="geo.placename" content="Vaughan" />
            <meta name="geo.position" content="43.815431;-79.526403" />
            <meta name="ICBM" content="43.815431, -79.526403" />
            <meta property="og:locale" content="en_CA" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Microsoft Ads | MRKT365" />
            <meta property="og:description" content="Find the customers on the world's fastest-growing search engine! Signup for Microsoft Ads & earn a $250 free ad credit with MRKT365." />
            <meta property="og:url" content="https://mrkt365.com/microsoft-ads" />
            <meta property="og:site_name" content="MRKT365" />
            <meta property="og:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Microsoft Ads | MRKT365" />
            <meta name="twitter:description" content="Find the customers on the world's fastest-growing search engine! Signup for Microsoft Ads & earn a $250 free ad credit with MRKT365." />
            <meta name="twitter:image" content="https://mrkt365.com/assets/images/mrkt365-logo.svg" />
            <meta name="twitter:url" content="https://mrkt365.com/microsoft-ads" />

            </Helmet>
            <HeroSection
                headerimage="https://dzekq3sbbgf19.cloudfront.net/public/image/microsoft-ads/microsoft-hero.png"
                headerimage2="https://dzekq3sbbgf19.cloudfront.net/public/image/microsoft-ads/BG.png"
                herotitle="Microsoft"
                herotitle2=" advertising"
                imageClass=""
                />

            <PromoSection />
            <ContentSectionOne />
            <CtaSection />
            <FooterOne />
        </PageWrapper>
    );
}
