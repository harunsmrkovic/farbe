import { useCallback, useState } from 'react'

export const useMovingAndScaling = () => {
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const [scaleFactor, setScaleFactor] = useState(1)

  // TODO: Add throttling (16)
  const onStageWheel = useCallback(e => {
    if (e.evt.deltaY % 1 !== 0) {
      e.evt.preventDefault()
      setScaleFactor(s => s - e.evt.deltaY * 0.01)
    }

    setOffsetX(x => x - e.evt.deltaX)
    setOffsetY(y => y - e.evt.deltaY)
  }, [])

  return { offsetX, offsetY, scaleFactor, onStageWheel }
}
