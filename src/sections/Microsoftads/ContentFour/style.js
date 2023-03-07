import styled from 'styled-components';
import { Box, Heading,Button,Paragraph,List,ListItems } from '~styled';

const Content = styled(Box)`
`
Content.InnerBlock = styled(Box)`
    padding-top: 60px;
    padding-bottom: 55px;

    @media (min-width:768px) {
        padding-top: 80px;
        padding-bottom: 75px;
    }

    @media (min-width:992px) {
        padding-top: 130px;
        padding-bottom: 130px;
    }
    @media (min-width:1200px) {
        padding-top: 130px;
        padding-bottom: 135px;
    }

    
    .main-box{
        padding-top: 32px;
    }
    .tracker-sec{
        padding: 0px 122px 0px 109px;
    }
    .background-sec{
        padding:64px 120px;
    }
    .image2{
        border-radius: 15px;
    }
    .img-sec{
        left: -49px;
        height: 560px;
    }
    .pink-line{
        width: 209.47px;
        border: 1px solid #FD346E;
        position: absolute;
        right: 75px;
    }
    .subtitle-sec{
        padding-top: 40px;
        text-align:left;
    }
    .background-title{
        position: relative;
        left: 0px;
        text-align: left;
    }
    .image-left{
       
    }
    .image-right{
        width:416px !important;
    }

    .background-right-sub-sec{
        margin-left:3% !important;
    }
    
`
Content.Title = styled(Heading)`
font-weight: 700;
font-size: 41px;
line-height: 62px;
text-align: right;
letter-spacing: -1px;
color: #262729;
width: 591px;
position: relative;
left: -115px;
    @media (min-width:768px) {
      font-size: 38px;
    }

    @media (min-width:992px) {
      font-size: 41px;
    }
`
Content.Subtitle = styled(Heading)`
position: relative;
text-align: right;
right: 5px;
opacity: 0.7;
font-weight: 400;
font-size: 18px;
line-height: 32px;
padding-right: 58px;
     
`
Content.Text = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 32px;
    opacity: 0.7;
    width: 416px;
    
    @media (min-width:768px) {
        font-size: 16px;
    }
`
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
`



Content.ContentTextBlock = styled(Box)`
    position:relative;
`
Content.ImageOne= styled(Box)`
    position:relative;
   
`
Content.ImageTwo = styled(Box)`
    position:relative;
`

Content.Box = styled(Box)``


export default Content;