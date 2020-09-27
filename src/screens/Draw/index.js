import React from 'react'
import styled from 'styled-components/macro'

import { Toolbar } from './components/Toolbar'
import { MainCanvas } from './components/MainCanvas'
import { CanvasSettings } from './components/CanvasSettings'
import { useKeyboardShortcuts } from '../../hooks'

export const DrawScreen = () => {
  useKeyboardShortcuts()

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
  cursor: none;
  left: ${({ theme }) => theme.layoutSizes.toolbarWidth}px;
  right: ${({ theme }) => theme.layoutSizes.settingsWidth}px;
  top: ${({ theme }) => theme.layoutSizes.headerHeight}px;
`
