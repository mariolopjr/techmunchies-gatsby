import React from "react"
import PropTypes from "prop-types"

import styled from "@emotion/styled"
import { colors, } from "./styles"

const Container = styled.footer(
  {
    color: colors.textcolor,
    fontSize: '.75rem',
    padding: '0.5rem',
    textAlign: 'center',
  },
)

const Footer = ({ siteName }) => (
  <Container>
    <span>© {`${new Date().getFullYear()} ${siteName}`}, inc</span>
  </Container>
)

Footer.propTypes = {
  siteName: PropTypes.string,
}

Footer.defaultProps = {
  siteName: ``,
}


export default Footer
