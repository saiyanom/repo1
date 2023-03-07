import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Counter = styled(Box)`

@media (min-width: 768px){
}

@media (min-width: 1024px){
    padding-bottom: 111px;
s}
.get-started-heading{
  text-align: left;
  padding-top: 50px;
  font-size: 50px;
  font-weight: 700;

  @media(min-width:992px){
    text-align: left;
    padding-top: 100px;
    font-size: 70px;
    font-weight: 700;
  }
  
  @media(min-width:1170px){
    text-align: left;
    padding-top: 60px;
    font-size: 70px;
    font-weight: 700;
  }
  
  @media(min-width:1270px){
    text-align: left;
    padding-top: 60px;
    font-size: 70px;
    font-weight: 700;
  }
  
  @media(min-width:1400px){
    text-align: left;
    padding-top: 60px;
    font-size: 70px;
    font-weight: 700;
  }
}
.counter-para{


  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: black;
  text-align: left;
  padding-top: 36px;


  @media(min-width:1170px){
    font-weight: 600;
    font-size: 21px;
    line-height: 30px;
    color: black;
    text-align: left;
    padding-top: 45px;
  }
}
.get-started-sec{
  flex-direction: column;
}
.counter-icons{
  width: 75.28px;
  height: 72.69px;

@media(min-width:1400px){
  width: 75.28px;
  height: 72.69px;
}
}

`
Counter.Single=styled(Box).attrs({className:"counter-single"})`
margin-bottom: 30px;
flex-direction: column;

@media (min-width: 1024px){
  margin-bottom: 0;
}

`
Counter.Block = styled(Box)`

`

Counter.Title = styled(Heading)`
text-align: left;
padding-top: 100px;
font-size: 45px;
font-weight: 700;

@media (min-width: 768px){
  text-align: left;
  padding-top: 100px;
  font-size: 70px;
  font-weight: 700;
}

@media (min-width: 1024px){
  text-align: left;
  padding-top: 100px;
  font-size: 70px;
  font-weight: 700;
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