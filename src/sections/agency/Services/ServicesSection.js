import React, { useState } from "react";
import { Col, Container, Row } from 'react-bootstrap'
import ServicesCard from './Components/Card'
import ServiceData from "~data/agency/Service"
import SectionTitle from './Components/SectionTitle'
import Service from './style'
export default function ServiceSection(){
    const useWidth = () => {
      const [width, setWidth] = React.useState(window.innerWidth);
      React.useEffect(() => {
          const onResize = () => {
              setWidth(window.innerWidth);
          };
          window.addEventListener("resize", onResize);
          return () => window.removeEventListener("resize", onResize);
      }, []);
      return width;
  };
  
  const width = useWidth();
return(
<Service backgroundColor="#f3f4f6" className='getProject-sec'>
  <Container>
    <Row className="row justify-content-center">
      <Col xs="12" className="col-xl-4 col-lg-5 col-md-6 col-sm-9 col-xs-10">
      <SectionTitle
        // subTitle="Our Services" 
        title="Get projects "
        title2="done faster"
        text="We offer end-to-end solutions to get the job done to a high standard & meet your deadline."
        // subTitleProps={{mb:"27px"}}
        // titleProps={{mb:"10px",as:"h2"}}
        // mb="20px"
         />
         <div style={{display: "flex", justifyContent: width <= 768 ? "center" : null}}>
        <a href="https://platform.mrkt365.com/register" className='button-service-sec'>Join as a business</a>
        </div>

      </Col>
      {ServiceData.map(({ title,title2,title3, icon, image, text2, text3, text,cardbg,whiteImage,whiteImageClass,id,linkPage,  }) => {
              return (
                <Col
                  xs="12"
                  className="col-xl-4 col-lg-5 col-md-6 col-sm-9 col-xs-10"
                  key={id}
                >
                <ServicesCard 
                  title={title}
                  title2={title2}
                  title3={title3}
                  text={text}
                  text2={text2}
                  text3={text3}
                  icon={icon}
                  image={image}
                  linkPage={linkPage}
                  cardbg={cardbg}
                  whiteImage={whiteImage}
                  whiteImageClass={whiteImageClass}
                  
                />
                
              </Col>
              )
            })}
    </Row>
  </Container>
</Service>

)
}