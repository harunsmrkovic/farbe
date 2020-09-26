import { useState } from 'react'

/*
  Hook used for facilitating events around
  drawing in progress. After mouseup, it commits
  the work in progress into the final storage
*/

export const useDrawing = ({ commit, tool }) => {
  const [drawing, setDrawing] = useState(false)

  const onStageMouseDown = e => {
    const stage = e.target.getStage()
    const { x, y } = getRelativePointerPosition(stage)

    setDrawing({
      type: tool,
      konvaComponent: 'Line',
      strokeWidth: 10,
      stroke: 'red',
      points: [x, y],
      globalCompositeOperation:
        tool === 'brush' ? 'source-over' : 'destination-out'
    })
  }

  const onStageMouseMove = e => {
    if (!drawing) return

    const stage = e.target.getStage()
    const { x, y } = getRelativePointerPosition(stage)

    setDrawing(drawing => ({
      ...drawing,
      points: [...drawing.points, x, y]
    }))
  }

  const onStageMouseUp = () => {
    if (!drawing) return

    commit(drawing)
    setDrawing(false)
  }

  return { onStageMouseDown, onStageMouseUp, onStageMouseMove, drawing }
}

const getRelativePointerPosition = node => {
  const transform = node.getAbsoluteTransform().copy()
  // to detect relative position we need to invert transform
  transform.invert()

  // get pointer (say mouse or touch) position
  const pos = node.getPointerPosition()

  // now we can find relative point
  return transform.point(pos)
}
