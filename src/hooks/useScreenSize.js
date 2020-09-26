import { useState, useEffect } from 'react'

export const useScreenSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const adjustCanvasSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', adjustCanvasSize)

    return () => {
      window.removeEventListener('resize', adjustCanvasSize)
    }
  }, [])

  return { width: windowSize.width, height: windowSize.height }
}
