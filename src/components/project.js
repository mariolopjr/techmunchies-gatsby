import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"

import Column from "../components/column"
import Image from "../components/image"

import { css } from "@emotion/core"
import styled from "@emotion/styled"

const ProjectDescription = styled.div({
  color: "white",
  fontSize: "1.6rem",
  fontWeight: 300,
  lineHeight: 1.125,
  marginTop: "1.5rem",
  opacity: 0.9,

  ":active, :focus, :hover": {
    color: "white",
    opacity: 0.7,
    transition: "all .3s ease-out",
  },
})

const imageStyles = css({
  borderRadius: 0,
})

const linkStyles = css({
  textDecoration: "none",
})

const Project = ({ cover, description, styles, title, to }) => (
  <Column
    styles={styles}
  >
    <Link to={to} css={linkStyles}>
      <Image sizes={cover} styles={imageStyles} />
      <ProjectDescription>{title} — {description}</ProjectDescription>
    </Link>
  </Column>
)

Project.propTypes = {
  cover: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  styles: PropTypes.object,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default Project
