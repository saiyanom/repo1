import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

import {transparentize,rgba} from "polished"
const propToColor = (arg = "#1787FC" ) => transparentize(0.70, arg);
const Card = styled(Box).attrs({className:"service-card"})`
border: none;
padding: 35px 30px 0px;
margin-bottom: 25px;
border-radius: 15px;
transition: all 0.4s ease 0s;
display: flex;
flex-direction: column;
-webkit-box-align: center;
align-items: center;
text-align: center;
color: rgb(37, 55, 63);
min-height: 220px;
box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
margin-bottom: 100px;

    @media (min-width:575px) {
        padding-left: 60px;
        padding-right: 60px;
        margin-bottom: 100px;
    }
    @media (min-width:768px) {
        padding-left: 30px;
        padding-right: 30px;
        margin-bottom: 100px;
    }
    @media (min-width:992px) {
        padding-left: 60px;
        padding-right: 60px;
        margin-bottom: 100px;
    }

    &:hover{
       box-shadow:  0 10px 30px rgba(0, 0, 0, 0.08);
       margin-top: 100px;
       transition: ease-in-out 0.5s;

    }
    
`
Card.Icon = styled(Box)`
        min-width: 60px;
        max-width: 60px;
        min-height: 60px;
        max-height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 400;
        color: #fff;
        margin-bottom: 30px;
        background:${props => props.background};
        box-shadow:  ${props => props.background ? "-12px 12px 50px " + rgba(props.background,.3): "none"};
        
`
Card.Title = styled(Heading)`
        font-size: 21px;
        font-weight: 700;
        letter-spacing: normal;
        line-height: 30px;
        color:inherit;

        @media (min-width:992px){
        font-size: 16px;

        }

        @media (min-width: 1170px) {
           font-size:16px;
           line-height:24px;
        }

        @media (min-width: 1270px) {
            font-size:16px;
            line-height:24px;
         }

`
Card.Text = styled(Paragraph)`
        font-size: 15px;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 1.86666;
        margin-bottom: 26px;
        opacity:.7;
        color:inherit;
`
Card.Button = styled(Box)`
        font-size: 15px;
        font-weight: 500;
        font-style: normal;
        letter-spacing: normal;
        line-height: 26px;
        display: flex;
        align-items: center;
        color: inherit;
        transition: 0.4s;

        i {
            margin-left: 10px;
        }
`

export default Card;