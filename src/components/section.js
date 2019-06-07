import React from "react"
import PropTypes from "prop-types"

import styled from "@emotion/styled"

const SectionStyled = styled.section(
  {
    padding: '3rem 1.5rem',
  }
)

const Section = ({ children }) => (
  <SectionStyled>
    {children}
  </SectionStyled>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section
