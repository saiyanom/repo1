import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Hero = styled(Box)`
        padding-top: 100px;
        padding-bottom: 49px;
        position: relative;
        // margin-bottom: -59px;

    .orange{
        color:#FF5722;
        margin-bottom: 0;
    }

    @media (min-width: 768px) {
        padding-top: 120px;
        padding-bottom: 0;
    }

    @media (min-width: 1024px) {
        padding-top: 120px;
        padding-bottom: 0;
    }

    @media (min-width: 1200px) {
        padding-top: 120px;
        padding-bottom: 0;
    }

    @media (min-width: 1366px) {
        padding-top: 120px;
        padding-bottom: 0;
        // margin-bottom: -111px;

    }

    .green-circle{
        width: 53px;
        height: 53px;
        background: #15CDA8;
        position: relative;
        border-radius: 63px;
        top: 0;
    }
    .bigcircle {
        background: url('image/project-management/l2-hero-shape.png') no-repeat 0 0;
        position: absolute;
        left: 11%;
        top: -50px;
        z-index: 9;
        height: 170px;
        width: 170px;
        display: inline-block;
    }
    @media (max-width:1399px) {
        .bigcircle {
            left:5%;
        }
    }
    @media (max-width:1024px) {
        .bigcircle {
            left:16%;
        }
    }
    @media (max-width:991px) {
        .bigcircle {
            left:12%;
        }
    }
    .right-shape-image {
        position: absolute;
        right: 0px;
        top: 100px;
        float: right;
        width: 100%;
        background: url('image/project-management/l2-hero-shape.png') no-repeat 0 0;
    }
`
Hero.Shape = styled(Box)`
display: flex;
justify-content: center;
}
`

Hero.Title = styled(Heading)`
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 54px;
    font-size: 42px;
    margin-bottom: 0px;
    z-index: 1;
    position: relative;
    z-index:9;
    font-weight:700;
    padding-bottom:20px;
    position:relative;


    @media (min-width: 768px){
        font-size: 42px;
        line-height:54px;
    }

    @media (min-width: 992px){
        font-size: 50px;
        line-height:54px;
    }
    @media (min-width: 1170px){
        font-size: 70px;
        line-height:72px;
    }
    @media (min-width: 1800px){
        padding-bottom:50px;
    }
`
Hero.TitleShape = styled(Box)`
position: absolute;
left: 0;
top: 0;
z-index: 0;
width: 18.5%;

@media (min-width: 768px){
    left: 5%;
    top: -5%;
}

@media (min-width: 1024px){
    left: 6%;
    top: -22%;
}
`

Hero.Text = styled(Paragraph)`
color: #262729;
font-size: 18px;
font-weight: 400;
letter-spacing: normal;
line-height: 34px;
margin-bottom:0px;

top: 30px;
position: relative;

@media (max-width: 767px){
    height: 110px;
}

@media (min-width: 768px){
    font-size: 21px;
    top: 0;
    line-height: 40px;
}
@media (min-width: 1800px){
    padding-bottom:50px;
}


`

Hero.ContentBlock = styled(Box)`
    text-align:center;
`
Hero.InputBox = styled(Box)`
position:relative;
.form-control{
    width:100%;
    border-radius:500px;
    min-height:50px;
    padding-left:30px;
    @media (min-width:480px){
        min-height:72px;
    }
}
`
Hero.Button = styled(Button)`
    position: relative;
    text-align: center;
    right: auto;
    border-radius: 50px !important;
    top: 0px;
    padding: 16px 20px !important;
    margin-top: 10px;
    width: 165px;
    font-size: 14px;
    box-shadow: -8px 8px 50px rgba(255, 87, 34, 0.5);

    &:hover {
        color: #fff;
        background: #ff7043;
    }

    @media(min-width:992px){
        width: 280px;
        font-size: 20px;
        height:74px;
        margin-top: -25px;
    }
    @media(min-width:1400px){
        width: 280px;
        font-size: 21px;
        height:74px;
    }
`
Hero.Image = styled(Box)`
    position: relative;
    right: 0;
    left: 167px;
    bottom: 9px;
    width: 60%;
    margin-left: 30px;
}
    @media (min-width: 480px) {
        
    }
    @media (min-width: 768px) {
        left:280px;
    }
    @media (min-width: 992px) {
        margin-top: 30px;
        left: 295px;
        bottom: 58px;
        width: 90%;
    }
    @media (min-width: 1170px) {
        left:320px;
        margin-top: 10px;
        bottom: 110px;
    }
    @media (min-width: 1270px) {
        left:340px;
    }
    @media (min-width: 1400px) {
        left:373px;
        bottom: 120px;
    }
    @media (min-width: 1600px) {
        left:373px;
        bottom: 30px;
    }
    @media (min-width: 1800px) {
        left:373px;
        bottom: 30px;
    }
    @media (min-width: 1900px) {
        bottom: 30px;
    }
`
Hero.ImageShape01 = styled(Box)`
    position: absolute;
    left: -2.5%;
    bottom: 35%;
    z-index: 0;
    width: 9.7%;
    top: 200px;
`
Hero.ImageShape02 = styled(Box)`
    position: absolute;
    left: 0%;
    bottom: 0%;
    z-index: 0;
    width: 20%;

    @media(min-width:992px){
        left: -4%;
        bottom: 0%;
        z-index: 0;
        width: auto;
    }

    @media(min-width:1170px){
        left: -4%;
        bottom: 0%;
        z-index: 0;
        width: auto;
    }

    @media(min-width:1400px){
        left: -4%;
        bottom: 0%;
        z-index: 0;
        width: auto;
    }
`

Hero.ImageShape03 = styled(Box)`
    position: absolute;
    right: -2.5%;
    bottom: 46%;
    z-index: 0;
    width: 9.7%;
    @media (min-width: 480px){
        bottom: 30%;
    }
    @media (min-width: 768px){
        bottom: 36%;
    }
    @media (min-width: 992px){
        bottom: 40%;
    }
    @media (min-width: 1170px){
        bottom: 44%;
    }
    @media (min-width: 1270px){
        bottom: 44%;
    }
    @media (min-width: 1400px){
        bottom: 46%;
    }
`

Hero.NewsletterBox =styled(Box)`
    border-radius: 75px;
    max-width: 516px;
    margin:auto;

    @media (min-width:480px) {
        background-color: #f2f5fb;
        border: 2px solid #f8f9fc;
    }

`
Hero.Newsletter =styled(Box)`

`
Hero.Box = styled(Box)`

`

export default Hero;