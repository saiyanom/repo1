import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import ServicesCard from "./Component/Card"
import Service from "./style"
import { ServiceData } from "~data"
export default function ServicesSection({ ...rest }) {
  return (
    <Service backgroundColor="rgba(169, 210, 255, 0.1)" {...rest}>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xxl-12 col-xl-12 col-md-12 col-sm-12">
            <Service.Box className="text-center business-service-box" mb="30px" mbLG="55px">
              <Service.Title as="h2">Everything You Need to Make Work Happen</Service.Title>
            </Service.Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
            {ServiceData.services.map(({ image, title, icon, text, id, iconBackground }) => {
              return (
                <Col
                  xs="12"
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-9 col-xs-10 "
                  key={id}
                >
                <ServicesCard className="service-card-business"
                  image={image}
                  title={title}
                  text={text}
                  icon={icon}
                  iconBackground={iconBackground}
                />
              </Col>
              )
            })}
        </Row>
      </Container>
    </Service>
  )
}



