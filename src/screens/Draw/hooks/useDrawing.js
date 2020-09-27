import { useCallback, useState } from 'react'
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
  const [cursor, setCursor] = useState(false)

  const selectedTool = useSelector(getSelectedTool)
  const selectedColor = useSelector(getSelectedColor)
  const strokeWidth = useSelector(getStrokeSize)

  const isEraser = selectedTool === Tools.eraser.id

  const onStageMouseDown = useCallback(
    e => {
      const stage = e.target.getStage()
      const { x, y } = getRelativePointerPosition(stage)

      setDrawing({
        type: selectedTool,
        konvaComponent: 'Line',
        // bezier: true,
        strokeWidth,
        lineCap: 'round',
        stroke: selectedColor.rgba,
        points: [x, y],
        globalCompositeOperation: isEraser ? 'destination-out' : 'source-over'
      })
    },
    [isEraser, strokeWidth, selectedColor.rgba, selectedTool]
  )

  const onStageMouseMove = useCallback(
    e => {
      const stage = e.target.getStage()
      const { x, y } = getRelativePointerPosition(stage)

      // Handle cursor move
      setCursor({
        x,
        y,
        radius: strokeWidth / 2,
        stroke: isEraser ? '#fff' : selectedColor.rgba,
        fill: isEraser ? 'transparent' : selectedColor.rgba
      })

      // Handle drawing, if mouse has been pressed
      if (!drawing) return

      setDrawing(drawing => ({
        ...drawing,
        points: [...drawing.points, x, y]
      }))
    },
    [drawing, isEraser, strokeWidth, selectedColor.rgba]
  )

  const onStageMouseUp = useCallback(() => {
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
    } else {
      commit(drawing)
    }

    setDrawing(false)
  }, [commit, drawing])

  const onStageMouseLeave = useCallback(() => setCursor(false), [])

  return {
    onStageMouseDown,
    onStageMouseUp,
    onStageMouseMove,
    onStageMouseLeave,
    drawing,
    cursor
  }
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
