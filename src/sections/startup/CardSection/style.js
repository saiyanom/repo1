import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Service = styled(Box)`
    padding-top: 60px;
    padding-bottom: 60px;
    @media (min-width:768px) {
        padding-top: 60px;
        padding-bottom: 60px;
    }
    @media (min-width:992px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }
    .PVC-cardsection {
        align-items: start;
    }
    
`


Service.Box = styled(Box)`
filter: drop-shadow(-3px 25px 50px rgba(23, 3, 48, 0.12));
`


export default Service;