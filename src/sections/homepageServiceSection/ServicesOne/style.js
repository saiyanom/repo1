import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Service = styled(Box)`
    padding-top: 60px;
    padding-bottom: 60px;
    background:#fff !important;
    @media (min-width:768px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }
    @media (min-width:992px) {
        padding-top: 100px;
        padding-bottom: 100px;
    }
    @media (min-width:1170px) {
        padding-top: 120px;
        padding-bottom: 120px;
    }
    @media (min-width:1270px) {
        padding-top: 140px;
        padding-bottom: 140px;
    }
    background:#f4f9fc;
    .how-to-get-started-section h4 {
        color:#000;
        padding-top:0px;
        margin-top:0px;
        margin-bottom:30px;
        font-size:21px;
        line-height:30px;
        font-weight:700;
    }
    .homepage-provide-feature .service-card p{
        color:#000;
        padding-top:0px;
        margin-top:0px;
        font-size:14px;
        line-height:1.5;
        font-weight:500;
        @media (min-width:768px) {
            font-size:12px;
        }
        @media (min-width:992px) {
            font-size:9px;
        }
        @media (min-width:1170px) {
            font-size:14px;
        }
        @media (min-width:1270px) {
            font-size:14px;
        }
        @media (min-width:1400px) {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
        }
    }
    .recruitment-agency-section h2 {
        font-size:24px;
        line-height:1;
        margin-bottom:40px;
        @media (min-width:992px) {
            font-size:36px;
            margin-bottom:36px;
        }
        @media (min-width:1170px) {
            font-size:40px;
            margin-bottom:40px;
        }
        @media (min-width:1270px) {
            font-size:42px;
            margin-bottom:42px;
        }
        @media (min-width:1400px) {
            font-size:54px;
            margin-bottom:60px;
        }
    }
`


Service.Box = styled(Box)`
    
`


export default Service;