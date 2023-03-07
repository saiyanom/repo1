import React from 'react'
import { Link } from '~components'
import Card from './style'
export default function ServicesCard({icon,title, image, text,to,iconBackground,...rest}){
return(
<Card itemCenter={true} backgroundColor="#fff"  {...rest}>
{/* this belongs to above line -- iconBackground={iconBackground} */}
  {/* <Card.Icon as="div">
    <i className={icon} />
  </Card.Icon> */}
  <img src={image} />
  <Card.Title as="h4">{title}</Card.Title>
  <Card.Text >{text}</Card.Text>
</Card>
)
}