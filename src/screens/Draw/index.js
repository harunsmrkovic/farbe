import React from 'react'
import styled from 'styled-components/macro'

import { Toolbar } from './components/Toolbar'
import { MainCanvas } from './components/MainCanvas'

export const DrawScreen = () => {
  return (
    <Wrap>
      <Toolbar />
      <CanvasWrap>
        <MainCanvas />
      </CanvasWrap>
      <CanvasSettings />
    </Wrap>
  )
}

const Wrap = styled.div`
  position: relative;
  height: 100%;
`

const CanvasWrap = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.layoutSizes.toolbarWidth}px;
  right: ${({ theme }) => theme.layoutSizes.settingsWidth}px;
  top: ${({ theme }) => theme.layoutSizes.headerHeight}px;
`

const CanvasSettings = styled.div`
  position: absolute;
  width: ${({ theme }) => theme.layoutSizes.settingsWidth}px;
  top: ${({ theme }) => theme.layoutSizes.headerHeight}px;
  right: 0;
  bottom: 0;
  background-color: #000;
  border-left: 1px solid ${({ theme }) => theme.color.grey10};
`
