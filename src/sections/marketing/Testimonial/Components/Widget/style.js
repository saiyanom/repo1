import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Widget = styled(Box)`
text-align:center;

`

Widget.ProfileBlock = styled(Box)`
    display: flex;
    align-items: center;


`
Widget.Title = styled(Heading)`
color: #262729;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  width: 270px;
  line-height: 42px;
  min-height: 60px;
@media (min-width:992px){
  font-size: 24px;
}

`
Widget.Text = styled(Paragraph)`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 30px;
opacity: 0.7;
color: #262729;
width: 270px;
min-height:100px;
@media (min-width: 768px){
  margin-right: 0px;
}
@media (min-width: 992px){
  margin-right: 5px;
}

@media (min-width: 1200px){
  font-size: 16px;
}


`
Widget.UserPosition = styled(Paragraph)`
margin-bottom: 0;
font-weight: 400;

letter-spacing: normal;

color:inherit;
font-size: 15px;
    line-height: 21px;
    text-align: center;
`

Widget.Image = styled(Box)`
        margin-right: 15px;
        min-height:62px;
  >div{
    border-radius: 500px;
    overflow:hidden;
    min-width: 67px;
    max-width: 67px;
    min-height: 67px;
    max-height: 67px;
  }
 
`
Widget.Rating = styled(Box)`
    display: flex;
    font-size: 28px;
`
Widget.RatingSingle = styled(Box)`
    color: ${props => props.active ? "#ff971d":"inherit"};
    margin-right: 5px;
    font-size: inherit;
`
Widget.UserBlock = styled(Box)``
Widget.Box = styled(Box)`

`


export default Widget;