import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Counter = styled(Box)`

@media (min-width: 768px){
}

@media (min-width: 992px){
    padding-bottom: 111px;
s}
.get-started-heading{
  text-align:center;
  margin-top:50px;

  @media(min-width:1400px){
    font-weight: 700;
    font-size: 60px;
    line-height: 70px;
  }
}
.counter-icons{
  width:50%;
  height:100%;

  @media(min-width:992px){
    width:30%;
  }
}
.counter-card img{
  margin-bottom:24px;
}
.counter-card h5{
font-weight: 500;
font-size: 21px;
line-height: 30px;
margin-bottom:15px;

  @media(min-width:992px){
    font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 18px;
  }
 @media(min-width:1170px){
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
 }

 @media(min-width:1400px){
  font-weight: 600;
  font-size: 21px;
  line-height: 30px;
 }
}

.counter-card p{
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: #262729;
  opacity: 0.7;

  @media (min-width: 992px){
    font-size: 14px;
    line-height: 21px;
  }

  @media(min-width:1400px){
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #262729;
    opacity: 0.7;
  }
  
}
`
Counter.Single=styled(Box).attrs({className:"counter-single"})`
margin-bottom: 30px;
flex-direction: column;

@media (min-width: 992px){
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

@media (min-width: 992px){
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
  font-size: 16px;
}


@media(max-width: 375px){
  img{
    width: 165px;
  }
}
`

Counter.Box = styled(Box)``


export default Counter;