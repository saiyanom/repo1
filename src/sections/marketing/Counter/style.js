import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Counter = styled(Box)`

@media (min-width: 768px){
}

@media (min-width: 1024px){
    padding-bottom: 111px;
}
.partners-logo-heading{
  font-weight: 700;
font-size: 32px;
line-height: 40px;
text-align: center;

@media(min-width:992px){
  font-size: 60px;
line-height: 54px;
}
}
.partner-logo{
  width: auto;
  height: 56px;
}

.partner-logo:focus{
  border:0;
}

.slider{
  width: auto !important;
  height: 56px;
}

`
Counter.Single=styled(Box).attrs({className:"counter-single"})`
margin-bottom: 30px;
flex-direction: column;

margin-top:50px;

@media (min-width: 1024px){
  margin-bottom: 0;
}

`
Counter.Block = styled(Box)`

`
Counter.Title = styled(Heading)`
font-size: 35px;
font-weight: 500;
letter-spacing: -1px;
line-height: 1.13461;
margin-bottom: 25px;

@media (min-width: 76px){
  font-size: 42px;
}

@media (min-width: 1024px){
  font-size: 52px;
}

`
Counter.Text = styled(Paragraph)`
font-size: 16px;
font-weight: 400;
letter-spacing: normal;
line-height: 1.5;
color:inherit;

  padding-top:50px;


@media (min-width: 768px){
  font-size: 21px;
}

@media (min-width: 1024px){
  font-size: 24px;
}

@media(max-width: 375px){
  img{
    width: 165px;
  }
}
`
Counter.Box = styled(Box)``


export default Counter;