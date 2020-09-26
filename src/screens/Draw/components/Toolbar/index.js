import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import { Icon } from '../../../../components/ui'

export const Toolbar = () => {
  return (
    <Wrap>
      <Logo to="/">
        <Icon name="Logo" size={40} />
      </Logo>
    </Wrap>
  )
}

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 80px;
  background-color: rgba(255, 255, 255, 0.05); // TODO: change back to black :)
  border-right: 1px solid ${({ theme }) => theme.color.grey10};
`

const Logo = styled(Link)`
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
`
