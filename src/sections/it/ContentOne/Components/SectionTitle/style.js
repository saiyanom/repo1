import styled from 'styled-components'
import { Heading, Box, Paragraph } from '~styled'

const SectionTitle = styled(Box)`
.blue-txt{
    color:#1A75FF;
    margin-left: 8px;
}
.blue-txt1{
    color:#1A75FF;
}

.resp-image{
    @media(min-width:768px){
        display:none;
    }
}
`
SectionTitle.Text = styled(Paragraph)`
font-size: 16px;
font-weight: 400;
letter-spacing: normal;
line-height:32px;
color:#262729;
padding-left: 6px;



@media(min-width:992px){
    font-size:16px;
}

@media(min-width:1120px){
    line-height: 40px;
    font-size: 21px;

}

@media(min-width:1400px){
    line-height: 40px;
    font-size: 21px;
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
font-size: 28px;
font-weight: 500;
letter-spacing: normal;
line-height: 1.38095;

@media (min-width:768px) {
    font-size: 33px;
}

@media(min-width:992px){
    font-size:45px;
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
    font-size: 44px;
    margin-bottom:30px;
}

`
export default SectionTitle;