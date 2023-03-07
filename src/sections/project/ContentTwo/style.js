import styled from "styled-components"
import { Link } from "~components"
import { Box, Heading, Button, Paragraph } from "~styled"

const Content = styled(Box)`
  padding-top: 75px;
  // padding-bottom: 60px;
  @media (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 0px;
  }
  @media (min-width: 992px) {
    padding-top: 165px;
    padding-bottom: 0px;
  }
  .backcolor2{
    padding: 50px 0px;
    margin-top: -165px;
    position:relative;

    @media (min-width: 992px) {
      padding: 100px 0px;
      margin-top: -165px;
      position:relative;
    }
    @media (min-width: 1170px) {
      padding: 100px 0px;
      margin-top: -165px;
      position:relative;
    }
  }
  .DotShape{
    position: absolute;
    width: 7.4%;
    top: 88px;
    left: -1.8%;
  }
  .backcolor3 {
    padding: 50px 0px;
    background: #fbf9ff;
    position:relative;
  }
  .international-image {
    width:100%;

    @media(min-width:992px){
      margin-left:10%;

    }
  }
  h2.international-reach-heading {
    font-size: 58px;
  }
  .blueBackground {
    background-color:#fbf9ff;
    position:relative;
  }
  .interns-3-image {
    margin-right:0px;
    float:right;
  }
  .interns-3-image img {
    float:right;
    margin-right:0px;
    width:100%;
      @media (min-width: 1170px) {
        width:auto;
      }
  }
  .become-a-freelancer-box {
    margin-left:0;
    @media (min-width: 1170px) {
      margin-left:0%;
    }
    @media (min-width: 1270px) {
      margin-left:5%;
    }
    @media (min-width: 1400px) {
      margin-left:10%;
    }
  }
`
Content.Block = styled(Box)`
  padding-top: 60px;
  padding-bottom: 60px;

  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media (min-width: 992px) {
    padding-top: 132px;
    padding-bottom: 0px;
  }
`

Content.Block = styled(Box)`
  /* padding-top: 80px; */
  @media (min-width: 768px) {
    padding-top: 0;
  }
`
Content.Title = styled(Heading)`
  font-size: 28px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 1.20689;
  margin-bottom: 32px;
    @media (min-width: 992px) {
      font-size: 36px;
      line-height: 36px;
    }
    @media (min-width: 1170px) {
      font-size: 42px;
      line-height: 42px;
    }
    @media (min-width: 1270px) {
        font-size: 48px;
        line-height: 48px;
    }
    @media (min-width: 1440px){
        font-size: 45px;
        line-height: 58px;
    }
`
Content.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  color: #262729;
  letter-spacing: normal;
  line-height: 32px;
  margin-bottom: 12px;
  width:100%;
    @media (min-width: 992px) {
      width:80%;
      font-size: 18px;
      line-height: 27px;
    }
    @media (min-width: 1170px) {
      width:85%;
      font-size: 21px;
      line-height: 40px;
    }
    @media (min-width: 1270px) {
      width:85%;
      font-size: 21px;
      line-height: 40px;
    }

`

Content.Image = styled(Box)`
  position: relative;
  margin-bottom: 40px;
  z-index: 1;

  @media (min-width: 1200px) {
    margin-bottom: 0;
    margin-right: 55px;
  }
`
Content.ContentShape = styled(Box)`
    position: absolute;
    bottom: 10%;
    right: 10%;
    width: 3.4%;
`
Content.ContentShapeTwo = styled(Box)`
     width: 38%;
    position: absolute;
    left: -1%;
    top: -7%;
    z-index: -1;
`
Content.Button = styled(Link)`
  padding: 10px 0 !important;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: normal;
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #ff5722;
    height: 2px;
    min-width: 138px;
    max-width: 138px;
  }
`

Content.Box = styled(Box)``

export default Content
