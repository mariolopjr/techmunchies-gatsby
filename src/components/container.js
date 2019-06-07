import React from "react"
import PropTypes from "prop-types"

import styled from "@emotion/styled"

const ContainerStyled = styled.div(
  {
    margin: '0 auto',

    '@media screen and (min-width: 1088px)': {
      maxWidth: 960,
      width: 960,
    },

    '@media screen and (min-width: 1280px)': {
      maxWidth: 1152,
      width: 1152,
    },

    '@media screen and (min-width: 1472px)': {
      maxWidth: 1344,
      width: 1344,
    },
  }
)

const Container = ({ children }) => (
  <ContainerStyled>
    {children}
  </ContainerStyled>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
