import React from "react"
import Card  from "./style"

export default function PricingCard({backgroundColor,yearlyPackage, cardTitle,optionalText,buttonname,cardText, amount,forEachText,dollar, ...rest}) {
  return (
    <Card backgroundColor="#fff" {...rest}>
        <Card.Top backgroundColor={backgroundColor} className="pricing-card-top">
            <Card.Title as="h3">{cardTitle}</Card.Title>
            <div className="bottom-dash"></div>
            {/* <Card.Text>{yearlyPackage ?"Yearly package":"Monthly package" }</Card.Text> */}
            <Card.Price>
            <Card.PriceText alignSelf="flex-start">{dollar}</Card.PriceText>
            <Card.Amount>{amount}</Card.Amount>
            <div className="optional-text">{optionalText}</div>
            <Card.PriceTextTwo>{forEachText}</Card.PriceTextTwo>
            </Card.Price>
        </Card.Top>
        <Card.List pt="40px">
            <Card.ListItem>{cardText}</Card.ListItem>
        </Card.List>
        <Card.Box>
            <Card.Button textColor="#fff" hoverTextColor="#fff" backgroundColor={backgroundColor}  hoverBackgroundColor={backgroundColor} rounded={true} sizeX="180px" sizeY="56px" rounded="true">{buttonname}</Card.Button>
        </Card.Box>
    </Card>
    
    
  )
}
