import { Theme } from '../../../constants/Theme'
import { useScreenSize } from '../../../hooks/useScreenSize'

export const useCanvasSize = () => {
  const { width, height } = useScreenSize()

  const canvasWidth =
    width - Theme.layoutSizes.toolbarWidth - Theme.layoutSizes.settingsWidth
  const canvasHeight = height - Theme.layoutSizes.headerHeight

  return { canvasWidth, canvasHeight }
}
