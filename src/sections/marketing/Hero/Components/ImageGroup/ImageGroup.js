import React from "react"
import HeroImageGroup from "./style";
export default function ImageGroup() {
  return (
    <>
      <HeroImageGroup className="main-imagegroup">
        <HeroImageGroup.Inner className="imagegroup">
          <div className="welcome-image--group-01__img-1">
            <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/marketing/l1-hero-img-2.png" className="" alt="hero image" />
          </div>
          {<img
            src="https://dzekq3sbbgf19.cloudfront.net/public/image/marketing/home-page-hero-banner.png"
            className="welcome-image--group-01__main ipad-cls"
            alt="hero image main"
          />}
          <div className="welcome-image--group-01__img-5">
            <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/marketing/l1-hero-shape-1.png" className="w-100" alt="hero image" />
          </div>
        </HeroImageGroup.Inner>
      </HeroImageGroup>
    </>
  )
}
