import React from 'react'
// import { Link } from '~components'
import styled from 'styled-components'
import { Box } from '~styled'

const HeaderButtonWrapper = styled(Box).attrs({className:"header-btn-block"})`
    .btn{
        min-width:142px;
        height: 45px;
        border-radius: 50px;
        color: var(--bs-white);
        font-size: 13px;
        font-weight: 500;
        line-height: 1.2;
        display:flex;
        align-items:center;
        justify-content:center;
        padding-left:15px;
        padding-right:15px;
        letter-spacing: -0.4px;
        color:#fff;
        margin-left:10px;
        background-color: #5034fc;
        border-color: #5034fc;
        box-shadow:-12px 20px 50px rgb(80 52 252 / 30%);
        border-radius:500px;
        &:hover{
            box-shadow:-12px 20px 50px rgb(80 52 252 / 0%);
            /* box-shadow: 0 0px 0px rgba(241, 139, 98, 0.3); */
        }
    }
`
const HeaderButton = ({btnLink,btnText,as,...rest})=>{
    return(
        <HeaderButtonWrapper {...rest}>
            <Box as={as} target="_blank" className="btn" to={btnLink ? btnLink : "/"}>
                {btnText}
            </Box>
        </HeaderButtonWrapper>
    )
}

export default HeaderButton;