import React from 'react'
import { ResponsiveWaffleCanvas } from '@nivo/waffle'
import { useSelector } from 'react-redux'
import { prop, sum } from 'ramda'
import { getDrawnShapesGroupedByColor } from '../../state/canvas/selectors'
import { Theme } from '../../constants/Theme'
import { useScreenSize } from '../../hooks/useScreenSize'

const cubeSize = 15
export const StatsScreen = () => {
  const groupedShapes = useSelector(getDrawnShapesGroupedByColor)
  const { width, height } = useScreenSize()

  const data = Object.keys(groupedShapes).map(color => ({
    id: color,
    color,
    label: color,
    value: groupedShapes[color].totalArea
  }))

  if (data.length === 0) return null
  const totalArea = Math.floor(sum(data.map(prop('value'))))

  return (
    <ResponsiveWaffleCanvas
      data={data}
      total={totalArea}
      rows={Math.floor((height - Theme.layoutSizes.headerHeight) / cubeSize)}
      columns={Math.floor(width / cubeSize)}
      colors={prop('color')}
      margin={{ top: 100 }}
      isInteractive={false}
      emptyColor={Theme.color.grey10}
    />
  )
}
