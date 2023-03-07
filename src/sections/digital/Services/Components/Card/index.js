import React from 'react'
import { Link } from '~components'
import Card from './style'
export default function ServiceCard({image, icon,title,title2,text,to,iconBackground,...rest}){
return(
<Card itemCenter={true}  {...rest}>
  {/* <Card.Icon as="div" background={iconBackground} >
    <i className={icon} />
  </Card.Icon> */}
  <img src={image} />
  <Card.Title className="text-center" as="h4">{title} <br /> {title2} </Card.Title>
  {/* <Card.Text>{text}</Card.Text> */}
  {/* <Card.Button as={Link} to={to?to:"/"}>Learn More <i className="fa fa-angle-right" /></Card.Button> */}
</Card>
)
}