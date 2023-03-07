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
    color:#fff;
    margin-left:10px;
    &:hover{
        /* box-shadow: 0 0px 0px rgba(241, 139, 98, 0.3); */
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
    }

    &-1{
        border:none;
    }

    
}

.header-close::before{
    width:100%;
    height:100%;  
}

.header-close-btn::before{
    background:#ff5722;
    content:"";
    position:absolute;
    top: 0;
    left: 0;
    transition: all 0.6s ease;   
    width:0;
    z-index:-1;
}

.header-close::after{
    background:#ff5722;
    height:100%;
    content:"";
    position:absolute;
    top: 0;
    right: 0;
    transition: all 0.6s ease;   
    width:0;
    z-index:-1;
}

.header-close:hover::before{
    width:50%;
    color: #fff;
}
.header-close:hover::after{
    width:50%;
    color: #fff;
}

.header-close:hover{
    background:#ff5722;

}
`
const HeaderButton = ({btnOneLink,btnTwoLink,btnOneText,btnTwoText,...rest})=>{
    return(
        <HeaderButtonWrapper {...rest}>
            <Link target="_blank" className="btn" to={btnOneLink ? btnOneLink : "https://platform.mrkt365.com/"}>
                {btnOneText}
            </Link>
            <Link target="_blank" className="btn btn-2 header-close header-close-btn" to={btnTwoLink ? btnTwoLink : "https://platform.mrkt365.com/register"}>
                {btnTwoText}
            </Link>
        </HeaderButtonWrapper>
    )
}

export default HeaderButton;