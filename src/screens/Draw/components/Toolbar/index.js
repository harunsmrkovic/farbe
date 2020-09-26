import React from 'react'
import styled from 'styled-components/macro'
import { bindActionCreators } from 'redux'
import { connect, useSelector } from 'react-redux'

import { Icon } from '../../../../components/ui'
import { Theme } from '../../../../constants/Theme'

import { canvasSlice } from '../../../../state/canvas'
import { getSelectedTool } from '../../../../state/canvas/selectors'
import { Tools } from '../../../../constants/Tools'

const ToolbarView = ({ selectTool }) => {
  const selectedTool = useSelector(getSelectedTool)

  return (
    <Wrap>
      {Object.keys(Tools).map(toolId => (
        <Tool
          key={toolId}
          selected={selectedTool === toolId}
          onClick={() => selectTool(toolId)}
        >
          <Icon name={Tools[toolId].icon} size={20} color={Theme.color.white} />
        </Tool>
      ))}
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

  background-color: #000;
  border-right: 1px solid ${({ theme }) => theme.color.grey10};
`

const Tool = styled.button`
  height: 80px;

  border-bottom: 1px solid ${({ theme }) => theme.color.grey10};
  transition: background-color ${({ theme }) => theme.transition.normal};
  background-color: ${({ theme, selected }) =>
    selected ? theme.color.primary : 'transparent'};
`

export const Toolbar = connect(null, dispatch =>
  bindActionCreators(canvasSlice.actions, dispatch)
)(ToolbarView)
