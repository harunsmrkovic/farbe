import { path, pipe } from 'ramda'

const selectCanvas = deeper => path(['canvas', 'present', ...deeper])

export const getSelectedTool = selectCanvas(['selectedTool'])
export const getBackgroundColor = selectCanvas(['backgroundColor'])
export const getShapes = selectCanvas(['shapes'])
export const getStrokeSize = pipe(selectCanvas(['strokeSize']), parseInt)
export const getSelectedColor = state => {
  const selectedColor = selectCanvas(['selectedColor'])(state)
  const { r, g, b, a } = selectedColor.rgb || {}
  return {
    ...selectedColor,
    rgba: `rgba(${[r, g, b, a].join(', ')})`
  }
}
