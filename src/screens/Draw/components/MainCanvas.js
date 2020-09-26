import React from 'react'
import { Stage, Layer, Rect, Circle } from 'react-konva'

import { useCanvasSize } from '../hooks/useCanvasSize'
import { useMovingAndScaling } from '../hooks/useMovingAndScaling'

export const MainCanvas = () => {
  const { canvasWidth, canvasHeight } = useCanvasSize()
  const { onStageWheel, offsetX, offsetY, scaleFactor } = useMovingAndScaling()

  return (
    <Stage
      width={canvasWidth}
      height={canvasHeight}
      fill="green"
      scaleX={scaleFactor}
      scaleY={scaleFactor}
      onWheel={onStageWheel}
    >
      <Layer>
        <Rect
          width={canvasWidth / scaleFactor}
          height={canvasHeight / scaleFactor}
          fill="rgba(255, 0, 255, 0.1)"
        />
        <Circle
          x={200 + offsetX}
          y={200 + offsetY}
          stroke="black"
          radius={50}
          fill="yellow"
        />
        <Circle
          x={300 + offsetX}
          y={300 + offsetY}
          stroke="black"
          radius={50}
          fill="yellow"
        />
        <Circle
          x={400 + offsetX}
          y={400 + offsetY}
          stroke="black"
          radius={50}
          fill="yellow"
        />
        <Circle
          x={500 + offsetX}
          y={500 + offsetY}
          stroke="black"
          radius={50}
          fill="yellow"
        />
        <Circle
          x={600 + offsetX}
          y={500 + offsetY}
          stroke="black"
          radius={50}
          fill="yellow"
        />
        <Circle
          x={800 + offsetX}
          y={500 + offsetY}
          stroke="black"
          radius={50}
          fill="yellow"
        />
        <Circle
          x={1000 + offsetX}
          y={500 + offsetY}
          stroke="black"
          radius={50}
          fill="yellow"
        />
      </Layer>
    </Stage>
  )
}
