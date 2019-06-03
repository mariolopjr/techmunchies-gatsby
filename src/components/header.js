import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import styled from "@emotion/styled"
import { colors } from './styles'

const Nav = styled.nav(
  {
    alignItems: 'stretch',
    display: 'flex',
    background: 'none',
    minHeight: '3.25rem',
    padding: '0.15rem 0.3rem',
    position: 'relative',
    zIndex: 30,
  }
)

const NavContainer = styled.div(
  {
    flexGrow: 1,
    flexShrink: 0,
    alignItems: 'stretch',
    display: 'flex',
  }
)

const MenuButton = styled.input(
  {
    //
  }
)

const NavBrand = styled.div(
  {
    flexShrink: 0,
    alignItems: 'stretch',
    display: 'flex',
    minHeight: '3.25rem',
  }
)

const NavBrandLink = styled(Link)(
  {
    color: colors.textcolor,
    cursor: 'pointer',
    alignItems: 'center',
    display: 'flex',
    flexGrow: 0,
    flexShrink: 0,
    textDecoration: 'none',
    lineHeight: 1.5,
    padding: '.5rem .75rem',
    position: 'relative',

    '&:active, &:hover, &:focus': {
      color: 'white',
    }
  }
)

// NavLink settings
const duration = '.2s'
const distance = '8px'
const easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'

const NavLink = styled(Link)(
  {
    color: colors.textcolor,
    cursor: 'pointer',
    alignItems: 'center',
    display: 'flex',
    flexGrow: 0,
    flexShrink: 0,
    textDecoration: 'none',
    lineHeight: 1.5,
    padding: '.5rem .75rem',
    position: 'relative',

    '&:before, &:after': {
      content: '',
      position: 'absolute',
      bottom: '2px',
      left: 0,
      right: 0,
      height: '2px',
      backgroundColor: '#fff',
    },

    '&:before': {
      opacity: 0,
      transform: `translateY(- ${distance})`,
      transition: `transform 0s ${easeOutBack}, opacity 0s`,
    },

    '&:after': {
      opacity: 0,
      transform: `translateY(${distance}/2)`,
      transition: `transform ${duration} ${easeOutBack}, opacity ${duration}`,
    },

    '&:active, &:hover, &:focus': {
      '&:before, &:after': {
        opacity: 1,
        transform: 'translateY(0)',
      },

      '&:before': {
        transition: `transform ${duration} ${easeOutBack}, opacity ${duration}`,
      },

      '&:after': {
        transition: `transform 0s ${duration} ${easeOutBack}, opacity 0s ${duration}`,
      }
    },

    '&.item-active': {
      '&:after': {
        opacity: 1,
        transform: 'translateY(0)',
        transition: 'none',
        backgroundColor: colors.textcolor,
      },
    },
  }
)

const Header = ({ siteName }) => (
  <Nav>
    <NavBrand>
      <NavBrandLink
        to="/"
      >
        {siteName}
      </NavBrandLink>
    </NavBrand>
    <NavContainer
      id="menu-btn"
      type="checkbox"
      role="button"
      aria-label="menu-button"
    ></NavContainer>
  </Nav>
)

Header.propTypes = {
  siteName: PropTypes.string,
}

Header.defaultProps = {
  siteName: ``,
}

export default Header
