import styled from "styled-components"
import { Link } from "~components"
import { Box, Button, Heading, Paragraph } from "~styled"

const Footer = styled(Box)`
  padding-top: 60px;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    padding-top: 80px;
  }

  @media (min-width: 992px) {
    padding-top: 100px;
    padding-bottom: 20px;
  }

  @media (min-width: 1170px) {
    padding-top:94px;
  }

  @media (min-width: 1270px) {
    padding-top:94px;
  }
  .footer-widgets p br {
    @media (max-width: 1024px) {
      display:none;
    }
  }

`
Footer.Widgets = styled(Box)``
Footer.Newsletter = styled(Box)`
  form {
    text-align: right;

    input {
      width: 100%;
      border: none;
      height: 56px;
      border-radius: 50px;
      background-color: #fff;
      margin-bottom: 20px;
      padding: 0 20px;

      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
  }
`
Footer.Link = styled(Box)``

Footer.Title = styled(Heading)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 28px;
  margin-bottom: 25px;
  color: #fff;
  opacity: 0.7;
`

Footer.Text = styled(Paragraph)`
  color: rgba(255, 255, 255, 0.7);
  margin-top: 38px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.875;
`

Footer.Address = styled(Box).attrs({ className: "list-unstyled", as: "ul" })`
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`
Footer.AddressItem = styled(Box).attrs({ className: "list-items", as: "li" })`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 30px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  color: #fff !important;
  a {
    color: #fff !important;
    font-size: inherit;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 30px;
    transition: 0.4s;
    &:hover {
      color: #fd346e !important;
    }
  }
  i {
    margin-right: 5px;
    margin-top: 7px;
    font-size: 20px;
    width: 35px;
    color: #fff;
  }
  span {
    color: #fff !important;
    display: inline-block;
    word-break: break-all;
  }
`

Footer.List = styled(Box).attrs({
  className: "widgets-list list-unstyled",
  as: "ul",
})`
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`
Footer.ListItems = styled(Box).attrs({ className: "list-items", as: "li" })`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 30px;
  display: flex;
  margin-bottom: 15px;
  color: rgba(38, 39, 41, 0.7) !important;
  a {
    color: #fff !important;
    font-size: inherit;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 30px;
    transition: 0.4s;
    &:hover {
      color: #fff;
    text-decoration: underline;
    }
  }
  i {
    margin-right: 5px;
    margin-top: 10px;
    font-size: 20px;
    width: 35px;
    color: #fff;
  }
  span {
    color: rgba(38, 39, 41, 0.7) !important;
  }
`
Footer.SocialShare = styled(Box).attrs({
  className: "footer-social-share list-unstyled",
  as: "ul",
})`
  padding: 0;
  margin: 0 -10px;
  margin-top: 30px;
  @media (min-width: 992px) {
    margin-top: 0;
  }
`
Footer.SocialShareItem = styled(Box).attrs({
  className: "list-items",
  as: "li",
})`
  display: inline-flex;
  align-items: center;
  a {
    display: inline-flex;
    align-items: center;
    position: relative;
    padding: 0 15px;
    transition: 0.4s;
    color: #fff;
    font-size: 21px;
    
  }
  &:first-child {
    a:before {
      display: none;
    }
  }
`

Footer.Copyright = styled(Box)`
  text-align: center;
  padding-top: 25px;
  padding-bottom: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
    justify-content: center;
  @media (min-width: 576px) {
  justify-content: space-between;
  }
  @media (min-width: 992px) {
    text-align: left;
  }
`

Footer.CopyrightText = styled(Box)`
  font-size: 13px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 22px;
  color: #fff;
  opacity:0.7;
`

Footer.Box = styled(Box)``
export default Footer
