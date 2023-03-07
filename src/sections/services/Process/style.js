import styled from 'styled-components';
import {
    Box,
    Heading,
    Button,
    Paragraph
} from '~styled';
const propToColor = (arg = "#1787FC" ) => transparentize(0.70, arg);
const Process = styled(Box)
`
    padding-top: 30px;
    padding-bottom: 0px;
    @media (min-width:768px) {
        padding-top: 70px;
        padding-bottom: 55px;
    }
    @media (min-width:992px) {
        padding-top: 110px;
        padding-bottom: 60px;
    }
    @media(min-width:1170px){
        padding-top:68px;
    }
    @media(min-width:1270px){
        padding-top:68px;
    }
    .ai-logo-sections img {
        margin-bottom:40px;
    }

`
Process.Subtitle = styled(Heading)
`
    color:${props => props.iconDark? "#000" : "#fff" };
    font-size: 15px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 0.1155555;
    margin-bottom: 20px;
     
`
Process.Title = styled(Heading)
`
    font-size: 24px;
    line-height: 36px;
    font-weight: 500;
    letter-spacing: normal;
    margin-bottom:40px;
    color:#1A75FF;
    @media (min-width:768px) {
        font-size: 36px;
        line-height: 42px;
    }
    @media (min-width:992px) {
        font-size: 70px;
        line-height:70px;
        font-weight: 700;
    }


`
Process.Button = styled(Button)
`
    min-width: 180px;
    height: 56px;
    border-radius: 55px!important;
    color: #fff!important;
    margin-bottom: 40px;
    box-shadow:0 20px 20px rgb(255 75 96 / 10%);
    @media (min-width: 992px){
        margin-bottom: 50;
    }
    @media (min-width: 1200px){
        margin-bottom: 0;
    }
    &:hover{
        box-shadow:0 20px 20px rgb(255 75 96 / 0%);
        color:#fff;

    }
`
Process.Text = styled(Paragraph)
`
    opacity: 0.7;
    color:${props => props.iconDark? "#000" : "#fff" };
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.875;
    margin-bottom: 33px;
`
Process.Box = styled(Box)
``

export default Process;