import React from "react"
import Widget from './style'
export default function TestimonialWidget({ text, title, image }) {
  return (
    <Widget>
      <img src={image} />
      <Widget.Title as="h5">{title}</Widget.Title>
      <Widget.Text>{text}</Widget.Text>
    </Widget>
  )
}
