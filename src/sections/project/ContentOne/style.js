import styled from 'styled-components';
import { Link } from '~components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Content = styled(Box)`
    position: relative;
    margin-top: 0px;
    margin-bottom: 70px;

    @media(min-width:992px){
        margin-top: -131px;
    }

    @media(min-width:1170px){
        margin-top: -131px;
    }

    @media(min-width:1400px){
        margin-top: -131px;
    }

    .backcolor{
        background:#fffaf7;
    }
    
`
Content.Inner = styled(Box)`
    padding-top: 60px;
    padding-bottom: 60px;
    
    @media (min-width: 768px){
        padding-top: 80px;
        padding-bottom: 80px;
    }

    @media (min-width: 1024px){
        padding-top: 132px;
        padding-bottom: 135px;
    }

`
Content.TextBlock=styled(Box)`

`
Content.Block = styled(Box)`
padding-top: 80px;
@media (min-width: 768px) {
    padding-top: 0;
}

`
Content.Title = styled(Heading)`
font-size: 28px;
font-weight: 500;
letter-spacing: -2px;
line-height: 32px;
margin-bottom: 32px;
font-weight:700;
    @media (min-width: 992px) {
        font-size: 42px;
        line-height: 42px;
    }
    @media (min-width: 1270px) {
        font-size: 48px;
        line-height: 48px;
    }
    @media (min-width: 1440px){
        font-size: 54px;
        line-height: 54px;
    }
`
Content.Text = styled(Paragraph)`
font-size: 16px;
font-weight: 400;
font-style: normal;
color: #262729;
letter-spacing: normal;
line-height: 32px;
margin-bottom: 12px;

@media (min-width: 992px){
    font-size: 18px;
    line-height:32px;
}

@media(min-width:1170px){
    font-size: 21px;
    line-height: 40px;
}

`

Content.Image = styled(Box)`
position: relative;
margin-bottom: 40px;
float:right;

&:hover{
animation:bounce 1s liner;
}

@keyframes bounce{
    20%,50%,80%,to{
        transform: translateY(0);
    }
    40%{
        transform: translateY(-30px);
    }
    70%{
        transform: translateY(-15px);
    }
    90%{
        transform: translateY(-4px);
    }
}
@media (min-width: 1024px){
    margin-left: 45px;
    margin-bottom: 0;
}

`
Content.SectionShape=styled(Box)`
position: absolute;
left: -0.8%;
top: 12%;
z-index: 0;
width: 6.4%;
`
Content.ContentShape = styled(Box)`
    width: 38%;
    position: absolute;
    right: 13%;
    bottom: 0;
    z-index: -1;

`
Content.Button = styled(Link)`
    padding: 10px 0 !important;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    &:before{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #ff5722;
    height: 2px;
    min-width: 138px;
    max-width: 138px;
    }
`

Content.Box = styled(Box)``


export default Content;