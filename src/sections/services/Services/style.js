import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Service = styled(Box)`
    padding-top: 70px;
    padding-bottom: 200px;

    @media (min-width:768px) {
        padding-top: 70px;
        padding-bottom: 55px;
    }

    @media (min-width:992px) {
        padding-top: 70px;
        padding-bottom: 100px;
    }


`
Service.Title = styled(Heading)`
font-weight: 700;
line-height: 60px;
font-size: 60px;

    position:relative;
    @media (min-width:768px) {
      font-size: 38px;
    }

    @media (min-width:992px) {
      font-size: 42px;
    }

    @media (min-width:1170px){
      font-size:50px;
      line-height:75px;  
    }
`
Service.Subtitle = styled(Heading)`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.75;
     
`

Service.Box = styled(Box)``


export default Service;