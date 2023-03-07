import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";

const Content = styled(Box)`
  padding-top: 60px;
  padding-bottom: 55px;
  
  .main-para-sec2{
    position: relative;
    left: -90px;
  }

  .cyan-background{
    // background: #F6FBFF;
    padding-top:30px;
    padding-bottom:30px;

  }

  .bg-colored2{
    padding: 0px 240px;
    background: #F6FBFF;
    padding-bottom: 130px;
    padding-top: 54px;
  }
  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 75px;
  }

  @media (min-width: 1024px) {
    padding-top: 130px;
    padding-bottom: 130px;
  }
  @media (min-width: 1170px) {
    padding-top: 0;
    padding-bottom:135px;
  }
  @media (min-width: 1200px) {
    padding-top: 50px;
    padding-bottom: 135px;
  }

  .screen1{
    width:100%;
    @media(min-width:992px){
      width: calc(100% + 140px);
    }
    @media(min-width:1170px){
      width:100%;
    }
  }


  h2{
    font-size: 28px;
    line-height: 40px;
    letter-spacing: -1px;

    @media (min-width: 768px) {
      font-size: 40px;
      line-height: 60px;
    }

    @media(min-width:1400px){
      font-weight: 700;
      font-size: 45px;
      line-height: 54px;
    }
  }

  .ai-last-head-colored {
    font-size: 28px;
    line-height: 40px;
    letter-spacing: -1px;

    @media (min-width: 768px) {
      font-size: 30px;
      line-height: 45px
    }

    @media(min-width:1400px){
      font-weight: 700;
      font-size: 45px;
      line-height: 54px;
    }
  }

  .colored-bg{
    background: #F6FBFF;
    border-radius: 15px;
    width: 100%;
    padding: 20px;

    @media(min-width:992px){
      background: #F6FBFF;
      border-radius: 15px;
      padding-left: 78px;
      padding-right: 33px;
      padding-bottom: 93px;
      width: calc(100% + 135px);
      left: -118px;
    }

    @media(min-width:1170px){
      background: #F6FBFF;
      border-radius: 15px;
      padding-left: 123px;
      padding-right: 0;
      padding-top: 161px;
      padding-bottom: 179px;
      width: calc(100% + 3px);
      left: -118px;
    }
    @media(min-width:1270px){
      background: #F6FBFF;
      border-radius: 15px;
      padding-left: 123px;
      padding-right: 0;
      padding-top: 161px;
      padding-bottom: 179px;
      width: calc(100% + 3px);
      left: -118px;
    }

    @media(min-width:1400px){
      width: calc(100% + 131px);
    }

  }

  .right-side-para{
    left:91px;
    top: 40px;

    @media(min-width:992px){

      padding-right: 133px;

    }

    @media(min-width:1170px){
      padding-right: 195px;
    }

  }
  .left-para2{
    top: 113px!important;
  }

  .main-section2{
    margin-top:0;
    margin-bottom: 30px;
  }
  .ai-image2{
    z-index:1;

    @media(min-width:992px){
      left: -50px;
    }

    @media(min-width:1170px){
      left:0;
    }
  }

  .ai-last-para-colored{
    padding: 20px;
    background: #F6FBFF;
    border-radius: 15px;
    left: 0;
    top: 60px;
    margin-bottom: 30px;
    color: #262729;
    

    h2{
      @media(min-width:1400px){
        font-weight:600;
      }
     
    }

    @media(min-width:992px){
      background: #F6FBFF;
      border-radius: 15px;
      left: -91px;
      padding-right: 0;
      padding-left: 85px;
      width: calc(100% + 50px);
      padding-bottom: 50px;
      padding-top: 50px;
    }

    @media(min-width:1170px){
      padding-left: 137px;
      left: -82px;

      padding-bottom: 130px;
      height: 100%;
      padding-top: 90px;
      width: calc(100% + 97px);
    }

    @media(min-width:1400px){
      padding-right:0;
      padding-top: 160px;
    }
  }

  .ai-last-para-colored h2{
  }

  .ai-last-para-colored p{
    width: 87%;
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
    margin-top: 50px;

    @media(min-width:768px){
      font-size:21px;
    }
  }

  .ai-right-para p{
    width: 87%;
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
    margin-top: 50px;
    color: #262729;
    padding-right: 96px;

    @media(min-width:768px){
      font-size:18px;
      line-height: 27px;
    }

    @media(min-width:1400px){
      padding-right: 0px;
    }
  }

  

  .ai-main-last-image{
    top:35px;
    
    @media(min-width:1170px){
      right:0;
      width:100%;

    }

    @media(min-width:1400px){
      right:0;
      height:100%;
    }

  }

  .tilt-head{
    font-weight: 700;
    font-size: 28px;
    line-height:40px;
    margin-bottom: 54px;

    @media(min-width:768px){
      font-weight: 700;
      font-size:  45px;
      line-height: 40px;
      margin-bottom: 54px;
    }

    @media(min-width:992px){
      font-weight: 700;
      font-size: 38px;
      line-height: 40px;
      margin-bottom: 54px;
    }

    @media(min-width:992px){
      font-weight: 700;
      font-size: 38px;
      line-height: 40px;
      margin-bottom: 54px;
    }

    @media(min-width:1170px){
      font-weight: 700;
      font-size: 40px;
      line-height: 50px;
      margin-bottom: 54px;
    }
    @media(min-width:1270px){
      font-weight: 700;
      font-size: 40px;
      line-height: 50px;
      margin-bottom: 54px;
    }

    @media(min-width:1400px){
      font-weight: 700;
      font-size: 45px;
      line-height: 54px;
      margin-bottom: 54px;
    }
  }

  .cc-video{
    width:100%;
  }

  .ai-left-para-sec{

    @media(min-width:992px){
      padding-right: 160px;
      left: 60px;
  
    }

    @media(min-width:1170px){
      padding-right: 80px;
      left: 60px;
      padding-top: 100px;
  
    }
    @media(min-width:1400px){
      padding-top:154px;
      left: 150px;
    }
  }

  .ai-head-section{
    @media(min-width:1170px){
    padding-top:66px;
    padding-bottom:81px
    }
    @media(min-width:992px){
      padding-bottom:81px
      }

  }

  .ai-last-sec-image{
    @media(min-width:1170px){
    width:100%
    height:90%;
    }
  }

  .ai-skew-image2{
    @media(min-width:1170px){
      left:-60%;
      transform:skewX(11deg);
    }
    @media(min-width:1400px){
      left:-40%;
    }
  }
  
`;
Content.Title = styled(Heading)`
  font-weight: 700;
  font-size: 30px;
  line-height: 66px;
  position: relative;

  b{
    font-weight:700;
    color:#1A75FF;
  }
  @media (min-width: 768px) {
    font-weight: 700;
  font-size: 70px;
  line-height: 66px;
  }

  @media (min-width: 1024px) {
    font-weight: 700;
  font-size: 70px;
  line-height: 66px;
  width: 100%;

  }

  @media (min-width: 1024px){
    font-weight: 600;
    font-size: 50px;
  }

  @media(min-width:1170px){
    font-weight: 600;
    font-size: 60px;
    margin-bottom: 25px;
  }

  @media(min-width:1270px){
    font-weight: 600;
    font-size: 60px;
    margin-bottom: 25px;
  }

  @meda(min-width:1400px){
    font-weight:700px;
    font-size:70px;
  }



`;
Content.Paragraph = styled(Paragraph)`

 @media(min-width:1400px){
  font-weight: 400;
  font-size: 21px;
  line-height: 32px;
  margin-top: 25px;
  margin-bottom: 46px;
  color: #262729;
 }
`;
Content.Subtitle = styled(Heading)`

`;
Content.Text = styled(Paragraph)`
 
font-weight: 400;
font-size: 16px;
line-height: 32px;
color: #262729;

  @media (min-width: 768px) {
    font-size: 21px;
    line-height: 27px;
  }


  @media (min-width: 1400px) {
    font-size: 21px;
    line-height: 32px;
    margin-top: 54px;
    width: 464px;

  }

`;
Content.Button = styled(Button)`
  color: #fff !important;
  background-color: #1974FF !important;
  border-radius: 10px !important;

`;

Content.Images = styled(Box)`
  display: flex;
  align-items: center;
  @media (min-width: 575px) {
   
  }
  @media (min-width: 768px) {
  }

  @media (min-width: 768px) {
 
  }

  @media (min-width: 1200px) {
   
  }


  @media(min-width:1400px){
 
  }

`;

Content.ImageOne = styled(Box)`
  width: 100%;
  position: relative;
  overflow: hidden;
  transform-origin: top left;
  margin: 0 10px;
  border-radius: 15px;
  margin-bottom: 40px;
  @media (min-width: 575px) {
    width: 50%;
    transform: skewX(-15deg);
  }
  @media (min-width: 1024px) {
    margin-bottom: 0;
    width: 40%;
  }
  @media (min-width: 1400px) {
    margin-bottom: 0;
    width: 40%;
  }
`;
Content.ImageOneInner = styled(Box)`
  transform-origin: top left;
  height: 100%;
  position: relative;
  top: 0;
  @media (min-width: 575px) {
    left: -60%;
    width: 200%;
    transform: skewX(15deg);
  }
  @media (min-width: 575px) {
    left: -37%;
    width: 200%;
    transform: skewX(11deg);
  }

  @media(min-width:992px){
    left: -54%;
  }

  @media(min-width:1170px){
    left: -40%;
    transform: skewX(10deg);

  }
`;
Content.ImageTwo = styled(Box)`
  width: 100%;
  position: relative;
  overflow: hidden;
  transform-origin: top left;
  margin: 0 10px;
  border-radius: 15px;
  margin-bottom: 40px;
  top: 56px;
  @media (min-width: 575px) {
    width: 50%;
    transform: skewX(-15deg);
  }
  @media (min-width: 1024px) {
    margin-bottom: 0;
    width: 40%;
  }

 

`;
Content.ImageTwoInner = styled(Box)`
  height: 100%;
  position: relative;
  top: 0;
  @media (min-width: 575px) {
    left: -28%;
    width: 200%;
    transform: skewX(15deg);
  }
  @media(min-width:992px){
    left: -68%;
  }
  @media(min-width:1170px){
    left: -28%;
  }
  @media (min-width: 1400px) {
    left: -37%;
    transform: skewX(11deg);
  }
`;
Content.Imageup = styled(Box)`
width: 535px;
height: 577px;
overflow: hidden;
height:100%;
border-radius:10px;
right: 75px;
bottom: 150px;
`
Content.Imagedown = styled(Box)`
width: 535px;
height: 100%;
overflow: hidden;
height:100%;
border-radius:10px;
right: 109px;
top: 23px;
`
Content.Box = styled(Box)`
padding-bottom: 30px;

`;

export default Content;
