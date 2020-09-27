import { calculatePolylineLength } from '.'

describe('calculatePolylineLength', () => {
  test('returns the total length of the passed vertical polyline', () => {
    const inputPolyline = [0, 0, 0, 10, 0, 50]
    expect(calculatePolylineLength(inputPolyline)).toBe(50)
  })

  test('returns the total length of the passed horizontal polyline', () => {
    const inputPolyline = [0, 0, 150, 0, 120, 0]
    expect(calculatePolylineLength(inputPolyline)).toBe(180)
  })

  test('returns the total length of the passed diagonal polyline', () => {
    const inputPolyline = [0, 0, 100, 100, 200, 200, 300, 300]
    expect(parseFloat(calculatePolylineLength(inputPolyline).toFixed(5))).toBe(
      424.26407
    )
  })
})
