import styled from 'styled-components'
import { Heading, Box, Paragraph } from '~styled'

const SectionTitle = styled(Box)`
.affiliate-button{
    color: #fff;
    width: auto;
    background: #1A75FF;
    border-radius: 10px;
    padding: 15px 30px;
    border-color: #1A75FF;
    margin-top:30px;
}
`
SectionTitle.Text = styled(Paragraph)`
font-size: 18px;
font-weight: 400;
letter-spacing: normal;
line-height: 1.77777;
color:inherit;



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
font-size: 60px;
font-weight: 700;
letter-spacing: normal;
line-height: 54px;
@media (min-width:768px) {
    font-size: 33px;
}

@media (min-width:1200px) {
    font-size: 45px;
}

`
export default SectionTitle;