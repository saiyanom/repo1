import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

import {transparentize,rgba} from "polished"
const propToColor = (arg = "#1787FC" ) => transparentize(0.70, arg);
const Card = styled(Box).attrs({className:"service-card"})`
    background-color: transparent;
    border: none;
    padding-top: ${props => props.title == "Creative designers" ? "20px" : props.title == "Marketing & sales" ? "50px" : props.title == "Writing & translation" ? "25px" : "40px"};
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
    @media (min-width:576px) {
        padding-top: 40px;
        padding-left: 5px;
        padding-right: 5px;
    }
    @media (min-width:768px)  {
        padding-left: 30px;
        padding-right: 30px;
    }
    @media (min-width:992px) {
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
    // .card-icon{
    //     box-shadow:  ${props => props.iconBackground ? "-12px 12px 50px " + rgba(props.iconBackground,0): "none"};
    //     // background:${props => rgba(props.iconBackground,.1)};
    //     // color:${props => props.iconBackground };
    //     transition:.4s;
    // }
    // &:hover{
    //     .card-icon{
    //             box-shadow:  ${props => props.iconBackground ? "-12px 12px 50px " + rgba(props.iconBackground,.3): "none"};
    //             // background:${props => rgba(props.iconBackground,1)};
    //             // color:#fff;
    //     }
    // }

    .image-card-hire{
        height: 258px;
        margin-bottom:${props => props.title == "Development & IT" ? "5px": props.title == "Marketing & sales" ? "55px" : props.title == "Creative designers" ? "6px" : props.title == "Accounting & finance" ? "35px" : "19px"};

        @media(min-width:576px){
            margin-bottom:19px;   
        }

        @media(min-width:1400px){
            height: 258px;
            margin-bottom:19px;   
        }

        @media(min-width:1170px){
            height: 258px;
            margin-bottom:19px;   
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
    font-size: 21px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 30px;
    color:inherit;
    margin-bottom: 15px;

    @media(min-width:1400px){
        font-weight: 600;
        font-size: 32px;
        line-height: 70px;
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

export default Card;