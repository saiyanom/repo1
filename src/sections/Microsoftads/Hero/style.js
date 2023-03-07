import styled from "styled-components";
import { Box, Heading, Button, Paragraph, heading4 } from "~styled";

const Hero = styled(Box)`
  padding-top: 60px;
  background-size: cover;
  background-position: right top;
  position: relative;
  z-index: 0;
  @media (min-width: 768px) {
    padding-top: 80px;
  }

  @media (min-width: 1024px) {
    padding-top: 180px;
  }

  @media (min-width: 1024px) {
    padding-top: 100px;
  }


  .hero-img1{
    position: relative;
    z-index: 1;
    display:none;

    @media(min-width:992px){
      display:block;
      left: -30px;
      width: 80% !important;
      height: 100%;
      top: -4px;
    }

    @media(min-width:1170px){
      left: 88px;
      width: 60% !important;
      height: 100%;
      top: -25px;
    }
    
    @media(min-width:1270px){
      left: 88px;
      width: 60% !important;
      height: 100%;
      top: -25px;
    }
    @media(min-width:1400px){
      left: 88px;
      top:-15px;
    }
  }
  .hero-img2{
    display:none;

    @media(min-width:992px){
      display:block;
      left: -61px;
      width: 50% !important;
      height: 100%;
      top: 50px;
      position: relative;
    }


    @media(min-width:1170px){
      width: 40% !important;
      height: 100%;
      top: 24px;
      position: relative;
      left: 71px;

    }
    @media(min-width:1270px){
      width: 40% !important;
      height: 100%;
      top: 24px;
      position: relative;
      left: 71px;
    }
    @media(min-width:1400px){
      left: 80px;
      top:53px;
    }

  }
  padding-bottom: 60px;
`;

Hero.Content = styled(Box)``;
Hero.Subtitle = styled(Heading)`
  font-size: 21px;
  font-weight: 500;
  font-style: italic;
  letter-spacing: normal;
  line-height: 1.4285;
  margin-bottom: 20px;
`;
Hero.Title = styled(Heading)`
  font-size: 42px;
  font-weight:700;
  letter-spacing:normal;
  line-height:54px;
  margin-bottom: 25px;

  span{
    color: #FF5722;
  }



  @media (min-width: 480px) {
    font-size: 40px;
  }

  @media (min-width: 768px) {
    font-size: 50px;
  }

  @media (min-width: 1024px) {
    font-size: 70px;
    font-weight:700;
    line-height: 70px;
    margin-top: -85px;
  }

  @media(min-width:1170px){
    font-weight: 700;
    font-size: 70px;
    line-height: 72px;
    margin-top: -85px;
  }

  @media(min-width:1400px){
    font-weight: 700;
font-size: 70px;
line-height: 72px;
    margin-top: -85px;
  }

 
`;
Hero.PopupText = styled(heading4)`
font-weight: 700;
font-size: 30px;
line-height: 42px;
width: 100%;
text-align: center !important;
margin-bottom: 3rem !important;

@media(min-width:992px){
  width: 700px;
}
@media(min-width:1170px){
}
`;
Hero.Text = styled(Paragraph)`
font-weight: 400;
font-size: 18px;
line-height: 34px;
width: 100%;
color: #262729;

@media(min-width:992px){
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  width: 521px;
}
@media(min-width:1170px){
  font-weight: 400;
  font-size: 21px;
    line-height: 40px;
  width: 521px;
}
@media(min-width:1270px){
  font-weight: 400;
  font-size: 21px;
  line-height: 40px;
  width: 521px;
}
@media(min-width:1400px){
    font-weight: 400;
    font-size: 21px;
    line-height: 40px;
    width: 521px;
}
`;

Hero.Buttons = styled(Box)`
  .btn-hero-affiliate {
    margin-right: 18px;
    border-radius:50px!important;
    width: 230px;
    box-shadow: -8px 8px 50px rgba(255, 87, 34, 0.5);
    font-size:14px;
    background:#FF5722;
    color:#fff;
    height:50px;

    @media(min-width:992px){
      width: 324px;
      font-size:18px;
    }
    @media(min-width:1170px){
      width: 324px;
      font-size:20px;
      height: 70px;
    }
    @media(min-width:1270px){
      width: 324px;
      font-size:20px;
    }
    @media(min-width:1400px){
      font-size:22px;
      width: 388px;

    }
  }

  .btn-affi-hero1 :hover{
    background: #f98c6a;
  }

  .btn-affi-hero2{
    background: #1A75FF;
    border-radius: 10px;
    width: 180px;
    color:#fff;
  }
  .btn-affi-hero2 :hover{
    box-shadow: 3px 12px 50px #a8c3ec;

  }
`;

Hero.PopupButtons = styled(Box)`
display: flex;
justify-content: center;

  .popup-btn1{
    background:#3183ff ;
    margin-right:20px;
    transition: 0.25s all ease;
  
    @media(min-width:992px){
    margin-right:12px;
    }
  
    @media(min-width:1400px){
      margin-right:69px;
    }
  
  
  }

  .popup-btn1 :hover{
    background: #4e92f9 !important;
  }

  .popup-btn2{
    background:#FF5722 ;
    transition: 0.25s all ease;

    @media(min-width:992px){
      margin-left:12px;
      }
  
  }

  .popup-btn2 :hover{
    background: #f98c6a !important;
  }

  .btn-hero-affiliate {
    position: relative;
    top: -20px;
    right: -20px;
    }
  }
`;

Hero.XButton = styled(Button)`
position: relative;
    top: -20px;
    right: -20px;
    float: right;
    background: red;
    border-radius: 100%;
    padding: 8px 7px;
    font-size: 21px;
    line-height: 14px;
    font-weight: 500 !important;
    cursor: pointer;
    border: 0;
    color: #fff;
    text-decoration: none;
`;
Hero.Video = styled(Box)`

  
`;
Hero.Button = styled(Button)`
 
`;

Hero.PopupButton = styled(Button)`
    border-radius: 25px !important;
    width: auto;
    color:#ffffff !important;
    cursor: pointer;
    font-size: 18px;
    line-height: 24px;
    padding: 10px 15px 10px;
    font-weight: 600 !important;
    text-decoration: none;
    letter-spacing: 0px;
`;

export default Hero;
