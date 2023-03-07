import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import CountUp from "react-countup";
import Counter from './style'
import LazyLoad from "react-lazyload";
import { SuperTag } from "~components";
import Slider from "react-slick";



export default function CounterSection() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    
      <Counter>
         <h2 className="partners-logo-heading">Our Partners</h2>
        <Container>
            <Row className="row justify-content-center text-center">
                <LazyLoad>
                  <Counter.Single>
                  <Slider {...settings}>
                <div className="slider">
                    <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/marketing/jp-morgan.jpg" alt="shape1" className="partner-logo" />
                </div>
                <div className="slider">
                    <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/marketing/us-bank.jpg" alt="shape1" className="partner-logo" />
                </div>
                <div className="slider">
                    <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/marketing/logo3.jpg" alt="shape1" className="partner-logo" />
                </div>
                <div className="slider">
                  <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/marketing/visa.jpg" alt="shape1" className="partner-logo" />
                </div>
                <div className="slider">
                 <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/marketing/google-new.jpg" alt="shape1" className="partner-logo" />
                </div>
                <div className="slider">
                <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/marketing/microsoft-new.jpg" alt="shape1" className="partner-logo" />
                </div>
                </Slider>
                  </Counter.Single>
                </LazyLoad>
               
                

            </Row>

        </Container>
      

</Counter>
  )
}
