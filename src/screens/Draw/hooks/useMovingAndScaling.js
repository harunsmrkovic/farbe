import { useCallback, useState } from 'react'

/*
  Hook for handling manipulation of Canvas,
  specifically for allowing scroll-to-move
  and pinch-to-zoom functionality in browser
*/

export const useMovingAndScaling = () => {
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const [scaleFactor, setScaleFactor] = useState(1)

  const onStageWheel = useCallback(e => {
    // Handle pinch to zoom
    if (e.evt.deltaY % 1 !== 0) {
      e.evt.preventDefault()

      const scaleBy = 0.95
      const stage = e.target.getStage()
      const oldScale = stage.scaleX()
      const { x: pointerX, y: pointerY } = stage.getPointerPosition()

      const mousePointTo = {
        x: pointerX / oldScale - stage.x() / oldScale,
        y: pointerY / oldScale - stage.y() / oldScale
      }

      const newScale =
        e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy

      setScaleFactor(newScale)
      setOffsetX(-(mousePointTo.x - pointerX / newScale) * newScale)
      setOffsetY(-(mousePointTo.y - pointerY / newScale) * newScale)

      return
    }

    // Handle scroll
    setOffsetX(x => x - e.evt.deltaX)
    setOffsetY(y => y - e.evt.deltaY)
  }, [])

  return { offsetX, offsetY, scaleFactor, onStageWheel }
}
