import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import styled from "@emotion/styled"
import { colors, mq } from "./styles"

const Nav = styled.nav({
  alignItems: "stretch",
  display: "flex",
  background: "none",
  minHeight: "3.25rem",
  position: "relative",
  zIndex: 30,
})

const navContainerStates = {
  true: {
    boxShadow: "0 8px 16px rgba(10,10,10,.1)",
    display: "block",
    left: 0,
    position: "absolute",
    top: "2.2rem",
    width: "100%",
  },
}

const NavContainer = styled.div(
  {
    display: "none",
    transition: "max-height .2s ease-out",

    [mq[0]]: {
      flexGrow: 1,
      flexShrink: 0,
      alignItems: "stretch",
      display: "flex",
    },
  },

  props => navContainerStates[props.state]
)

const NavContainerEnd = styled.div({
  justifyContent: "flex-end",
  marginLeft: "auto",
})

const menuButtonStates = {
  true: {
    color: "white",
    outlineWidth: 0,

    "> span": {
      ":first-of-type": {
        transform: "translateY(5px) rotate(45deg)",
      },

      ":nth-of-type(2)": {
        opacity: 0,
      },

      ":nth-of-type(3)": {
        transform: "translateY(-5px) rotate(-45deg)",
      },
    },
  },
}

const MenuButton = styled.a(
  {
    color: colors.textcolor,
    cursor: "pointer",
    display: "block",
    height: "3.25rem",
    position: "relative",
    width: "3.25rem",
    marginLeft: "auto",
    textDecoration: "none",

    [mq[0]]: {
      display: "none",
    },
  },

  props => menuButtonStates[props.state]
)

const MenuButtonBar = styled.span({
  backgroundColor: "currentColor",
  display: "block",
  height: 1,
  left: "calc(50% - 8px)",
  position: "absolute",
  transformOrigin: "center",
  transitionDuration: "86ms",
  transitionProperty: "background-color, opacity, transform",
  transitionTimingFunction: "ease-out",
  width: 16,

  ":first-of-type": {
    top: "calc(50% - 6px)",
  },

  ":nth-of-type(2)": {
    top: "calc(50% - 1px)",
  },

  ":nth-of-type(3)": {
    top: "calc(50% + 4px)",
  },
})

const NavBrand = styled.div({
  flexGrow: 1,
  flexShrink: 0,
  alignItems: "stretch",
  display: "flex",
  minHeight: "3.25rem",
})

const NavBrandLink = styled(Link)({
  color: colors.textcolor,
  cursor: "pointer",
  alignItems: "center",
  display: "flex",
  flexGrow: 0,
  flexShrink: 0,
  textDecoration: "none",
  lineHeight: 1.5,
  padding: "1rem 1.25rem",
  position: "relative",

  ":active, :hover, :focus": {
    color: "white",
  },
})

const NavLinkContainer = styled.div({
  display: "flex",
  justifyContent: "flex-start",
})

// NavLink settings
const duration = ".2s"
const distance = "8px"
const easeOutBack = "cubic-bezier(0.175, 0.885, 0.320, 1.275)"

const NavLinkActiveStyle = {
  true: {
    ":after": {
      opacity: 1,
      transform: "translateY(0)",
      transition: "none",
      backgroundColor: colors.textcolor,
    },
  },
}

const NavLink = styled(Link)(
  {
    color: colors.textcolor,
    cursor: "pointer",
    alignItems: "center",
    display: "flex",
    flexGrow: 0,
    flexShrink: 0,
    textDecoration: "none",
    lineHeight: 1.5,
    padding: "1rem 1.25rem",
    position: "relative",

    ":not(:first-of-type):not(:last-of-type)": {
      padding: "1rem 0.625rem",
    },

    ":before, :after": {
      content: '""',
      position: "absolute",
      bottom: "2px",
      left: 0,
      right: 0,
      height: "2px",
      backgroundColor: "white",
    },

    ":before": {
      opacity: 0,
      transform: `translateY(-${distance})`,
      transition: `transform 0s ${easeOutBack}, opacity 0s`,
    },

    ":after": {
      opacity: 0,
      transform: `translateY(${distance}/2)`,
      transition: `transform ${duration} ${easeOutBack}, opacity ${duration}`,
    },

    ":active, :hover, :focus": {
      color: "white",

      ":before, :after": {
        opacity: 1,
        transform: "translateY(0)",
      },

      ":before": {
        transition: `transform ${duration} ${easeOutBack}, opacity ${duration}`,
      },

      ":after": {
        transition: `transform 0s ${duration} ${easeOutBack}, opacity 0s ${duration}`,
      },
    },
  },

  props => NavLinkActiveStyle[props.isCurrent]
)

const NavLinkExternal = styled.a(
  {
    color: colors.textcolor,
    cursor: "pointer",
    alignItems: "center",
    display: "flex",
    flexGrow: 0,
    flexShrink: 0,
    textDecoration: "none",
    lineHeight: 1.5,
    padding: "1rem 1.25rem",
    position: "relative",

    ":not(:first-of-type):not(:last-of-type)": {
      padding: "1rem 0.625rem",
    },

    ":before, :after": {
      content: '""',
      position: "absolute",
      bottom: "2px",
      left: 0,
      right: 0,
      height: "2px",
      backgroundColor: "white",
    },

    ":before": {
      opacity: 0,
      transform: `translateY(-${distance})`,
      transition: `transform 0s ${easeOutBack}, opacity 0s`,
    },

    ":after": {
      opacity: 0,
      transform: `translateY(${distance}/2)`,
      transition: `transform ${duration} ${easeOutBack}, opacity ${duration}`,
    },

    ":active, :hover, :focus": {
      color: "white",

      ":before, :after": {
        opacity: 1,
        transform: "translateY(0)",
      },

      ":before": {
        transition: `transform ${duration} ${easeOutBack}, opacity ${duration}`,
      },

      ":after": {
        transition: `transform 0s ${duration} ${easeOutBack}, opacity 0s ${duration}`,
      },
    },
  },

  props => NavLinkActiveStyle[props.isCurrent]
)

const Header = ({ siteName }) => {
  const [menu, showMenu] = useState(false)

  return (
    <Nav>
      <NavBrand>
        <NavBrandLink to="/">{siteName}</NavBrandLink>
        <MenuButton
          role="button"
          aria-label="menu"
          aria-expanded={menu}
          onClick={() => showMenu(!menu)}
          state={menu}
        >
          <MenuButtonBar aria-hidden="true" />
          <MenuButtonBar aria-hidden="true" />
          <MenuButtonBar aria-hidden="true" />
        </MenuButton>
      </NavBrand>
      <NavContainer state={menu}>
        <NavContainerEnd>
          <NavLinkContainer>
            <NavLink to="/">home</NavLink>
            <NavLink to="/projects/">projects</NavLink>
            <NavLink to="/blog/">blog</NavLink>
            <NavLinkExternal href="altstore://source?url=https://techmunchies.net/.netlify/functions/altstore">altstore</NavLinkExternal>
          </NavLinkContainer>
        </NavContainerEnd>
      </NavContainer>
    </Nav>
  )
}

Header.propTypes = {
  siteName: PropTypes.string,
}

Header.defaultProps = {
  siteName: ``,
}

export default Header
