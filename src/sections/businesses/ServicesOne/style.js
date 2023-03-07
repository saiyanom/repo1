import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Service = styled(Box)`
    padding-top: 60px;
    @media (min-width:768px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }
    @media (min-width:992px) {
        padding-top: 80px;
        padding-bottom:80px;
    }
    @media (min-width:1170px) {
        padding-top: 100px;
        padding-bottom: 10px;
    }
    @media (min-width:1270px) {
        padding-top: 100px;
     
    }
    .how-to-get-started-section h4 {
        color:#000;
        padding-top:0px;
        margin-top:0px;
        margin-bottom:30px;
        font-size:21px;
        line-height:30px;
        font-weight:700;
    }
    .homepage-provide-feature .service-card p {
        color:#000;
        padding-top:0px;
        margin-top:0px;
        font-size:14px;
        line-height:1.5;
        font-weight:500;
        @media (min-width:768px) {
            font-size:12px;
        }
        @media (min-width:992px) {
            font-size:9px;
        }
        @media (min-width:1170px) {
            font-size:14px;
        }
        @media (min-width:1270px) {
            font-size:14px;
        }
        @media (min-width:1400px) {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
        }
    }
    .recruitment-agency-section h2 {
        font-size: 28px;
        line-height: 40px;
        margin-bottom:40px;
        @media (min-width:992px) {
            font-size:36px;
            margin-bottom:36px;
        }
        @media (min-width:1170px) {
            font-size:40px;
            margin-bottom:40px;
        }
        @media (min-width:1270px) {
            font-size:42px;
            margin-bottom:42px;
        }
        @media (min-width:1400px) {
            font-size:54px;
            margin-bottom:60px;
        }
    }

    .blue:hover{
        background-color:#1a75fef7;
    }

    .red:hover{
        background: #ff0000d9;
    }

    .orange:hover{
        background:#ff5200;
    }

    .link-page:hover {
        icon-group{
            margin-top:50px;
        }
    }

    .link-page:hover {
        .card-img.business-card-img{
            display:none;
        }
        .business-white-card{
            display:block;
            left: 145px;
            position: relative;
        }
    }
    .business-white-card {
        display:none;
    }

    .link-page .business-white-card,
    .link-page .business-card-img {
        width:50px;
        @media (min-width:768px) {
            width:60px;
        }
    }
    .link-page:hover .business-white-card {
        left: 88px;
        width:60px;
        top:25px;
        @media (min-width:360px) {
            left: 106px;
        }
        @media (min-width:375px) {
            left: 115px;
        }
        @media (min-width:390px) {
            left: 124px;
        }
        @media (min-width:410px) {
            left: 136px;
        }
        @media (min-width:480px) {
            left: 88px;
        }
        @media (min-width:520px) {
            left: 105px;
        }
        @media (min-width:568px) {
            left: 120px;
        }
        @media (min-width:576px) {
            left: 90px;
        }
        @media (min-width:768px) {
            left: 110px;
        }
        @media (min-width:992px) {
            left: 88px;
        }
        @media (min-width:1170px) {
            left: 143px;
        }
        @media (min-width:1270px) {
            left: 145px;
        }
        @media (min-width:1400px) {
            left: 175px;
            top:25px;
        }
        @media (min-width:1600px) {
            left: 158px;
        }
        @media (min-width:1820px) {
            left: 158px;
        }
    }

    .icon-group {
        margin-top:50px;
        position: relative;
        display: flex;
        justify-content: center;
        min-height: 150px;
    }
    .icon-group > div:nth-child(1) {
        border-radius: 100%;
        display: inline-block;
        width: 120px;
        height: 120px;
        position:absolute;
        left:58px;
        @media (min-width:360px) {
            left: 76px;
        }
        @media (min-width:375px) {
            left: 84px;
        }
        @media (min-width:390px) {
            left: 60px;
        }
        @media (min-width:410px) {
            left: 106px;
        }
        @media (min-width:480px) {
            left: 58px;
        }
        @media (min-width:520px) {
            left: 75px;
        }
        @media (min-width:568px) {
            left: 90px;
        }
        @media (min-width:576px) {
            left: 60px;
        }
        @media (min-width:768px) {
            left: 80px;
        }
        @media (min-width:992px) {
            left: 58px;
        }
        @media (min-width:1170px) {
            left: 113px;
        }
        @media (min-width:1270px) {
            left: 115px;
        }
        @media (min-width:1400px) {
            left: 145px;
        }
        @media (min-width:1600px) {
            left: 128px;
        }
        @media (min-width:1820px) {
            left: 128px;
        }
    }
    .link-page:hover .icon-group > div:nth-child(1) {
        box-shadow:none;
    }

    


    .icon-group > .blueBg {
        background: #1b75fe;
        box-shadow: 0 8px 16px 0 rgb(190 214 249), 0 6px 20px 0 rgb(190 214 249);
    }
    .icon-group > .blueBg .business-card-img {
        width:60px;
        padding-top:25px;
    }


    .icon-group > .pinkBg {
        background: #FD346E;
        box-shadow: 0 8px 16px 0 #fed1df, 0 6px 20px 0 #fed1df;
    }
    .icon-group > .pinkBg .business-card-img {
        width:50px;
        padding-top:32px;
    }
    .pink.link-page:hover .icon-group .business-white-card {}


    .icon-group > .mustardBg {
        background: #fcdc00;
        box-shadow: 0 8px 16px 0 #f7ea8e, 0 6px 20px 0 #f7ea8e;
    }
    .icon-group > .mustardBg .business-card-img {
        width:50px;
        padding-top:32px;
    }
    


    .icon-group > .orangeBg {
        background: #ff5200;
        box-shadow: 0 8px 16px 0 #feccb4, 0 6px 20px 0 #feccb4;
    }
    .icon-group > .orangeBg .business-card-img {
        width:50px;
        padding-top:32px;
    }
    .pink.link-page:hover .icon-group .business-white-card,
    .mustard.link-page:hover .icon-group .business-white-card,
    .orange.link-page:hover .icon-group .business-white-card {
        width:50px;
        left: 93px;
        top:32px;
        @media (min-width:360px) {
            left: 111px;
        }
        @media (min-width:375px) {
            left: 119px;
        }
        @media (min-width:390px) {
            left: 129px;
        }
        @media (min-width:410px) {
            left: 141px;
        }
        @media (min-width:480px) {
            left: 93px;
        }
        @media (min-width:520px) {
            left: 110px;
        }
        @media (min-width:568px) {
            left: 125px;
        }
        @media (min-width:576px) {
            left: 95px;
        }
        @media (min-width:768px) {
            left: 115px;
        }
        @media (min-width:992px) {
            left: 93px;
        }
        @media (min-width:1170px) {
            left: 148px;
        }
        @media (min-width:1270px) {
            left: 150px;
        }
        @media (min-width:1400px) {
            left: 180px;
        }
        @media (min-width:1600px) {
            left: 163px;
        }
    }

    .icon-group > .cyanBg {
        background: #1de2cf;
        box-shadow: 0 8px 16px 0 #aff9f2, 0 6px 20px 0 #aff9f2;
    }
    .icon-group > .cyanBg .business-card-img {
        width:60px;
        padding-top:25px;
    }


    .icon-group > .purpleBg {
        background: #7b2edb;
        box-shadow: 0 8px 16px 0 #d5b5fb, 0 6px 20px 0 #d5b5fb;
    }
    .icon-group > .purpleBg .business-card-img {
        width:60px;
        padding-top:25px;
    }
    .icon-group:hover {
        margin-top:50px;
    }
`


Service.Box = styled(Box)`
    
`


export default Service;