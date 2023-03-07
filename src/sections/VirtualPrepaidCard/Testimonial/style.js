import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Testimonial = styled(Box)`
    padding-top: 60px;
    padding-bottom: 60px;
    @media (min-width:768px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }
    @media (min-width:992px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }
    .affiliate-para {
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        text-align: left;
        color: #262729;
        @media (min-width:768px) {
            font-size: 18px;
        }
        @media (min-width:992px) {
            font-size:20px;
            line-height:36px;
        }
        @media (min-width:1170px) {
            font-size:18px;
            line-height: 38px;
        }
        @media (min-width:1270px) {
            font-size:18px;
            line-height: 38px;
        }
        @media (min-width:1400px) {
            font-size:21px;
            line-height: 42px;
        }
    }
`
Testimonial.Title = styled(Heading)`
    font-size: 30px;
    font-weight: 700;
    letter-spacing: normal;
    line-height: 40px;
    position:relative;
    padding-bottom: 0px;
    margin-bottom:30px;
    @media (min-width:768px) {
        font-size: 34px;
    }
    @media (min-width:992px) {
        font-size:42px;
        margin-bottom:44px;
    }
    @media (min-width:1170px) {
        font-size:52px;
        line-height:54px;
        margin-bottom:40px;
    }
    @media (min-width:1270px) {
        font-size:52px;
        line-height:54px;
        margin-bottom:42px;
    }
    @media (min-width:1400px) {
        font-size:56px;
        margin-bottom:50px;
    }

    b{
        font-size:32px;
        font-weight:700;
        color:#1A75FF;
        @media (min-width:992px) {
            font-size:42px;
            line-height:44px;
        }
        @media (min-width:1170px) {
            font-size:52px;
            line-height:54px;
        }
        @media (min-width:1270px) {
            font-size:52px;
            line-height:54px;
        }
        @media (min-width:1400px) {
            font-size:56px;
            margin-bottom:50px;
        }
    }
`
Testimonial.Subtitle = styled(Heading)`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.75;
     
`
Testimonial.SliderWrapper = styled(Box)`
    .slick-list{
        margin-left:-15px;
        margin-right:-15px;
    }
    .slick-track{
        display:flex;
    }
    .slick-slide{
        margin-top:50px;
        margin-bottom:30px;
        margin-left:15px;
        margin-right:15px;
    }
`
Testimonial.Box = styled(Box)`

`
Testimonial.Content = styled(Box)`

`


export default Testimonial;