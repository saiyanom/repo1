import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const ErrorPage = styled(Box)`
    padding-top: 60px;
    padding-bottom: 50px;
    text-align: center;
    @media (min-width:768px){
        padding-top: 80px;
        padding-bottom: 70px;
    }
    @media (min-width:992px){
        padding-top: 100px;
        padding-bottom: 110px;
    }

    .btn-readical-red{
        padding: 15px;
        margin: 0 10px;
        text-align: center;
        min-width: 142px !important;
        height: 56px;
        color: #fff;
        border-radius: 500px !important;
        box-shadow: -12px 12px 50px rgba(255, 30, 56, 0.3);
        &:hover{
            color: #fff;
        }
    }
`
ErrorPage.BigTitle = styled(Heading)`
    font-size: 50px;
    font-weight: 500;
    font-style: normal;
    letter-spacing: -2px;
    line-height: 1.27272;
    color: #fd346e;
    margin-bottom: 0;
    @media (min-width:575px){
        font-size: 60px;
    }
    @media (min-width:768px){
        font-size: 80px;
    }
    @media (min-width:992px){
        font-size: 110px;
    }
`
ErrorPage.Title = styled(Heading)`
    font-size: 32px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.3;
    margin-bottom: 15px;
    color: #25373f;
    position:relative;

    @media (min-width:768px) {
      font-size: 35px;
    }

    @media (min-width:992px) {
      font-size: 45px;
    }
`
ErrorPage.Text = styled(Paragraph)`
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 1.777777;
    margin-bottom: 33px;
    color: rgba(37, 55, 63, 0.7);
`

ErrorPage.Image = styled(Paragraph)`
    width: 70%;
    margin: 0 125px;
`
ErrorPage.ButtonGroup = styled(Box)`
`
ErrorPage.Button = styled(Button)`



    &.btn-1{
       
    }
    &.btn-2{
        min-width: 164px;
        height: 56px;
        border-radius: 500px;
        &:hover{
            color: #fff;
            background-color: #fd346e;
            box-shadow: -12px 12px 50px rgba(255, 30, 56, 0.3);
        }
    }
`
ErrorPage.Box = styled(Box)`

`


export default ErrorPage;