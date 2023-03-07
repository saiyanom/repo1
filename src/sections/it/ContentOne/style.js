import styled from 'styled-components';
import {
    Box,
    Heading,
    Paragraph
} from '~styled';

const Container = styled(Box)
`

.gif-ImageGroup1{
    display:none;

    @media(min-width:768px){
        display:block;
    }
}
.resp-sec{
    display:none;

    @media(min-width:768px){
        display:block;
    }
}
.rsp-image{
    @media(min-width:768px){
        display:none;
    }

    b{
        color: #1A75FF;
        font-weight:500;
    }

    h3{
        margin-bottom: 24px;
        font-size: 28px;
        font-weight: 500;
        letter-spacing: normal;
        line-height: 50px;

        @media (min-width:480px) {
            font-size: 45px;
        }

        @media (min-width:768px) {
            font-size: 33px;
        }

        @media(min-width:992px){
            font-size:45px;
            font-weight:700;
        }


        @media (min-width:1170px){
            font-weight:700;
            margin-bottom: 24px;
        }

        @media (min-width:1270px){
            font-weight:700;
            margin-bottom: 24px;
        }

        @media (min-width:1400px) {
            font-weight: 500;
            font-size: 45px;
            line-height: 54px;
            font-size: 44px;
            margin-bottom:30px;
        }

    }
}
    padding-top: 0px;
    padding-bottom: 36px;

    @media (min-width:768px) {
        padding-top: 0px;
        padding-bottom: 55px;
    }

    @media (min-width:1024px) {
        padding-top: 0px;
        padding-bottom: 50px;
    }
    @media (min-width:1170px) {
        padding-top: 0px;
        padding-bottom: 50px;
    }
    @media (min-width:1270px) {
        padding-top: 0px;
        padding-bottom: 50px;
    }
    @media (min-width:1400px) {
        padding-top: 0px;
        padding-bottom: 50px;
    }
    .section1{

        flex-direction: column;
        
        @media(min-width:992px){
            flex-direction: row;
        }
        @media(min-width:1170px){
            
          margin-bottom: 90px;

        }
        @media(min-width:1270px){
            
          margin-bottom: 90px;

        }
        @media(min-width:1400px){
            margin-bottom:0;
        }
    }

    h2 {font-weight: 700;  margin-bottom: 24px;}

    .txt-card1{
        padding:20px;
        border-radius: 15px;
        margin-top: 10px;

        @media(min-width:992px){
            width: calc(100% + 160px);
            padding-right: 281px;
            padding-left: 87px;
            padding-top: 30px;
            height: 57%;
            top: 104px;
        }

        @media(min-width:1170px){
            padding-right: 213px;
            padding-left: 87px;
            padding-top: 60px;
            top: 30px;
        }

        @media(min-width:1270px){
            padding-right: 390px;
            padding-left: 87px;
            padding-top: 30px;
            width: calc(100% + 333px);
            height: 57%;
            top: 135px;
        }

        @media(min-width:1400px){
            padding-right: 390px;
            padding-left: 87px;
            padding-top: 30px;
            width: calc(100% + 333px);
            height: 57%;
            top: 151px;

        }
    }
    .txt-card3{
        border-radius: 15px;
        position: relative;
        padding:20px;
    }
    .txt-card4{
        position: relative;
        padding: 10px;
        border-radius: 15px;
    }
    .main-container2{
        @media(min-width:992px){
            margin-top:50px;
        }
        @media(min-width:1170px){
            margin-top: 70px;
        }
    }
    .txt-card5{
        border-radius: 15px;
        position: relative;
        padding: 20px;
        margin-top: -30px;

        h3{
            margin-bottom: 24px;
            @media(max-width:767px){
                font-size:28px;
            }
        }
        p{
            font-size: 16px;
            padding-left: 0;
            font-weight: 400;
            letter-spacing: normal;
            line-height:32px;
            color:#262729;



            @media(min-width:992px){
                font-size:14px;
            }

            @media(min-width:1120px){
                line-height: 40px;
                font-size: 21px;

            }

            @media(min-width:1400px){
                line-height: 40px;
                font-size: 21px;
                font-weight: 400;
            }

        }
    }

    .txt-card6{
        background: #fff;
        border-radius: 15px;
        position: relative;
        padding: 20px;
        margin-top: -30px;
        color: #262729;

        h3{
            margin-bottom: 24px;
        }
        p{
            font-size: 16px;
            padding-left: 0;
            font-weight: 400;
            letter-spacing: normal;
            line-height:32px;
            color:inherit;



            @media(min-width:992px){
                font-size:14px;
            }

            @media(min-width:1120px){
                font-size: 21px;
                line-height: 40px;

            }

            @media(min-width:1400px){
                line-height: 40px;
                font-size: 21px;
                font-weight: 400;
            }

        }
    }


 


   .image-card4, .image-card2{
        margin-top: -55px;
        width: 100%;

        @media(min-width:992px){
            margin-top:0;
        }

        @media (min-width:1400px){
            margin-top:0;
        }
    }

    .image-card5{
        // margin-top: -55px;
        width: 100%;
        @media (min-width:1400px){
            margin-top:0;
            right:8px;
        }
    }

    .txt-card5{
        @media(min-width:992px){
            width: calc(100% + 60px);
            height: 90%;
            top: 10px;
            padding-left: 80px;
            padding-right: 100px;
        }

        @media(min-width:1170px){
            padding-left: 80px;
            padding-right: 282px;
            width: calc(100% + 224px);
            height: 75%;
            top: 70px;
            padding-top: 50px;

        }

        @media(min-width:1270px){
            padding-left: 80px;
            padding-right: 282px;
            width: calc(100% + 224px);
            height: 75%;
            top: 70px;
            padding-top: 50px;
        }

        @media (min-width:1400px){
            padding-left: 80px;
            padding-right: 326px;
            width: calc(100% + 150px);
            height: 75%;
            top: 70px;
            padding-top: 50px;
        }
    }

    .txt-card6{
        @media(min-width:992px){
            width: calc(100% + 60px);
            height: 90%;
            top: 10px;
            padding-left: 80px;
            padding-right: 100px;
        }

        @media(min-width:1170px){
            padding-left: 80px;
            padding-right: 282px;
            width: calc(100% + 200px);
            height: 75%;
            top: 70px;
            padding-top: 50px;

        }

        @media(min-width:1270px){
            padding-left: 80px;
            padding-right: 282px;
            width: calc(100% + 200px);
            height: 75%;
            top: 70px;
            padding-top: 50px;
        }

        @media (min-width:1400px){
            padding-left: 80px;
            padding-right: 326px;
            width: calc(100% + 200px);
            height: 75%;
            top: 70px;
            padding-top: 50px;
        }
    }

    .image-card3{
        margin-top: -190px;
        width: 100%;
        @media (min-width:992px){
            margin-top:0;
            right: 8px;
        } 
         @media (min-width:1170px){
            margin-top:0;
            right: 8px;
        } 
         @media (min-width:1270px){
            margin-top:0;
            right: 8px;
        }

        @media (min-width:1400px){
            margin-top:0;
            right: 8px;
        }
    }



    .cellphone-video{
        border-radius: 15px;
        position:relative;
       


        @media(min-width:1170px){
            right:43px;
        }
        @media(min-width:1270px){
            right:43px;
        }
        @media(min-width:1400px){
            right:43px;
        }


    }

    .text-card2{
        padding:10px;

        @media(min-width:992px){
            padding-left: 100px;
            padding-right: 75px;
            top: 85px;
        
        }

        @media(min-width:1170px){
            padding-left: 105px;
            padding-top: 0px;
            padding-right: 20px;
        }
        @media(min-width:1270px){
            padding-left: 105px;
            padding-top: 0px;
            padding-right: 20px;
        }
        @media(min-width:1400px){
            padding-left: 105px;
            padding-top: 60px;
            padding-right: 101px;
        }
    }

    .blue-h3{
        color:#1A75FF;
    }



    .alt-card1{
       
    }

    .main-section3{
        margin-top: 50;
        flex-direction: column;

        @media(min-width:922px){
            margin-top: 50px;
            margin-bottom: -80px;
            flex-direction:row;

        }

        @media(min-width:1170px){
            margin-top: 70px;
            margin-bottom:60px;

        }

        @media(min-width:1400px){
            margin-bottom:60px;
            margin-top: 70px;
        }
    }

  

    .main-container{
        margin-top: 50px;
        margin-bottom: 63px;
        flex-direction:column;

        @media(min-width:768px){
            flex-direction:row;
        }
        @media(min-width:992px){
            flex-direction:row;
            margin-top: 60px;
            margin-bottom: 43px;
        }
        @media(min-width:1170px){
            margin-top: 0;
            margin-bottom: 60px;
        
        }
        @media(min-width:1270px){
            margin-top: 0;
            margin-bottom: 60px;
        
        }
        @media(min-width:1400px){
            margin-top: 81px;
            margin-bottom: 63px;
        }


    }

    .cellphone-video video{
        width: 100%;
        height: 100%;
        border-radius: 15px;
    }


    .txt-card4{

        h3{
            margin-bottom: 24px;
            @media(max-width:767px){
                font-size:28px;
            }
        }

        p{
            font-weight: 400;
            font-size: 16px;
            line-height: 32px;
            color: #262729;

            @media(min-width:992px){
                font-size:14px;
            }

            @media(min-width:1120px){
                font-size: 16px;
                line-height: 30px;

            }

            @media(min-width:1400px){
                line-height: 32px;
                font-size: 18px;
                font-weight: 400;
            }
        }

        @media(min-width:992px){
            padding-left: 100px;
            padding-top: 30px;
            padding-right: 42px;
            top: 50px;
        }

        @media (min-width:1170px){
            padding-left: 133px;
            padding-top: 30px;
            padding-right: 30px;
        
        }

        @media (min-width:1270px){
            padding-left: 133px;
            padding-top: 30px;
            padding-right: 30px;
            p{
                font-weight: 400;
                font-size: 21px;
                line-height: 40px;
                color: #262729;
                opacity: 0.7;
            }
        
        }

        @media (min-width:1400px){
            padding-left: 133px;
            padding-top: 100px;
            padding-right: 30px;
            p{
                font-weight: 400;
                font-size: 21px;
                line-height: 40px;
                color: #262729;
                opacity: 0.7;
            }
        }
  
    }


    .txt-card3{
        @media(min-width:992px){
            top: 61px;
            height: 70%;
            padding-left: 80px;
            padding-right: 176px;
            padding-top: 15px;
            width: calc(100% + 107px);
        }

        @media(min-width:1170px){
            width: calc(100% + 150px);
            height: 75%;
            top: 50px;
            padding-left: 80px;
            padding-right: 285px;
            padding-top: 30px;
        }

        @media(min-width:1270px){
            width: calc(100% + 150px);
            height: 75%;
            top: 50px;
            padding-left: 80px;
            padding-right: 285px;
            padding-top: 30px;

        }

        @media (min-width:1400px){
            width: calc(100% + 150px);
            height: 75%;
            top: 70px;
            padding-left: 80px;
            padding-right: 306px;
            padding-top: 30px;
        
    }




    





`
Container.Image = styled(Box)`
padding-bottom: 35px;
border-radius: 15px;
z-index: 99;




@media (min-width: 1024px) {
    padding-bottom: 0;
}

@media (min-width: 1200px) {
   
}
`
Container.Box = styled(Box)`
.image-card2{
    position: relative;
    z-index: 99;
}
`
export default Container;