import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";

const Hero = styled(Box)`
  padding-top: 125px;
  padding-bottom: 60px;
  background-repeat: no-repeat;
  background-size: contain !important;
  background-position: right !important;
  background-image:none;
  z-index: 0;
  text-align:center;
  @media (min-width: 768px) {
    background-image:url("image/home-digital-agency/ai-auditor-hero.png");
    padding-top: 145px;
    padding-bottom: 80px;
    background-size: 75% !important;
    background-position: bottom right !important;
  }
  @media (min-width:769px) {
    text-align:left;
}

  @media (min-width: 1024px) {
    padding-top: 172px;
    padding-bottom: 227px;
  }

  @media(min-width:1170px){
    padding-top: 150px;
    padding-bottom: 122px;
  }

  @media(min-width:1270px){
    padding-top: 150px;
    padding-bottom: 122px;
  }

  @media (min-width: 1400px) {
    padding-top: 160px;
    padding-bottom: 182px;
  }


`;

Hero.Content = styled(Box)`
.agency-btn1{
  background:#ff5722 !important;
  margin-right:16px;
  border-radius:50px !important;
  box-shadow: -8px 8px 50px rgba(255, 87, 34, 0.5);

  &:hover {
    background: #f98c6a !important;
  }
}
.agency-btn2{
  background:#3183ff !important;
  border-radius:50px !important;
  box-shadow: -8px 8px 50px rgba(26, 117, 255, 0.5);

  &:hover{
    background: #4e92f9 !important;
  }

}
.opac-word{
  opacity:1;
}
`;
Hero.Text = styled(Paragraph)`
  font-weight: 400;
  font-size: 18px;
  line-height: 34px;
  letter-spacing: normal;
  margin-bottom:40px;
  color:#262729;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 30px;
  }

  @media (min-width: 1024px) {
    font-size: 21px;
    margin-bottom:55px;
  }

  @media(min-width;1170px){
    font-size: 18px;
    line-height: 28px;
  }

  @media(min-width:1400px){
    font-size:24px;
    line-height:36px;
  }


`;
Hero.Title = styled(Heading)`
    font-size: 42px;
    font-weight: 700;
    line-height: 54px;
    margin-bottom: 25px;

  b{
    font-weight:700;
    color:#FF5722;
  }



  @media (min-width: 768px) {
    font-size: 50px;
    line-height: 50px;
  }

  @media (min-width: 992px) {
    font-size: 46px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 46px;
    font-weight: 700;
    margin-bottom: 20px;

  }

  @media (min-width: 1170px) {
    font-weight: 700;
    font-size: 56px;
    line-height: 60px;
    margin-bottom: 33px;
  }

  @media (min-width: 1270px) {
    font-weight: 700;
    font-size: 56px;
    line-height: 60px;
    margin-bottom: 33px;
  }
  
  @media(min-width:1400px){
    font-weight: 700;
    font-size: 70px;
    line-height: 72px;
    margin-bottom: 33px;
  }
`;
Hero.Icon = styled(Box)`
  min-width: 66px;
  max-width: 66px;
  min-height: 66px;
  max-height: 66px;
  border-radius: 50%;
  box-shadow: -12px 12px 50px rgb(253 52 110 / 30%);
  background-color: #fff;
  display: inline-flex;
  align-items: center;
  color: #fd346e;
  justify-content: center;
  margin-bottom: 38px;
  font-size: 21px;
`;

Hero.Button = styled(Button)`
  width: 155px;
  height: 57.37px;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: #fff !important;
  box-shadow: 0 20px 20px rgb(253 52 110 / 0%);
  transition: 0.4s;
  border-radius: 10px!important;

  &:hover {
    
    
  }

  @media(min-width:768px){
    width: 180px;
  }
  
`;

export default Hero;
