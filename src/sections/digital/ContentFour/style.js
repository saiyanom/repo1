import styled from 'styled-components';
import { Box, Heading,Button,Paragraph,List,ListItems } from '~styled';

const Content = styled(Box)`
`
Content.InnerBlock = styled(Box)`
    padding-top: 00px;
    padding-bottom: 0px;

    .blue-line{
        width: 30%;
        color: #1A75FF;
    }

    .top-head{
        margin-bottom:136px;


        h1{
            text-align: center;
            color: #000000;
            @media(min-width:1170px){
                font-weight: 500;
                font-size: 60px;
                line-height: 62px;
            }
            @media(min-width:1400px){
                font-weight: 500;
                font-size: 70px;
                line-height: 72px;
              
            }
         
        }


        b{
            color: #1A75FF;
            font-weight: 700;
        }
    }

    .list {
        justify-content: space-between;
    }
    .listitem1, .listitem2, .listitem3 {
        float:left;
        width:28%;
        @media (max-width:1024px) {
            width:27%;
        }
        @media (max-width:991px) {
            width:50%;
        }
    }
    .listitem4 {
        float:left;
        width:16%;
        @media (max-width:991px) {
            width:50%;
        }
    }
    .listitem1 p,
    .listitem2 p,
    .listitem3 p,
    .listitem4 p {
        font-weight: 400;
        font-size: 15px;
        line-height: 1.5;
        color: #1A75FF;
        opacity: 0.7;
        margin-top:19px;

        @media (max-width:1024px) {
            font-size: 12px;
            line-height:18px;
        }
    }
    .listitem1 p {margin-right:30px;}
    .listitem2 p {margin-right:30px;}
    .listitem3 p {margin-right:30px;}
    .listitem4 p {
        margin-right:0px;
    }
    .main-box {
        background:#F6FBFF;
    }
    .tracker-sec {
        background:#F6FBFF;
        padding: 30px 0px 30px 0px;
        @media (min-width: 768x) {
            padding: 40px 0px 0px 0px;
        }
        @media (min-width: 992px) {
            padding: 60px 0px 20px 0px;
        }
        @media (min-width: 1170px) {
            padding: 80px 0px 40px 0px;
        }
        @media (min-width: 1270px) {
            padding: 100px 0px 60px 0px;
        }
        @media (min-width: 1400px) {
            padding: 120px 0px 80px 0px;
        }
    }
    .background-sec {
        padding:70px 0px 0;
    }
    .image2{
        border-radius: 15px;
    }
    .img-sec{
        left: -12px;

        @media(min-width:768px){
        left: 15px;
        }
    }
    .pink-line{
        width: 210px;
        height: 1px;
        position: absolute;
        left: 0px;
        background: #1A75FF;
    }
    .subtitle-sec{
        padding-top: 30px;
    }
    .background-title{
        position: relative;
        left: 0px;
        text-align: left;
    }
    .background-right-sub-sec{

        @media(min-width:992px){
            margin-top: 130px;
        }
        @media(min-width:1170px){
            margin-top: 150px;
        }
    }
    .background-right-sub-sec p {
        font-size:16px;
        line-height: 32px;
        color: #262729;
        margin-bottom:30px;
        
        @media (min-width: 768x) {
            font-size:14px;
            line-height:1.5;
            margin-bottom:80px;
        }
        @media (min-width: 992px) {
            font-weight: 400;
            font-size: 16px;
            line-height: 30px;
            color: #262729;

        }
        @media (min-width: 1170px) {
            font-weight: 400;
            font-size: 21px;
            line-height: 40px; 
            color: #262729;    

        }
        @media (min-width: 1270px) {
            font-weight: 400;
            font-size: 16px;
            line-height: 30px;
            color: #262729;

        }
        @media (min-width: 1400px) {
            font-weight: 400;
            font-size: 21px;
            line-height: 40px;
            color: #262729;

        }
    }

    .img-sec {
padding: 0 10px;
    }
    .background-sec h2.background-title {
        margin-top:0px !important;
    }
    
`
Content.Title = styled(Heading)`
font-weight: 600;
font-size: 28px;
line-height: 30px;
text-align: left;
margin-top: 20px;

@media (min-width:768px) {
  }

b{
    color:#1A75FF;
    font-weight:700;
}

@media (min-width:480px) {
    font-size: 26px;
  }

    @media (min-width:768px) {
      font-size: 22px;
    }
    @media (min-width:992px) {
      font-size: 24px;
      line-height:30px;
    }
    @media (min-width:1170px) {
    font-size: 30px;
    line-height: 40px;
    }
    @media (min-width:1270px) {
    font-size: 36px;
    line-height: 40px;
    }
    @media (min-width:1400px) {
    font-size: 42px;
    line-height:50px;
    }
`;
Content.Subtitle = styled(Heading)`
    position: relative;
    text-align: left;
    font-weight: 500;
    font-size: 45px;
    line-height: 62px;
    letter-spacing: -1px;
    color: #262729;
`;
Content.Text = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    color: #262729;
    line-height: 32px;
    @media (min-width:768px) {
        font-size: 18px;
    }
    @media(min-width:1400px){
        font-weight: 400;
        font-size: 21px;
        line-height: 40px;
    }
`;

Content.Button = styled(Button)`
    color:#fff;
    border-color: #fd346e;
    background-color: #fd346e;
    box-shadow:0 20px 20px rgb(253 52 110 / 30%);
    border-radius:500px;
    &:hover{
        box-shadow:0 20px 20px rgb(253 52 110 / 0%);
        color:#fff;
    }
`;



Content.ContentTextBlock = styled(Box)`
    position:relative;
`
Content.ImageOne= styled(Box)`
    position:relative;
    margin-top: 85px;
`
Content.ImageTwo = styled(Box)`
    position:relative;
`

Content.Box = styled(Box)``


export default Content;