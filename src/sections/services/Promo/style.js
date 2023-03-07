import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Promo = styled(Box)`
    padding-top: 60px;
    padding-bottom: 20px;
    @media (min-width:768px) {
        padding-top: 80px;
        padding-bottom: 40px;
    }

    @media (min-width:1024px) {
        padding-top: 100px;
        padding-bottom: 110px;
    }
    .intern-promo-sec{
        text-align: left;

        @media (min-width:992px) {
            margin-left:0;
         }

        @media (min-width:1170px) {
            margin-left: -32px;
         }

        @media (min-width:1400px) {
            margin-left: -32px;
        }

    }
`
Promo.Title = styled(Heading)`
    font-size: 32px;
    font-weight: 500;
    letter-spacing: -1px;
    color: #202020;
    line-height:42px;
    margin-top: 15px;

    b{
        font-weight:700;
        color: #1A75FF;
    }
    @media (min-width:768px) {
      font-size: 38px;
    }

    @media (min-width:992px) {
        font-size: 36px;
        font-weight:400px;
      }
    
    @media (min-width:1024px) {
      font-size: 36px;
    }

    @media (min-width:1170px) {
        font-size: 60px;
        line-height: 62px;
        margin-bottom:32px;
    }

    @media (min-width:1400px) {
        font-size: 48px;
        margin-bottom:32px;
    }
`
Promo.Subtitle = styled(Heading)`
    font-size: 15px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 26px;
     
`
Promo.Text = styled(Paragraph)`
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        margin-top: 20px;

    @media(min-width:768px){
        font-size: 14px;
        line-height: 26px;
        
    }
    
    
    @media(min-width:1400px){
        font-weight: 400;
        font-size: 21px;
        line-height: 30px;
        margin-top: 0px;
    }
`

Promo.InnerWrapper = styled(Box)`
 position: relative;
    z-index: 1;
    padding: 20px;
    background-position: center;
    background-size: cover;
    margin-bottom: 60px;

    @media (min-width:768px) {
        margin-bottom:0;
        padding-top: 70px;
        padding-bottom: 80px;
        padding-left: 110px;
        padding-right: 100px;
    }

    @media (min-width:1024px) {
        padding-top: 80px;
        padding-bottom: 60px;
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