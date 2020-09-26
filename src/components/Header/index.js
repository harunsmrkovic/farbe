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
          <Icon name="Brushes" size={35} color={Theme.color.white} />
          Draw
        </HeaderLink>
        <HeaderLink to="/stats">
          <Icon name="Chart" size={35} color={Theme.color.white} />
          Statistics
        </HeaderLink>
      </Nav>
    </HeaderWrap>
  )
}

const HeaderWrap = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: ${({ theme }) => theme.layoutSizes.headerHeight}px;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey10};
  background-color: #000;
`

const Logo = styled(Link)`
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.layoutSizes.toolbarWidth}px;
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

  transition: border-color ${({ theme }) => theme.transition.normal};

  &.active {
    border-bottom-color: ${({ theme }) => theme.color.primary};
  }

  & > svg {
    margin-right: ${({ theme }) => theme.padding.m};
  }
`
