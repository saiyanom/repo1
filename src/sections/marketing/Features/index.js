import React from "react";
import Image from "next/image";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TabContentWidget from "./Component/TabContentWidget";
import TabNavWidget from "./Component/TabNavWidget";
import Feature from "./style";
// import featureShape2 from "image/marketing/l1-full-circle-shape.png";
// import featureShape1 from "image/marketing/l1-half-circle-shape.png";

const EventKeys = ["first", "second", "third"]



const FeatureSection = ({ ...rest }) => {

  const [defaultEventKey, setDefaultEventKey] = React.useState(1)
  const [manualClick, setManualClick] = React.useState(false)
  const [timeOutId, setTimeOutId] = React.useState()

  const handleEventClick = (i) => {
    setManualClick(true)
    setDefaultEventKey(i)
  }

  React.useEffect(() => {
   
    if (manualClick) {
      clearTimeout(timeOutId)
      setTimeout(() => setManualClick(false), 3000)
      return
    }
    setTimeOutId(setTimeout(() => {
      setDefaultEventKey((defaultEventKey + 1) % 3)
    }, 3000))
  }, [defaultEventKey, manualClick])

  return (
    <Feature className="bg-blue-ribbon blue-background-sec" style={{backgroundImage: `url("https://dzekq3sbbgf19.cloudfront.net/public/image/mixed/home-blue-background.jpg")`}}>
      
      <Container>
      <Row>
          <Col xs="auto" className="col-xl-8 col-lg-10 feature-sec">
            <Feature.Box mb="35px">
              <Feature.Title className="mb-2 feature-title" as="h2" fontColor="#fff">
                The Complete Business 
              </Feature.Title>
              <Feature.TitleTwo className="mb-5 feature-title2" as="h2" fontColor="#fff">
                 Automation Platform
              </Feature.TitleTwo>

              
              <Feature.Text className="mt-8" fontColor="#fff">
              Our AI analytics enables anyone to make
                <br className="d-none d-xs-block" /> confident data-driven business decisions.
              </Feature.Text>
            </Feature.Box>
          </Col>
        </Row>
        <Tab.Container
          id="left-tabs-example"
         activeKey={EventKeys[defaultEventKey]}        
          className="home-tabSec"
        >
          <Feature.Tab className="home-tabSec">
            <Col className="col-xxl-4 col-lg-4 col-md-12 col-xs-10 col-12">
              <Feature.TabNavWrapper className="nav row ms-0 me-0 feature-tabs" as={Nav}>
              <Nav.Link
              onClick={() => handleEventClick(0)}
                  eventKey="first"
                  className="widget widget--feature nav-item col-lg-12 col-md-4 col-xs-12 col-8 me-md-0 me-lg-0"
                >
                  <TabNavWidget iconClass="fas fa-chart-line" text="Scan your website" className="nav-widget" mb="30px" mbLG="50px"/>
                </Nav.Link>
                
                <Nav.Link
                onClick={() => handleEventClick(1)}
                  eventKey="second"
                  className="col-lg-12 col-md-4 col-xs-12 col-8 me-md-0 me-lg-0"
                >
                   <TabNavWidget iconClass="far fa-flag" text="Discover verified talent" className="nav-widget" mb="30px" mbLG="50px"/>
                </Nav.Link>
                
                <Nav.Link
                onClick={() => handleEventClick(2)}
                  eventKey="third"
                  className="nav-item col-lg-12 col-md-4 col-xs-12 col-8 me-md-0 me-lg-0"
                >
                  <TabNavWidget iconClass="fa fa-chart-pie" text="Proof of work" className="nav-widget" mb="30px" mbLG="50px"/>
                </Nav.Link>
                </Feature.TabNavWrapper>
            </Col>
            <Col xs="auto" className="col-xxl-8 col-lg-8 col-md-12 col-sm-12">
            <Tab.Content className="tab-content tab-content--feature">
              <Tab.Pane eventKey="third">
                <Row className="align-items-center tab-contents">
                  <Col
                    className="col-md-6 col-sm-6 col-xs-9"
                    xs="auto"
                  >
                    <TabContentWidget  title="Time tracking" text={'Only get charged for billable hours with a work journal attached'}/>
                  </Col>
                  <Col
                    className="col-md-6 col-sm-6 col-xs-9"
                    xs="auto"
                  >
                    <TabContentWidget  title="Employee monitoring" text={"Add your remote team to MRKT365 to increase productivity"}/>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Row className="tab-contents">
                  <Col
                    className="col-md-6 col-sm-6 col-xs-9"
                    xs="auto"
                  >
                    <TabContentWidget  title="Advanced screening" text={' We use a third party to independently verify vendors on our marketplace.'}/>
                  </Col>
                  <Col
                    className="col-md-6 col-sm-6 col-xs-9"
                    xs="auto"
                  >
                    <TabContentWidget  title="AI matching" text={'Find several highly qualified freelancers and businesses for every project.'}/>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="first">
                <Row className="tab-contents">
                  <Col
                    className="col-md-6 col-sm-6 col-xs-9"
                    xs="auto"
                  >
                    <TabContentWidget  title="AI marketing scans" text={'Optimize your marketing with our AI marketing scans and dashboard.'}/>
                  </Col>
                  <Col
                    className="col-md-6 col-sm-6 col-xs-9"
                    xs="auto"
                    
                  >
                    <TabContentWidget  title="Marketing dashboards" text={'Integrate your current and future marketing platforms on one dashboard.'}/>
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Col>
          </Feature.Tab>
        </Tab.Container>
      </Container>
    </Feature>
  )
}

export default FeatureSection
