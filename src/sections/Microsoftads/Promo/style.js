import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Promo = styled(Box)`
    padding-top: 0;
    padding-bottom: 20px;

    @media (min-width:768px) {
        padding-top: 80px;
        padding-bottom: 40px;
    }

    @media (min-width:992px) {
        padding-top:0;
        padding-bottom:0;
    }

    @media(min-width:1170px){
        padding-top:100px;
    }
    .main-promo-sec{
        text-align: left;
    }
    .promo-sec2{
        @media(min-width:992px){
            margin-top: 150px;
        }
    }
    .main-promo-sec h2{
        font-weight: 700;
        font-size: 45px;
        line-height: 54px;
        letter-spacing: -1px;
        margin-bottom:80px;
    }
    .main-promo-sec p{
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        color: #FFFFFF;
        opacity: 0.7;
    }
    .main-box-counter{
        padding:100px 156px;
    }
    .pink-text-box{
    width:100%;
    background: #1A75FF;
    box-shadow: 0px 24px 50px rgb(96 1 211 / 20%);
    backdrop-filter: blur(34px);
    border-radius: 15px;
    height: 198px;
    justify-content:center;
    margin-bottom: 31px;
    flex-direction: column;
    height: 90%;
    padding: 0 80px;

    @media(min-width:992px){
        flex-direction:row;
        height: 63%;
        padding: 31px 83px;

    }
    
    @media(min-width:1170px){
        width: 1106px;
    
    }
    
    @media(min-width:1270px){
        width: 1106px;
    
    }
    
    @media(min-width:1400px){
        width: 1106px;
    
    }
    
    }
    .main-pink-box{
        @media(min-width:992px){
            padding-left: 17px;
        }
        
        @media(min-width:1400px){
            padding: 50px 134px;
        
        }
    }
    .inner-box{
        width: 187px;
        text-align:center;

        padding-top:0;
        padding-bottom: 15px;


        @media(min-width:992px){
            padding-bottom:0;
        }
    }
    .inner-numb-box{
        padding-top:0;
        padding-bottom:15px;
        font-weight: 500;
        font-size: 42px;
        line-height: 58px;
        color: #FFFFFF;
    }
    .inner-text{
        font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    color: #FFFFFF;
    opacity: 0.7;
    }
    .vertical-line{
        opacity: 0.5;
        width: 1px;
        background: #fff;
        top: 7px;
        right: 0;
        height: 88px;
        position: absolute;

        @media(min-width:992px){
            // position: relative;
            // -webkit-transform: rotate(90deg);
            // -ms-transform: rotate(90deg);
            // transform: rotate(90deg);
        }
    }
    .pink-main-heading{
        font-weight: 700;
        font-size: 32px;
        line-height: 42px;
        padding:0;

        @media(min-width:992px){
            font-size: 52px;
            line-height: 60px;
        }

        @media(min-width:1170px){
            font-size: 56px;
            line-height: 72px;
        }

        b{
            font-weight:700;
            color:#1A75FF;
        }
    }
    .main-box-counter3{
        margin-top: -250px;
        padding-bottom:20px;
    }
    @media(min-width: 992px){
        margin-top:0;
        .pink-main-heading{
         padding-bottom:0px !important;
     }
   }

   .main-pink-box {
    margin-top: -50px;
    @media(min-width: 992px){
        margin-top: 0px;
    }
   }

   .map-box-counter{
    width:100%;
    height: 800.61px;
    position:relative;

    background-size:contain;
    background-repeat:no-repeat;

    @media(min-width:992px){
       width:100%;
    }

   }
   .map-location{
    background: #1A75FF;
    border-radius: 15px;
    width: 140.76px;
    @media(min-width:992px){
        width: 200.76px;
    }
    
    @media(min-width:1170px){
        width: 210.76px;
    }
    
    @media(min-width:1270px){
        width: 210.76px;
    }
    
    @media(min-width:1400px){
        width: 250.76px;
    
    }
   }

   .location1{
    position: absolute;
    left: 10px;
    top: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    @media(min-width:992px){
        top: 135px;
        left: 118px;


    }
    
    @media(min-width:1170px){
        top: 215px;
    
    }
    
    @media(min-width:1270px){
        top: 215px;
    
    }
    
    @media(min-width:1400px){
        top: 215px;
    
    }
   }
   .location2{
    position: absolute;
    left: 108px;
    top: 140px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @media(min-width:992px){
        left: 389px;
        top:135px;
    }
    
    @media(min-width:1170px){
        left: 458px;
        top: 215px;
        
    }
    
    @media(min-width:1270px){
        left: 458px;
        top: 215px;

    }
    
    @media(min-width:1400px){
        left: 574px;
        top: 215px;

    }
   }

   .location3{
    position: absolute;
    right: 10px;
    top: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @media(min-width:992px){
        top:135px;
        right: 120px;


    }
    
    @media(min-width:1170px){
        top: 215px;
    
    }
    
    @media(min-width:1270px){
        top: 215px;
    
    }
    
    @media(min-width:1400px){
        top: 215px;
    
    }
   }
   .location4{
    position: absolute;
    bottom: 430px;
    left: 200px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @media(min-width:992px){
        left: 257px;
        bottom: 325px;
    }
    
    @media(min-width:1170px){
        left:291px;
        bottom: 260px;
    }
    
    @media(min-width:1270px){
        left:291px;
        bottom: 260px;

    }
    
    @media(min-width:1400px){
        left: 327px;
        bottom: 146px;

    }
   }
   .location5{
    position: absolute;
    bottom: 430px;
    right: 200px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @media(min-width:992px){
        right: 248px;
        bottom: 325px;
    }
    
    @media(min-width:1170px){
        right: 270px;
        bottom: 260px;
    }
    
    @media(min-width:1270px){
        right: 270px;
        bottom: 260px;
    }
    
    @media(min-width:1400px){
        right: 327px;
        bottom: 146px;
    
    }
   }
   .map-icon{
    position: relative;
    top: -32px;
    @media(min-width:992px){
        top: -50px;
    }
    @media(min-width:1170px){
        top:-54px;
    }
    @media(min-width:1270px){
        top:-54px;
    }
    @media(min-width:1400px){
        top: -60px;
    }


   }

   .icon{
    width:35%;

    @media(min-width:992px){
        width:35%;
    }
   }

   .map-location span{
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #fff;

    @media(min-width:992px){
        font-size: 20px;
        line-height: 20px;
    }
   }

   .map-location p{
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #FFFFFF;

    @media(min-width:992px){
        font-size: 15px;
        line-height: 20px;
    }
   }

   .map-details{
    position: relative;
    bottom: 4px;

    @media(min-width:992px){
        bottom: 10px;

    }
   }

   .bottom-text p{
    position: absolute;
    bottom: 307px;

    @media(min-width:992px){
        bottom: 55px;
        left: 126px;
    }

   }
`
Promo.Title = styled(Heading)`
    font-size: 32px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.3;
    margin-top: 15px;
    padding-bottom:20px;

    b{
        color:#1A75FF;  
        font-weight:700;        
    }
    @media (min-width:768px) {
      font-size: 38px;
    }

    @media (min-width:992px) {
      font-size: 48px;
    }

    @media(min-width:1170px){
        font-size: 70px;
        font-weight: 700;
        line-height: 72px;
    }

    @media(min-width:1400px){
        font-size: 70px;
        font-weight: 700;
        line-height: 72px;
    }

`
Promo.Subtitle = styled(Heading)`
    font-size: 15px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 26px;
     
`
Promo.Text = styled(Paragraph)`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.875;
`

Promo.InnerWrapper = styled(Box)`
 position: relative;
    z-index: 1;
    padding-top: 50px;
    padding-bottom: 60px;
    padding-left: 30px;
    padding-right: 30px;
    background-position: center;
    background-size: cover;
    
    

    @media (min-width:768px) {
        padding-top: 70px;
        padding-bottom: 80px;
        padding-left: 110px;
        padding-right: 100px;
    }

    @media (min-width:992px) {
        padding-top: 80px;
        padding-bottom: 60px;
    }

    &::before {
        content: "";
        background: rgba(36, 46, 111, 0.79);
    mix-blend-mode: multiply;
    opacity: 0.9;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        
        z-index: -1;
    }
`

Promo.Button = styled(Button)`
    color:#fff!important;
    border-color: #ff4b60;
    background-color: #ff4b60;
    box-shadow:0 20px 20px rgb(255 75 96 / 30%);
    border-radius:500px;
   
    &:hover{
        box-shadow:0 20px 20px rgb(255 75 96 / 0%);
        color:#fff!important;

    }
`
Promo.Box = styled(Box)``


export default Promo;