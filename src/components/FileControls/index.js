import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

import { Theme } from '../../constants/Theme'
import { canvasSlice } from '../../state/canvas'
import { Icon } from '../Icon'

import { useImportExport } from './hooks/useImportExport'

export const FileControls = () => {
  const { onExport, onImport } = useImportExport()

  const filePickerRef = useRef()
  const onFilePickerOpen = () => filePickerRef.current.click()

  const dispatch = useDispatch()
  const onNew = () => dispatch(canvasSlice.actions.startNew())

  return (
    <Wrap>
      <Action onClick={onNew} title="Create New">
        <Icon name="Plus" size={30} color={Theme.color.white} />
      </Action>
      <Action onClick={onExport} title="Export">
        <Icon name="Export" size={30} color={Theme.color.white} />
      </Action>
      <Action onClick={onFilePickerOpen} title="Import">
        <Icon name="Import" size={30} color={Theme.color.white} />
        <input
          type="file"
          ref={filePickerRef}
          style={{ display: 'none' }}
          onChange={onImport}
          accept=".json"
        />
      </Action>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
`

const Action = styled.button`
  padding: ${({ theme }) => theme.padding.l};

  transition: opacity ${({ theme }) => theme.transition.normal};
  &:hover {
    opacity: 0.5;
  }
`
