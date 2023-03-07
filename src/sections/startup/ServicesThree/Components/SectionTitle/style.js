import styled from 'styled-components'
import { Heading, Box, Paragraph } from '~styled'

const SectionTitle = styled(Box)`
`
SectionTitle.Subtitle = styled(Heading)`
color: ${props=>props.fontColor ? props.fontColor : "#ff5722"};
font-size: 18px;
font-weight: 500;
letter-spacing: normal;
line-height: 28px;
position: relative;
display: inline-block;
&.subline{
    padding-left:61px;
    &:before{
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        bottom: 9px;
        width: 41px;
        height: 1px;
        background-color: ${props=>props.fontColor ? props.fontColor : "#ff5722"}; 
    }
}
`
SectionTitle.Main = styled(Heading)`
    font-size: 21px;
    font-weight: 700;
    letter-spacing: normal;
    line-height: 1.1;
    margin-bottom:20px;
    margin-top:0px;
    @media (min-width: 576px) {
        font-size: 21px;
    }
    @media (min-width: 768x) {
        font-size: 24px;
    }
    @media (min-width: 992px) {
        font-size: 30px;
        margin-bottom:20px;
        margin-top:0px;
    }
    @media (min-width: 1170px) {
        font-size: 34px;
        margin-bottom:40px;
    }
    @media (min-width: 1270px) {
        font-size: 38px;
    }
    @media (min-width: 1400px) {
        font-size: 42px;
        margin-top:20px;
    }
`

SectionTitle.Text = styled(Paragraph)`
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: normal;
    color:#67686a;
    @media (min-width: 576px) {
        font-size: 14px;
    }
    @media (min-width: 768x) {
        font-size: 15px;
    }
    @media (min-width: 992px) {
        font-size: 15px;
    }
    @media (min-width: 1170px) {
        font-size: 18px;
    }
    @media (min-width: 1270px) {
        font-size: 18px;
    }
    @media (min-width: 1400px) {
        font-size: 20px;
    }
`

export default SectionTitle;