import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Tools } from '../../../constants/Tools'
import {
  getSelectedColor,
  getSelectedTool,
  getStrokeSize
} from '../../../state/canvas/selectors'

/*
  Hook used for facilitating events around
  drawing in progress. After mouseup, it commits
  the work in progress into the final storage
*/

export const useDrawing = ({ commit }) => {
  const [drawing, setDrawing] = useState(false)

  const selectedTool = useSelector(getSelectedTool)
  const selectedColor = useSelector(getSelectedColor)
  const strokeWidth = useSelector(getStrokeSize)

  const onStageMouseDown = e => {
    const stage = e.target.getStage()
    const { x, y } = getRelativePointerPosition(stage)

    setDrawing({
      type: selectedTool,
      konvaComponent: 'Line',
      bezier: true,
      strokeWidth,
      lineCap: 'round',
      stroke: selectedColor.rgba,
      points: [x, y],
      globalCompositeOperation:
        selectedTool === Tools.eraser.id ? 'destination-out' : 'source-over'
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

    // No mouse movements happened, it's just a dot
    if (drawing.points.length === 2) {
      commit({
        ...drawing,
        konvaComponent: 'Circle',
        radius: drawing.strokeWidth / 2,
        strokeWidth: 1,
        fill: drawing.stroke,
        x: drawing.points[0],
        y: drawing.points[1]
      })
    }

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
