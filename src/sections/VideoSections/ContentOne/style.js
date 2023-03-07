import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Content = styled(Box)`
    margin-top: 0px;
   .business-btn {
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

    .top-head {
        font-weight: 700;
        line-height: 60px;
        font-size: 60px;
        margin-bottom: 117px;
        position: relative;
        top: 52px;
        padding-top:20px;
        @media (min-width:1270px){
            font-size:50px;
        }

        @media (min-width:1400px){
            font-weight:700;
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

    .cc-video{
        width: 100%;
        border-radius: 10px;
        position: relative;
        top: -39px;
    }

    .business-video{
        padding-top:108px;
        padding-bottom: 133px;
    }

    .video-sec{
       background-color:#F6FBFF; 
    }

    .video-card-text b{
        color: #1A75FF;
    }

    .business-text-sec b{
        color: #1A75FF;
    }

    .business-text-sec {
        position: relative;
        top: 0px;
        padding-top:25px;

    }

    .resp-imagegroup1 {
        padding-left:10px;
        padding-right:10px;
    }
    
    .hire-virtual{
        padding:82px 0;
        margin-bottom: 90px;

        @media(min-width:1170px){
            padding:82px 0;
            margin-bottom: 90px;
        }

        @media(min-width:1400px){
            padding:82px 0;
            margin-bottom: 90px;
        }
    }
    .manage{
        padding:82px 0;
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
            margin-top:20px;
            padding: 10px;
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
    line-height: 36px;
    letter-spacing: -1px;
    @media (min-width:768px) {
      font-size: 30px;
      line-height: 42px;
    }
    @media (min-width:992px){
        font-size: 30px;
        line-height: 42px;
        font-weight: 500;
        margin-bottom: 30px;
    }
    @media (min-width:1170px){
        font-size:45px;
        margin-bottom:40px;
        line-height: 62px;
    }
    @media (min-width:1270px){
        font-size:45px;
        line-height: 62px;
        margin-bottom:44px;
    }
    @media (min-width:1400px){
        font-weight: 500;
        font-size: 45px;
        line-height: 62px;
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
    line-height: 33px;
    margin-bottom:54px;
    color: #262729;

    @media (min-width:992px){
        font-size: 16px;
        line-height:24px;
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