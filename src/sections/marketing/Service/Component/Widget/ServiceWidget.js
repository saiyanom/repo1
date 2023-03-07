import React from "react"
import { SuperTag } from "~components";
import Widget from "./style"
export default function ServiceWidget({icon,title,text,learn,learnLink,...rest}) {
  return (
    <Widget className=" service-widget-sec" {...rest}>
      <Widget.Icon>
        <div>
          <img src={icon} alt="service icon"/>
        </div>
      </Widget.Icon>
      <Widget.Body>
        <Widget.Title className="service-title">{title}</Widget.Title>
        <Widget.Text>
          <SuperTag value={text}/>
        </Widget.Text>
       
        <a href={learnLink} ><h5 className="link-text">{learn} ></h5> </a> 
      
        {/* <Widget.Learn>{learn}</Widget.Learn> */}
      </Widget.Body>
    </Widget>
  )
}
