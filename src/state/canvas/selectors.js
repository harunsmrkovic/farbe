import { path, pipe } from 'ramda'

export const getSelectedTool = path(['canvas', 'selectedTool'])
export const getBackgroundColor = path(['canvas', 'backgroundColor'])
export const getShapes = path(['canvas', 'shapes'])
export const getStrokeSize = pipe(path(['canvas', 'strokeSize']), parseInt)
export const getSelectedColor = state => {
  const selectedColor = path(['canvas', 'selectedColor'])(state)
  const { r, g, b, a } = selectedColor.rgb || {}
  return {
    ...selectedColor,
    rgba: `rgba(${[r, g, b, a].join(', ')})`
  }
}
