import { splitEvery } from 'ramda'

/*
  Calculates a total length of the provided polyline

  Accepts format of [x1, y1, x2, y2, ...]
*/

export const calculatePolylineLength = (polyline = []) => {
  // Group flat coordinates array into pairs
  const coordinates = splitEvery(2, polyline)

  return coordinates.reduce((acc, point, index) => {
    if (index === 0) return 0
    const previousPoint = coordinates[index - 1]
    const distanceToPrevious = Math.hypot(
      previousPoint[0] - point[0],
      previousPoint[1] - point[1]
    )
    return acc + distanceToPrevious
  }, 0)
}
