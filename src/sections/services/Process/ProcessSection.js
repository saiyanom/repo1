import React from 'react'
import {Link} from "~components"
import ProcessCard from './Components/Card'
import Process from './style'
import ProcessData from "~data/services/Process"
import { Container, Row, Col } from 'react-bootstrap'
export default function ProcessSection({content},{ ...rest }){
return(
<Process  {...rest}>
  <Container>
     <Row>
      <Col className="col-lg-12 col-md-12 text-center ai-logo-sections">
          <Process.Title as="h2" fontColor="#1A75FF">We integrate with your favourite platforms</Process.Title>
          <Row>
          {content.map(({image,text }) => {
                  return( <Col className="ai-integrations">
                  <img src={image} />
                  {/* <p className='text-center text-white subheading-font-weight mt-process'>
                    {text}
                  </p> */}
                </Col>) 
                })}
          </Row>
      </Col>
    </Row>
  </Container>
</Process>

)
}