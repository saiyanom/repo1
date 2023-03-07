import React from 'react'
import Contact from './style'
import SectionTitle from './Components/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
import Script from 'next/script'
export default function ContactOne(){
return(
<Contact backgroundColor="#f3f4f6">
  <Container>
    <Row>
      <Col className="col-xl-7 col-lg-7">
        <Contact.Box >
            <SectionTitle
            // subTitle="Contact Us" 
            title="Let's talk!"
            text="We enjoy working with dedicated creative businesses, freelancers & interns."
            // subTitleProps={{mb:"10px"}}
            titleProps={{mb:"10px",as:"h2"}}
            mb="50px" />
        </Contact.Box>
              {/* <!-- Nutshell Form --> */}

      <div id="nutshell-form-Vhkxur"></div>
      <Script
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
    (function(n,u,t){n[u]=n[u]||function(){(n[u].q=n[u].q||[]).push(arguments)}}(window,'Nutsheller'));

    Nutsheller('initForm', {form: 'Vhkxur', instance: '336538', target: 'nutshell-form-Vhkxur'});
  `,
  }}
/>
      
      <Script async src="https://loader.nutshell.com/nutsheller.js"></Script>

      {/* <!-- End Nutshell Form --> */}


        {/* <Contact.From>
            <form action="./">
                    <Row>
                      <Col xs="12" className="col-lg-6 mb-4">
                        <div className="form-floating">
                          <input className="form-control" placeholder="Leave a comment here" id="floatinginput" />
                          <label htmlFor="floatinginput">Your Email</label>
                        </div>
                      </Col>
                      <Col xs="12" className="col-lg-6 mb-4">
                        <div className="form-floating">
                          <input className="form-control" placeholder="Leave a comment here" id="floatinginput2" />
                          <label htmlFor="floatinginput2">Phone number</label>
                        </div>
                      </Col>
                      <Col xs="12" className="col-lg-12">
                        <div className="form-floating">
                          <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea3"/>
                          <label htmlFor="floatingTextarea3">Your Message Here </label>
                        </div>
                      </Col>
                      <Col xs="12" className="col-lg-12">
                        <Row className="align-items-center mt-3">
                          <div className="col-md-8 col-lg-7 col-md-6 col-xl-8 pt-3">
                            <div className="form-check d-flex align-items-center">
                              <input className="form-check-input bg-white float-none mt-0" type="checkbox" defaultValue id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault">
                                Your email address will not be published. Required fields are marked *
                              </label>
                            </div>
                          </div>
                          <Col xs="12" className="col-md-4 col-lg-5 col-xl-4 text-md-end pt-3">
                            <Contact.Button>Send Message</Contact.Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </form>
        </Contact.From> */}
      </Col>
      <Col xs="12" className="col-xl-5 col-lg-5 contact-getsec">
        <Contact.WidgetsBox className="contact-widget-box">
            <Contact.WidgetsBoxTitle as="h2">Get In Touch</Contact.WidgetsBoxTitle>
            <Contact.WidgetsBoxText as="p">We can do so much together!</Contact.WidgetsBoxText>
          <Row>
            <Col xs="12" className="col-lg-12 col-sm-6">
              <Contact.Widgets>
                <Contact.WidgetsIcon>
                  <i className="fas fa-envelope" />
                </Contact.WidgetsIcon>
                <Contact.WidgetsBoxBody>
                  <Contact.WidgetsTitle as="h3">Mail us :</Contact.WidgetsTitle>
                  <Contact.WidgetsText as="p">support@mrkt365.com</Contact.WidgetsText>
                </Contact.WidgetsBoxBody>
              </Contact.Widgets>
            </Col>
            <Col xs="12" className="col-lg-12 col-sm-6 active">
            <Contact.Widgets>
              <Contact.WidgetsIcon className="active">
                <i className="fas fa-phone-alt" />
              </Contact.WidgetsIcon>
              <Contact.WidgetsBoxBody>
                <Contact.WidgetsTitle as="h3">Call us</Contact.WidgetsTitle>
                <Contact.WidgetsText as="p">+1 416-877-5199</Contact.WidgetsText>
              </Contact.WidgetsBoxBody>
              </Contact.Widgets>
            </Col>
            <Col xs="12" className="col-lg-12 col-sm-6">
            <Contact.Widgets>
              <Contact.WidgetsIcon>
                <i className="fas fa-map-marker-alt" />
              </Contact.WidgetsIcon>
              <Contact.WidgetsBoxBody>
                <Contact.WidgetsTitle as="h3">Visit us :</Contact.WidgetsTitle>
                <Contact.WidgetsText as="p">16192 Coastal Hwy Lewes, DE 19958 USA </Contact.WidgetsText>
              </Contact.WidgetsBoxBody>
              </Contact.Widgets>
            </Col>
          </Row>
        </Contact.WidgetsBox>
      </Col>
    </Row>
  </Container>
</Contact>

)
}