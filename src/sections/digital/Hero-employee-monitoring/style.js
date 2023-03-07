import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";

const Hero = styled(Box)`


  padding-top: 125px;
  padding-bottom: 60px;
  background-size: cover;
  background-position: right top;
  position: relative;
  z-index: 0;
  text-align:center;
  @media (min-width:769px) {
    text-align:left;
  }
  @media (min-width: 768px) {
    background-image :url("https://dzekq3sbbgf19.cloudfront.net/public/image/employee/hero.png");
    padding-top: 100px;
    padding-bottom: 60px;
    background-position: bottom right !important;
  }
  @media (min-width: 992px) {
 
    padding-top: 251px;
    padding-bottom: 154px;

  }
  @media (min-width: 1170px) {
    padding-top: 180px;
    padding-bottom: 107px;
  }
  @media (min-width: 1270px) {
    padding-top: 140px;
    padding-bottom:107px;
  }
  @media (min-width: 1400px) {
    padding-top: 160px;
    padding-bottom: 270px;
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
   
    position: absolute;
    z-index: -1;
  }

  .agency-btn1{
    box-shadow: -8px 8px 50px rgb(255 87 34 / 50%);
  }
  .agency-btn2{
    box-shadow: -8px 8px 50px rgb(80 52 252 / 50%);
  }

  .agency-btn1:hover{
    background: #f98c6a !important;
  }

  .agency-btn2:hover{
    background: #4e92f9 !important;
  }
`;

Hero.Content = styled(Box)`
.agency-btn1{
  background:#ff5722 !important;
  margin-right:25px;
  padding: 12px 30px;
}
.agency-btn2{
  background:#3183ff !important;
  padding: 12px 30px;
}
.opac-word{
  opacity:1;
}
`;
Hero.Text = styled(Paragraph)`
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height:34px;
  opacity: 1.0;
  color: #262729;

  b{
    font-weight:700;
  }
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 30px;
    margin-bottom: 55px;

  }
  @media (min-width: 992px) {
    font-size: 18px;
    line-height: 30px;
  }
  @media (min-width: 1170px) {
    font-size: 21px;
    line-height: 40px;
    padding-right:50px;

  }
`;
Hero.Title = styled(Heading)`
  font-size: 42px;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 54px;
  margin-bottom: 20px;

  b{
    font-weight:700;
    color:#FF5722;
  }
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 992px) {
    font-size: 54px;
    line-height: 60px;
    margin-bottom: 36px;
  }
  @media (min-width: 1170px) {
    font-size: 48px;
    line-height:52px;
    margin-bottom: 56px;
  }
  @media (min-width: 1270px) {
    font-size: 66px;
    line-height: 72px;
    margin-bottom: 56px;
  }
  @media (min-width: 1400px) {
    font-size: 66px;
    line-height: 72px;
    margin-bottom: 56px;
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
  width: 180px;
  height: 57.37px;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: #fff !important;
  box-shadow: 0 20px 20px rgb(253 52 110 / 0%);
  transition: 0.4s;
  border-radius: 50px!important;

  &:hover {
    
    
  }
  
`;

export default Hero;
