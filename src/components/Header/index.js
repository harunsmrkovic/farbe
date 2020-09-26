import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import styled from 'styled-components/macro'
import { Theme } from '../../constants/Theme'
import { Icon } from '../Icon'

export const Header = () => {
  return (
    <HeaderWrap>
      <Logo to="/">
        <Icon name="Logo" size={50} />
      </Logo>
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
  border-bottom: 1px solid ${({ theme }) => theme.color.grey10};
  display: flex;
`

const Logo = styled(Link)`
  display: block;
  padding: ${({ theme }) => theme.padding.l};
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
