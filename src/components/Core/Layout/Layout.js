// import React from "react";
import Head  from "next/head";
import favicon from '~image/favicon.png';
import Header from "../Header";
export default function Layout({
  children,
}) {
  return (
    <>
      <Head>
            {/* <title>MRKT365 | AI Marketing Platform & Talent Marketplace</title> */}
            <link rel="icon" type="image/png" href={favicon.src} />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0"/>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
        <Header/>
      {children}
    </>
  )
}
