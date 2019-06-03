import React from "react"
import PropTypes from "prop-types"

import styled from "@emotion/styled"
import { colors, } from "./styles"

const Container = styled.div(
  {
    color: colors.textcolor,
    fontSize: '.75rem',
    textAlign: 'center',
  }
)

const Footer = ({ siteName }) => (
  <Container>
    © {`${new Date().getFullYear()} ${siteName}`}, inc
  </Container>
)

Footer.propTypes = {
  siteName: PropTypes.string,
}

Footer.defaultProps = {
  siteName: ``,
}


export default Footer
