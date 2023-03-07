import styled from 'styled-components'
import { Heading, Box, Paragraph } from '~styled'

const SectionTitle = styled(Box)`
.blue-txt{
    color:#1A75FF;
    margin-left: 5px;
}
.blue-txt1{
    color:#1A75FF;
}
`
SectionTitle.Text = styled(Paragraph)`
font-size: 14px;
font-weight: 400;
letter-spacing: normal;
line-height:24px;
color:inherit;
padding-left: 6px;



@media(min-width:992px){
    font-size:14px;
}

@media(min-width:1120px){
    font-size: 16px;
    line-height: 30px;

}

@media(min-width:1400px){
    line-height: 32px;
    font-size: 18px;
    font-weight: 400;
}

`
SectionTitle.Subtitle = styled(Heading)`
    color: #ff5722;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 28px;
    position: relative;
    display: inline-block;

`
SectionTitle.Main = styled(Heading)`
font-size: 32px;
font-weight: 500;
letter-spacing: normal;
line-height: 1.38095;

@media (min-width:768px) {
    font-size: 33px;
}

@media(min-width:992px){
    font-size:32px;
    font-weight:700;
}


@media (min-width:1170px){
    font-weight:700;
    margin-bottom: 24px;
}

@media (min-width:1270px){
    font-weight:700;
    margin-bottom: 24px;
}

@media (min-width:1400px) {
    font-weight: 500;
    font-size: 45px;
    line-height: 54px;
    font-size: 45px;
    margin-bottom:30px;
}

`
export default SectionTitle;