import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Content = styled(Box)`
    padding-bottom:80px;
    margin-top: 0px;
        @media (min-width:768px) {
        }
        @media (min-width:992px) {
        }
        @media (min-width:1170px) {
            margin-top: 120px;
        }
    .business-btn{
       border-radius:10px !important;
       @media(min-width:992px){
        width: 143px;
        height: 46px !important;
        font-size: 13px;
       }
    }
    .resp-imagegroup{
     

        
    }
    .home-section-1 {
        padding-top:0px;
        padding-bottom:100px;
    }
   .home-section-2 {
        padding-top:100px;
        padding-bottom:100px;
    }
    .home-section-3 {
        padding-top:100px;
        padding-bottom:100px;
    }
    .home-section-4 {
        padding-top:100px;
        padding-bottom:100px;
    }
    .home-section-5 {
        padding-top:100px;
        padding-bottom:100px;
    }
    .home-section-6 {
        padding-top:100px;
        padding-bottom:100px;
    }
    @media (min-width:320px){
        .home-section-1 {
          
        }
        .home-section-2,.home-section-3,.home-section-4,.home-section-5,.home-section-6 {
          
        }
    }
    @media(max-width:767px) {
        .home-section-1 {
            padding-top:0px;
            padding-bottom:0px;
        }
        .home-section-2,.home-section-3,.home-section-4,.home-section-5,.home-section-6 {
            padding-top:100px;
            padding-bottom:0px;
        }
    }
    @media (min-width:768px) and (max-width:1024px) {
        .home-section-1 {
            padding-top:0px;
            padding-bottom:0px;
        }
        .home-section-2,.home-section-3,.home-section-4,.home-section-5,.home-section-6 {
            padding-top:50px;
            padding-bottom:50px;
        }
    }
    .gif-ImageGroup {
        display:none;
        position:relative;
        width: 100%;
        top: 0px;
        @media (min-width:768px) {
            display:block;
            width: 85%;
            top: 55px;
        }
        @media (min-width:992px) {
            width: 85%;
            top: 55px;
        }
        @media (min-width:1170px) {
            width: 100%;
            top: 55px;
        }
        @media (min-width:1270px) {
            width: 100%;
            top: 55px;
        }
        @media (min-width:1400px) {
            width: 100%;
            top: 0px;
        }
    }
    .gif-ImageGroup .bigImage {
        position:relative;
        z-index:99;
        top:0px;
        left:20px;
        @media (min-width:768px) {
            position:absolute;
            left:0px;
        }
    }
    .gif-ImageGroup .dotImage {
        position:absolute;
        z-index:90;
        top:-45px;
        left:0px;
        @media (min-width:768px) {
            position:absolute;
            left:0px;
            top:0px;
        }
    }

    .resp-imagegroup {
        position:relative;
        width: 100%;
        top: 0px;
        display:block;

        margin-bottom:20px;

        img{
            width:82% !important;
        }

        @media(min-width:768px){
            display:none;
        }

        @media (min-width:768px) {
            width: 85%;
            top: 55px;
        }
        @media (min-width:992px) {
            width: 85%;
            top: 55px;
        }
        @media (min-width:1170px) {
            width: 85%;
            top: 55px;
        }
        @media (min-width:1270px) {
            width: 85%;
            top: 55px;
        }
        @media (min-width:1400px) {
            width: 100%;
            top: 0px;
        }
    }
    .resp-imagegroup .bigImage {
        position:relative;
        z-index:99;
        top:0px;
        left:20px;
        @media (min-width:768px) {
            position:absolute;
            left:0px;
        }
    }
    .resp-imagegroup .dotImage {
        position:absolute;
        z-index:90;
        top:-45px;
        left:0px;
        @media (min-width:768px) {
            position:absolute;
            left:0px;
            top:0px;
        }
    }

    .business-altcard {
        align-items: center !important;
    }
    .home-section-1 .business-altcard {
        padding-top:50px;
        @media (min-width:768px) {
            padding-top:60px;
        }
        @media (min-width:992px) {
            padding-top:80px;
        }
        @media (min-width:1170px) {
            padding-top:120px;
        }
        @media (min-width:1270px) {
            padding-top:120px;
        }
        @media (min-width:1400px) {
            padding-top:160px;
        }
        @media (min-width:1600px) {
            padding-top:160px;
        }
        @media (min-width:1820px) {
            padding-top:180px;
        }
    }
    .home-section-2 .business-altcard {
        padding-top:50px;
        @media (min-width:768px) {
            padding-top:60px;
        }
        @media (min-width:992px) {
            padding-top:80px;
        }
        @media (min-width:1170px) {
            padding-top:160px;
        }
        @media (min-width:1270px) {
            padding-top:160px;
        }
        @media (min-width:1400px) {
            padding-top:220px;
        }
        @media (min-width:1600px) {
            padding-top:220px;
        }
        @media (min-width:1820px) {
            padding-top:220px;
        }
    }
    .home-section-3 .business-altcard {
        padding-top:50px;
        @media (min-width:768px) {
            padding-top:60px;
        }
        @media (min-width:992px) {
            padding-top:80px;
        }
        @media (min-width:1170px) {
            padding-top:150px;
        }
        @media (min-width:1270px) {
            padding-top:150px;
        }
        @media (min-width:1400px) {
            padding-top:150px;
        }
        @media (min-width:1600px) {
            padding-top:150px;
        }
        @media (min-width:1820px) {
            padding-top:150px;
        }
    }
    .home-section-4 .business-altcard {
        padding-top:50px;
        @media (min-width:768px) {
            padding-top:60px;
        }
        @media (min-width:992px) {
            padding-top:50px;
        }
        @media (min-width:1170px) {
            padding-top:150px;
        }
        @media (min-width:1270px) {
            padding-top:150px;
        }
        @media (min-width:1400px) {
            padding-top:150px;
        }
        @media (min-width:1600px) {
            padding-top:150px;
        }
        @media (min-width:1820px) {
            padding-top:150px;
        }
    }
    .home-section-5 .business-altcard {
        padding-top:50px;
        @media (min-width:768px) {
            padding-top:60px;
        }
        @media (min-width:992px) {
            padding-top:150px;
        }
        @media (min-width:1170px) {
            padding-top:180px;
        }
        @media (min-width:1270px) {
            padding-top:180px;
        }
        @media (min-width:1400px) {
            padding-top:180px;
        }
        @media (min-width:1600px) {
            padding-top:180px;
        }
        @media (min-width:1820px) {
            padding-top:180px;
        }
    }
    .home-section-6 .business-altcard {
        padding-top:50px;
        @media (min-width:768px) {
            padding-top:60px;
        }
        @media (min-width:992px) {
            padding-top:50px;
        }
        @media (min-width:1170px) {
            padding-top:180px;
        }
        @media (min-width:1270px) {
            padding-top:180px;
        }
        @media (min-width:1400px) {
            padding-top:180px;
        }
        @media (min-width:1600px) {
            padding-top:180px;
        }
        @media (min-width:1820px) {
            padding-top:180px;
        }
    }
    @media (min-width:320px) and (max-width:767px) {
        .home-section-2 .gif-ImageGroup,
        .home-section-4 .gif-ImageGroup,
        .home-section-6 .gif-ImageGroup {
            left:-60px;
        }
    }
    
    .top-head {
        font-weight: 700;
        line-height: 36px;
        font-size: 30px;
        position: relative;
        padding-top:50px;
        text-align:center;
        @media (min-width:992px) {
            font-weight: 700;
            line-height: 60px;
            font-size: 60px;
            margin-bottom: 0px;
            top: 0px;
            padding-top:20px;
        }
        @media (min-width:1170px) {
            margin-bottom: 120px;
            top: 52px;
            font-size:70px;
            line-height: 70px;   
            letter-spacing: -2px;
        }
        @media (min-width:1270px) {
            font-size:70px;
            line-height: 70px;   
            letter-spacing: -2px;
        }
        @media (min-width:1400px) {
            ont-family: 'Rubik';
            font-style: normal;
            font-weight: 700;
            font-size: 70px;
         
        }
    }

    .main-bg-color .flex-row-reverse.row{
        padding: 26px 0;
        margin-bottom: 20px;
    }
    .blue-background{
        background: #F6FBFF;
        padding-bottom:26px;
    }
    .flex-row-reverse.row .business-altcard{
        margin-left: 0px;
    }
    .white-back{
        background:#fff !important;
    }
    .off-blue{
        background: #F6FBFF !important;
        padding: 35px 0px !important;
        margin-bottom: 100px !important;
    }
    .business-last-sec{
        margin-bottom:101px;
    }
    .white-background{
        padding-bottom:45px;
    }
    .main-white-sec{
        margin-top: -120px
        @media (min-width:1170px){
            margin-top: -120px;
            padding-bottom:45px;
        }
    }
    @media (min-width:992px){
        .main-white-sec{
        margin-top: -120px;
        padding-bottom:45px;
        }
    }
    .orange-tick{
        margin-right: 15px;
        @media(min-width:1400px){
            height:35px;
            width:35px;
        }
    }
    .ContentOne-btn{
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        width:auto;
        border-radius:50px !important;
        margin-top:81px;
    }
    .blue-close {
        border: 2px solid #1A75FF;
        outline: none;
        font-size: 20px;
        font-weight: 700 !important;
        color: #fff;
        padding: 14px 0;
        border-radius: 50px ;
        position: relative;
        overflow:hidden;
        transition:1s all ease;
        z-index:1;
        margin-top:50px;
        width:170px;
        box-shadow:0px 0px 30px #96bcf6;
        background:#1A75FF;
        @media (max-width:768px) {
            padding: 10px 0;
            margin-top:15px;
            font-size: 15px;
        }
    }
    .blue-close:hover {
        background: #4e92f9;
        border: 2px solid #4e92f9;
    }
    
    
`
Content.Title = styled(Heading)`
font-weight: 700;
font-size: 28px;
line-height: 42px;
margin-bottom:20px;
letter-spacing: -1px;
    @media (min-width:768px) {
      font-size: 36px;
      line-height: 60px;
      margin-bottom:0px;
    }
    @media (min-width:992px){
        font-size: 36px;
        line-height: 50px;
        font-weight: 700;
        margin-bottom: 30px;
    }
    @media (min-width:1170px){
        font-size:42px;
        margin-bottom:44px;
        line-height: 60px;
    }
    @media (min-width:1270px){
        font-size:42px;
        margin-bottom:44px;
        line-height: 60px;
    }
    @media (min-width:1400px){
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 700;
        font-size: 60px;
        line-height: 66px;
        letter-spacing: -2px;
    }
`
Content.Subtitle = styled(Heading)`
    font-size: 15px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 26px;
`
Content.Text = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    color: #262729;
    letter-spacing: normal;
    line-height: 32px;

    @media (min-width:992px){
        font-size: 16px;
        line-height:24px;
    }

    @media (min-width:1400px){
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 30px;
    }

    

`

Content.Image = styled(Box)`

`

Content.Widget = styled(Box)``
Content.Box = styled(Box)``


export default Content;