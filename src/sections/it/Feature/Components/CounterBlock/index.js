import React from 'react'
import Counter from './style'
 
export default function CounterBlock({...rest}){
return(
<Counter {...rest}>
    <Counter.Wrapper className="bg-blue-ribbon">
    <Counter.Single>
        <Counter.Title as="h3" fontColor="#fff"><span className="counter"><img src="https://dzekq3sbbgf19.cloudfront.net/public/image/it-services/our-support-1.svg" /></span></Counter.Title>
        <Counter.Text fontColor="#ffffffb3">Get matched to <br />suitable projects by our AI</Counter.Text>
    </Counter.Single>
    <Counter.Single>
        <Counter.Title as="h3" fontColor="#fff"><span className="counter"><img src="https://dzekq3sbbgf19.cloudfront.net/public/image/it-services/our-support-2.svg" /></span>%</Counter.Title>
        <Counter.Text fontColor="#ffffffb3">Get paid for every hour<br /> use our time tracking app</Counter.Text>
    </Counter.Single>
    <Counter.Single>
        <Counter.Title as="h3" fontColor="#fff"><span className="counter"><img src="https://dzekq3sbbgf19.cloudfront.net/public/image/it-services/our-support-3.svg" /></span>+</Counter.Title>
        <Counter.Text fontColor="#ffffffb3">Receive quick & secure<br /> payments in US dollars</Counter.Text>
    </Counter.Single>
    </Counter.Wrapper>
</Counter>
)
}