import { Theme } from '../../../constants/Theme'
import { useScreenSize } from '../../../hooks/useScreenSize'

/*
  Provides convenience values for adjusting Layout size,
  based on window size
*/

export const useCanvasSize = () => {
  const { width, height } = useScreenSize()

  const canvasWidth =
    width - Theme.layoutSizes.toolbarWidth - Theme.layoutSizes.settingsWidth
  const canvasHeight = height - Theme.layoutSizes.headerHeight

  return { canvasWidth, canvasHeight }
}
