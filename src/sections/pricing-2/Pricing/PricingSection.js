import React from 'react'
import { Col, Row , Container } from 'react-bootstrap'
import Pricing from './style'
import PricingCard from "./Components/Card" 
import InnerShape from './Components/InnerPageShapeOne'


const pricingValues ={
  cardOne : {
   
  },
  cardTwo : {
    monthly:{
      price: 10,
    },
    yearly:{
      price:10,
    }
  },
  cardThree : {
   
  }
}

export default function PricingSection({...rest}){
  const [yearly,setYearly] = React.useState(true);
  const {cardOne,cardTwo,cardThree} =  pricingValues;
return(
<Pricing backgroundColor="#f3f4f6" {...rest}>
  <InnerShape/>
  <Container>
  <Pricing.Box pb="40px" pbXL="70px">
  <Row className="align-items-end justify-content-center">
        <Col xs="12" className="col-xl-12 col-lg-12">
          <Pricing.Box className="text-center text-lg-start ">
            <Pricing.Title className="pricing-head">Pricing plans</Pricing.Title>
          </Pricing.Box>
        </Col>
        {/* <Col xs="12" className="col-xl-4 col-lg-5">
          <Pricing.Button className="pricing-btn">
            <label className="mb-3 mb-lg-0">Monthly</label>
            <div className="toggle-btn form-switch mb-3 mb-lg-0">
              <input className="form-check-input btn-toggle price-deck-trigger" type="checkbox" onChange={() => setYearly(!yearly)} checked={yearly}/>
            </div>
            <label className="mb-3 mb-lg-0">Yearly</label>
            <Pricing.Badge className="badge bg-yellow mb-3 mb-lg-0" as="h3" >SAVE 20%</Pricing.Badge>
          </Pricing.Button>
        </Col> */}
    </Row>
    </Pricing.Box>
    <Row className="justify-content-center">
      {/* Single Table */}
      <Col xs="12" className="col-lg-4 col-md-6 col-sm-9 col-xs-10">
          <PricingCard cardTitle={"Free"} cardText={"One User"} buttonname={"Choose Plan"} backgroundColor={"#442cd6"} hoverBackgroundColor={"#8173d5"} />
      </Col>
      {/* Single Table */}
      <Col xs="12" className="col-lg-4 col-md-6 col-sm-9 col-xs-10">
          <PricingCard cardTitle={"Premium"} cardText={"Support"} buttonname={"Choose Plan"} backgroundColor={"#ff5722"} amount={yearly? cardTwo.yearly.price : cardTwo.monthly.price} yearlyPackage={yearly} dollar={'$'} forEachText={'/User'}/>
      </Col>
      {/* Single Table */}
      <Col xs="12" className="col-lg-4 col-md-6 col-sm-9 col-xs-10">
          <PricingCard cardTitle={"Enterprise"} cardText={"Dedicated Support"} buttonname={"Contact Us"} backgroundColor={"#442cd6"} hoverBackgroundColor={"#8173d5"} optionalText={'Custom Pricing'}/>
      </Col>
    </Row>
  </Container>
</Pricing>

)
}