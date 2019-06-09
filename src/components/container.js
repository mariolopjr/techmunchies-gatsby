import React from "react"
import PropTypes from "prop-types"

import styled from "@emotion/styled"
import { mq } from "./styles"

const ContainerStyled = styled.div({
  margin: "0 auto",

  [mq[1]]: {
    maxWidth: 960,
    width: 960,
  },

  [mq[2]]: {
    maxWidth: 1152,
    width: 1152,
  },

  [mq[3]]: {
    maxWidth: 1344,
    width: 1344,
  },
})

const Container = ({ children }) => (
  <ContainerStyled>{children}</ContainerStyled>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
