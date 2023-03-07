 import styled from "styled-components"
import { Box, Heading, Paragraph } from "~styled"

const Hero = styled(Box)`
    padding-top: 100px;
    padding-bottom: 78px;
    @media (min-width:575px) {
        padding-top: 80px;
    }
    @media (min-width:768px) {
        padding-top: 80px;   
    }
    @media (min-width:992px) {
        padding-top: 120px;   
    }
    @media (min-width:1170px) {
        padding-top: 100px;
    }
    @media (min-width:1270px) {
        padding-top: 140px;
    }
    @media (min-width:1400px) {
        padding-top: 140px;
    }
    @media (min-width:1600px) {
        padding-top: 180px;
    }
    .close{
        margin-right:30px;
        font-size:20px;
        color:#fff;
        box-shadow: -8px 8px 50px rgba(255, 87, 34, 0.5) ;
        background:#ff5722;
        transition: 0.5s all ease;
        width:175px;
        height:70px;

        a{
            color:#fff;
        }
    }
    .close2{
        font-size:20px;
        box-shadow: -8px 8px 50px rgba(80, 52, 252, 0.5);
        transition: 0.5s all ease;
        color:#fff;
        width: 220px;
        height: 70px;
        background: #1A75FF;

        
        a{
            color:#fff;
        }

    }
    @media (max-width:1240px) {
        .close {
            margin-right:45px;
            // font-size:14px;
        }
        .close2{
            font-size:14px;
        }
    }
    @media (max-width:767px) {
        .close {
            margin-right:10px;
            height:50px;
        }
    }
    
    .close:hover {
        background: #f98c6a;
    }

    .close2:hover{
    background: #4e92f9;
    }
    
    
    


`
Hero.Title = styled(Heading)`
    font-size: 42px;
    line-height: 54px;
    font-weight: 600;
    letter-spacing: -1px;
    margin-bottom: 35px;
    
    @media (min-width:480px) {
        font-size: 42px;
    }
    @media (min-width:768px) {
        font-size: 48px;
        line-height: 60px;
    }
    @media (min-width:992px) {
        font-size: 48px;
        line-height: 60px;
        font-weight: 700;
        width: 90%;
        margin-top: 60px;
    }
    @media (min-width:1170px) {
        font-size: 70px;
        line-height: 86px;
        width: 530px;
        margin-top: 0px;
    }
    @media (min-width:1270px) {
    }
    @media (min-width:1400px) {
    }
    @media (min-width:1600px) {
    }
    @media (min-width:1820px) {
    }
    .typed-cursor {
        display: none !important;
    }
`
Hero.Text = styled(Paragraph)`
    color: #262729;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 34px;
    margin-bottom: 53px;
    @media (min-width:1024px) {
        font-size: 18px;
    }
    @media (min-width:1200px) {
        // padding-right: 150px;
    }    
`
Hero.Content = styled(Box)`
    margin-top: 20px;
    width: 100%;
    height: 100%;
    @media (min-width:768px) {
        margin-top: 60px;
        width: 532px;
        height: 483px;
    }
    @media (min-width:992px) {
        margin-top: 0;
    }
    @media (min-width:768px) {
        width: 80%;

    }
`
Hero.Newsletter = styled(Box)`
    form{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        @media (min-width:480px){
            flex-direction:row;
        }
    }
    .form-control{
        width: 100%;
        border-radius: 10px;
        border: 2px solid rgba(128, 138, 142, 0.2);
        color: rgba(37, 55, 63, 0.7);
        font-size: 16px;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 28px;
        padding: 5px 25px;
        margin-bottom: 10px;
        height: 70px;
        @media (min-width:480px) {
            margin-right: 7px;
            margin-bottom: 0;
        }
    }
`
Hero.NewsletterText = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 28px;
    margin-top: 18px;
    margin-bottom: 0;
    a{
        color:var(--bs-primary)
    }

`
export default Hero