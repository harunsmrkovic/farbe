import React from 'react'
import styled from 'styled-components/macro'
import { bindActionCreators } from 'redux'
import { connect, useSelector } from 'react-redux'
import { useHotkeys } from 'react-hotkeys-hook'

import { Icon } from '../../../../components/ui'
import { Theme } from '../../../../constants/Theme'

import { canvasSlice } from '../../../../state/canvas'
import { getSelectedTool } from '../../../../state/canvas/selectors'
import { Tools } from '../../../../constants/Tools'

import { ActionCreators } from 'redux-undo'

const ToolbarView = ({ selectTool, undo, redo }) => {
  const selectedTool = useSelector(getSelectedTool)

  useHotkeys('cmd+z', undo)
  useHotkeys('cmd+shift+z', redo)

  return (
    <Wrap>
      <ToolsWrap>
        {Object.keys(Tools).map(toolId => (
          <Tool
            key={toolId}
            selected={selectedTool === toolId}
            onClick={() => selectTool(toolId)}
          >
            <Icon
              name={Tools[toolId].icon}
              size={20}
              color={Theme.color.white}
            />
          </Tool>
        ))}
      </ToolsWrap>

      <Controls>
        <Control onClick={undo}>
          <Icon name="Undo" size={25} color={Theme.color.white} />
        </Control>
        <Control onClick={redo}>
          <Icon name="Redo" size={25} color={Theme.color.white} />
        </Control>
      </Controls>
    </Wrap>
  )
}

const Wrap = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.layoutSizes.headerHeight}px;
  left: 0;
  bottom: 0;
  width: ${({ theme }) => theme.layoutSizes.toolbarWidth}px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #000;
  border-right: 1px solid ${({ theme }) => theme.color.grey10};
`

const ToolsWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const Controls = styled.div`
  display: flex;
  align-items: center;
`

const Control = styled.button`
  height: 80px;
  flex: 1;

  transition: opacity ${({ theme }) => theme.transition.normal};

  &:hover {
    opacity: 0.5;
  }
`

const Tool = styled.button`
  height: 80px;

  border-bottom: 1px solid ${({ theme }) => theme.color.grey10};
  transition: background-color ${({ theme }) => theme.transition.normal};
  background-color: ${({ theme, selected }) =>
    selected ? theme.color.primary : 'transparent'};
`

export const Toolbar = connect(null, dispatch =>
  bindActionCreators({ ...canvasSlice.actions, ...ActionCreators }, dispatch)
)(ToolbarView)
