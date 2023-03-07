import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";

const About = styled(Box)`
  padding-bottom: 20px;
  @media (min-width: 768px) {
    padding-bottom: 40px;
  }

  @media (min-width: 992px) {
    padding-bottom: 110px;
  }
  .about-text-card2{
    background: rgba(0,227,90,0.3);
    border-radius: 15px;
    height: 662px;
    padding-top: 62px;
    padding-bottom: 107px;
    padding-left: 87px;
    width: 570px;
    left: -85px;
    position: relative;
    padding-right: 23px;
  }
  .about-text-card2 h2{
    font-size:39px;
  }
  .about-text-card{
    background: rgba(253,52,110,0.1);
    border-radius: 15px;
    padding-top: 115px;
    padding-bottom: 107px;
    padding-left: 87px;
    width: 556px;
    position: relative;
    padding-right: 23px;
    right: 51px;
    margin-left: 0;
  }
  .section-cards{
    padding-bottom:50px;
    position:relative;
  }

  .image-about-1{
    right: 46px;

  }

  .about-text-card3{
    background: rgba(0, 187, 254, 0.3);
    border-radius: 15px;
    height: 662px;
    padding-top: 62px;
    padding-bottom: 107px;
    padding-left: 80px;
    width: 545px;
    position: relative;
    padding-right: 23px;
    margin-left: 0;
    right: 95px;
  }
  .about-text-card4{
    background:  rgba(238, 235, 62, 0.5);
    border-radius: 15px;
    height: 662px;
    padding-top: 115px;
    padding-bottom: 107px;
    padding-left: 48px;
    width: 554px;
    left: -81px;
    position: relative;
    padding-right: 23px;
  }
  .about-text-card5{
    background: rgba(173, 179, 183, 0.5);
    border-radius: 15px;
    height: 662px;
    padding-top: 115px;
    padding-bottom: 107px;
    padding-left: 75px;
    width: 545px;
    position: relative;
    padding-right: 23px;
    margin-left: 0;
    right: 95px;
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

  @media (min-width: 992px) {
    font-size: 42px;
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
