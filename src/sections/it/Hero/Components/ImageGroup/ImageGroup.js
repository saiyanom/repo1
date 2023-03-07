import React from "react";
import HeroImageGroup from "./style";
export default function ImageGroup() {
  return (
    <HeroImageGroup>
      <HeroImageGroup.ImagesList className="demo1">
        <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/it-services/woman.png" alt="heroimg" className="w-100"/>
        {/* <HeroImageGroup.ImageOne>
          <img src="image/it-services/man.png" alt="heroimg" className="w-100"/>
        </HeroImageGroup.ImageOne>
        <HeroImageGroup.ImageTwo>
          <img src="image/it-services/welcome-shape-l3.png" alt="heroimg" className="w-100"/>
        </HeroImageGroup.ImageTwo>
        <HeroImageGroup.ImageThree>
          <img src="image/it-services/welcome-shape-l3-2.png" alt="heroimg" className="w-100"/>
        </HeroImageGroup.ImageThree> */}
      </HeroImageGroup.ImagesList>
    </HeroImageGroup>
  );
}
