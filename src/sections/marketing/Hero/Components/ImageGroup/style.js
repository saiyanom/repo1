import styled from 'styled-components';


const HeroImageGroup = styled.div`
 position: relative;
    width: 100%;
    margin: 0 auto;
    @media (min-width:768px) {
        width: 100%;
    }
    @media (min-width:1240px) {
        position: absolute;
        top: 55%;
        right: 2%;
        transform: translateY(-50%);
        width: 46%;
    }
    @media (min-width:1368px) {
        width: 46% !important;
        top: 50%;
        transform: translateY(-50%);
    }
    @media (min-width:1366px) {
        right: 5%;
        top: 61%;
        z-index: 999;
    }
`

HeroImageGroup.Inner = styled.div`
    position: relative;
    margin: 0 auto;
    z-index: 1;
    margin-bottom: 21px;
    top: -50px;
    display:none;
    @media (min-width:768px) {
        display:none;
    }
    @media (min-width:992px) {
        top: 115px;
        left: -50px;
        display:block;
    }
    @media (min-width:1170px) {
        top: 50px;
        left: 0px;
    }
    @media (min-width:1270px) {
        top: -50px;
    }
    @media (min-width:1400px) {
        top: -15px;
    }
    @media (min-width:1600px) {
        top: 0px;
    }
    @media (min-width:1820px) {
        top: 50px;
    }
    .welcome-image--group-01__img-5 {
        position: absolute;
        left: -115%;
        top: 83%;
        width: auto;
        transform: rotateZ(270deg);    
    }
    .welcome-image--group-01__main {
        width: 100%;
        height: auto;
        position:relative;
        z-index:999;
    }
    .welcome-image--group-01__img-1 {
        height: auto;
        position:absolute;
        top:-110px;
        left:40%;
        z-index:99;
        display:none;
        @media (min-width:768px) {
            top:-70px;
            display:none;
        }
        @media (min-width:992px) {
            top:-55px;
            display:block;
        }
        @media (min-width:1170px) {
            top:-80px;
        }
        @media (min-width:1270px) {
            top:-90px;
        }
        @media (min-width:1400px) {
            top:-90px;
        }
        @media (min-width:1600px) {
            top:-92px;
        }
        @media (min-width:1820px) {
            top:-105px;
        }
    }
    .welcome-image--group-01__img-1 img {
        width:40%;
        @media (min-width:768px) {
            width:55%;
        }
        @media (min-width:992px) {
            width:42%;
        }
        @media (min-width:1170px) {
            width:60%;
        }
        @media (min-width:1270px) {
            width:70%;
        }
        @media (min-width:1400px) {
            width:74%;
        }
        @media (min-width:1600px) {
            width:77%;
        }
        @media (min-width:1820px) {
            width:85%;
        }
    }
`
// npm 


export default HeroImageGroup;

