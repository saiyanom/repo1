import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";

const About = styled(Box)`
  padding-top: 60px;
  padding-bottom: 20px;
  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 40px;
  }
  @media (min-width: 1024px) {
    padding-top: 120px;
    padding-bottom:120px;
  }

  .blue-text{
    color: #1A75FF;
  }

  .para1{
    position: relative;
    margin-top: 40px;
    margin-bottom: 50px;
    padding: 20px;

    @media(min-width:768px){
      padding:0;
    }
    p{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      color: #262729;
      width: 100%;
      margin-top: 10px;

      @media(min-width:992px){
        font-size: 18px;
        line-height: 27px;
        width: 100%;
        margin-top: 10px;
      }

      @media(min-width:1170px){
        font-size: 16px;
        line-height: 32px;
        width:100%;
        margin-top:50px;
      }

      @media(min-width:1270px){
        font-size: 21px;
        line-height: 40px;
      }
      @media(min-width:1400px){
        font-size: 21px;
        line-height: 40px;
      }
    }

    h1{
      font-weight:500;
      font-size:28px;

      @media(min-width:992px){
        font-size: 36px;
        line-height: 40px;
        margin-bottom: 20px;

      }

      @media(min-width:1170px){
        font-size: 45px;
        line-height: 54px;
        margin-bottom: 0;

      }

      @media(min-width:1270px){
        font-size: 45px;
        line-height: 54px;
      }

      @media(min-width:1400px){
        font-size: 45px;
        line-height: 54px;
      }
      
    }

    b{
      color:#1A75FF;
    }
  }
    
  .section2{
    flex-direction: column-reverse;
     @media(min-width:992px){
      flex-direction: row;
     }
  }
  
  .about-text-card2 {

    h1{
      font-size:28px;
      font-weight:500;
      
      @media(min-width:992px){
        font-size:36px;
        line-height:40px;
      }

      @media(min-width:1170px){
        font-size:45px;
        line-height:50px;
      }
      @media(min-width:1270px){
        font-size:45px;
        line-height:54px;

      }
      @media(min-width:1400px){
        font-size:45px;
        line-height:54px;

      }
    }
    // background:#F4F9FC;
    // border-radius: 15px;
    position: relative;
    padding:30px;

    @media (min-width: 992px) {
      width: calc(100% + 70px);
      padding-top: 110px;
      padding-bottom: 110px;
      position: relative;
      left: 0;
      padding-left:30px;
      padding-right:40px;
    }
    @media (min-width: 1170px) {
      width: calc(100% + 70px);
      padding-top: 130px;
      padding-bottom: 130px;
      padding-left: 60px;
      padding-right: 23px;
      left: -80px;
      position: relative;
      left: -30px;
    }
    @media (min-width: 1270px) {
      padding-top: 80px;
      padding-bottom: 80px;
    }
    @media (min-width: 1400px) {
      padding-top: 120px;
      padding-bottom: 120px;
    }
  }
  .about-text-card2 h2,
  .about-text-card h2,
  .about-text-card3 h2 {
    font-size:24px;
    line-height:30px;
    @media (min-width: 992px) {
      font-size:28px;
      line-height:36px;
    }
    @media (min-width: 1170px) {
      font-size:32px;
      line-height:40px;
    }
    @media (min-width: 1270px) {
      font-size:45px;
      line-height:54px;
    }
    @media (min-width: 1400px) {
      font-size:45px;
      line-height:60px;
    }
  }
  .about-text-card2 p {
    width: 90%;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;  
    color: #262729;
    @media (min-width: 992px) {
      width: 72%;
      font-size: 18px;
      line-height: 27px;
    }
    @media (min-width: 1170px) {
      width:80%;
      font-size: 21px;
      line-height:40px;

    }
    @media (min-width: 1270px) {
      width:80%;
      font-size: 21px;
      line-height:40px;

    }
    @media (min-width: 1400px) {
      width:75%;
      font-size: 21px;
      line-height:40px;
    }
  }

  .image2 {
    position: relative;
    left:0;

    @media(min-width:992px){
      left:-80px;

    }
  }
  .about-text-card {
    background: #F4F9FC;
    border-radius: 15px;
    padding-top: 120px;
    padding-bottom: 120px;
    padding-left: 48px;
    width: 100%;
    height: auto;
    position: relative;
    padding-right: 20px;
    right: 0;
    margin-left: 0;
    @media (min-width: 992px) {
      padding-top: 150px;
      padding-bottom: 150px;
    }
    @media (min-width: 1170px) {
      padding-top: 180px;
      padding-bottom: 180px;
    }
    @media (min-width: 1270px) {
      padding-top: 180px;
      padding-bottom: 180px;
    }
    @media (min-width: 1400px) {
      padding-top: 200px;
      padding-bottom: 200px;
    }
  }
  .about-text-card
  h1{
    font-weight:500;
  }
  b{
    color:#1A75FF;
    font-weight:700;
  }

  p {
    width:90%;
    font-size: 21px;
    font-weight: 400;
    line-height: 40px;
    margin-top: 28px;
    @media (min-width: 992px) {
      width:85%;
      font-size: 14px;
    }
    @media (min-width: 1170px) {
      width:80%;
      font-size: 16px;
    }
    @media (min-width: 1270px) {
      width:80%;
      font-size: 16px;
    }
    @media (min-width: 1400px) {
      width:70%;
      font-size: 21px;
      line-height:40px;
    }
  }


  .section-cards {
    padding-bottom:0;
    position:relative;

    @media(min-width:992px){
      padding-bottom:0px;
      position:relative;
    }
  }

  .image-about-1 {
    right: 46px;
  }

  .about-text-card3 {

    border-radius: 15px;
    width: 100%;
    height: auto;
    position: relative;
    padding:20px;
    @media (min-width: 992px) {
      padding-top: 110px;
      padding-bottom: 0;
    }
    @media (min-width: 1170px) {
      padding-top: 70px;
      padding-bottom: 130px;
    }
    @media (min-width: 1270px) {
      padding-top: 80px;
      padding-bottom: 140px;
    }
    @media (min-width: 1400px) {
      padding-top: 100px;
      padding-bottom: 150px;
    }
  }
  .about-text-card3
  h1{
    font-weight:500;
    font-size:28px;

    @media(min-width:992px){
      font-weight: 500;
      font-size: 36px;
      line-height: 40px;
    }

    @media(min-width:1170px){
      font-size:45px;
      line-height:54px;
    }
    @media(min-width:1270px){
      font-size:45px;
      line-height:54px;

    }
    @media(min-width:1400px){
      font-size:45px;
      line-height:54px;

    }
  }
  b{
    font-weight:700;
    color:#1A75FF;

  }
  p {
    width:90%;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #262729;
    @media (min-width: 992px) {
      width:85%;
      font-size: 18px;
      line-height:27px;
    }
    @media (min-width: 1170px) {
      width:100%;
      font-size: 21px;
      line-height:40px;
    }
    @media (min-width: 1270px) {
      width:100%;
      font-size: 21px;
      line-height:40px;

    }
    @media (min-width: 1400px) {
      width: 90%;
      font-size: 21px;
      line-height:40px;

    }
  }

  .image-about-1{
    position: relative;
    left: 11px;
  }

  
 
`;

About.Content = styled(Box)``;
About.Title = styled(Heading)`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.3;
  position: relative;
  width: 524px;
  @media (min-width: 768px) {
    font-size: 38px;
  }

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;
About.Subtitle = styled(Heading)`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.75;
`;
About.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.77777;
`;
About.ButtonGroup = styled(Box)`
  margin-right: -17.0656px;
  display: flex;
  flex-wrap: wrap;
`;

About.Image = styled(Box)`
z-index: 99;
width: 100%;
@media (min-width: 768px) {
  width: 100%;
}
@media (min-width: 992px) {
  width: 100%;
}
@media (min-width: 1170px) {
  width: 100%;
}
@media (min-width: 1270px) {
  width: 100%;
}
@media (min-width: 1400px) {
  width: 100%;
}
  .video-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #ff5722;
    border-color: transparent;

    min-width: 76px;
    max-width: 76px;
    min-height: 76px;
    max-height: 76px;
    @media (min-width: 575px) {
      min-width: 96px;
      max-width: 96px;
      min-height: 96px;
      max-height: 96px;
    }
  }
`;

About.Button = styled(Button)`
  margin-right: 15px;
  border-radius: 500px!important;
  color: #fff;
  min-width: 140px;
  height: 56px;
  margin-top: 15px;
  font-size: 14px;
  @media (min-width: 576px) {
    font-size: 15px;
  }
  @media (min-width: 1200px) {
    min-width: 165px;
    height: 60px;
  }
  &.btn-1 {
    box-shadow: 4px 4px 56px rgba(255, 87, 34, 0.3)!important;
    color: #fff !important;
    &:hover {
      box-shadow: none;
      color: #fff !important;
    }
  }
  &.btn-2 {
    box-shadow: 4px 4px 56px rgb(80 52 252 / 0%);
    &:hover {
      box-shadow: 4px 4px 56px rgb(80 52 252 / 30%);
    }
  }
`;

About.Box = styled(Box)``;

export default About;
