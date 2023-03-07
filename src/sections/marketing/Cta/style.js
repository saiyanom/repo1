// import { HeaderButton } from 'src/sections/digital';
import styled from 'styled-components';
import { Box, Heading } from '~styled';

const Cta = styled(Box)`
    position: relative;
    z-index: 0;
    border-radius: 0;

    @media (min-width:768px) {
    }

    @media (min-width:992px) {
    }

    .cta-close{
        background: #ff5722;
        border-radius: 50px;
        color: #fff !important;
        margin-top: 10px;
        outline: none;
        position: relative;
        overflow: hidden;
        -webkit-transition: 1s all ease;
        transition: 1s all ease;
        z-index: 1;
        text-align: center;
        width: 197px;
        height: 70px;
        font-size: 20px;
        line-height: 20px;
        padding: 23px 26px;
        font-weight: 700;
    }


    .cta-close:hover{
        background: #f98c6a;
        border:2px #f98c6a;
    }


    
`

Cta.Shape = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    img{
        max-width:30%;
        @media (min-width:575px){
            max-width:50%;
        }
        @media (min-width:768px){
            max-width:90%;
        }
        @media (min-width:992px){
            max-width:100%;
        }
    }
`
Cta.Title = styled(Heading)`
    font-weight: 500;
    letter-spacing: -2px;
    line-height: 1.1;
    font-size: 35px;
    
    @media (min-width:575px) {
      font-size: 40px;
    }

    @media (min-width:768px) {
      font-size: 50px;
      margin-top: 95px;
    }

    @media (min-width:992px) {
      font-size: 60px;
    }
    @media (max-width:375){
        margin-top:20px;
    }
`
Cta.Box = styled(Box)`
    
`
Cta.Newsletter = styled(Box)`
        max-width: 521px;
        margin:0 auto;
`
Cta.NewsletterFromGroup = styled(Box)`
    display:flex;
    justify-content:center;
    flex-direction:column;
    @media (min-width:575px){
        flex-direction:row;
    }
    .form-control{
        transition: 0.4s;
        background-color: rgba(255,255,255, 0.2);
        font-size: 16px;
        font-weight: 400;
        letter-spacing: normal;
        width: 100%;
        border: none;
        border-radius:10px;
        padding: 0 25px;
        height: 70px;
        margin-right:5px;
        margin-top:10px;
        &::placeholder{
            color:#fff;
        }
        &:focus {
            background-color: #fff !important;

            &::placeholder {
                color: #000;
            }
        }
    }
    .btn{

    }
`

export default Cta;