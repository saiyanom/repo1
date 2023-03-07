import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Service = styled(Box)`
    padding-top: 60px;
    padding-bottom: 60px;
    @media (min-width:768px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }
    @media (min-width:1024px) {
        padding-top: 125px;
        padding-bottom: 130px;
    }
    background:#f4f9fc;
    .brief-requirement-section h4 {
        padding-top:30px;
        font-weight:700;
        width:100%;
        @media (min-width: 992px) {
            width:100%;
        }
        @media (min-width: 1170px) {
            width:85%;
        }
    }
    .healthy-requirements-text h2 {
        font-size:21px;
        font-weight:700;
        line-height:1;
        margin-bottom:20px;
        @media (min-width: 576px) {
            font-size:24px;
        }
        @media (min-width: 768x) {
            font-size:36px;
        }
        @media (min-width: 992px) {
            font-size:42px;
        }
        @media (min-width: 1170px) {
            font-size:50px;
        }
        @media (min-width: 1270px) {
            font-size:54px;
        }
        @media (min-width: 1400px) {
            font-size:60px;
        }
    }
`;

Service.Box = styled(Box)`
`;



export default Service;