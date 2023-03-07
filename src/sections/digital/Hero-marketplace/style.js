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
  @media (min-width: 768px) {
    padding-top: 145px;
    padding-bottom: 80px;
  }
  @media (min-width:769px) {
    text-align:left;
}

  @media (min-width: 1024px) {
    padding-top: 150px;
    padding-bottom:150px;
    margin-bottom: -163px;

  }

  @media(min-width:1170px){
    padding-top: 150px;
    padding-bottom:0;
    margin-bottom: 0px;
  }

  @media(min-width:1400px){
    padding-top: 215px;
    padding-bottom:0;
    margin-bottom: 0;

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

  .hero-right{
    display:none;

    @media(min-width:768px){
      display:block;
    }
  }
  .hero-image{
    position: relative;
    top: -153px;
   

    @media(min-width:768px){
      top: -132px;
      width: calc(100% + 65px);
    }

    @media(min-width:992px){
      top: -81px;
      width: calc(100% + 65px);
      left: -12px;
    }
    @media(min-width:1170px){
      top: -132px;
      width: calc(100% + 65px);
    }
    @media(min-width:1270px){
      top: -132px;
      width: calc(100% + 140px);

    }
    @media(min-width:1400px){
      top: -169px;
      width: calc(100% + 130px);
      left: -25px;
    }
    @media(min-width:1600px){
      top: -169px;
      width: calc(100% + 180px);
      left: -25px;
    }
    @media(min-width:1800px){
      top: -169px;
      width: calc(100% + 220px);
      left: -25px;
    }
    @media(min-width:1900px){
      top: -169px;
      width: calc(100% + 300px);
      left: -25px;
    }

  }
`;

Hero.Content = styled(Box)`
.agency-btn1{
  background:#ff5722 !important;
  position: relative

  box-shadow: -8px 8px 50px rgba(255, 87, 34, 0.5);


  @media (min-width: 768px) {
    margin-right: 0px;
    margin-bottom: 20px;
    }
    @media (max-width: 1199px) {
      margin-right: 25px;
      margin-bottom: 0px;
    }

  @media(min-width:992px){


  &:hover {
    background: #f98c6a !important;
  }
}

  @media(min-width:1200px){
    margin-bottom: 0px;
    margin-right: 20px;
    }


}

.agency-btn2{
  background:#3183ff !important;
  box-shadow: -8px 8px 50px rgba(26, 117, 255, 0.5) !important;
  position: relative;
  left: 0px;

  @media (min-width: 768px) {
    margin-left: 0px;
    
    }


  &:hover {
    background: #4e92f9 !important;
  }

}
.opac-word{
  opacity:1;
}
`;

Hero.Box= styled(Box)`
display: flex;
justify-content: center;

@media (min-width: 768px) {
display: block;

}

@media(min-width:1200px){
  display: flex;
  justify-content: flex-start;
  }

`;

Hero.Text = styled(Paragraph)`
  font-weight: 500;
  font-size: 18px !important;
  line-height: 30px;

  margin-bottom: 55px;
  text-align: left;
  color: #262729;

  b{
    color:#000;
    font-weight:700;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 32px;

  }
  @media(min-width:992px){
    font-size: 16px;
    line-height: 32px;
  }

  @media(min-width:1170px){
    font-size: 21px;
    line-height: 40px;
  }

  @media(min-wdidth:1270px){
    font-size: 21px;
    line-height: 40px;
   
  }

  @media(min-width:1400px){
    font-weight: 500;
    font-size: 21px;
    line-height: 40px;
  }

 
`;
Hero.Title = styled(Heading)`
font-size: 32px;
line-height: 40px;
  font-weight: 700;
  letter-spacing: normal;
  
  margin-bottom: 25px;
  text-align:left;
 

  b{
    color: #FF5722;
    font-weight:700;
  }

  @media (min-width: 480px) {
    font-size: 42px;
  }

  @media (min-width: 768px) {
    font-size: 50px;
  }

  @media (min-width: 1024px) {
    font-size: 40px;
    line-height: 60px;
    font-weight: 700;
  }
  @media (min-width: 1170px) {
    line-height: 80px;
    font-size: 67px;
  }
  @media(min-width:1400px){
    font-weight:700;
    font-size:70px;
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
  width: 150px;
  height: 57.37px;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: #fff !important;
  box-shadow: 0 20px 20px rgb(253 52 110 / 0%);
  transition: 0.4s;
  border-radius: 50px!important;

  @media(min-width:992px){
    width: 180px;
  }

  @media(min-width:1400px){
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    width: 234px;
    height: 70px;
  }

  &:hover {
    
    
  }
  
`;

export default Hero;
