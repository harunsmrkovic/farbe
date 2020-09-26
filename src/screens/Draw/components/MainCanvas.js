import React from 'react'
import { Stage, Layer, Circle } from 'react-konva'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { getBackgroundColor } from '../../../state/canvas/selectors'

import { useCanvasSize } from '../hooks/useCanvasSize'
import { useMovingAndScaling } from '../hooks/useMovingAndScaling'

export const MainCanvas = () => {
  const { canvasWidth, canvasHeight } = useCanvasSize()
  const { onStageWheel, offsetX, offsetY, scaleFactor } = useMovingAndScaling()

  const backgroundColor = useSelector(getBackgroundColor)

  return (
    <Background color={backgroundColor}>
      <Stage
        width={canvasWidth}
        height={canvasHeight}
        fill="green"
        onWheel={onStageWheel}
        x={offsetX}
        y={offsetY}
        scaleX={scaleFactor}
        scaleY={scaleFactor}
      >
        <Layer>
          <Circle x={200} y={200} stroke="black" radius={50} fill="yellow" />
          <Circle x={300} y={300} stroke="black" radius={50} fill="yellow" />
          <Circle x={400} y={400} stroke="black" radius={50} fill="yellow" />
          <Circle x={500} y={500} stroke="black" radius={50} fill="yellow" />
          <Circle x={600} y={500} stroke="black" radius={50} fill="yellow" />
          <Circle x={800} y={500} stroke="black" radius={50} fill="yellow" />
          <Circle x={1000} y={500} stroke="black" radius={50} fill="yellow" />
        </Layer>
      </Stage>
    </Background>
  )
}

const Background = styled.div`
  background-color: ${({ color }) => color};
`
