import styled from 'styled-components'
import { Heading, Box, Paragraph } from '~styled'

const SectionTitle = styled(Box)`

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
line-height: 1.38095;
@media (min-width:768px) {
    font-size: 33px;
}
@media (min-width:992px) {
    font-size: 50px;
    line-height: 50px;
}

@media (min-width:1200px) {
    font-size: 60px;
    line-height: 60px;
}
@media (min-width:1170px) {
    font-size: 60px;
    line-height: 60px;
}
@media (min-width:1400px) {
    font-size: 70px;
    line-height:70px;
}

`
export default SectionTitle;