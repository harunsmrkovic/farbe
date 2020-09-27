import React from 'react'
import styled from 'styled-components/macro'

import { Toolbar } from './components/Toolbar'
import { MainCanvas } from './components/MainCanvas'
import { CanvasSettings } from './components/CanvasSettings'
import { UndoHistory } from './components/UndoHistory'

export const DrawScreen = () => {
  return (
    <Wrap>
      <Toolbar />
      <CanvasWrap>
        <MainCanvas />
      </CanvasWrap>
      <CanvasSettings />
      <UndoHistory />
    </Wrap>
  )
}

const Wrap = styled.div`
  position: relative;
  height: 100%;
`

const CanvasWrap = styled.div`
  position: absolute;
  cursor: none;
  left: ${({ theme }) => theme.layoutSizes.toolbarWidth}px;
  right: ${({ theme }) => theme.layoutSizes.settingsWidth}px;
  top: ${({ theme }) => theme.layoutSizes.headerHeight}px;
`
