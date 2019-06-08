import React from "react"
import PropTypes from "prop-types"

import styled from "@emotion/styled"

const SectionStyled = styled.section(
  {
    padding: '3rem 1.5rem',
  }
)

const Section = ({ children, styles }) => (
  <SectionStyled css={styles}>
    {children}
  </SectionStyled>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object,
}

export default Section
