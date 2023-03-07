import React from 'react'
import { Link } from '~components'
import Card from './style'
export default function ServicesCard({image, icon,title,to,iconBackground,...rest}){
return(
  <Card as={Link} to={to}>
  <Card.Icon iconBackground={iconBackground}>
    {/* <i className={icon} /> */}
    <img src={image} />
  </Card.Icon>
 
 
  <Card.Title as="h3">{title}</Card.Title>
  {/* <Card.Text as="p" className="text-start">{text}</Card.Text> */}
</Card>
)
}