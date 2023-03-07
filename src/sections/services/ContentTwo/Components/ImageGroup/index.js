import React from "react"
import ImageCard from "../ImageCard"
import Images from "./style"
export default function ImageGroup(props,{...rest}) {
  return (
    <>
      <Images {...rest}>
        {/* Content Image */} 
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="w-100"
        />
      </Images>
    </>
  )
}


