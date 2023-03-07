import styled from 'styled-components';
import { Box } from '~styled';

 const Widget = styled(Box)`
        font-weight: 600;
        letter-spacing: normal;
        line-height: 30px;
        width: 278npx !important;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: left;
        padding: 0px 10px 0 15px;
        color: inherit;
        transition: 0.4s;

        @media (min-width:768px) {
            width: 243px;
            height: 60px;
            font-size: 16px;
        }

        i {
            margin-right: 10px;
            color:inherit;
        }
        span{
            color:inherit;
        }

`


export default Widget;