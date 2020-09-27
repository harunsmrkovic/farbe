import { path, pipe, groupBy, prop, map, filter, sum } from 'ramda'
import { Tools } from '../../constants/Tools'
import { calculatePolylineLength } from '../../util/calculatePolylineLength'

const selectCanvas = (deeper = []) => path(['canvas', 'present', ...deeper])

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

export const getStringifiedCanvas = pipe(path(['canvas']), JSON.stringify)

export const getDrawnShapesWithSize = pipe(
  getShapes,
  filter(({ type }) => type !== Tools.eraser.id),
  map(shape => {
    const length =
      shape.points.length > 2 ? calculatePolylineLength(shape.points) : 1
    const area = length * shape.strokeWidth
    return { ...shape, length, area }
  })
)

export const getDrawnShapesGroupedByColor = pipe(
  getDrawnShapesWithSize,
  groupBy(prop('stroke')),
  map(shapes => ({
    shapes,
    totalArea: sum(map(prop('area'), shapes))
  }))
)
