import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Promo = styled(Box)`
    padding-top: 60px;
    @media (min-width:768px) {
        padding-top: 80px;
        padding-bottom:-10px;
    }

    @media (min-width:992px) {
        padding-top: 100px;
    }
    .inner-promo-sec{
        text-align: left;
    }
    .inner-promo-sec p{
        opacity: 0.7;
    }
    .background-image-opac{

    }
    .head-promo{
    font-weight: 700;
    font-size: 70px;
    line-height: 70px;
    padding-bottom:40px;
    }
`
Promo.Title = styled(Heading)`
    font-weight: 700;
    font-size: 70px;
    line-height: 70px;
    letter-spacing: normal;
    margin-top: 15px;
    @media (min-width:768px) {
      font-size: 38px;
    }

    @media (min-width:992px) {
        font-weight: 700;
        font-size: 60px;
        line-height: 70px;
        padding-bottom:40px;
    }

    @media (min-width:1170px) {
        font-weight: 700;
        font-size: 60px;
        line-height: 70px;
        padding-bottom:40px;
    }

    @media (min-width:1270px) {
        font-weight: 700;
        font-size: 60px;
        line-height: 70px;
        padding-bottom:40px;
    }
    @media (min-width:1400px) {
        font-weight: 700;
        font-size: 70px;
        line-height: 70px;
        padding-bottom:40px;
    }
`
Promo.Subtitle = styled(Heading)`
    font-size: 15px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 26px;
     
`
Promo.Text = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.875;

    @media (min-width:1170px) {
        font-size: 16px;
        font-weight: 400;
    }

    @media (min-width:1270px) {
        font-size: 16px;
        font-weight: 400;
    }
    @media (min-width:1400px) {
        font-size: 18px;
        font-weight: 400;
    }
    
`

Promo.InnerWrapper = styled(Box)`
 position: relative;
    z-index: 1;
    padding: 240px 150px;
    padding-left: 30px;
    padding-right: 30px;
    background-position: center;
    background-size: cover;
    

    @media (min-width:768px) {
        padding-top: 70px;
        padding-bottom: 80px;
        padding-left: 110px;
        padding-right: 100px;
    }

    @media (min-width:992px) {
        padding: 240px 150px;
    }

    &::before {
        content: "";
        mix-blend-mode: multiply;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        
        z-index: -1;
    }
`

Promo.Button = styled(Button)`
    color:#fff!important;
    border-color: #ff4b60;
    background-color: #ff4b60;
    box-shadow:0 20px 20px rgb(255 75 96 / 30%);
    border-radius:500px;
   
    &:hover{
        box-shadow:0 20px 20px rgb(255 75 96 / 0%);
        color:#fff!important;

    }
`
Promo.Box = styled(Box)``


export default Promo;