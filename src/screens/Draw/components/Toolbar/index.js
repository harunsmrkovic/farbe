import React from 'react'
import styled from 'styled-components/macro'

export const Toolbar = () => {
  return <Wrap>toolbarz</Wrap>
}

const Wrap = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.layoutSizes.headerHeight}px;
  left: 0;
  bottom: 0;
  width: ${({ theme }) => theme.layoutSizes.toolbarWidth}px;
  background-color: rgba(255, 255, 255, 0.05); // TODO: change back to black :)
  border-right: 1px solid ${({ theme }) => theme.color.grey10};
`
