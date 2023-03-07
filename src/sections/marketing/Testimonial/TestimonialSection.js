import React, { useRef } from "react"
import Slider from "react-slick"
import TestimonialWidget from "./Components/Widget"
import Testimonial from './style'
import { Container } from "react-bootstrap"

const TestimonialSection = ({heading,data},{ ...rest }) => {
  const elSlider = useRef()

  const sliderConfig1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 200000,
        settings: "unslick"
      },
      {
        breakpoint: 1200,
        settings: "unslick"
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Testimonial {...rest}>
      <Container>
        <h2 className="features-heading">{heading}</h2>
     
        <Testimonial.SliderWrapper>
          <Slider
            ref={elSlider}
            className="row testimonial-slider testimonial-slider--l1"
            {...sliderConfig1}>          
            {data.map((item, title, image, index) => {
              return (
                <Testimonial.Box className="col-lg-3 col-md-3 col-sm-3 slide-item-inner"
                key={"marketingts" + index}>
                <TestimonialWidget
                  image={item.image}
                  title={item.title}
                  text={item.text}
                />
                </Testimonial.Box>
              )
            })}
          </Slider>
        </Testimonial.SliderWrapper>
      </Container>
    </Testimonial>
  )
}

export default TestimonialSection
