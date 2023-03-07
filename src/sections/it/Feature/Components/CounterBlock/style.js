import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Counter = styled(Box)`
margin-top:0; 

@media (min-width: 992px){
    left: -25%;
    min-width: 120%;
    padding-top:35px;
    padding-bottom:0;
    bottom: 37px;
    top: -12px;
}

`
Counter.Wrapper = styled(Box)`
box-shadow: 0 24px 50px rgba(96, 1, 211, 0.2);
border-radius: 15px;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
padding-top: 50px;
padding-bottom: 20px;
padding-left: 0px;
padding-right: 0px;

@media (min-width: 768px) {
    padding-top: 20px;
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
    left: -143px;
    top: -54px;
    padding-bottom:0;
    top: -41px;
}

@media (min-width: 992px) {
    
    width: 100%;
    left: -2px;
    top: 1px;

}


@media (min-width: 1170px) {
    width: 758px;
    padding-top: 50px;
    padding-bottom: 20px;
    padding-left: 0px;
    padding-right: 0px;
    left:15px;
    top: 20px;

}


@media (min-width: 1400px) {
    width: 803px;
}

`

Counter.Single=styled(Box).attrs({className:"counter-single"})`

border: none !important;
        position: relative;
        text-align: center;
        margin: 0 auto;
        margin-bottom: 30px;
        text-align: center;
        width: 100%;
        flex: 0 0 100%;

        @media (min-width: 480px) {
            width: 50%;
            flex: 0 0 50%;
        }

        @media (min-width: 768px){
            padding: 0 10px;
            width: calc(33.3333% - 10px);
            flex: 0 0 calc(33.3333% - 10px);
        }

        @media (min-width: 992px){
            padding-left: 0px;
            padding-right: 0px;
        }

        @media (min-width: 1400px) {
            padding-left: 10px;
            padding-right: 10px;
        }
        @media (min-width: 320px) {
            &::before {
                content: "";
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 2px;
                height: 90px;
                background-color: #fff;
                opacity:0.1;
                display:none;
            }
        }

        &:nth-child(2) {
            &::before {
                content: "";
                background-color: transparent;
            }
            @media (min-width: 768px)            {
                &::before {
                    content: "";
                    background-color: #fff;
                    opacity:0.1;
                }
            }
        }
        &:last-child {
            &::before {
                content: "";
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 2px;
                height: 68px;
                background-color: transparent;
                display:none;
            }
        }
`
Counter.Title = styled(Heading)`
font-size: 28px;
font-weight: 500;
letter-spacing: normal;
line-height: 1.4761;
@media (min-width: 768px) {
    font-size: 15px;
}
@media (min-width: 992px) {
    font-size: 24px;
}

@media (min-width: 1200px) {
    font-size: 42px;
}
`
Counter.Text = styled(Paragraph)`
font-size: 13px;
font-weight: 400;
letter-spacing: normal;
line-height: 30px;
margin-bottom: 0;
@media (min-width: 768px){
    font-size: 14px;
    line-height: 20px;
}
@media (min-width: 992px) {
    font-size: 12px;
    line-height: 22px;
}
@media(min-width:1170px){
    font-size: 18px;
    line-height: 32px;
  }
  @media(min-width:1270px){
    font-size: 18px;
    line-height: 32px;
  }
`
Counter.Box = styled(Box)`

`


export default Counter;