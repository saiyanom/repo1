import styled from "styled-components"
import { Box, Heading, Paragraph } from "~styled"

const Content = styled(Box)`
    padding-top: 100px;
    padding-bottom: 50px;

   
`
Content.Title = styled(Heading)`
    font-size: 35px;
    font-weight: 500;
    letter-spacing: -2px;
    line-height: 1.1;
    margin-bottom: 25px;

    @media (min-width:480px) {
        font-size: 45px;
    }

    @media (min-width:768px) {
        font-size: 50px;
    }

    @media (min-width:992px) {
        font-size: 60px;
        margin-bottom: 35px;
    }
`
Content.TitleTwo = styled(Heading)`
    font-weight: 500;
    letter-spacing: -2px;
    line-height: 1.1;
    font-size: 35px;
    margin-bottom: 50px;

    @media (min-width:575px) {
      font-size: 40px;
    }

    @media (min-width:768px) {
      font-size: 50px;
    }

    @media (min-width:992px) {
      font-size: 60px;
      margin-bottom: 180px;
    }
`
Content.Text = styled(Paragraph)`
    /* color: #ffffff; */
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.66;

    @media (min-width:575px) {
        font-size: 18px;
    }
    &:last-child {
        margin-bottom: 0;
    }
`
// Content.Button = styled(btn){

// }

export default Content
