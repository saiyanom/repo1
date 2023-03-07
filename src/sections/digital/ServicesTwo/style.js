import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";

const Service = styled(Box)`
  padding-top: 50px;
  padding-bottom: 40px;
  @media (min-width: 768px) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
  @media (min-width: 992px) {
    padding-top: 100px;
    padding-bottom: 50px;
  }
  .service-card-left-section .service-card-left-section-inner > div {
    background:#f6fbff;
    padding:40px 40px;
    @media (min-width: 992px) {
      padding:15px 20px;
    }
    @media (min-width: 1170px) {
      padding:20px 30px;
    }
    @media (min-width: 1270px) {
      padding:40px 40px;
    }
  }
  .service-card-left-section .service-card-left-section-inner > div > div:nth-child(1) {
    min-width:90px;
    text-align:center;
  }
  .service-card-left-section .service-card-left-section-inner > div > div:nth-child(2) h3 {
    font-size: 16px;
    line-height:1.5;
    font-weight: 600;
    margin-bottom:10px;
    margin-top: 32px;
    @media (min-width: 992px) {
      font-size:16px;
      margin-bottom:10px;
      margin-top: 0;
     }
     @media (min-width: 1170px) {
      font-size:18px;
      margin-bottom:15px;
     }
  }
  .service-card-left-section .service-card-left-section-inner > div > div:nth-child(2) p {
    font-size:14px;
    line-height:1.5;
    @media (min-width: 992px) {
     font-size:14px;
    }
    @media (min-width: 1170px) {
     font-size:16px;
    }
  }
`;
Service.Title = styled(Heading)`
  color:#000;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 30px;
  width: auto;

  b{
    font-weight:700;
    color:#1A75FF;
  }
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 992px) {
    font-size: 32px;
    line-height: 40px;
  }
  @media (min-width: 1170px) {
        font-weight: 700;
        font-size: 42px;
    line-height: 50px;
    letter-spacing: -1px
  }
  @media (min-width: 1270px) {
        font-weight: 700;
        font-size: 42px;
        line-height: 50px;
    letter-spacing: -1px
  }
  @media (min-width: 1400px) {
    font-weight: 700;
    font-size: 45px;
    line-height: 62px;
    letter-spacing: -1px
  }
`;
Service.Subtitle = styled(Heading)`
  color:#000;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.75;
`;
Service.Text = styled(Paragraph)`
color: #262729;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 32px;
`;
Service.Button = styled(Button)`
  color: #fff !important;
  border-color: #fd346e !important;
  background-color: #fd346e !important;
  box-shadow: 0 20px 20px rgb(253 52 110 / 30%);
  border-radius: 500px !important;
  &:hover {
    box-shadow: 0 20px 20px rgb(253 52 110 / 0%) !important;
    color: #fff !important;
  }
`;
Service.Box = styled(Box)``;
export default Service;
