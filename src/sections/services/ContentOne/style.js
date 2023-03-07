import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Content = styled(Box)`

   .business-btn{
       border-radius:50px !important;

       @media(min-width:992px){
        width: 143px;
        height: 46px !important;
        font-size: 13px;
       }

       @media(min-width:1400px){
        width: 184px;
        height: 50px !important;
        font-size: 20px;
        box-shadow: -8px 8px 50px rgb(26 117 255 / 50%);
       }
   }

    
   .vpc-image{
    @media(min-width:1400px){       
        width: calc(100% + 80px);
    }
}

    .top-head {
        font-size: 30px;
        line-height: 42px;
        font-weight: 700;
        margin-bottom: 40px;
        position: relative;
        top: 52px;
        padding-top:20px;
        @media (min-width:768px) {
            font-size: 42px;
            line-height: 48px;
        }
        @media (min-width:992px) {
            font-size: 36px;
            line-height: 48px;
            font-weight: 700;
            margin-bottom: 60px;
        }
        @media (min-width:1170px) {
            font-size:70px;
            line-height: 70px;
            margin-bottom: 100px;
        }
        @media (min-width:1270px){
            font-size:70px;
            line-height: 70px;
        }
        @media (min-width:1400px){
            font-weight: 700;
            font-size: 72px;
            line-height:80px;
        }
    }

    .main-bg-color .flex-row-reverse.row {
        padding: 26px 0;
        margin-bottom: 20px;
    }

    .blue-background{
        background: #F6FBFF;
        padding-bottom:26px;
    }

    .flex-row-reverse.row .business-altcard {
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

    .resp-imagegroup1{
        padding-left: 10px;
        padding-right: 10px;
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

    .cc-video{
        width: 100%;
        border-radius: 10px;
        position: relative;
        top: 0px;
    }

    .business-video{
        padding-top:120px;
        padding-bottom: 100px;
    }

    .video-card-text b{
        color: #1A75FF;
        font-weight: 700;
    }
    .business-text-sec b {
        color: #1A75FF;
        font-weight: 700;

    }

    .business-text-sec {
        position: relative;
        top: -8px;
    }

    @media (min-width: 1400px) {
    .business-text-sec {
        // top: -68px;
    }
}

    .first-business-sec {
        padding-bottom:60px;
        padding-top:60px;
    }
    .first-business-sec img {
        margin-bottom:40px !important; 
    }

    .blue-close {
        border: 2px solid #1A75FF;
        outline: none;
        font-size: 20px;
        font-weight: 700;
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
        text-align:center;
        @media (max-width:768px){
            margin-top:00px;
            padding: 10px 0;
            font-size: 15px;
        }
    }
    .blue-close:hover {
        background: #4e92f9;
        border: 2px solid #4e92f9;
    }
`
Content.Title = styled(Heading)`
    font-weight: 500;
    font-size: 28px;
    line-height: 42px;
    letter-spacing: -1px;
    color: #262729;
    @media (min-width:768px) {
      font-size: 38px;
    }
    @media (min-width:992px) {
        font-size: 36px;
        line-height: 50px;
        font-weight: 700;
        margin-bottom: 30px;
    }
    @media (min-width:1170px) {
        font-size:45px;
        margin-bottom:44px;
        line-height: 62px;
        font-weight: 500;
    }
    @media (min-width:1270px){
        font-size:45px;
        margin-bottom:44px;
        line-height: 62px;
        font-weight: 500;

    }
    @media (min-width:1400px){
        font-weight: 500;
        font-size: 45px;
        line-height: 62px;
        color: #262729;
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
    letter-spacing: normal;
    line-height: 32px;
    margin-bottom:54px;
    color: #262729;

    @media (min-width:992px){
        font-size: 16px;
        line-height:30px;
    }
    @media (min-width:1170px){
        font-size: 18px;
        line-height:36px;
        margin-bottom: 0;
    }

    @media(min-width:1400px){
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 40px;
        opacity: 0.7;
    }

`

Content.Image = styled(Box)`

`

Content.Widget = styled(Box)``
Content.Box = styled(Box)``


export default Content;