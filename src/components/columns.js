import React from "react"
import PropTypes from "prop-types"

import styled from "@emotion/styled"

const ColumnsStyled = styled.div(
  {
    marginLeft: '-.75rem',
    marginRight: '-.75rem',
    marginTop: '-.75rem',

    ':last-of-type': {
      marginBottom: '-.75rem',
    },

    '@media print, screen and (min-width: 769px)': {
      display: 'flex',
    },
  }
)

const Columns = ({ children, styles }) => (
  <ColumnsStyled css={styles}>
    {children}
  </ColumnsStyled>
)

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.node,
}

export default Columns
