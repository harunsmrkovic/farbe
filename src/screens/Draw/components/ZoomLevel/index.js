import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components/macro'

import { Text } from '../../../../components/ui'

export const ZoomLevel = ({ scaleFactor }) => {
  const [showZoomLevel, setShowZoomLevel] = useState(true)
  const showZoomTimeout = useRef()

  useEffect(() => {
    setShowZoomLevel(true)
    clearTimeout(showZoomTimeout.current)
    showZoomTimeout.current = setTimeout(() => {
      setShowZoomLevel(false)
    }, 1000)
  }, [scaleFactor])

  if (!showZoomLevel) return null

  return (
    <Wrap>
      <Text h5>{Math.round(scaleFactor * 100)}%</Text>
    </Wrap>
  )
}

const Wrap = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.color.grey10};
  border-radius: 10px;
  padding: ${({ theme }) => theme.padding.m} ${({ theme }) => theme.padding.l};
  top: 15px;
  right: 15px;
`
