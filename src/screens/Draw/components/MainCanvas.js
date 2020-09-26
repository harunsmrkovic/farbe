import React, { useState } from 'react'
import { Stage, Layer, Rect, Circle } from 'react-konva'
import { useScreenSize } from '../../../hooks/useScreenSize'

export const MainCanvas = () => {
  const { width, height } = useScreenSize()

  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const [scaleFactor, setScaleFactor] = useState(1)

  const onStageWheel = e => {
    if (e.evt.deltaY % 1 !== 0) {
      e.evt.preventDefault()
      setScaleFactor(s => s - e.evt.deltaY * 0.01)
    }

    setOffsetX(x => x - e.evt.deltaX)
    setOffsetY(y => y - e.evt.deltaY)
  }

  // const onStageTouchMove = e => {
  //   e.evt.preventDefault()
  //   console.log(e.evt)
  // }

  return (
    <Stage
      width={width}
      height={height}
      fill="green"
      scaleX={scaleFactor}
      scaleY={scaleFactor}
      onWheel={onStageWheel}
    >
      <Layer>
        <Rect width={width} height={height} fill="rgba(255, 0, 255, 0.1)" />
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
