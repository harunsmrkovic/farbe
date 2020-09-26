import React from 'react'
import styled from 'styled-components/macro'

import { Toolbar } from './components/Toolbar'
import { MainCanvas } from './components/MainCanvas'

export const DrawScreen = () => {
  return (
    <Wrap>
      <Toolbar />
      <MainCanvas />
      <CanvasSettings />
    </Wrap>
  )
}

const Wrap = styled.div``

const CanvasSettings = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  width: 300px;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
`
