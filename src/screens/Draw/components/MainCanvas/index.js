import { bindActionCreators } from '@reduxjs/toolkit'
import React from 'react'
import { Stage, Layer, default as Konva, Circle } from 'react-konva'
import { connect, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { canvasSlice } from '../../../../state/canvas'
import {
  getBackgroundColor,
  getShapes
} from '../../../../state/canvas/selectors'

import { useCanvasSize } from '../../hooks/useCanvasSize'
import { useDrawing } from '../../hooks/useDrawing'
import { useMovingAndScaling } from '../../hooks/useMovingAndScaling'

export const MainCanvasView = ({ addShape }) => {
  const { canvasWidth, canvasHeight } = useCanvasSize()
  const { onStageWheel, offsetX, offsetY, scaleFactor } = useMovingAndScaling()

  const backgroundColor = useSelector(getBackgroundColor)

  const {
    onStageMouseDown,
    onStageMouseUp,
    onStageMouseMove,
    onStageMouseLeave,
    drawing,
    cursor
  } = useDrawing({ commit: addShape })

  const shapes = useSelector(getShapes)

  return (
    <Background color={backgroundColor}>
      <Stage
        width={canvasWidth}
        height={canvasHeight}
        onWheel={onStageWheel}
        x={offsetX}
        y={offsetY}
        scaleX={scaleFactor}
        scaleY={scaleFactor}
        onMouseDown={onStageMouseDown}
        onMouseMove={onStageMouseMove}
        onMouseUp={onStageMouseUp}
        onMouseLeave={onStageMouseLeave}
      >
        <Layer>
          {shapes && <ShapesLayer shapes={shapes} />}
          {drawing && <Shape {...drawing} />}
          {cursor && <Circle {...cursor} />}
        </Layer>
      </Stage>
    </Background>
  )
}

const ShapesLayer = ({ shapes }) => {
  return shapes.map((shape, i) => {
    return <Shape key={[shape.x, shape.y, i].join('-')} {...shape} />
  })
}

const Shape = ({ konvaComponent, ...props }) => {
  const ShapeComponent = Konva[konvaComponent]
  return <ShapeComponent {...props} />
}

export const MainCanvas = connect(null, dispatch =>
  bindActionCreators(canvasSlice.actions, dispatch)
)(MainCanvasView)

const Background = styled.div`
  background-color: ${({ color }) => color};
`
