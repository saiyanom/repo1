import styled from 'styled-components';
import {
    Box,
    Heading,
    Button,
    Paragraph
} from '~styled';

const Services = styled(Box)
`
    padding-top: 50px;
    padding-bottom: 36px;

    @media (min-width:768px) {
        padding-top: 70px;
        padding-bottom: 55px;
    }

    @media (min-width:992px) {
        padding-top: 110px;
    }

    @media(min-width:1170px){
        padding-top:94px;
    }
    @media(min-width:1270px){
        padding-top:94px;
    }
    @media(min-width:1400px){
        padding-top:94px;
    }

`
Services.Box = styled(Box)`
`

Services.Title = styled(Heading)`
    color: #262729;
    font-size: 21px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 30px;
    margin-bottom: 5px;
    transition: 0.4s;

`
Services.Text = styled(Paragraph)`
    opacity: 0.7;
    color: #262729;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 28px;
    align-self: self-end;
    margin-top: auto;
    margin-bottom: 0;
`

export default Services;