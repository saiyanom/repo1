import React, { useState } from "react";
import Image from "next/image";
import Hero from './style'
import { Col, Container, Row } from 'react-bootstrap';
import { Form, Link } from '~components'
import { SuperTag } from '~components';
// import TitleShape from "~image/project-management/l2-hero-shape.png"
// import HeroImage from "~image/project-management/l2-hero-image.png"
import HeroShapeOne from "~image/project-management/l2-hero-shape-2.png"
import HeroShapeTwo from "~image/project-management/l2-hero-shape-1.png"
import HeroShapeThree from "~image/project-management/l2-hero-shape-2.png"
export default function HeroSection(){
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
<Hero className='hero-height'>
  <Container>
    <Row className="justify-content-center">
      <Col xs="12" className="col-xl-8 col-lg-11">
        <Hero.ContentBlock mb="0px">
          <span className='bigcircle'></span>
          <Hero.Title as="h1"><span className="orange">Global Virtual</span> <br /> Internships</Hero.Title>
          <Hero.Text> <SuperTag value="Get work experience and start building an awesome network"/>
          {width >= 768 ? <div className='green-circle'></div>: null}
          </Hero.Text> 
          {/* <Hero.TitleShape>
            <img src="image/project-management/l2-hero-shape.png"   alt="projects" className="w-100"/>
          </Hero.TitleShape> */}
          
        </Hero.ContentBlock>
        
            <Form>
            <Hero.Shape>
          <Hero.Button  className=" btn btn-primary text-white " as={Link} target="_blank" to="https://platform.mrkt365.com/register" >Become an Intern</Hero.Button>
          </Hero.Shape>
            </Form>
         
        {/* Newsletter */}
        {/* <Hero.NewsletterBox> */}
          {/* <Hero.Newsletter> */}
            {/* <Form> */}
              {/* <Hero.InputBox> */}
                {/* <Form.Input placeholder="@ Enter your email" required /> */}
              {/* </Hero.InputBox> */}
            {/* </Form> */} 
           {/* </Hero.Newsletter> */}
        {/* </Hero.NewsletterBox> */}
        {/*/ .Newsletter */}
      </Col>
      {width >= 768 ?
      <Col xs="12" className="col-lg-5 col-md-7">
        <Hero.Image>
        {/* <img src="image/project-management/l2-hero-image.png" alt="content" className="w-100"/> */}
        <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/project-management/student.png" alt="content" className="w-100"/>
        </Hero.Image> 
      </Col> : null}
    </Row>
  </Container>
  <Hero.ImageShape01>
    <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/project-management/l2-hero-shape-2.png" alt="shape 1" className="w-100" />
  </Hero.ImageShape01>
  <Hero.ImageShape02>
    <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/project-management/l2-hero-shape-1.png" alt="shape 1" className="w-100" />
  </Hero.ImageShape02>
  <Hero.ImageShape03>
    <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/project-management/l2-hero-shape-2.png" alt="shape 1" className="w-100" />
  </Hero.ImageShape03>
</Hero>
)
}