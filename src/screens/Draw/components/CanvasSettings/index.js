import React from 'react'
import styled from 'styled-components/macro'
import { CirclePicker, ChromePicker } from 'react-color'

import { bindActionCreators } from 'redux'
import { connect, useSelector } from 'react-redux'
import {
  getBackgroundColor,
  getSelectedColor,
  getStrokeSize
} from '../../../../state/canvas/selectors'
import { canvasSlice } from '../../../../state/canvas'
import { Slider, Text } from '../../../../components/ui'

export const CanvasSettingsView = ({
  selectColor,
  selectBackgroundColor,
  setStrokeSize
}) => {
  const selectedColor = useSelector(getSelectedColor)
  const backgroundColor = useSelector(getBackgroundColor)
  const strokeSize = useSelector(getStrokeSize)

  return (
    <Wrap>
      <div>
        <Text h5>Tool settings</Text>
        <SpacerWrap>
          <ChromePicker
            color={selectedColor.rgb}
            onChange={color => selectColor(color)}
            width="100%"
          />
        </SpacerWrap>
        <SpacerWrap>
          <Slider
            label="Stroke size"
            onChange={setStrokeSize}
            value={strokeSize}
            min={1}
            max={50}
          />
        </SpacerWrap>
      </div>
      <div>
        <Text h5>Canvas settings</Text>
        <SpacerWrap>
          <CirclePicker
            color={backgroundColor}
            onChange={({ hex }) => selectBackgroundColor(hex)}
          />
        </SpacerWrap>
      </div>
    </Wrap>
  )
}

const Wrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: ${({ theme }) => theme.layoutSizes.settingsWidth}px;
  top: ${({ theme }) => theme.layoutSizes.headerHeight}px;
  right: 0;
  bottom: 0;
  background-color: #000;
  border-left: 1px solid ${({ theme }) => theme.color.grey10};
  padding: ${({ theme }) => theme.padding.xl};
`

const SpacerWrap = styled.div`
  margin-top: ${({ theme }) => theme.padding.l};
`

export const CanvasSettings = connect(null, dispatch =>
  bindActionCreators(canvasSlice.actions, dispatch)
)(CanvasSettingsView)
