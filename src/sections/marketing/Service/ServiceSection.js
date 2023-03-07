import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServiceData from "~data/marketing/Service";
import ServiceWidget from "./Component/Widget";
import Service from "./style";
import $ from 'jquery';

export default function ServiceSection() {
  return (
    <>
      <Service className=" border-default-color-2 bg-default">
        {/* <Service.Shape className="service-shape service-shape--l1">
          <img
            src="image/marketing/services-shape-l1.png"
            alt="shape dot"
            
            
          />
        </Service.Shape> */}
        <Container>
          {/* Section Title */}
          <Row className="align-items-end  text-start service-sec">
            <Col xs="12" className="col-lg-7 col-md-12 col-xs-10">
                <Service.Title as="h2" mb="0" className="service-header">
                  Who is MRKT365 for?
                </Service.Title>
            </Col>
            {/* <Col xs="12" className="col-lg-5 col-md-12 col-xs-10">
               <Service.Text>
                    Create custom landing pages with
                    <br className="d-none d-xs-block" /> Fastland that converts
                    more visitors
                    <br className="d-none d-sm-block" /> than any website. Easy
                    &amp; Fast.
               </Service.Text>
            </Col> */}  
          </Row>
            <Service.Box mtLG="100px" mtMD="40px">
              <Row className="justify-content-center justify-content-md-start">
                {ServiceData.services.map(({ title, icon,iconColor, text,id,learn,learnLink}) => {
                  return(<Col className="col-lg-4 col-xs-6 col-10" key={id}>
                  <ServiceWidget  icon={icon} title={title} text={text} iconColor={iconColor} id={id} learn={learn} learnLink={learnLink} /></Col>) 
                })}
              </Row>
            </Service.Box>
        </Container>
      </Service>
    </>
  )
}
