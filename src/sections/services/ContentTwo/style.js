import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Content = styled(Box)`
padding-bottom: 50px;
margin-top: -116px;
   

    .top-head{
    font-weight: 700;
    line-height: 26px;
    font-size: 60px;
    margin-bottom: 117px;
    position: relative;
    top: 52px;
    }

    .resp-img-sec{
        position: relative;
        top: -22px;
        @media(min-width:768px){
            display:none;
        }
    }
    .image-group{
        display:none;

        @media(min-width:768px){
            display:block;
        }
    }
    .flex-row-reverse.row{
       
        margin-bottom: 20px;
        @media(min-width:1400px){
            margin-bottom:116px;
        }
    }

    .flex-row-reverse.row .business-altcard{
        margin-left: 0px;

        @media(min-width:992px){
            padding-right: 253px !important;
            left: -10px;
            padding-left: 40px !important;
            padding: 110px;
            top: 1px;
        }

        @media(min-width:1170px){
            position:relative;
            right:100px;
        }

        @media(min-width:1400px){
            position:relative;
            right:225px;
        }
    }
    .white-image{
        margin-bottom:26px;
        flex-direction: column;
        padding-top: 130px;

        @media(min-width:768px){
        flex-direction: row;
        }

        @media(min-width:1400px){
            margin-bottom:116px;
        }
    }

    .hire-intern-card{
        background: #F6FBFF;
        border-radius: 15px;
        padding:20px;
        margin-top: 30px;
        margin-bottom: -50px;



   
        @media(min-width:992px){
            width: calc(100% + 164px);
            padding: 86px;
            padding-left: 228px;
            position: relative;
            left: -199px;
            top: -9px;
            margin-top: 0;
            margin-bottom: 0;
        }
        
        @media(min-width:1170px){
            width: calc(100% + 164px);
            padding: 128px;
            padding-left: 247px;
            position: relative;
            left: -199px;
            top: -9px;
        }
        
        @media(min-width:1270px){
            width: calc(100% + 164px);
            padding: 128px;
            padding-left: 247px;
            position: relative;
            left: -199px;
            top:-9px;
        }
        
        @media(min-width:1400px){
            background: #F6FBFF;
            border-radius: 15px;
            width: calc(100% + 164px);
            padding: 155px;
            padding-left: 294px;
            position: relative;
            left: -199px;
            top: -4px;
        }
    }

    .flex-row-reverse .business-altcard.hire-intern-card{
        @media(min-width:992px){
            padding-right: 294px;
            left: -10px;
            padding-left: 70px !important;
            padding:180px;
        }
        
        @media(min-width:1170px){
            padding-right: 294px;
            left: -10px;
            padding-left: 70px !important;
            padding:160px;

        }
        
        @media(min-width:1270px){
            padding-right: 294px;
            left: -10px;
            padding-left: 70px !important;
            padding:160px;

        }
        
        @media(min-width:1400px){
            padding-right: 294px;
            left: -10px;
            padding-left: 70px !important;
            padding:195px;

        }
    }
`
Content.Title = styled(Heading)`
font-weight: 600;
font-size: 28px;
line-height: 42px;
letter-spacing: -1px;
width: 570px;
padding-bottom: 28px;

    @media (min-width:480px) {
      font-size: 32px;
    }


    @media (min-width:768px) {
      padding-bottom: 28px;
      font-size: 38px;
    }

    @media (min-width:992px) {
        font-size: 42px;
      }

    @media (min-width:1024px) {
      font-size: 42px;
    }

    @media(min-width:1170px){
        font-size:44px;
        font-weight:500px;
    }

    @media(min-width:1400px){
        font-size:48px;
        font-weight:500px;
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
    color: #262729;

    @media(min-width:992px){
        font-weight: 400;
        font-size: 21px;
        line-height: 40px;
    
    }

    @media(min-width:1400px){
 
    }
`

Content.Image = styled(Box)`

`

Content.Widget = styled(Box)``
Content.Box = styled(Box)``


export default Content;