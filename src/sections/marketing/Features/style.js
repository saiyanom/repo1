import styled from "styled-components"
import { Box, Heading, Paragraph } from "~styled"

const Feature = styled(Box)`
    position: relative;
    overflow: hidden;
    padding-top: 55px;
    padding-bottom: 20px;
    @media (min-width:768px) {
        padding-top: 70px;
        padding-bottom: 40px;
    }
    @media (min-width:992px) {
        padding-top: 125px;
        padding-bottom: 105px;
        margin-top: 50px;
    }
    background-position: right top;
    background-size: contain;
    background-repeat: no-repeat;
    .feature-sec .feature-title {
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 0;
        @media (min-width:768px) {
            font-size: 36px;
            line-height: 48px;
        }
        @media (min-width:992px) {
            font-size: 36px;
            line-height: 48px;
        }
        @media (min-width:1170px) {
            font-weight: 400;
            font-size: 60px;
            line-height: 66px;
        }
        @media (min-width:1270px) {
            font-weight: 400;
            font-size: 60px;
            line-height: 66px;
        }   
    }
    .feature-sec .feature-title2 {
        font-size: 24px;
        line-height: 30px;
        @media (min-width:768px) {
            font-size: 36px;
            line-height: 36px;
        }
        @media (min-width:992px) {
            font-size: 36px;
            line-height: 36px;
        }
        @media (min-width:1170px) {
            font-weight: 700;
            font-size: 70px;
            line-height: 66px;
        }
        @media (min-width:1270px) {
            font-weight: 700;
            font-size: 70px;
            line-height: 66px;
        }  
    }
    .feature-sec p {
        font-weight: 400;
        font-size: 21px;
        line-height: 34px;
    }
    .feature-tabs span {
        font-size: 14px;
        @media (min-width:1170px) {
            font-size: 16px;
        }
        @media (min-width:1270px) {
            font-size: 16px;
        }
    }
    .feature-tabs.nav .nav-widget {
        width: 220px;
        padding: 0px 5px 0 5px;
        margin-bottom: 15px;
        height:40px;
        @media (min-width:1170px) {
            width:260px;
            height:60px;
            padding:0px 10px 0 15px;
            margin-bottom:40px;
        }
        @media (min-width:1270px) {
            width: 260px;
            padding: 0px 10px 0 15px;
        }
    }
    .tab-contents h5 {
        font-size: 32px;
        line-height: 40px;
    }
    .tab-contents p {
        font-size: 20px;
    }
    .feature-sec.col-auto > div {
        margin-bottom:50px;
        @media (min-width:768px) {
            margin-bottom:80px;
        }
        @media (min-width:1170px) {
            margin-bottom:150px;
        }
    }
`
Feature.Shapes = styled(Box)`
    position: absolute;
    right: 0;
    top: -7%;
    width: 25%;
    z-index: 1;
`
Feature.ShapeOne = styled(Box)`
`
Feature.ShapeTwo = styled(Box)`
    width: 50%;
    position: absolute;
    top: 30%;
    right: -30%;
    z-index: -1;
`
Feature.Title = styled(Heading)`
    font-size: 60px;
    font-weight: 300;
    letter-spacing: -1px;
    line-height: 66px;
    margin-bottom: 36px;

    @media (min-width:480px) {
        font-size: 40px;
    }

    @media (min-width:768px) {
        letter-spacing: -2px;
        font-size: 50px;
    }

    @media (min-width:1024px) {
        font-size: 60px;
        margin-bottom: 0 !important;
    }
`
Feature.TitleTwo = styled(Heading)`
    font-size: 60px;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 1.1;
    margin-bottom: 35px;

    @media (min-width:480px) {
        font-size: 40px;
    }

    @media (min-width:768px) {
        letter-spacing: -2px;
        font-size: 50px;
    }

    @media (min-width:1024px) {
        font-size: 60px;
    }
    `
Feature.Text = styled(Paragraph)`
    font-size: 21px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.62;
    opacity:.7;
    @media (min-width:992px) {
        font-size: 21px;
    }
`

Feature.Tab  = styled(Box).attrs(props => ({
    className:"row"
  }))`
    .nav{
        display:flex;
        /* justify-content:center; */
        a{
            color:#fff;
            padding:0;
            &.active{
                .nav-widget{
                    background-color: var(--bs-white);
                    color: var(--bs-blue-ribbon);
                    border-radius: 10px;
                    color: #2b59ff!important;
                    i {
                        color:var(--bs-primary);
                    }
                }
                
            }
        }
    }
`
Feature.TabNavWrapper = styled(Box)`
    @media (min-width:1200px){
        padding-right: 65px;
    }
    @media (min-width:1400px){
        padding-right: 110px;
    }
`
Feature.Box = styled(Box)``
export default Feature
