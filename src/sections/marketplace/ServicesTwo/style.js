import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Service = styled(Box)`
    padding-top: 40px;
    padding-bottom:100px;
    @media (min-width: 768px) {
        padding-top: 40px;
    }
    @media (min-width: 1024px) {
        padding-top: 40px;
    }

    .right-image{
        position: relative;
        top: 80px;
        z-index: 1;
    }

    .text-field{
        background: #F6FBFF;
        border-radius: 15px;
        padding: 20px;
        margin-top:0px;
        position: relative;

        @media(min-width:992px){
            margin-top:0;
            height: 100%;
            padding-left: 135px;
            padding-right: 60px;
            padding-bottom: 50px;
            padding-top: 60px;
            width: calc(100% + 105px);
            left: -90px;

        }

        @media(min-width:1170px){
            height: 100%;
            padding-left: 135px;
            padding-right: 60px;
            padding-bottom: 100px;
            padding-top: 100px;
            width: calc(100% + 105px);
            left: -90px;
        }

        @media(min-width:1270px){
            height: 100%;
            padding-left: 135px;
            padding-right: 60px;
            padding-bottom: 100px;
            padding-top: 100px;
            width: calc(100% + 105px);
            left: -90px;
        }
        @media(min-width:1400px){
            height: 100%;
            padding-left: 135px;
            padding-right: 60px;
            padding-bottom: 100px;
            padding-top: 100px;
            width: calc(100% + 105px);
            left: -90px;
        }


        h2{
            font-weight: 500;
            font-size: 28px;
            line-height: 40px;
            margin-bottom:30px;


            @media(min-width:992px){
                font-size: 42px;
                line-height: 50px;
                margin-bottom: 25px;            
            }
            
            @media(min-width:1170px){
            font-size: 45px;
            line-height: 54px;
            margin-bottom:54px;
            }
            
            @media(min-width:1270px){
            font-size: 45px;
            line-height: 54px;
            margin-bottom:54px;
            }
            
            @media(min-width:1400px){
                font-size: 45px;
            line-height: 54px;
            margin-bottom:54px;
            }

        }
        b{
            color: #1A75FF;
            font-weight:700;
        }
        p{
            font-weight: 400;
            font-size: 16px;
            line-height:32px;
            color: #262729;
            @media(min-width:992px){
                font-size: 16px;
                line-height: 30px;
            }
            
            @media(min-width:1170px){
                font-size: 21px;
                line-height: 40px;
            }
            
            @media(min-width:1270px){
                font-size: 21px;
                line-height: 40px;
            }
            
            @media(min-width:1400px){
                font-size: 21px;
                line-height: 40px;
            }
        }
    }
`;

Service.Image = styled(Box)`
img{

    border-radius:15px;
}
`;

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
        position: absolute;
        left: 0;
        top: 0;
        font-weight: 700;
        color:#5034fc;
    }
}
`;

Service.Box = styled(Box)`
`;

export default Service;