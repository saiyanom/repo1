import styled from "styled-components"
import { Box, Heading, Paragraph } from "~styled"

const Service = styled(Box)`
    padding-bottom: 55px;
    position: relative;
    

    @media (min-width:768px) {
        padding-bottom: 25px;
    }

    @media (min-width:1024px) {
        padding-bottom:40px;
    }
`
Service.Title = styled(Heading)`
    font-weight: 600;
    letter-spacing: -2px;
    line-height: 1.1;
    font-size: 35px;

    @media (min-width:575px) {
      font-size: 40px;
    }

    @media (min-width:768px) {
      font-size: 50px;
      margin-top: 100px;
    }

    @media (min-width:992px) {
      font-weight: 700;
      font-size: 60px;
      line-height: 66px;
    }
`
Service.Shape = styled(Heading)`
     position: absolute;
    top: 26%;
    left: -6%;
    width: 10%;
`
Service.Text = styled(Paragraph)`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.61904;
    margin-top: 15px;
    margin-bottom: 0;

    @media (min-width:768px) {
      font-size: 21px;
    }

    @media (min-width:992px) {
      margin-top: 0;
    }
`
Service.Content = styled(Box)`
     margin-top: 80px;
    @media (min-width:992px) {
        margin-top: 0;
    }
`
Service.Box = styled(Box)`
    
`
export default Service
