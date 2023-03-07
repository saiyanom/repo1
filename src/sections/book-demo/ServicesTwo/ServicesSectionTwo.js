import React from "react";
import SectionTitle from "./Components/SectionTitle";
import { Col, Container, Row } from "react-bootstrap";
import Script from "next/script";
import Service from "./style";

export default function ServicesSectionTwo() {
  return (
    <Service className="video-Sec-box" backgroundColor="#fff" >
      
      <Container>
        <Row>
          <div className="justify-content-center  row">
            <div className="col-xl-12 text-center col">
                <div className="box__Box-sc-2rdxnx-0 style__SectionTitle-sc-xbwprk-0 fqafXK">
                    <h2 className="typography__Heading-sc-9eso7x-0 style__Main-sc-xbwprk-3 iRLmza dbCkWa">
                        <span>Book a Platform Demo</span>
                    </h2>
                </div>
            </div>
           </div>
           <hr/>    
        

         
        </Row>

        <Row>
        <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/mrkt365-onboarding-team/book-a-platform-demo"
              style={{ minWidth: "320px", height: "630px" }}
            ></div>

            <Script src="https://assets.calendly.com/assets/external/widget.js" async></Script>
        </Row>

       
    

      </Container>      
      
    </Service>
  );
}

