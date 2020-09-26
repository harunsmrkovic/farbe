import React from 'react'

import icons from './icons'

export const Icon = ({ name, size, width, height, color, src, ...props }) => {
  const RenderGraphic = icons[name]

  if (!RenderGraphic) {
    console.warn(`No Icon named ${name}`)
    return null
  }

  return (
    <RenderGraphic
      {...props}
      width={width || size}
      height={height || size}
      color={color}
    />
  )
}
