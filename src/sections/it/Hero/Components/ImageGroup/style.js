import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const HeroImageGroup = styled(Box).attrs({className:"welcome-image-group-wrapper--l3"})`
        position: absolute;
        bottom: 0;
        right: 19%;
        width: 35%;
        height:100%;

    @media (min-width:768px) {
        position: absolute;
        width: 25%;
        bottom: 0;
        right: 11%;
    }
    @media (min-width:992px) {
        position: absolute;
        width: 100%;
        bottom: -24%;
        right: 0%;
        max-width: 64%;

    }

    @media (min-width:1200px) {
        right: 0%;
        max-width: 58%;
        left: 54%;
        top: 2%;
    }

    @media (min-width:1400px) {
        max-width: 54%;
        top: -3%;
    }
`


HeroImageGroup.Box = styled(Box)``


HeroImageGroup.ImageOne = styled(Box)`
    position: absolute;
    right: -55%;
    bottom: 0;
    width: 100%;
    z-index: -1;
    top: 124px;
`
HeroImageGroup.ImageTwo = styled(Box)`
   
   position: absolute;
        left: 83%;
        top: 35%;
        width: 20%;
        z-index: -1;

        @media (min-width:1200px) {
            max-width: 500px;
        }
`
HeroImageGroup.ImageThree = styled(Box)`

    position: absolute!important;
    left: -10%;
    bottom: 8%;
    width: 61%;
    z-index: -1;
    max-width:140px;
    @media (min-width:1200px) {
        max-width: 500px;
    }
`



HeroImageGroup.ImagesList = styled(Box)`
    position: relative;
    max-width: 100%;
    z-index: 1;
    top: 164px;

    
    @media (min-width:992px) {
        top: 112px;
        max-width: 80%;
        left: 20%;
    }
    @media (min-width:1024px) {
        top: 98px;
        max-width: 80%;
        left: 20%;
    }


    @media (min-width:1170px) {
        top: 96px;
        max-width: 80%;
        left: 0%;
    }

    @media (min-width:1400px) {
        top: 164px;
        max-width: 87%;


    }
        
`



export default HeroImageGroup;

