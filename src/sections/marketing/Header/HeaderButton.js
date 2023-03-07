import React from 'react'
import { Link } from '~components'
import styled from 'styled-components'
import { Box } from '~styled'

export const HeaderButtonWrapper = styled(Box)`


    .btn{
        min-width:auto;
        height: 45px;
        border-radius: 50px;
        color: var(--bs-white);
        font-size: 16px;
        font-weight: 400;
        line-height: 1.2;
        display:flex;
        align-items:center;
        justify-content:center;
        padding-left:15px;
        padding-right:15px;
        letter-spacing: -0.4px;
        color:#262729;
        margin-left:10px;
        &:hover{
           
        }
        &-2{
            min-width: 129px;
            height: 45px;
            border-color: #FF5722;
            color: #fff;
            border-radius: 50px;
            text-transform: capitalize;
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 28px;
            box-shadow: -8px 8px 50px rgba(255, 87, 34, 0.5);
        }
        &-2{
            border: 2px solid #ff5722;
            outline: none;
            color: #fff;
            position: relative;
            overflow:hidden;
            transition:1s all ease;
            z-index:1;
            background:#FF5722;
        }

        &-2:hover{
            background: #f98c6a;
            border: 2px solid #f98c6a;
        }
    
    }

    .btn-2{
        border-radius:50px;
    }


    
`
const HeaderButton = ({btnOneLink,btnTwoLink,btnOneText,btnOneClass,btnTwoText,...rest})=>{
    return(
        <HeaderButtonWrapper {...rest}>
            <Link  className={`${btnOneClass} btn`} to={btnOneLink ? btnOneLink : "https://platform.mrkt365.com/"}>
                {btnOneText}
            </Link>
            <Link  className="btn btn-2" to={btnTwoLink ? btnTwoLink : "https://platform.mrkt365.com/register"}>
                {btnTwoText}
            </Link>
        </HeaderButtonWrapper>
    )
}

export default HeaderButton;    