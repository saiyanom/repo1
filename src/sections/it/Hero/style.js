import styled from 'styled-components';
import { Box, Heading,Button, Paragraph } from '~styled';

const Hero = styled(Box)`
    overflow:hidden;
    padding-top: 125px;
    position: relative;
    padding-bottom:70px;
    @media (min-width:768px) {
        padding-top: 114px;
        padding-bottom: 110px;
    }
    @media (min-width:992px){
        padding-top: 179px;
        padding-bottom: 116px;

    }

    @media (min-width:1024px){
        padding-top: 179px;
        padding-bottom: 116px;

    }

    @media (min-width:1170px) {
        padding-top: 152px;
        padding-bottom: 67px;
    
    }

    @media (min-width:1270px) {
        padding-top: 152px;
        padding-bottom: 42px;
    
    }

    @media (min-width:1400px) {
        padding-top: 170px;
        padding-bottom: 177px;

    }

    .orange-text{
        color:#FF5722;

    }

`
Hero.Title = styled(Heading)`
    font-size: 42px;
    line-height: 54px;
    font-weight: 700;
    letter-spacing: -0.5px;
    margin-bottom: 30px;
    color: #25373f;
    font-family: 'Rubik';
    text-align:center;

    @media (min-width:768px) {
        font-size: 42px;
        font-weight: 700;
        line-height: 54px;
    }
    @media (min-width:769px) {
        text-align:left;
    }

    @media (min-width:992px) {
        font-size: 45px;
        font-weight: 700;
        line-height: 1.2068;
    }

    @media (min-width:1170px){
        font-weight: 700;
        font-size: 70px;
        line-height: 70px;
    }
    @media (min-width:1270px){
        font-weight: 700;
        font-size: 70px;
        line-height: 70px;
    }
    @media (min-width:1400px){
        font-weight: 700;
        font-size: 70px;
        line-height: 70px;
        margin-top: 0px;
    }
`
Hero.Subtitle = styled(Heading)`
    color: #ff5722;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.75;
    margin-bottom: 28px;
`
Hero.Text = styled(Paragraph)`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 34px;
    margin-top: 15px;
    color: #262729;
    text-align:center;

    @media (min-width:768px){
        margin-top:30px;
    }
    @media (min-width:769px) {
        text-align:left;
    }

    @media (min-width:1170px){
        font-size: 21px;
        line-height:40px;
    }

    @media (min-width:1270px){
        font-size: 21px;
        line-height:40px;
    }

    @media (min-width:1400px){
      
        font-weight: 400;
        font-size: 21px;
        line-height:40px;

    }
`


Hero.Button = styled(Button) `
    width: 175px;
    height: 50px;
    margin-bottom: 20px;
    margin-right: 15px;
    border-radius:50px;
    box-shadow: -8px 8px 50px rgb(255 87 34 / 50%);
    font-size:14px;

    @media(min-width:768px){
        font-size: 16px;
        width: 200px;
    }

    @media (min-width:992px){
        width: 199px;
        font-size: 16px;
        margin-top: 20px;
    }

    @media (min-width:1170px){
        width: 266px;
        font-size:20px;
        margin-top: 20px;
    }

    @media (min-width:1270px){
        width: 266px;
        font-size:20px;
        margin-top: 20px;
        height:70px;
    }

    @media (min-width:1400px){
        width: 266px;
        font-size:21px;
        margin-top: 20px;
        height:70px;
    }

`
Hero.BtnGroup = styled(Box)`
    padding-top: 15px;
    margin-bottom: -20px;
    display: flex;
    justify-content: center;

    @media (min-width:480px) {
        display: block;
    }

    @media (min-width:769px) {
    justify-content: left;
    }

    @media (min-width:992px) {
        padding-top: 0px;
        padding-bottom: 30px;
    }
`

Hero.Box = styled(Box)``


export default Hero;