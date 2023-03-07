import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Service = styled(Box)`
    padding-top: 75px;
    padding-bottom: 40px;
    @media (min-width:575px){
        padding-top: 75px;
        padding-bottom: 60px;
    }
    @media (min-width:768px) {
        padding-top: 75px;
        padding-bottom: 80px;
    }

    @media (min-width:1024px) {
        padding-top: 130px;
        padding-bottom: 130px;
    }

    .bottom-dash{
        @media(min-width:992px){
            margin-left:22px;
        }
        @media(min-width:1170px){
            margin-left: 50px;
          }
    }

    .listNone {list-style-type:none}
    ol {padding-left:0}
    ol ol {padding-left:20px; padding-bottom:20px;}

`




export default Service;