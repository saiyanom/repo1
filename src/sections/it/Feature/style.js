import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';
const Feature = styled(Box)`
padding-top: 55px;
@media (min-width:768px) {
  padding-top: 61px;
  padding-bottom: 60px;
}

@media (min-width:992px) {
  padding-top: 61px;
  width:100%;
}

@media (min-width:1170px) {
  padding-top: 51px;
  padding-bottom: 0px;
}

@media (min-width:1270px) {
  padding-top: 61px;
  padding-bottom: 0px;
}
@media (min-width:1400px) {
  padding-top: 61px;
  padding-bottom: 0px;
}

`


Feature.Text = styled(Paragraph)`
@media(min-width:1170px){
  font-size: 16px;
}
@media(min-width:1270px){
  font-size: 16px;
}
`

Feature.Image = styled(Box)`
@media (min-width: 992px) {
    margin-right: 30px;
    width:100%;
}

`
Feature.Contentlist = styled(Box)``

Feature.List = styled(Box)`
        position: relative;
        z-index: 1;
        padding-left: 30px;
        margin-bottom: 20px;
        color: var(--color-headings-2);
        font-size: 16px;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 1.75;

&:before {
    content: "";
    position: absolute;
    width: 10px;
    height: 18px;
    background-color: #ff5722;
    left: 10px;
    top: 4px;
}
`
Feature.Box = styled(Box)`
@media(min-width:992px){
  padding-top: 35px;
  padding-bottom: 0px;
  bottom: 35px;
}
`


export default Feature;