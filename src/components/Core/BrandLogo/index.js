import React from 'react'
import darklogo from '../../../assets/images/main-logo.png'
import lightLogo from '../../../assets/image/logo/logo-white.png'
export default function BrandLogo({logoWhite=false,...rest}){
return(
<>
    <img src={logoWhite ? lightLogo : darklogo } alt="brand logo" {...rest}/>
</>
)
}