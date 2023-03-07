import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

import {transparentize,rgba} from "polished"
const propToColor = (arg = "#1787FC" ) => transparentize(0.70, arg);
const Card = styled(Box).attrs({className:"service-card"})`
    background-color: #fff;
    border: none;
    padding:20px 20px 20px 20px;
    border-radius: 15px;
    transition: 0.4s;
    color:#25373f;
    display:flex;
    align-items:center;
    flex-direction:column;
    text-align:center;
    margin-bottom: 75px;
    @media (min-width:575px) {
        padding:20px 20px 20px 20px;
    }
    @media (min-width:768px)  {
        padding:25px 25px 25px 28px;
    }
    @media (min-width:992px) {
        padding:25px 25px 25px 28px;
    }
    @media (min-width:1170px) {
        padding:30px 30px 30px 30px;
    }
    @media (min-width:1270px) {
        padding:30px 30px 30px 30px;
    }
    @media (min-width:1400px) {
        padding:40px 40px 40px 40px;
    }
    &:hover{
        filter: drop-shadow(-3px 25px 50px rgba(23, 3, 48, 0.12)) !important;
    }

    
`
// .card-icon{
//     box-shadow:  ${props => props.iconBackground ? "-12px 12px 50px " + rgba(props.iconBackground,0): "none"};
//     background:${props => rgba(props.iconBackground,.1)};
//     color:${props => props.iconBackground };
//     transition:.4s;
// }
// &:hover{
//     .card-icon{
//             box-shadow:  ${props => props.iconBackground ? "-12px 12px 50px " + rgba(props.iconBackground,.3): "none"};
//             background:${props => rgba(props.iconBackground,1)};
//             color:#fff;
//     }
// }

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
    font-size: 15px;
    font-weight: 700;
    letter-spacing: normal;
    line-height: 30px;
    color:inherit;
    margin-bottom: 15px;
    margin-top: 20px;
    text-align:left;
    @media (min-width: 576px) {
        font-size: 16px;
    }
    @media (min-width: 768x) {
        font-size: 16px;
    }
    @media (min-width: 992px) {
        font-size: 18px;
    }
    @media (min-width: 1170px) {
        font-size: 21px;
    }
    @media (min-width: 1270px) {
        font-size: 21px;
    }
    @media (min-width: 1400px) {
        font-size: 21px;
    }
`
Card.Text = styled(Paragraph)`
    font-size: 14px;
    line-height: 1.5;
    font-weight: 500;
    letter-spacing: normal;
    margin-bottom: 20px;
    opacity:1;
    color:inherit;
    text-align:left;
    @media (min-width: 576px) {
        font-size: 14px;
    }
    @media (min-width: 768x) {
        font-size: 14px;
    }
    @media (min-width: 992px) {
        font-size: 14px;
    }
    @media (min-width: 1170px) {
        font-size: 15px;
    }
    @media (min-width: 1270px) {
        font-size: 16px;
    }
    @media (min-width: 1400px) {
        font-size: 16px;
    }
`

export default Card;