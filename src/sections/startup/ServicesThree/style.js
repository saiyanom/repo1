import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Service = styled(Box)`
    padding-top: 100px;
    padding-bottom: 50px;
    @media (min-width: 768px){
        padding-top: 100px;
        padding-bottom: 60px;
    }
    @media (min-width: 992px){
        padding-top: 120px;
        padding-bottom: 80px;
    }
`

Service.Image = styled(Box)`

`
Service.List = styled(Box)`
li {
    padding-left: 30px;
    margin-bottom: 25px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 28px;
    position: relative;
    color:#262729;
    list-style: none;
    &::before{
        content: "\f00c";
        font-family: 'Font Awesome 5 Free';
        font-weight: 700;
        color:#5034fc;
    }
}
`;

Service.Box = styled(Box)`
`


export default Service;