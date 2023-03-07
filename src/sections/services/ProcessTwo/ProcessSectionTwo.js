import React from 'react'
import {Link} from "~components"
import ProcessCard from './Components/Card'
import Process from './style'
import ProcessData from "~data/services/ProcessTwo"
import { Container, Row, Col } from 'react-bootstrap'
export default function ProcessSection({content, heading},{ ...rest }){
return(
<Process backgroundColor="#6001d3" {...rest}>
  <Container>
     <Row>
      <Col className="col-lg-12 col-md-12 text-center hire-inter-process-sec">
          <Process.Title as="h2" fontColor="#fff" className="hrie-intern-process-head">{heading}</Process.Title>
          <Row>
          {content.map(({image,text,paragraph }) => {
                  return( <Col className="ai-integrations">
                  <img src={image} />
                  <h5 className='text-center text-white subheading-font-weight mt-process hire-intern-sub-head'>
                    {text}
                  </h5>
                  <p className='text-center text-white subheading-font-weight mt-process opac-para-intern hire-intern-sub-para'>
                    {paragraph}
                  </p>
                </Col>) 
                })}
          </Row>
      </Col>
    </Row>
  </Container>
</Process>

)
}