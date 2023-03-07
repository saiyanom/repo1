import React from 'react'
import Card from "./style.js"
export default function ServiceCard({title,text,image,...rest}){
return(
    <>
<Card className='desk-imageGroup' backgroundColor="#F3F4F6" {...rest}>
    <Card.Icon>
        <img src={image} alt="Service" />
    </Card.Icon>
    <Card.Body>
    <Card.Title as="h3" fontColor="#262729">{title}</Card.Title>
    <Card.Text fontColor="#262729">{text}</Card.Text>
    </Card.Body>
</Card>

<Card className='resp-imagegroup1' backgroundColor="#F3F4F6" {...rest}>
<Card.Title as="h3" fontColor="#262729">{title}</Card.Title>
    <Card.Icon>
        <img src={image} alt="Service" />
    </Card.Icon>
    <Card.Body className="para-text4">
    
    <Card.Text fontColor="#262729">{text}</Card.Text>
    </Card.Body>
</Card>
</>
)
}
