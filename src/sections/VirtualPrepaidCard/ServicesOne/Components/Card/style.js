import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

import {transparentize,rgba} from "polished"
const propToColor = (arg = "#1787FC" ) => transparentize(0.70, arg);
const Card = styled(Box).attrs({className:"link-page"})`
    background-color: transparent;
    border: none;
    padding-top: 40px;
    padding-left: 45px;
    padding-right: 45px;
    padding-bottom: 33px;
    border-radius: 15px;
    transition: 0.4s;
    color:#25373f;
    display:flex;
    align-items:center;
    flex-direction:column;
    text-align:center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    min-height:426px;
    position:relative;
    overflow:hidden;


    margin-bottom:50px;

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
        padding-left: 45px;
        padding-right: 45px;
    }
    @media (min-width:1600px) {
        padding-left: 45px;
        padding-right: 45px;
    }


   
    &::before{
        content: '';
        width: 191px;
        height: 191px;
        border-radius: 50%;
        background-color: #fff;
        opacity: .1;
        position: absolute;
        -webkit-transition: all .4s ease .2s;
        transition: all 1.4s ease .2s;
        bottom: -120px;
        left: -140px;
    }
    &::after{
        content: '';
        width: 191px;
        height: 191px;
        border-radius: 50%;
        background-color: #fff;
        opacity: .1;
        position: absolute;
        -webkit-transition: all .4s ease .2s;
        transition: all 1.4s ease .2s;
        top: -130px;
        right: -103px;
       
    }

    &:hover::after{
        top: -54px;
        right: -101px;
        overflow: hidden;

    }

    &:hover::before{
        bottom: -54px;
        left: -38px;
        overflow: hidden;
    }

  
    .nonid-icon-left-arrow:before{
        content: "\e903";
    }

    
    .icon-group{
        text-align:left;
        min-height: 113px;
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
    font-size: 26px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 39px;
    color:inherit;
    margin-bottom: 10px;
    padding-top: 20px;
    text-align:left;

    @media (min-width:768px) {
        font-size:12px;
    }
    @media (min-width:992px) {
        line-height: 27px;
        font-size:18px;
        margin-bottom:0px;
        min-height: 90px;
    }
    @media (min-width:1170px) {
        font-size:18px;
        margin-bottom: 10px;
    }
    @media (min-width:1270px) {
        font-size:21px;
    }
    @media (min-width:1400px) {
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 23px;
        min-height: 100px;
        margin-top: 24px;
    }
    
    &:hover{
        background: transparent;
    }



`
Card.Text = styled(Paragraph)`
        font-size: 16px;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 1.86666;
        margin-bottom: 0px;
        opacity:.7;
        color:inherit;
        background: transparent;
        &:hover{
            background: transparent;
        }

        @media(min-width:992px){
            font-size:12px;
        }
        @media(min-width:1170px){
            font-size:14px;
        }
        @media(min-width:1400px){
            font-size:16px;
        }
`

export default Card;