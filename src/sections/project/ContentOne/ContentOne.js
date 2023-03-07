import React from 'react'
import Content from './style'
import { SuperTag } from '~components';
import { Col, Container, Row } from 'react-bootstrap';

export default function ContentSectionOne(){

return(
<Content>
  
    <Content.Inner className='backcolor'>
    <Container>
    <Content.SectionShape>
    <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/intern/orange-Dot.png" alt="content" className="w-100"/>
    </Content.SectionShape>
    <Row className="align-items-center justify-content-center justify-content-lg-start convenience convenience-sec">
      <Col className="col-xl-5 col-lg-6 col-md-8 col-xs-10 order-2 order-lg-1">
        <Content.TextBlock>
          <Content.Title as="h2"> <SuperTag value="Convenience"/> </Content.Title>
          <div className='resp-imagegroup1'>
            <Content.Image>
              <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/intern/Convenience.png" className='w-100'/>
            </Content.Image>
          </div>
          <Content.Text> <SuperTag value="We make it simple for students to find internships from top companies. Virtual Internships give you the opportunity to work remotely, making it easier to balance your studies with an internship. Grow your resume and network with just an internet connection and a good attitude."/> </Content.Text>
        </Content.TextBlock>
      </Col>
      <Col xs="12" className="col-xl-7 col-lg-6 col-md-8 col-xs-10 order-1 order-lg-2">
      <div className='desk-imageGroup'>
        <Content.Image>
          <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/intern/Convenience.png" className='w-100'/>
        </Content.Image>
      </div>
      </Col>
    </Row>
    </Container>
    </Content.Inner>
</Content>
)
}