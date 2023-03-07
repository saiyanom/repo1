import styled from 'styled-components';
import { Box, Heading,Button} from '~styled';
import {rgba} from "polished"

const Promo = styled(Box)`
  padding-top: 50px;
  padding-bottom: 50px;
  // height: 526px;

  .yellow-shape{
    position: absolute;
    bottom: 131px;
    left: -55px;
  }

  @media (min-width:768px) {
    padding-top: 75px;
    padding-bottom: 80px;
  }

  @media (min-width:992px) {
    padding-top: 100px;
    padding-bottom: 120px;
    // height: 492px;

  }
  @media(min-width:1170px){
    padding-top: 100px;
    padding-bottom: 154px;
    height: auto;
    // height: 573px;

  }

  @media(min-width:1400px){
    // padding-top:101px;
    // padding-bottom:137px;
    // height: 573px;

  }

  .promo-para{

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 40px;
    opacity: 0.7;
    margin-top: -39px;

    @media(min-width:992px){
      margin-top:0
    }
    @media(min-width:1170px){
      font-size: 21px;
      line-height: 40px;
      padding-bottom: 60px;
    }

    @media(min-width:1400px){
      font-size: 21px;
      line-height: 28px;
      margin-top: 95px;

    }
  }
`
Promo.Title = styled(Heading)`
    font-size: 28px;
    font-weight: 500;
    letter-spacing: normal;
    line-height:30px;
    @media (min-width:768px) {
    font-size: 38px;
    line-height:40px;

    }
    @media (min-width:992px) {
    font-size: 48px;
    line-height:50px;
    
    }
    @media (min-width:1170px) {
      font-size: 70px;
      line-height: 70px;
      font-weight:700;
    }
    @media (min-width:1400px) {
        font-size: 70px;
        font-weight:700;
        line-height:70px;
    }
`

Promo.Content = styled(Box)`
`
Promo.Button = styled(Button)`
    min-width: 255px;
    height: 56px;
    border-radius: 5px;
    font-size: 15px;
    border-radius:500px!important;
    color:#fff!important;
    transition:.4s;
    background:${props => props.background}!important;
      box-shadow:  ${props => props.background ? "-12px 12px 50px " + rgba(props.background,.3): "none"}!important;
    &:hover{
    box-shadow:  ${props => props.background ? "-12px 12px 50px " + rgba(props.background,0): "none"}!important;
      background:${props => props.background}!important;
      color:#fff;
    }
`
Promo.Shape = styled(Box)`
    position: absolute;
    right: 0;
    top: 0;
    width: 6%;
`;
Promo.Box = styled(Box)``;

export default Promo