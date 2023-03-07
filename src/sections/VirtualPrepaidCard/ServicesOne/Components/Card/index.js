import React from 'react'
import { Link } from '~components'
import Card from './style'
export default function ServicesCard({icon,title,title2,title3, image, text, text2,whiteImageClass,text3,cardbg,whiteImage, to,linkPage,iconBackground,...rest}){
return(
<div className={`${cardbg} link-page`}>
<Card className="featurecard" itemCenter={true} backgroundColor="#fff"  {...rest}>
{/* this belongs to above line -- iconBackground={iconBackground} */}
  {/* <Card.Icon as="div">
    <i className={icon} />
  </Card.Icon> */}
  <div className='icon-group d-flex'>
  <img src={image} className="card-img business-card-img"/>
  <img src={whiteImage} className={`${whiteImageClass} business-white-card`}/>
  </div>
  <Card.Title as="h4">{title}<br />{title2}<br />{title3}</Card.Title>
  {/* <Card.Text >{text}</Card.Text> */}
  {/* <Card.Text >{text2}</Card.Text>
  <Card.Text >{text3}</Card.Text> */}
  {/* <a href={`/${linkPage}`}> */}
  {/* <img src="image/homepage/arrow.svg" className='arrow'/>
  <img src="image/homepage/white-arrow.svg" className="white-arrow"/> */}
  {/* </a> */}
</Card>
</div>
)
}