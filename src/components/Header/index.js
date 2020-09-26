import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components/macro'
import { Theme } from '../../constants/Theme'
import { Icon } from '../Icon'

export const Header = () => {
  return (
    <HeaderWrap>
      <Nav>
        <HeaderLink to="/" exact>
          <Icon name="Brush" size={36} color={Theme.color.white} />
          Draw
        </HeaderLink>
        <HeaderLink to="/stats">
          <Icon name="Chart" size={36} color={Theme.color.white} />
          Statistics
        </HeaderLink>
      </Nav>
    </HeaderWrap>
  )
}

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey10};
  display: flex;
  height: 80px;
`

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex: 1;
`

const HeaderLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.white};
  padding: 0 ${({ theme }) => theme.padding.m} 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-bottom: 4px solid transparent;
  margin-right: ${({ theme }) => theme.padding.m};

  &.active {
    border-bottom-color: ${({ theme }) => theme.color.primary};
  }

  & > svg {
    margin-right: ${({ theme }) => theme.padding.m};
  }
`
