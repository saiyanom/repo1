import styled from 'styled-components'
import { Heading, Box, Paragraph } from '~styled'

const SectionTitle = styled(Box)`
.main-head{
    font-weight: 700;
    font-size: 32px;
    line-height: 50px;
    margin-bottom: 13px;

    @meda(min-width:992px){
        margin-bottom:36px;
    }

    @media(min-width:1170px){
        font-size:50px;
    }

    @media(min-width:1400px){
        font-weight: 700;
        font-size: 60px;
        line-height: 58px;
        margin-bottom:36px;
    }
}

h2{
    b{
        color:#1A75FF;
        font-weight:700;
    }
}
`
SectionTitle.Text = styled(Paragraph)`
font-weight: 400;
font-size: 18px;
line-height: 32px;
color: #262729;

@media(min-width:1170px){
    font-size:16px;
}

@media(min-width:1400px){
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    
}


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
    &:before{
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        bottom: 9px;
        width: 41px;
        height: 1px;
        background-color: #ff5722;
    }

`
SectionTitle.Main = styled(Heading)`


font-size: 32px;
font-weight: 500;
letter-spacing: normal;
line-height: 1.38095;

@media (min-width:768px) {
    font-size: 33px;
}

@media (min-width:1400px) {
    font-size: 42px;
}

`
export default SectionTitle;