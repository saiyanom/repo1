import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Content = styled(Box)`
    padding-top:80px;
    padding-bottom:80px;


    .flex-row-reverse.row {
        padding: 26px 0;
        margin-bottom: 20px;
        text-align:left;
    }

    .blue-line{
        background:#1A75FF !important;
    }
    .flex-row-reverse.row .business-altcard {
        margin-left: 0px;
        position:relative;
        padding:0 0px 0 0;
        @media (min-width: 576px) {
            padding:0 0px 0 0;
        }
        @media (min-width: 768x) {
            padding:0 0px 0 0;
        }
        @media (min-width: 992px) {
            padding:0 10px 0 0;
        }
        @media (min-width: 1170px) {
            padding:0 20px 0 0;
        }
        @media (min-width: 1270px) {
            padding:0 30px 0 0;
        }
        @media (min-width: 1400px) {
            padding:0 40px 0 0;
        }
    }
    .flex-row-reverse.row .business-altcard .pink-line2 {
        width: 210px;
        height: 1px;
        background:#FF1A43;
        position: absolute;
        right: 40px;
        left:0;
        @media (min-width: 576px) {
            left: 0px;
        }
        @media (min-width: 768x) {
            left: 0px;
        }
        @media (min-width: 992px) {
            left: 0px;
        }
        @media (min-width: 1170px) {
            left: 1px;
        }
        @media (min-width: 1270px) {
            left: 1px;
        }
        @media (min-width: 1400px) {
            left: 1px;
        }
    }
    .row .business-altcard .pink-line2 {
        width: 210px;
        height: 1px;
        background:#FF1A43;
        position: absolute;
        left:0;
        @media (min-width: 576px) {
            left: 0px;
        }
        @media (min-width: 768x) {
            left: 0px;
        }
        @media (min-width: 992px) {
            left: 10px;
        }
        @media (min-width: 1170px) {
            left: 20px;
        }
        @media (min-width: 1270px) {
            left: 30px;
        }
        @media (min-width: 1400px) {
            left: 40px;
        }
    }
    
    
    .row .business-altcard {
        position:relative;
        padding:0 0 0 0px;
        @media (min-width: 576px) {
            padding:0 0 0 0px;
        }
        @media (min-width: 768x) {
            padding:0 0 0 0px;
        }
        @media (min-width: 992px) {
            padding:0 0 0 10px;
        }
        @media (min-width: 1170px) {
            padding:0 0 0 20px;
        }
        @media (min-width: 1270px) {
            padding:0 0 0 30px;
        }
        @media (min-width: 1400px) {
            padding:0 0 0 40px;
        }
    }
    .image-alt-sec > div {
        padding: 0;
        padding-top: 0;
        width: 100%;
    }
    .flex-row-reverse .business-altcard {
        left:0;
    }
    .image-alt-sec {
        padding: 0 10px;
    }
`;

Content.Title = styled(Heading)`
        font-weight: 700;
        font-size: 28px;
        line-height: 30px;
        padding-bottom: 25px;
        margin-top: 40px;

    @media (min-width: 576px) {
        font-size: 21px;
    }
    @media (min-width: 768x) {
        font-size: 22px;
        line-height:30px;
        margin-top:60px;
    }
    @media (min-width: 992px) {
        font-size: 24px;
        line-height:30px;
        margin-top:70px;
    }
    @media (min-width: 1170px) {
        font-size: 30px;
        line-height:40px;
        margin-top:80px;
    }
    @media (min-width: 1270px) {
        font-size: 36px;
        line-height:40px;
        margin-top:100px;
    }
    @media (min-width: 1400px) {
        font-size: 42px;
        line-height:50px;
        margin-top:100px;
    }
`;

Content.Subtitle = styled(Heading)`
    font-size: 15px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 26px;
`;

Content.Text = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 32px;
    margin-top: 40px;
    color: #262729;

    @media (min-width: 576px) {
        font-size: 14px;
    }
    @media (min-width: 768x) {
        font-size: 14px;
    }
    @media (min-width: 992px) {
        font-size: 14px;
    }
    @media (min-width: 1170px) {
        font-size: 16px;
    }
    @media (min-width: 1270px) {
        font-size: 16px;
    }
    @media (min-width: 1400px) {
        font-size: 18px;
    }
`;

Content.Image = styled(Box)`
    width: 100%;
`

Content.Widget = styled(Box)``
Content.Box = styled(Box)``


export default Content;