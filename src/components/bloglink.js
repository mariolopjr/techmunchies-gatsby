import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"

import styled from "@emotion/styled"
import { colors } from "../components/styles"

const BlogLinkStyled = styled(Link)({
  boxShadow: `
        0 -1px 0 0 ${colors.textShadowColor} inset,
        0 -2px 0 0 transparent inset`,
  color: colors.colorAccent,
  fontWeight: 300,
  opacity: 0.7,
  textDecoration: "none",
  textShadow: `
        0px -2px 0 ${colors.textShadowColor},  0px -1px 0 ${
    colors.textShadowColor
  },  0px 0px 0 ${colors.textShadowColor},
        2px -2px 0 ${colors.textShadowColor},  2px -1px 0 ${
    colors.textShadowColor
  },  2px 0px 0 ${colors.textShadowColor},
        -2px -2px 0 ${colors.textShadowColor}, -2px -1px 0 ${
    colors.textShadowColor
  }, -2px 0px 0 ${colors.textShadowColor},
        1px -2px 0 ${colors.textShadowColor},  1px -1px 0 ${
    colors.textShadowColor
  },  1px 0px 0 ${colors.textShadowColor},
        -1px -2px 0 ${colors.textShadowColor}, -1px -1px 0 ${
    colors.textShadowColor
  }, -1px 0px 0 ${colors.textShadowColor},
        0px -2px 0 ${colors.textShadowColor},  0px -1px 0 ${
    colors.textShadowColor
  },  0px 0px 0 ${colors.textShadowColor}`,
  transition: "all .3s ease-in",

  ":active, :focus, :hover": {
    boxShadow: `0 -1px 0 0 ${colors.colorAccent} inset, 0 -2px 0 0 ${
      colors.textShadowColor
    }`,
    color: "white",
    opacity: 0.9,
    transition: "all .3s ease-out",
  },

  "::selection": {
    background: colors.colorAccent,
    color: colors.textShadowColor,
    textShadow: "none",
  },
})

const BlogLink = ({ children, to }) => (
  <BlogLinkStyled to={to}>{children}</BlogLinkStyled>
)

BlogLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default BlogLink
