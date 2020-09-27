import React from 'react'
import Konva from 'react-konva'

export const ShapesLayer = ({ shapes }) => {
  return shapes.map((shape, i) => {
    return <Shape key={[shape.x, shape.y, i].join('-')} {...shape} />
  })
}

export const Shape = ({ konvaComponent, ...props }) => {
  const ShapeComponent = Konva[konvaComponent]
  return <ShapeComponent {...props} />
}
