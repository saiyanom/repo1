import styled from 'styled-components';
import {
    Box,
    Heading,
    Paragraph
} from '~styled';

const Container = styled(Box)
`    
.fourth-sec{

    @media(min-width:992px){
        margin-top: -30px !important;
    }
}
    padding-top: 40px;
    padding-bottom: 36px;

    @media (min-width:768px) {
        padding-top: 70px;
        padding-bottom: 55px;
    }

    @media (min-width:1024px) {
        padding-top: 110px;
        padding-bottom: 100px;
    }
    @media (min-width:1170px) {
        padding-top: 60px;
        padding-bottom: 200px;
    }
    @media (min-width:1270px) {
        padding-top: 60px;
        padding-bottom: 200px;
    }
    @media (min-width:1400px) {
        padding-top: 60px;
        padding-bottom: 200px;
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

    .txt-card1{
        padding:20px;
        background: #F6FBFF;
        border-radius: 15px;
        margin-top: 10px;

        @media(min-width:992px){
            padding-right: 267px;
            padding-left: 87px;
            padding-top: 28px;
            width: calc(100% + 220px);
            height: 95%;
            top: 0;
        }

        @media(min-width:1170px){
            padding-right: 267px;
            padding-left: 87px;
            padding-top: 60px;
            width: calc(100% + 220px);
            height: 95%;
            top: 0;
        }

        @media(min-width:1270px){
            padding-right: 267px;
            padding-left: 50px;
            padding-top: 60px;
            width: calc(100% + 220px);
            height: 100%;
            top: 0;
            padding-top: 40px;
            padding-right: 200px;
        }

        @media(min-width:1400px){
            padding-right: 267px;
            padding-left: 50px;
            padding-top: 60px;
            width: calc(100% + 220px);
            height: 100%;
            top: 0;
            padding-top: 60px;
            padding-right: 200px;
            padding-bottom: 55px;

        }

            h2{
                font-weight: 500;
                font-size: 28px;
                line-height: 54px;
    
                @media(min-width:992px){
                    margin-bottom:14px;
                    font-size: 36px;
                    line-height: 46px;
                }
                @media(min-width:1270px){
                    margin-bottom:34px;
                    font-size: 45px;
                    line-height: 54px;
                }
                @media(min-width:1170px){
                    margin-bottom:34px;
                    font-size: 45px;
                    line-height: 54px;
                }
                @media(min-width:1400px){
                    margin-bottom:44px;
                    font-size: 45px;
                    line-height: 54px;
                }
            }
        

        b{
            color: #1A75FF;
            font-weight: 700;

        }

        p{
            font-weight: 400;
            font-size: 16px;
            line-height: 32px;
            color: #262729;

            @media(min-width:992px){
                font-size: 18px;
                line-height:32px;
            }
            @media(min-width:1270px){
                font-size: 18px;
                line-height:32px;
            }
            @media(min-width:1170px){
            font-size: 18px;
            line-height:32px;
            }
            @media(min-width:1400px){
            font-size: 21px;
            line-height: 40px;

            }
        }
    }
    .txt-card3{
        background: #F6FBFF;
        border-radius: 15px;
        position: relative;
        padding:20px;
    }
    .txt-card4{
        border-radius: 15px;
        position: relative;
        padding: 10px;
    }
    .txt-card5{
        background: #F6FBFF;
        border-radius: 15px;
        position: relative;
        padding: 20px;
        margin-top: -30px;

        h2{
            font-weight: 500;
            font-size: 28px;
            line-height: 54px;

            @media(min-width:992px){
                margin-bottom:14px;
                font-size: 36px;
                line-height: 46px;
            }
            @media(min-width:1270px){
                margin-bottom:34px;
                font-size: 45px;
                line-height: 54px;
            }
            @media(min-width:1170px){
                margin-bottom:34px;
                font-size: 45px;
                line-height: 54px;
            }
            @media(min-width:1400px){
                margin-bottom:44px;
                font-size: 45px;
                line-height: 54px;
            }
        }
        p{
            font-weight: 400;
            font-size: 16px;
            line-height: 32px;
            color: #262729;

            @media(min-width:992px){
                font-size: 18px;
                line-height:32px;
            }
            @media(min-width:1270px){
                font-size: 18px;
                line-height:32px;
            }
            @media(min-width:1170px){
            font-size: 18px;
            line-height:32px;
            }
            @media(min-width:1400px){
            font-size: 21px;
            line-height: 40px;

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

    .image-card4{
        width:100%;

        @media(min-width:992px){
            left: -50px;
            top: 68px;
        }
        @media(min-width:1170px){
            width: calc(100% + 90px);
            left: -107px;
        }
        @media(min-width:1270px){
            width: calc(100% + 90px);
            left: -107px;
        }
        @media(min-width:1400px){
            width: calc(100% + 54px);
            left: -56px;
        }
    }

    .image-card5{
        margin-top: -55px;
        width: 100%;
        @media (min-width:1400px){
            margin-top:0;
            right:8px;
        }
    }

    .txt-card5{
        @media(min-width:992px){
            padding-left: 47px;
            padding-right: 128px;
            width: calc(100% + 150px);
            height: 100%;
            top: 0;
            padding-top: 20px;
        }

        @media(min-width:1170px){
            padding-left: 80px;
            padding-right: 253px;
            width: calc(100% + 150px);
            height: 95%;
            top: 0;
            padding-top: 30px;

        }

        @media(min-width:1270px){
            padding-left: 80px;
            padding-right: 253px;
            width: calc(100% + 150px);
            height: 95%;
            top:0;
            padding-top: 30px;
        }

        @media (min-width:1400px){
            padding-left: 80px;
            padding-right: 262px;
            width: calc(100% + 150px);
            height: 95%;
            top: 70px;
            padding-top: 50px;
        }
    }

    .image-card3{
        margin-top: -110px;
        width: 100%;
        @media (min-width:992px){
            top: 122px;
            right: 8px;
            margin-top:0;

        } 
         @media (min-width:1170px){
            top: 95px;
            right: 8px;
            margin-top:0;

        } 
         @media (min-width:1270px){
            top: 95px;
            right: 8px;
            margin-top:0;

        }

        @media (min-width:1400px){
            margin-top:0;
            right: 8px;
            top:1px;
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
        background: #F6FBFF;
        border-radius: 15px;

        @media(min-width:992px){
            padding-left: 164px;
            padding-top: 20px;
            padding-right: 57px;
            height: 81%;
            top: 52px;
            width: calc(100% + 70px);
            left: -72px;
        
        }

        @media(min-width:1170px){
            padding-left: 164px;
            padding-top: 30px;
            padding-right: 126px;
            height: 81%;
            top: 52px;
            width: calc(100% + 70px);
            left: -72px;
        }
        @media(min-width:1270px){
            padding-left: 164px;
            padding-top: 30px;
            padding-right: 126px;
            height: 81%;
            top: 52px;
            width: calc(100% + 70px);
            left: -72px;
        }
        @media(min-width:1400px){
            padding-left: 164px;
            padding-top: 70px;
            padding-right: 126px;
            height: 81%;
            top: 52px;
            width: calc(100% + 70px);
            left: -72px;
        }

        h2{
            font-weight: 500;
            font-size: 28px;
            line-height: 54px;

            @media(min-width:992px){
                margin-bottom:14px;
                font-size: 36px;
                line-height: 46px;
            }
            @media(min-width:1270px){
                margin-bottom:34px;
                font-size: 45px;
                line-height: 54px;
            }
            @media(min-width:1170px){
                margin-bottom:34px;
                font-size: 45px;
                line-height: 54px;
            }
            @media(min-width:1400px){
                margin-bottom:44px;
                font-size: 45px;
                line-height: 54px;
            }
        }

        b{
            font-weight: 700;
            color: #1A75FF;
        }

        p{
            font-weight: 400;
            font-size: 16px;
            line-height: 32px;
            color: #262729;

            @media(min-width:992px){
                font-size: 18px;
                line-height:32px;
            }
            @media(min-width:1270px){
                font-size: 18px;
                line-height:32px;
            }
            @media(min-width:1170px){
            font-size: 18px;
            line-height:32px;
            }
            @media(min-width:1400px){
            font-size: 21px;
            line-height: 40px;

            }
        }
    }

    .blue-h3{
        color:#1A75FF;
        font-weight:700;
    }



    .alt-card1{
       
    }

    .main-section3{
        margin-top: 50;
        flex-direction: column;

        @media(min-width:922px){
            margin-top: 150px;
            margin-bottom: -80px;
            flex-direction:row;

        }

        @media(min-width:1170px){
            margin-top: 95px;
        }

        @media(min-width:1400px){
            
            margin-top: 80px;
        }
    }

  

    .main-container{
        margin-top: 81px;
        margin-bottom: 63px;
        flex-direction:column;

        @media(min-width:768px){
            flex-direction:row;
        }
        @media(min-width:992px){
            flex-direction:row;
            margin-top: 61px;
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
        background: #F6FBFF;
        @media(min-width:992px){
            padding-left: 220px;
            padding-top: 25px;
            padding-right: 50px;
            width: calc(100% + 156px);
            left: -193px;
            top: 150px;
        }

        @media (min-width:1170px){
            padding-left: 289px;
            padding-top: 25px;
            padding-right: 50px;
            width: calc(100% + 156px);
            left: -193px;
            top: 150px;
        
        }

        @media (min-width:1270px){
            padding-left: 289px;
            padding-top: 25px;
            padding-right: 50px;
            width: calc(100% + 156px);
            left: -193px;
            top: 150px;
        
        }

        @media (min-width:1400px){
            padding-left: 289px;
            padding-top: 25px;
            padding-right: 50px;
            width: calc(100% + 156px);
            left: -193px;
            top: 150px;
        }

        h2{
            font-weight: 500;
            font-size: 28px;
            line-height: 54px;

            @media(min-width:992px){
                margin-bottom:14px;
                font-size: 36px;
                line-height: 46px;
            }
            @media(min-width:1270px){
                margin-bottom:34px;
                font-size: 45px;
                line-height: 54px;
            }
            @media(min-width:1170px){
                margin-bottom:34px;
                font-size: 45px;
                line-height: 54px;
            }
            @media(min-width:1400px){
                margin-bottom:44px;
                font-size: 45px;
                line-height: 54px;
            }
        }
        b{
            color: #1A75FF;
            font-weight: 700;
        }
        p{
            font-weight: 400;
            font-size: 16px;
            line-height: 32px;
            color: #262729;

            @media(min-width:992px){
                font-size: 18px;
                line-height:32px;
            }
            @media(min-width:1270px){
                font-size: 18px;
                line-height:32px;
            }
            @media(min-width:1170px){
            font-size: 18px;
            line-height:32px;
            }
            @media(min-width:1400px){
            font-size: 21px;
            line-height: 40px;

            }
        }
    }


    .txt-card3{

        b{
            font-weight: 700;
            color: #1A75FF;
        }
        h2{
            font-weight: 500;
            font-size: 28px;
            line-height: 54px;

            @media(min-width:992px){
                margin-bottom:14px;
                font-size: 36px;
                line-height: 46px;
            }
            @media(min-width:1270px){
                margin-bottom:34px;
                font-size: 45px;
                line-height: 54px;
            }
            @media(min-width:1170px){
                margin-bottom:34px;
                font-size: 45px;
                line-height: 54px;
            }
            @media(min-width:1400px){
                margin-bottom:44px;
                font-size: 45px;
                line-height: 54px;
            }
        }
         
        

     
        p{
            font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        color: #262729;

        @media(min-width:992px){
            font-size: 18px;
            line-height:32px;
        }
        @media(min-width:1270px){
            font-size: 18px;
            line-height:32px;
        }
        @media(min-width:1170px){
        font-size: 18px;
        line-height:32px;
        }
        @media(min-width:1400px){
        font-size: 21px;
        line-height: 40px;

        }
        }
        @media(min-width:992px){
            top: 61px;
            height: 100%;
            padding-left: 80px;
            padding-right: 176px;
            padding-top: 10px;
            width: calc(100% + 107px);
        }

        @media(min-width:1170px){
            width: calc(100% + 150px);
            height: 100%;
            top: 50px;
            padding-left: 80px;
            padding-right: 285px;
            padding-top: 10px;
        }

        @media(min-width:1270px){
            width: calc(100% + 150px);
            height: 100%;
            top: 50px;
            padding-left: 80px;
            padding-right: 285px;
            padding-top: 10px;

        }

        @media (min-width:1400px){
            width: calc(100% + 150px);
            height: 100%;
            top: -35px;
            padding-left: 80px;
            padding-right: 264px;
            padding-top: 30px;

           
    }





    





`
Container.Image = styled(Box)`
padding-bottom: 35px;
border-radius: 15px;
z-index: 99;




@media (min-width: 1024px) {
    padding-bottom: 0;
    padding-top: 18px;
    align-items: center;
    display: flex;
    height: 100%;
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