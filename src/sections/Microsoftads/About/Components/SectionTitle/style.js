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
width: 414px;

`
SectionTitle.Subtitle = styled(Heading)`
color: #ff5722;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 28px;
    position: relative;
    padding-left: 60px;
    display: inline-block;
   

`
SectionTitle.Main = styled(Heading)`
font-weight: 700;
font-size: 45px;
line-height: 54px;

@media (min-width:768px) {
    font-weight: 700;
font-size: 45px;
line-height: 54px;
}

@media (min-width:1400px) {
    font-weight: 700;
font-size: 45px;
line-height: 54px;
}

`
export default SectionTitle;