import React from 'react'
import { Stage, Layer } from 'react-konva'
import styled from 'styled-components/macro'
import { ShapesLayer } from '../ShapesLayer'

export const MiniCanvas = ({
  width,
  height,
  scaleFactor = 0.2,
  backgroundColor,
  shapes
}) => {
  return (
    <Background color={backgroundColor}>
      <Stage
        width={width}
        height={height}
        scaleX={scaleFactor}
        scaleY={scaleFactor}
      >
        <Layer>{shapes && <ShapesLayer shapes={shapes} />}</Layer>
      </Stage>
    </Background>
  )
}

const Background = styled.div`
  position: relative;
  background-color: ${({ color }) => color};
`
