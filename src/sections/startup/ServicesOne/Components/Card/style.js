import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

import {transparentize,rgba} from "polished"
const propToColor = (arg = "#1787FC" ) => transparentize(0.70, arg);
const Card = styled(Box).attrs({className:"service-card"})`
    background-color: transparent;
    border: none;
    padding-top: 40px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 33px;
    border-radius: 15px;
    transition: 0.4s;
    color:#25373f;
    display:flex;
    align-items:center;
    flex-direction:column;
    text-align:center;
    @media (min-width:575px) {
        padding-left: 5px;
        padding-right: 5px;
    }
    @media (min-width:768px)  {
        padding-left: 30px;
        padding-right: 30px;
    }
    @media (min-width:1240px) {
        padding-left: 10px;
        padding-right: 10px;
    }
    @media (min-width:1200px) {
        padding-left: 5px;
        padding-right: 5px;
    }
    @media (min-width:1600px) {
        padding-left: 20px;
        padding-right: 20px;
    }

    .homepage-provide-feature .service-card p{
        color:#000;
        padding-top:0px;
        margin-top:0px;
        font-size:14px;
        line-height:1.5;
        font-weight:500;
        @media (min-width:768px) {
            font-size:14px;
        }
        @media (min-width:992px) {
            font-size:14px;
        }
        @media (min-width:1170px) {
            font-size:16px;
        }
        @media (min-width:1270px) {
            font-size:16px;
        }
        @media (min-width:1400px) {
            font-size:16px;
        }
    }
   
`

Card.Icon = styled(Box).attrs({className:"card-icon"})`
        min-width: 65px;
        max-width: 65px;
        min-height: 65px;
        max-height: 65px;
        border-radius: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 400;
        color: #fff;
        margin-bottom: 40px;
        position:relative;
        z-index:1;
        
`
Card.Title = styled(Heading)`
    font-size: 24px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 30px;
    color:inherit;
    margin-bottom: 15px;
    padding-top: 40px;


`
Card.Text = styled(Paragraph)`
        font-size: 16px;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 1.86666;
        margin-bottom: 0px;
        opacity:.7;
        color:inherit;
`

export default Card;