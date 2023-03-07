import styled from "styled-components";
import { Box, Heading, Button, Paragraph } from "~styled";

const Content = styled(Box)`
  padding-top: 0px;
  padding-bottom: 55px;
  

  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 75px;
  }

  @media (min-width: 1024px) {
    padding-top:40px;
    padding-bottom: 90px;
  }
  @media (min-width: 1200px) {
    padding-top: 40px;
    padding-bottom: 90px;
  }

  @media(min-width:1400px){

  }

  h2{


    font-weight: 600;
    font-size: 28px !important;
    line-height: 32px !important;
    letter-spacing: -1px;
    margin-top:20px;

@media(min-width:992px){
  font-size:40px;
  line-height:60px;
  font-weight: 500;
  letter-spacing: -1px;
  width: 516px;
  padding-right: 11px;
  padding-top: 60px;
}

@media(min-width:1170px){
  margin-bottom:30px;
  font-size: 45px !important;
  line-height: 60px !important;
  width: 100%;

}

@media(min-width:1400px){
  margin-bottom:20px;
  font-weight: 600;
  font-size: 42px !important;
  line-height: 50px !important;
  width: 100%;

}
  }


  .background1{
    flex-direction: column-reverse;

    @media(min-width:992px){
      flex-direction:row;
    }

  }
  .background2{
    // padding-bottom:90px;
    flex-direction: column-reverse;

    @media(min-width:992px){
      flex-direction:row;
      padding-bottom:00px;

    }
  }

  .right-side-para{

    @media(min-width:992px){
      left: 69px;
      top: 40px;

    }

  }
  .left-para2{
    // top: 113px!important;
  }

  .off-blue-background{
    background-color:#F4F9FC;
  }

  .blue-text{
    color:#1A75FF;
    font-weight:700;
  }

  .virtual-card{
    margin-top:100px;

    @media(min-width:992px){
      margin-top:0;
    }
  }

  .resp-imagegroup1{
padding-left: 10px;
padding-right: 10px;
  }

  .image1{
    
    position: relative;

    @media(min-width:992px){
    }
    @media(min-width:1170px){
    }

  }

  .image2{
    position:relative;
    left: -54px;
 

      @media(min-width:992px){
        left: 0;
      }
      @media(min-width:1170px){
      left: 0;
      }

  }

  .image3{
    
    position: relative;
    left: -81px;

    @media(min-width:992px){
      left: 0;
    }
    @media(min-width:1170px){
    left: 0;
    }

  }

  .image4{
    
    position: relative;
    left: -59px;

    @media(min-width:992px){
      left: 0;
    }
    @media(min-width:1170px){
    left: 0;
    }

  }
  .image5{
    
    position: relative;
    left: -47px;

    @media(min-width:992px){
      left: 0;
    }
    @media(min-width:1170px){
    left: 0;
    }

  }
  .image6{
    
    position: relative;
    left: -50px;

    @media(min-width:992px){
      left: 0;
    }
    @media(min-width:1170px){
    left: 0;
    }

  }

  .imgtwodown{

    @media(min-width:992px){
      width: 42%;
      margin-top: 218px;
      height: 400px;
      margin-left: -25px;
    }

    @media(min-width:1170px){
      width: 42%;
      margin-top: 212px;
      height: 407px;
      margin-left: 0;
    }

    @media(min-width:1400px){
    margin-bottom: 0;
    width: 40%;
    border-radius: 15px;
    margin-top: 143px;
    height: 423px;
    margin-left:0;
    }
  }

  .blue-close{
    outline: none;
    border: 2px solid #1A75FF;
    color: #fff !important;
  background-color: #1974FF !important;
  border-radius: 50px !important;
  box-shadow:0px 0px 30px #96bcf6;
  transition: 0.5s all ease;
  font-size: 15px;
  padding: 10px 10px;
  width: 170px;
  margin-top: 15px;

  @media(min-width:992px){
    min-width: 168px;
    height: 56px;
    color: #fff !important;
    background-color: #1974FF !important;
    border-radius: 50px !important;
    box-shadow:0px 0px 30px #96bcf6;
    transition: 0.5s all ease;
    font-size: 18px;
    overflow: hidden;
  }

  @media(min-width:1400px){
    min-width:180px;
    font-size:21px;
  }
  
  &:hover{
    background:#4e92f9 !important;
  }

  }


`;
Content.Title = styled(Heading)`
  font-weight: 700;
  font-size: 30px;
  line-height: 70px !important;
  position: relative;
  letter-spacing: -2px;

  @media (min-width: 768px) {
  font-weight: 700;
  font-size: 70px;
  line-height: 66px;
  }

  @media(min-width:992px){
    font-size: 40px ;
    line-height: 50px;
  }

  @media (min-width: 1024px) {
    font-weight: 700;
  font-size: 70px;
  line-height: 66px;
  width: 639px;

  }

  @media(min-width:1400px){
    font-size:70px;
  }
`;
Content.Subtitle = styled(Heading)`

`;
Content.Text = styled(Paragraph)`
 
font-weight: 400;
font-size: 16px;
line-height: 32px;
color: #262729;
  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media(min-width:992px){
    font-size:16px;
    padding-bottom: 30px;
  }
  @media(min-width:1170px){
    font-size:18px;
    width: 90%;
    padding-bottom: 30px;
  }
  @media(min-width:1270px){
    font-size:21px;
    line-height:40px;
    width: 90%;
  }

  @media(min-width:1400px){
    font-size:21px;
    line-height:40px;
  }
  
`;
Content.Button = styled(Button)`
  
`;

Content.Images = styled(Box)`
  display: flex;
  align-items: center;
  @media (min-width: 575px) {
    right: -15%;
  }
  @media (min-width: 768px) {
    right: -25%;
  }
  @media (min-width: 1200px) {
    right: -14%;

  }
`;

Content.ImageOne = styled(Box)`
  width: 100%;
  position: relative;
  overflow: hidden;
  transform-origin: top left;
  margin: 0 10px;
  border-radius: 15px;
  margin-bottom: 40px;


  @media (min-width: 575px) {
    width: 50%;
    transform: skewX(-15deg);
  }
  @media (min-width: 1024px) {
    margin-bottom: 0;
    width: 50%;
  }

  @media(min-width:1170px){
    width: 50%;
  }

  @media(min-width:1400px){
    width: 47%;

  }
`;
Content.ImageOneInner = styled(Box)`
  transform-origin: top left;
  height: 100%;
  position: relative;
  top: 0;
  @media (min-width: 575px) {
    left: -60%;
    width: 200%;
    transform: skewX(15deg);
  }

  @media(min-width:992px){
    left: -84%;
  }


  @media(min-width:1170px){
    left: -52%;
  }
  @media(min-width:1400px){
    left: -40%;
  }
`;
Content.ImageTwo = styled(Box)`
  width: 100%;
  position: relative;
  overflow: hidden;
  transform-origin: top left;
  margin: 0 10px;
  border-radius: 5px;
  margin-bottom: 40px;
  @media (min-width: 575px) {
    width: 50%;
    transform: skewX(-15deg);
  }
  @media (min-width: 1024px) {
    width: 40%;
    border-radius: 15px;
    margin-top: 161px;
    margin-left: -13px;
  }

  @media(min-width:1170px){
    margin-left:0;
    border-radius: 15px;
    margin-top: 164px;

  }

  @media(min-width:1400px){
    margin-bottom: 0;
    width: 40%;
    border-radius: 15px;
    margin-top: 145px;
  }
`;
Content.ImageTwoInner = styled(Box)`
  height: 100%;
  position: relative;
  top: 0;
  @media (min-width: 575px) {
    left: -28%;
    width: 200%;
    transform: skewX(15deg);
  }
  @media(min-width:992px){
    left: -42%;
  }
  @media(min-width:1170px){
    left: -42%;
  }
   @media(min-width:1400px){
    left: -27%;
  }
`;
Content.Imageup = styled(Box)`
width: 100%;
height: 577px;
overflow: hidden;
height:100%;
border-radius:10px;
top: -18px;

@media(min-width:992px){
  height: 577px;
  overflow: hidden;
  height:100%;
  border-radius:10px;
  right: 75px;
  top: -18px;
}
`
Content.Imagedown = styled(Box)`



width: 100%;
overflow: hidden;
height: 100%;
border-radius: 10px;
top: 73px;
right:0;

@media(min-width:992px){
  height: 100%;
  overflow: hidden;
  height:100%;
  border-radius:10px;
  right: 109px;
  top: 73px;
}
`
Content.Box = styled(Box)`
padding-bottom: 60px;

@media(min-width:992px){
padding-bottom: 179px;
}

`;

export default Content;
